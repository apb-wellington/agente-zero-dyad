# Architecture Decision Records (ADRs) — CapybaraCart

Este documento registra as decisões arquiteturais críticas tomadas durante o desenho técnico do CapybaraCart, detalhando o contexto, as alternativas avaliadas, as justificativas de escolha e as consequências de cada decisão sob a ótica da "Filosofia Fusca" (simplicidade, robustez e modularidade).

---

## ADR-01: Armazenamento Seguro de Chaves de API do Seller (BYOK)

### Status
Aprovado

### Contexto
O CapybaraCart opera sob o modelo BYOK (Bring Your Own Key), onde cada vendedor (seller) fornece suas próprias credenciais para serviços essenciais (Stripe, Google Sheets, OpenAI/Anthropic). Como a plataforma adota uma política de custo operacional mínimo e descentralização, não possuímos um banco de dados relacional centralizado para armazenar essas credenciais em texto claro. 

O desafio consiste em persistir essas chaves de API de forma que o vendedor não precise digitá-las a cada nova sessão de uso do painel administrativo, garantindo proteção robusta contra ataques de roubo de dados no client-side, como Cross-Site Scripting (XSS) e vazamento físico do dispositivo.

### Decisão
Adotar a estratégia de **Criptografia Simétrica no Client-Side (AES-GCM-256)**. 

1. **Derivação de Chave:** Quando o seller realiza o primeiro setup, ele define uma **Senha Mestre** forte (não armazenada em nenhum lugar). O sistema utiliza o algoritmo PBKDF2 (com salt aleatório e 100.000 iterações) para derivar uma chave criptográfica a partir dessa senha.
2. **Criptografia:** As chaves de API inseridas (Stripe, Google Sheets, OpenAI) são criptografadas diretamente no navegador do seller usando o padrão industrial **AES-GCM-256** (Web Crypto API nativa).
3. **Persistência:** O payload criptografado (contendo o texto cifrado, o vetor de inicialização/IV e o salt) é salvo no `localStorage` do navegador do seller.
4. **Uso:** A cada sessão, o seller digita sua Senha Mestre para descriptografar as chaves em memória volátil (RAM) durante o uso do dashboard. As chaves descriptografadas nunca tocam o disco em texto claro.

### Alternativas Consideradas
*   **Banco de Dados Centralizado Criptografado (Rejeitado):** Exigiria a criação de uma infraestrutura de banco de dados (PostgreSQL/MongoDB) gerenciada pela plataforma, elevando o custo operacional para além do zero, criando um ponto central de falha e um alvo altamente atraente para hackers (honeypot de chaves de API).
*   **Armazenamento em Texto Puro no localStorage (Rejeitado):** Extremamente inseguro. Qualquer script malicioso injetado via dependências de terceiros (ataque de supply chain ou XSS) poderia ler o `localStorage` diretamente e roubar as chaves de API do seller.

### Consequências
*   **Prós:**
    *   **Custo Zero e Soberania:** Sem custos de banco de dados ou gerenciamento de chaves (KMS) para a plataforma.
    *   **Segurança Robusta:** Mesmo que o dispositivo do seller seja comprometido fisicamente ou o `localStorage` seja inspecionado, as chaves estão protegidas por criptografia de nível militar.
    *   **Privacidade:** A plataforma nunca tem acesso às chaves em texto claro em repouso.
*   **Contras:**
    *   **Experiência do Usuário (UX):** O seller precisa digitar sua Senha Mestre sempre que abrir o painel em um novo dispositivo ou após limpar o cache do navegador.
    *   **Sem Recuperação de Senha:** Se o seller esquecer a Senha Mestre, os dados criptografados no `localStorage` tornam-se permanentemente inacessíveis, exigindo um novo setup de chaves.

---

## ADR-02: Fluxo de Dados de Compradores (Armazenamento Zero)

### Status
Aprovado

### Contexto
Para garantir privacidade máxima aos compradores e simplificar drasticamente a conformidade com a LGPD/GDPR, o CapybaraCart adota o princípio de **Armazenamento Zero** de dados pessoais de compradores nos servidores da plataforma. No entanto, o fluxo de checkout precisa processar o pagamento (Stripe), calcular o frete (Mercado Envios) e registrar o pedido para que o vendedor possa realizar o envio físico. 

Precisamos definir como esses dados transitam de forma segura e confiável do comprador para o vendedor sem que a plataforma precise reter ou persistir essas informações em um banco de dados próprio.

### Decisão
Implementar um fluxo de **Passagem Direta (Pass-Through) via Serverless Function Stateless**.

1. **Coleta:** O comprador preenche os dados de entrega e pagamento no checkout de passo único do PWA.
2. **Transmissão:** O PWA envia os dados do pedido juntamente com as chaves de API criptografadas do seller para uma Serverless Function (Vercel/Netlify).
3. **Processamento em Memória:** A Serverless Function descriptografa temporariamente as chaves do seller em memória volátil, realiza a chamada de cobrança para a API do Stripe e, em caso de sucesso, grava imediatamente os dados do comprador e do pedido como uma nova linha na planilha do Google Sheets do seller.
4. **Descarte:** Assim que a resposta de sucesso é enviada ao comprador, a execução da Serverless Function é encerrada e todos os dados transitados em memória são completamente descartados. Nenhum log de servidor deve conter dados pessoais identificáveis (PII).

### Alternativas Consideradas
*   **Envio Direto do Client-Side do Comprador (Rejeitado):** Fazer chamadas diretas do navegador do comprador para a API do Google Sheets do seller exigiria expor a chave de API ou token de acesso do Sheets diretamente no código frontend recebido pelo comprador, o que permitiria a qualquer usuário malicioso ler ou apagar toda a planilha do vendedor.
*   **Armazenamento Temporário em Redis com Expiração (Rejeitado):** Embora mitigasse o armazenamento de longo prazo, ainda exigiria a manutenção de uma infraestrutura de cache ativa, violando a premissa de simplicidade e custo zero da plataforma.

### Consequências
*   **Prós:**
    *   **Compliance Simplificado:** Sem armazenamento de dados de compradores, a plataforma fica virtualmente isenta de riscos de vazamento de dados de clientes e simplifica a conformidade com a LGPD.
    *   **Descentralização Real:** O vendedor é o único dono e guardião dos dados de seus clientes, armazenados diretamente em sua conta do Google Drive.
*   **Contras:**
    *   **Dependência de Sincronismo:** Se a API do Google Sheets falhar no exato momento pós-pagamento, o sistema precisa de um mecanismo de contingência local no dispositivo do seller para recuperar o pedido (conforme detalhado no PRD e no Solution Architecture).

---

## ADR-03: Uso de Serverless Proxy para Chamadas de API de Terceiros

### Status
Aprovado

### Contexto
O CapybaraCart precisa interagir com múltiplas APIs externas (Stripe, Google Sheets, OpenAI/Anthropic). Realizar essas chamadas diretamente do navegador do usuário apresenta dois problemas críticos:
1. **Vazamento de Credenciais:** Chaves privadas de API (como a Secret Key do Stripe ou a API Key da OpenAI) nunca devem ser expostas no client-side, sob risco de uso indevido por terceiros.
2. **Restrições de CORS (Cross-Origin Resource Sharing):** Muitas APIs de terceiros bloqueiam requisições diretas vindas de navegadores por motivos de segurança, exigindo que as chamadas partam de um servidor (origem confiável).

### Decisão
Utilizar um **Serverless Proxy Stateless (Edge/Serverless Functions)** como intermediário de comunicação.

1. O frontend PWA nunca faz chamadas diretas para as APIs privadas de terceiros.
2. Toda requisição sensível é enviada para rotas específicas do Serverless Proxy (ex: `/api/checkout`, `/api/generate-description`).
3. O proxy recebe as credenciais criptografadas vindas do client, descriptografa-as temporariamente em memória usando a chave derivada da Senha Mestre (enviada de forma segura via cabeçalho HTTPS), executa a chamada para o serviço de destino (Stripe, Google, OpenAI) e retorna apenas o resultado necessário para o frontend.
4. O proxy é totalmente stateless: ele não armazena estado, não possui banco de dados e não retém chaves ou payloads após o término da requisição HTTP.

### Alternativas Consideradas
*   **Servidor Monolítico Tradicional (Node.js/Express em VPS) (Rejeitado):** Exigiria provisionamento de servidores, gerenciamento de patches de segurança, configuração de balanceadores de carga e geraria custos mensais fixos de hospedagem, violando a "Filosofia Fusca" de custo zero e baixa manutenção.
*   **Chamadas Diretas Client-to-API (Rejeitado):** Inviável tecnicamente devido ao bloqueio de CORS na maioria das APIs e inaceitável do ponto de vista de segurança por expor chaves privadas no tráfego do navegador.

### Consequências
*   **Prós:**
    *   **Segurança Máxima:** As chaves privadas de API dos sellers nunca são expostas ao navegador do comprador ou a terceiros.
    *   **Escala Infinita e Custo Zero:** Hospedado em plataformas como Vercel ou Netlify, o proxy escala automaticamente de zero a milhões de requisições, operando confortavelmente dentro do limite gratuito (Free Tier) para o volume esperado do MVP.
    *   **Contorno de CORS:** Todas as requisições partem de um ambiente de servidor seguro, eliminando problemas de CORS.
*   **Contras:**
    *   **Cold Starts:** Funções serverless podem apresentar uma latência leve (cold start) na primeira requisição após um período de inatividade, embora minimizado pelo uso de runtimes leves (Node.js/Edge).
    *   **Limites de Tempo de Execução (Timeout):** Funções serverless em planos gratuitos geralmente possuem limites de execução (ex: 10 segundos), exigindo que as integrações sejam rápidas e otimizadas.