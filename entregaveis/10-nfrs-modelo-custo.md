# Requisitos Não Funcionais (NFRs) e Modelo de Custo — CapybaraCart

Este documento estabelece os Requisitos Não Funcionais (NFRs) e a modelagem financeira (FinOps) do CapybaraCart. A arquitetura foi desenhada sob a filosofia "Fusca" (New Beetle): uma solução moderna, extremamente leve, robusta, de alta utilidade e custo operacional próximo de zero, viabilizada pelo modelo descentralizado BYOK (Bring Your Own Key) e pela política de Armazenamento Zero de dados de compradores.

---

## 1. Requisitos Não Funcionais (NFRs) Detalhados

### 1.1 Performance e Otimização Móvel
Dado que a maior parte do tráfego de compradores é proveniente de links diretos em redes sociais (Instagram, TikTok, Pinterest) acessados via conexões móveis, a performance do PWA é um fator crítico de conversão.

*   **Tempo de Carregamento (First Contentful Paint - FCP):** O FCP da vitrine do produto deve ser inferior a **1.2 segundos** em conexões 3G móveis simuladas (Fast 3G, RTT de 150ms, throttling de CPU de 4x).
*   **Time to Interactive (TTI):** A página de checkout deve se tornar totalmente interativa em menos de **1.8 segundos** sob as mesmas condições de rede móvel.
*   **Lighthouse Score:** A vitrine pública do produto deve manter uma pontuação mínima de **95/100** nas categorias de Performance e Acessibilidade do Google Lighthouse.
*   **Otimização de Assets:**
    *   *Bundle Size:* O tamanho total do bundle inicial de JavaScript enviado ao comprador deve ser inferior a **70 KB** (gzipped), utilizando técnicas de code-splitting e tree-shaking nativas do Vite.
    *   *Imagens:* Todas as imagens de produtos devem ser servidas em formato moderno (WebP ou AVIF) com redimensionamento dinâmico e carregamento preguiçoso (*lazy loading*) nativo.

### 1.2 Disponibilidade e Resiliência Offline
*   **SLA de Hospedagem:** A infraestrutura estática do PWA (hospedada em CDN global como Vercel ou Netlify) deve garantir uma disponibilidade de **99.99%**.
*   **Estratégia de Cache Offline (Service Workers):**
    *   Utilização do Workbox para implementar uma estratégia de cache do tipo *Stale-While-Revalidate* para os assets estáticos da aplicação (HTML, JS, CSS, imagens de interface).
    *   Garantir que a vitrine do produto abra instantaneamente mesmo em cenários de oscilação severa ou perda total de conectividade do comprador, exibindo os dados básicos do produto salvos no cache local.
*   **Degradação Suave (Graceful Degradation):** Se as APIs de IA ou de cálculo de frete estiverem fora do ar, o sistema deve desativar esses recursos de forma transparente, permitindo que o fluxo principal de checkout e preenchimento manual continue operando sem travar a interface.

### 1.3 Segurança e Proteção de Credenciais
Como o CapybaraCart opera no modelo BYOK, a segurança no tráfego e armazenamento das chaves de API dos sellers é a maior prioridade de segurança do sistema.

*   **Criptografia em Repouso (Vault do Seller):**
    *   As chaves de API do seller (Stripe, OpenAI) são armazenadas no banco de dados de metadados da plataforma criptografadas com **AES-256-GCM**.
    *   A chave de criptografia é gerenciada por um serviço de KMS (Key Management Service) em nuvem, isolada por ID de usuário autenticado via Google OAuth 2.0.
*   **Segurança em Trânsito:**
    *   Uso obrigatório de HTTPS com TLS 1.3 para todas as comunicações entre o PWA, o Serverless Proxy e as APIs de terceiros.
    *   Implementação de cabeçalhos de segurança estritos no Serverless Proxy:
        *   `Strict-Transport-Security (HSTS)` para forçar conexões seguras.
        *   `Content-Security-Policy (CSP)` restritivo para mitigar ataques de Cross-Site Scripting (XSS) e injeção de scripts maliciosos.
        *   `X-Content-Type-Options: nosniff` e `X-Frame-Options: DENY` para evitar clickjacking.
*   **Isolamento de Execução:**
    *   As chaves de API descriptografadas existem apenas em memória volátil durante o ciclo de vida de execução da Serverless Function (Edge Function) que processa a requisição, sendo destruídas imediatamente após o encerramento da chamada.

### 1.4 Privacidade e Conformidade (LGPD/GDPR)
A política de "Armazenamento Zero" simplifica drasticamente a conformidade legal do CapybaraCart, transferindo a custódia dos dados para os próprios envolvidos.

*   **Modelo de Responsabilidade Compartilhada:**
    *   *A Plataforma (CapybaraCart):* Atua estritamente como um operador de dados de passagem (*data pipeline*). Como não armazena, não indexa e não processa dados pessoais de compradores in bancos de dados próprios, a plataforma fica isenta de riscos de vazamento centralizado de dados de clientes.
    *   *O Gateway (Stripe):* Responsável pela custódia e conformidade PCI-DSS dos dados financeiros (cartões de crédito).
    *   *O Vendedor (Seller):* Assume o papel de Controlador dos Dados Pessoais de seus compradores. Ao receber os dados diretamente em sua planilha do Google Sheets, o seller é responsável por garantir a segurança de sua conta Google e o uso ético das informações de seus clientes.
*   **Consentimento e Transparência:** O checkout exibirá uma nota clara informando ao comprador que seus dados de entrega estão sendo enviados diretamente para a planilha de controle do vendedor para fins exclusivos de faturamento e logística, em conformidade com as bases legais de Execução de Contrato da LGPD.

---

## 2. Modelo de Custo Detalhado por Componente

### 2.1 Custos da Plataforma (Hospedagem e Proxy)
A arquitetura Jamstack estática combinada com Serverless Functions permite que a plataforma CapybaraCart escale para milhares de sellers ativos com custo operacional praticamente nulo.

*   **Hospedagem do Frontend (Vercel / Netlify - Free Tier):**
    *   *Custo:* **R$ 0,00/mês**.
    *   *Limites:* 100 GB de largura de banda por mês. Como o PWA é extremamente leve (~100 KB por carregamento completo), o plano gratuito suporta aproximadamente **1.000.000 de visualizações de vitrine por mês** antes de exigir migração para o plano Pro ($20/mês).
*   **Serverless Proxy / Edge Functions (Vercel Functions - Free Tier):**
    *   *Custo:* **R$ 0,00/mês**.
    *   *Limites:* 100.000 execuções por dia (3 milhões de execuções por mês). Cada checkout ou chamada de IA consome 1 execução. O plano gratuito suporta com folga a operação inicial de centenas de sellers ativos.

### 2.2 Custos do Seller (Modelo BYOK)
No modelo BYOK, o vendedor assume o custo direto de sua operação, pagando apenas pelo que consome, sem taxas de intermediação da plataforma.

*   **Processamento de Pagamentos (Stripe):**
    *   *Modelo de Custo:* Taxa por transação bem-sucedida (sem custo fixo mensal).
    *   *Tarifa Padrão Brasil:* **3,99% + R$ 0,39** por transação aprovada no cartão de crédito (ou tarifas menores para Pix).
*   **Inteligência Artificial (Gemini / Google AI Studio):**
    *   *Modelo de Custo:* **Gratuito (Free Tier)** utilizando o modelo `gemini-1.5-flash`.
    *   *Limites:* Até 15 requisições por minuto (RPM) e 1.500 requisições por dia (RPD). Este limite é extremamente generoso e atende 100% da demanda de cadastro de produtos e geração de posts de qualquer seller de nicho sem custo algum.
    *   *Alternativa Paga (OpenAI - gpt-4o-mini):* Caso o seller prefira usar a OpenAI, o custo estimado é de **$0.150 por 1 milhão de tokens de entrada** e **$0.600 por 1 milhão de tokens de saída**. Um cadastro completo de produto consome em média 2.000 tokens, custando aproximadamente **R$ 0,005 (meio centavo de real) por produto cadastrado**.
*   **Banco de Dados de Pedidos (Google Sheets):**
    *   *Custo:* **R$ 0,00/mês** (Gratuito utilizando uma conta Google padrão).
    *   *Limites:* Até 10.000.000 de células por planilha (equivalente a mais de 500.000 pedidos registrados em uma única planilha).
*   **Cálculo de Frete (Mercado Envios / Correios):**
    *   *Custo:* **R$ 0,00** para consulta de tarifas via API. O custo real do frete físico é calculado dinamicamente e repassado integralmente para o comprador final pagar no momento do checkout.

---

## 3. Estratégia de Monitoramento e Alertas

Para manter a filosofia de privacidade e descentralização, o monitoramento do CapybaraCart foca na saúde técnica da aplicação sem coletar dados pessoais dos compradores.

*   **Telemetria de Erros Descentralizada (Sentry - Free Tier):**
    *   Implementação de um coletor de erros leve no PWA para capturar falhas de JavaScript no navegador do usuário e exceções de timeout no Serverless Proxy.
    *   *Filtro de Privacidade:* Configuração estrita do Sentry para sanitizar e remover automaticamente qualquer dado pessoal (nomes, e-mails, CEPs, números de cartão) dos payloads de erro antes do envio.
*   **Monitoramento de Integrações no Dashboard do Seller:**
    *   O dashboard do vendedor realizará verificações periódicas de integridade (*health checks*) silenciosas em background para validar se as chaves do Stripe e do Google Sheets continuam ativas e autorizadas.
    *   Caso uma integração falhe, o sistema exibe um alerta visual imediato no painel do seller, evitando que ele divulgue links de checkout quebrados.
*   **Logs de Auditoria Locais:**
    *   O PWA do seller manterá um log local simples no `IndexedDB` registrando o histórico de sincronizações com o Google Sheets e tentativas de reenvio de pedidos que falharam temporariamente, permitindo que o próprio seller audite a saúde de sua operação diretamente de seu navegador.