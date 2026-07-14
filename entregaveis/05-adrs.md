# Architecture Decision Records (ADRs) — CapybaraCart

Este documento registra as decisões arquiteturais mais críticas tomadas durante o desenho do CapybaraCart, detalhando o contexto, as decisões técnicas, as alternativas consideradas e as consequências de cada escolha. As decisões aqui tomadas equilibram a "Filosofia Fusca" de simplicidade e robustez com as melhores práticas de segurança e usabilidade moderna.

---

## ADR-01: Armazenamento Seguro de Chaves de API do Seller (BYOK)

### Status
Aprovado

### Contexto
O CapybaraCart opera sob o modelo BYOK (Bring Your Own Key), onde o vendedor (seller) fornece suas próprias credenciais para serviços como Stripe, Google Sheets e OpenAI/Anthropic. Para garantir uma experiência de uso fluida, o vendedor não deve ser obrigado a digitar ou colar essas chaves a cada nova sessão de uso do dashboard. 

No entanto, armazenar chaves de API privadas e sensíveis diretamente no navegador do usuário (via `localStorage` ou `sessionStorage` em texto puro) expõe o sistema a riscos severos de roubo de credenciais por meio de ataques de Cross-Site Scripting (XSS). Por outro lado, exigir que o usuário gerencie uma "senha mestre" complexa local para criptografia client-side gera uma fricção de usabilidade inaceitável para hobbistas leigos (como o Seu Alberto), que frequentemente esquecem senhas e demandam fluxos de recuperação complexos.

### Decisão
Adotaremos uma abordagem híbrida e equilibrada que prioriza a segurança e a usabilidade padrão de mercado:
1. **Autenticação via Login Social do Google (OAuth 2.0):** O acesso ao dashboard do vendedor será autenticado de forma simples e segura utilizando o login social do Google. Isso elimina a necessidade de senhas locais ou senhas mestres.
2. **Banco de Dados de Metadados do Seller (Stateless/Secure Vault):** Utilizaremos um banco de dados simples, seguro e gerenciado (ex: Supabase ou Firebase) para armazenar o perfil básico do seller e suas chaves de API de terceiros (Stripe, OpenAI).
3. **Criptografia em Repouso (Encryption at Rest):** As chaves de API do seller serão criptografadas no banco de dados utilizando criptografia simétrica forte (AES-256-GCM) com chaves de criptografia gerenciadas pelo provedor de nuvem (KMS) e associadas de forma estrita ao ID do usuário autenticado pelo Google.
4. **Isolamento de Dados de Compradores:** Este banco de dados armazenará **exclusivamente** metadados do seller e suas chaves de integração. **Nenhum dado de comprador (cliente final do seller), transação financeira ou endereço de entrega será armazenado neste banco**, preservando integralmente a política de "Armazenamento Zero" de dados de terceiros na plataforma.

### Alternativas Consideradas
*   **Criptografia Client-Side com Senha Mestre:** Rejeitada devido à péssima usabilidade para usuários leigos e à impossibilidade de recuperação de chaves em caso de perda da senha mestre.
*   **Armazenamento em Texto Puro no localStorage:** Rejeitado sumariamente devido à vulnerabilidade crítica a ataques XSS e vazamento de chaves de API de alta criticidade (como a Secret Key do Stripe).
*   **Banco de Dados Centralizado Tradicional (com dados de compradores):** Rejeitado por violar a premissa de privacidade por design (Armazenamento Zero) e aumentar drasticamente o custo de conformidade com a LGPD/GDPR e o risco de vazamento de dados em massa.

### Consequências
*   **Prós:**
    *   Experiência de login extremamente simples e familiar para o vendedor (um clique via Google).
    *   Segurança robusta de nível empresarial para as chaves de API, protegidas por criptografia gerenciada e autenticação forte.
    *   Eliminação do risco de perda de acesso por esquecimento de senha mestre.
    *   Manutenção da conformidade estrita com a LGPD, pois nenhum dado pessoal de comprador é retido na infraestrutura da plataforma.
*   **Contras:**
    *   Introduz uma dependência leve de um banco de dados gerenciado (embora operando dentro de limites gratuitos/free tier devido ao baixo volume de dados por seller).
    *   Exige a configuração de um fluxo de autenticação OAuth com o Google.

---

## ADR-02: Fluxo de Dados de Compradores (Armazenamento Zero)

### Status
Aprovado

### Contexto
O coração da proposta de valor do CapybaraCart para o comprador final é um checkout rápido, sem necessidade de cadastro de conta, e com privacidade absoluta. Para o vendedor, a vantagem é ter o controle total de seus clientes diretamente em sua própria planilha do Google Sheets. 

O desafio técnico consiste em transferir os dados de entrega e pagamento do comprador diretamente para o Google Sheets do vendedor de forma segura, confiável e sem reter nenhuma informação pessoal identificável (PII) nos servidores do CapybaraCart, evitando que a plataforma se torne um alvo de ataques ou assuma responsabilidades legais excessivas de custódia de dados.

### Decisão
Implementaremos um fluxo de dados baseado em **Pipelines de Passagem Segura (Pass-Through Serverless Pipelines)**:
1. **Execução Stateless:** O processamento do checkout será mediado por uma Serverless Function (Edge Function) que atua de forma estritamente volátil (em memória de execução).
2. **Gravação Direta via API do Google Sheets:** Assim que o pagamento é confirmado pelo Stripe, a Serverless Function utiliza as credenciais do Google Sheets do seller (recuperadas de forma segura do vault) para gravar os dados do comprador (nome, e-mail, endereço, itens comprados, valor e ID da transação) diretamente na planilha do vendedor.
3. **Descarte Imediato de Memória:** Após a confirmação de gravação bem-sucedida na API do Google Sheets, a execução da Serverless Function é encerrada e toda a memória volátil contendo os dados do comprador é destruída. Nenhum log de servidor ou banco de dados do CapybaraCart registrará os dados pessoais do comprador.
4. **Identificador de Conciliação Único:** O sistema gerará um ID de pedido único (ex: `CAPY-XXXX-XXXX`) que será enviado tanto para o metadado do pagamento no Stripe quanto para a linha correspondente no Google Sheets, permitindo que o vendedor concilie facilmente os pagamentos com as entregas.

### Alternativas Consideradas
*   **Envio Direto do Client-Side (Navegador do Comprador):** Rejeitado porque exigiria expor as credenciais de escrita do Google Sheets do vendedor diretamente no código frontend acessível pelo comprador, o que representaria uma falha de segurança gravíssima.
*   **Armazenamento Temporário em Fila de Mensagens (ex: Redis/SQS):** Rejeitado para o fluxo padrão para evitar qualquer persistência de dados de compradores na infraestrutura da plataforma. Em caso de falha de gravação, utilizaremos estratégias de contingência locais no dispositivo do vendedor (ver ADR-03).

### Consequências
*   **Prós:**
    *   Garantia absoluta de privacidade para o comprador (armazenamento zero de PII na plataforma).
    *   Redução drástica do escopo de conformidade com a LGPD/GDPR para os criadores do CapybaraCart.
    *   O vendedor tem posse e controle imediato de 100% dos dados de seus clientes em sua própria planilha.
*   **Contras:**
    *   Se a API do Google Sheets estiver temporariamente indisponível no momento exato da compra, o sistema precisa de um mecanismo de resiliência robusto para não perder o registro do pedido (tratado no ADR-03).

---

## ADR-03: Uso de Serverless Proxy para Chamadas de API de Terceiros e Resiliência

### Status
Aprovado

### Contexto
Para realizar operações como processar pagamentos no Stripe, consultar limites de IA na OpenAI ou gravar dados no Google Sheets, o frontend do CapybaraCart precisa interagir com APIs de terceiros. Fazer essas chamadas diretamente do navegador do comprador ou do vendedor apresenta dois problemas críticos:
1. **Exposição de Credenciais:** Chaves privadas de API (como a Secret Key do Stripe) nunca devem ser expostas ao client-side.
2. **Restrições de CORS (Cross-Origin Resource Sharing):** Muitas APIs de terceiros bloqueiam requisições diretas vindas de navegadores por motivos de segurança.

Além disso, em um modelo sem banco de dados central de pedidos, se a API do Google Sheets falhar ou estiver fora do ar no momento em que um comprador finaliza um pagamento aprovado no Stripe, o registro daquela venda corre o risco de ser perdido permanentemente.

### Decisão
Adotaremos um padrão de **Serverless Proxy com Resiliência Descentralizada**:
1. **Proxy Serverless Seguro (Edge Functions):** Todas as chamadas que exigem chaves privadas de API passarão por um proxy serverless leve e stateless (hospedado na Vercel ou Netlify). O frontend envia a requisição para o proxy; o proxy recupera a chave criptografada do banco de dados do seller, descriptografa-a em memória, realiza a chamada segura de servidor para servidor com o terceiro (Stripe, Google, OpenAI) e retorna apenas o resultado limpo para o frontend.
2. **Mecanismo de Resiliência Local (IndexedDB do Seller):** Para mitigar falhas de gravação no Google Sheets pós-pagamento aprovado:
    *   Se a gravação direta falhar devido à indisponibilidade da API do Google, o proxy serverless retornará um status de sucesso de pagamento ao comprador (para não gerar pânico), mas marcará o pedido como "Pendente de Sincronização".
    *   O pedido criptografado será enviado de volta e armazenado temporariamente no `IndexedDB` seguro do navegador do vendedor.
    *   Assim que o vendedor abrir o seu dashboard autenticado, o PWA detectará o pedido pendente e tentará realizar a sincronização automática (retry) com o Google Sheets em background, ou oferecerá um botão de "Sincronizar Agora" com feedback visual claro.

### Alternativas Consideradas
*   **Servidor Monolítico Tradicional (Node.js/Express):** Rejeitado devido ao alto custo de manutenção, complexidade de escala para picos de tráfego de checkout e necessidade de gerenciar servidores ativos 24/7.
*   **Chamadas Diretas do Client-side com Chaves Públicas/Restritas:** Rejeitado porque nem todas as APIs necessárias oferecem suporte seguro a chamadas diretas de client-side sem expor credenciais de escrita ou controle administrativo.

### Consequências
*   **Prós:**
    *   Segurança máxima: chaves privadas de API nunca tocam o navegador do comprador.
    *   Contorno nativo de problemas de CORS.
    *   Arquitetura altamente escalável e de custo quase zero (paga-se apenas pelo tempo de execução das funções serverless, que se enquadram amplamente nos limites gratuitos para o volume do MVP).
    *   Robustez transacional: falhas temporárias na planilha do vendedor não resultam em perda de dados de vendas reais.
*   **Contras:**
    *   Adiciona uma latência de rede muito leve (milissegundos) devido ao salto intermediário pelo proxy serverless.