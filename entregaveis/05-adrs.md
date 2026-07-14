# Architecture Decision Records (ADRs) — CapybaraCart

Este documento registra as decisões arquiteturais mais críticas do CapybaraCart, detalhando o contexto, as decisões tomadas, as alternativas consideradas e as consequências de cada escolha técnica. Todas as decisões estão alinhadas com a "Filosofia Fusca" (simplicidade, robustez e modularidade) e o modelo BYOK (Bring Your Own Key).

---

## ADR-01: Armazenamento Seguro de Chaves de API do Seller (BYOK)

### Status
Aprovado

### Contexto
O CapybaraCart opera sob o modelo BYOK (Bring Your Own Key), onde o vendedor (seller) fornece suas próprias chaves de API para serviços essenciais (Stripe, Google Sheets e OpenAI/Anthropic). Para evitar que o vendedor precise digitar essas chaves complexas a cada nova sessão de uso, precisamos armazená-las de forma persistente no dispositivo do usuário. No entanto, o armazenamento de chaves de API em texto puro no navegador (como em `localStorage` ou `IndexedDB`) apresenta um risco crítico de segurança, tornando as credenciais vulneráveis a roubo por meio de ataques de Cross-Site Scripting (XSS) ou acesso físico não autorizado ao dispositivo.

### Decisão
Adotar a criptografia simétrica no client-side utilizando o algoritmo **AES-GCM-256** (Advanced Encryption Standard em modo Galois/Counter Mode). 

O fluxo de segurança funcionará da seguinte forma:
1. No primeiro acesso (setup), o vendedor define uma **Senha Mestre** forte.
2. O sistema utiliza a função de derivação de chave **PBKDF2** (Password-Based Key Derivation Function 2) com um salt aleatório e um alto número de iterações para derivar uma chave criptográfica a partir da Senha Mestre.
3. As chaves de API inseridas pelo vendedor são criptografadas localmente no navegador usando a chave derivada e o algoritmo AES-GCM-256.
4. O payload criptografado (contendo o texto cifrado, o vetor de inicialização/IV e o salt) é salvo no `localStorage` do navegador.
5. A Senha Mestre e a chave derivada **nunca** são salvas de forma persistente. Elas residem apenas na memória volátil (RAM) do aplicativo durante a sessão ativa do vendedor.
6. Para realizar operações que exigem as chaves, o vendedor "desbloqueia" sua sessão digitando a Senha Mestre, permitindo a descriptografia em memória para uso imediato.

### Alternativas Consideradas
*   **Banco de Dados Centralizado (Rejeitado):** Armazenar as chaves em um banco de dados relacional ou NoSQL gerenciado pela plataforma. Esta alternativa foi rejeitada por violar frontalmente a premissa de "Armazenamento Zero" e "Custo Zero de Infraestrutura", além de criar um alvo centralizado altamente atraente para atacantes (Single Point of Failure).
*   **Armazenamento em Texto Puro no localStorage (Rejeitado):** Salvar as chaves diretamente no `localStorage` sem criptografia. Rejeitado devido ao risco inaceitável de vazamento de credenciais por meio de scripts maliciosos de terceiros (ataques XSS) ou inspeção simples do navegador.

### Consequências
*   **Prós:**
    *   **Segurança Descentralizada:** Mesmo que o `localStorage` do vendedor seja comprometido ou inspecionado, as chaves de API permanecem ilegíveis sem a Senha Mestre.
    *   **Soberania do Usuário:** A plataforma CapybaraCart não possui acesso, controle ou custódia sobre as chaves de API dos vendedores em repouso.
    *   **Custo Zero:** Não há necessidade de servidores de banco de dados ou HSMs (Hardware Security Modules) centralizados para gerenciar segredos.
*   **Contras:**
    *   **Responsabilidade do Usuário:** Se o vendedor esquecer sua Senha Mestre, as chaves de API não poderão ser recuperadas ou descriptografadas. Ele precisará reinserir todas as chaves de API do zero.
    *   **Fricção de Sessão:** O vendedor precisa digitar sua Senha Mestre para desbloquear o dashboard sempre que iniciar uma nova sessão de trabalho.

---

## ADR-02: Fluxo de Dados de Compradores (Armazenamento Zero)

### Status
Aprovado

### Contexto
O CapybaraCart promete privacidade absoluta para os compradores finais e simplicidade de conformidade legal (LGPD/GDPR) para os vendedores. Para cumprir essa promessa, a plataforma adota uma política estrita de "Armazenamento Zero" de dados de compradores nos servidores do CapybaraCart. No entanto, precisamos processar o checkout (capturar dados de entrega e pagamento) e garantir que o vendedor receba essas informações de forma organizada para despachar o produto físico.

### Decisão
Implementar um fluxo de dados baseado em um **Serverless Proxy de Passagem (Pass-Through)** totalmente stateless (sem estado).

O fluxo de dados transacionais funcionará da seguinte forma:
1. O comprador preenche o formulário de checkout de passo único na vitrine PWA (dados de entrega e pagamento).
2. O PWA envia uma requisição HTTPS contendo os dados do pedido, os dados do comprador e as chaves de API criptografadas do vendedor para o Serverless Proxy.
3. O Serverless Proxy recebe a requisição, descriptografa temporariamente as chaves de API do vendedor em memória volátil de execução (RAM) usando a chave de sessão fornecida.
4. O proxy realiza a chamada para a API do Stripe para processar a cobrança do cartão de crédito.
5. Após a confirmação de sucesso do Stripe, o proxy realiza imediatamente uma chamada para a API do Google Sheets do vendedor, inserindo uma nova linha com todos os dados do comprador, endereço de entrega, produto comprado e valor pago.
6. O proxy retorna a resposta de sucesso para o PWA do comprador e encerra sua execução.
7. Nenhuma informação do comprador, do pedido ou do vendedor é gravada em logs persistentes, discos ou bancos de dados do CapybaraCart. A memória da função serverless é imediatamente liberada pelo provedor de nuvem.

### Alternativas Consideradas
*   **Armazenamento Temporário em Cache/Redis (Rejeitado):** Salvar os dados do pedido temporariamente em um banco de dados em memória (como Redis) com tempo de expiração (TTL) para posterior sincronização. Rejeitado porque qualquer retenção de dados, mesmo que por segundos, viola o princípio de Armazenamento Zero e adiciona custos de infraestrutura e riscos de conformidade.
*   **Envio Direto do Client-Side do Comprador (Rejeitado):** Fazer com que o navegador do comprador final se comunique diretamente com a API do Google Sheets do vendedor. Rejeitado porque exigiria expor as credenciais de escrita do Google Sheets do vendedor diretamente no código frontend acessível pelo comprador, criando uma vulnerabilidade grave de segurança.

### Consequências
*   **Prós:**
    *   **Privacidade por Design:** Conformidade nativa e simplificada com a LGPD/GDPR, pois a plataforma nunca armazena, processa de forma persistente ou retém dados pessoais de compradores.
    *   **Simplicidade de Infraestrutura:** Sem necessidade de gerenciar, escalar ou proteger bancos de dados relacionais de produção.
    *   **Soberania do Vendedor:** O vendedor possui controle exclusivo sobre o único banco de dados de seus clientes (sua própria planilha do Google Sheets).
*   **Contras:**
    *   **Dependência de Sincronização Síncrona:** Se a API do Google Sheets estiver temporariamente indisponível no momento exato do checkout, o sistema precisa de um mecanismo de contingência local no dispositivo do vendedor para evitar a perda do registro do pedido (conforme mapeado no PRD e no Registro de Riscos).
    *   **Sem Histórico Centralizado:** A plataforma não pode oferecer um painel global de suporte ou recuperação de pedidos para compradores, delegando todo o atendimento pós-venda diretamente ao vendedor.

---

## ADR-03: Uso de Serverless Proxy para Chamadas de API de Terceiros

### Status
Aprovado

### Contexto
Para realizar o processamento de pagamentos (Stripe), gravação de pedidos (Google Sheets) e consultas de inteligência artificial (OpenAI/Anthropic), o CapybaraCart precisa interagir com APIs externas de terceiros. Fazer essas chamadas diretamente do navegador do comprador ou do vendedor apresenta dois problemas impeditivos:
1. **Exposição de Segredos:** Chamadas diretas exigiriam expor chaves privadas de API (como a Stripe Secret Key) no código frontend, permitindo que qualquer usuário malicioso as inspecione e roube.
2. **Restrições de CORS (Cross-Origin Resource Sharing):** Muitas APIs corporativas bloqueiam requisições diretas vindas de navegadores web por motivos de segurança, exigindo que as chamadas partam de um ambiente de servidor (backend).

### Decisão
Utilizar um **Serverless Proxy** leve e stateless (hospedado em plataformas como Vercel Functions ou Netlify Edge Functions) como intermediário seguro para todas as chamadas de APIs de terceiros que exijam credenciais privadas.

O proxy funcionará sob as seguintes regras:
1. O frontend PWA nunca se comunica diretamente com as APIs privadas do Stripe, Google Sheets ou OpenAI.
2. O PWA envia as requisições para endpoints específicos do Serverless Proxy (ex: `/api/checkout`, `/api/ai-assist`).
3. O proxy atua estritamente como um duto de passagem: recebe os parâmetros, anexa as credenciais descriptografadas em memória, faz a requisição segura de servidor para servidor com o terceiro, e repassa apenas a resposta limpa e sanitizada de volta para o PWA.
4. O proxy é configurado com cabeçalhos de segurança estritos (como Content Security Policy e restrições de origem) para garantir que apenas o PWA oficial do CapybaraCart possa consumi-lo.

### Alternativas Consideradas
*   **Chamadas Diretas do Client-Side (Rejeitado):** Rejeitado sumariamente devido à impossibilidade técnica de proteger as chaves privadas de API do Stripe e do Google Sheets no navegador do cliente, além de falhar devido a bloqueios de CORS.
*   **Servidor Monolítico Tradicional (Rejeitado):** Manter um servidor dedicado rodando continuamente (ex: Node.js no Heroku ou AWS EC2). Rejeitado por violar a "Filosofia Fusca" de baixo custo e baixa manutenção. Um servidor tradicional exige monitoramento de infraestrutura, patches de segurança do sistema operacional, gerenciamento de escala para picos de tráfego e gera custos fixos mensais significativos.

### Consequências
*   **Prós:**
    *   **Segurança Robusta:** As chaves privadas de API dos vendedores nunca são expostas aos compradores ou ao tráfego público do frontend.
    *   **Escala Automática:** Funções serverless escalam de zero a milhares de execuções simultâneas instantaneamente, suportando picos de vendas de "drops" sem necessidade de intervenção manual.
    *   **Custo de Infraestrutura Praticamente Zero:** Provedores como Vercel e Netlify oferecem limites gratuitos generosos para funções serverless, garantindo que a plataforma opere com custo operacional nulo na maior parte do tempo.
*   **Contras:**
    *   **Cold Starts:** Funções serverless podem apresentar uma latência leve (alguns milissegundos a mais) na primeira requisição após um período de inatividade (inicialização a frio). Esse impacto é minimizado utilizando runtimes leves (Node.js otimizado ou Edge Runtime).
    *   **Limites de Tempo de Execução (Timeout):** Funções serverless possuem limites estritos de tempo de execução (geralmente 10 a 60 segundos). Todas as integrações de API do proxy devem ser otimizadas para responder rapidamente dentro desse limite.
</dyad-file>

<dyad-write path="board/fase-a/05-adrs.md" description="Atualizando o status do Card 05 para Concluído no board de descoberta">
# Card 05 — ADRs (Architecture Decision Records)

**Status:** Concluído
**Depende de:** 04-solution-architecture
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: ADR completo (contexto, decisão, alternatives consideradas, consequências) para cada decisão arquitetural relevante.

## Objetivo
Registrar formalmente as decisões arquiteturais mais críticas do CapybaraCart, garantindo rastreabilidade, justificativa técnica e alinhamento com a "Filosofia Fusca" e o modelo BYOK, mapeando as alternativas consideradas e as consequências de cada escolha.

## Contexto essencial
*   **Modelo BYOK:** O seller traz suas próprias chaves de API. Precisamos decidir onde e como armazenar essas chaves com segurança máxima sem um banco de dados centralizado.
*   **Armazenamento Zero:** Nenhum dado de comprador é retido nos servidores da plataforma. Precisamos formalizar como os dados de transação fluem diretamente para o Google Sheets do seller.
*   **Serverless Proxy vs. Client-side Direto:** Decidir se as chamadas de API (Stripe, OpenAI, Google Sheets) serão feitas diretamente pelo navegador do comprador/seller ou se passarão por um proxy serverless leve para evitar problemas de CORS e proteger chaves em trânsito.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Arquiteto de Software Principal com vasta experiência em sistemas distribuídos, segurança de dados e arquiteturas descentralizadas. Seu objetivo é criar o documento de ADRs (Architecture Decision Records) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Filosofia: "Fusca" (simplicidade, robustez, modularidade).
- Modelo BYOK (Bring Your Own Key) e Armazenamento Zero de dados de compradores.
- Necessidade de garantir segurança das chaves de API do seller e viabilidade técnica de integrações sem banco de dados central.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/05-adrs.md`. O documento deve conter pelo menos 3 ADRs completos, estruturados no formato padrão de mercado:

1. **ADR-01: Armazenamento Seguro de Chaves de API do Seller (BYOK)**
   - **Status:** Aprovado
   - **Contexto:** Onde e como guardar as chaves de API (Stripe, Google Sheets, OpenAI) do seller de forma que ele não precise digitá-las a cada sessão, garantindo segurança contra ataques XSS/CSRF.
   - **Decisão:** [Defina a decisão técnica, ex: Criptografia local no client-side (AES-GCM) com chave derivada de senha do seller, ou armazenamento em cookies HttpOnly via proxy serverless].
   - **Alternativas Consideradas:** Banco de dados centralizado (rejeitado por violar o armazenamento zero e aumentar custo/risco); Armazenamento em texto puro no localStorage (rejeitado por risco de XSS).
   - **Consequências:** [Prós e contras da decisão tomada].

2. **ADR-02: Fluxo de Dados de Compradores (Armazenamento Zero)**
   - **Status:** Aprovado
   - **Contexto:** Como processar o checkout e enviar os dados de entrega e pagamento para o Google Sheets do seller sem reter nenhuma informação nos servidores do CapybaraCart.
   - **Decisão:** [Defina a decisão técnica, ex: Envio direto via Serverless Function que atua como pipeline de passagem (pass-through) e grava diretamente na API do Google Sheets usando a chave do seller].
   - **Alternativas Consideradas:** Armazenamento temporário em banco de dados Redis com expiração (rejeitado por violar a premissa de armazenamento zero); Envio direto do client-side do comprador (rejeitado por expor a chave do Google Sheets do seller ao comprador).
   - **Consequências:** [Prós e contras da decisão tomada].

3. **ADR-03: Uso de Serverless Proxy para Chamadas de API de Terceiros**
   - **Status:** Aprovado
   - **Contexto:** Como realizar chamadas seguras para as APIs do Stripe, Google Sheets e OpenAI sem expor as chaves de API do seller no frontend do comprador e contornando restrições de CORS.
   - **Decisão:** [Defina a decisão técnica, ex: Criação de um proxy serverless leve (Edge Functions) que recebe a chave criptografada do client, descriptografa em memória, faz a requisição ao terceiro e retorna o resultado].
   - **Alternativas Consideradas:** Chamadas diretas do client-side (rejeitado por expor chaves de API e limitações de CORS); Servidor monolítico tradicional (rejeitado por custo e complexidade de escala).
   - **Consequências:** [Prós e contras da decisão tomada].

Gere um documento técnico maduro, com justificativas arquiteturais sólidas e profundas.
```

## Critério de conclusão
1. O arquivo `entregaveis/05-adrs.md` foi criado com os 3 ADRs especificados no prompt de execução.
2. Cada ADR segue rigorosamente a estrutura: Título, Status, Contexto, Decisão, Alternativas Consideradas e Consequências.
3. As decisões técnicas estão perfeitamente alinhadas com a "Filosofia Fusca", o modelo BYOK e a política de armazenamento zero.
4. O documento demonstra maturidade técnica e resolve os principais desafios de segurança e integração do projeto.