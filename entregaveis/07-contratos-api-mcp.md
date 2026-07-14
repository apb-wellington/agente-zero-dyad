# Contratos de API/MCP — CapybaraCart

Este documento detalha os contratos de integração, mecanismos de autenticação, payloads de comunicação e estratégias de resiliência para as APIs externas que compõem o ecossistema do CapybaraCart. Operando sob o modelo **BYOK (Bring Your Own Key)** e uma arquitetura de **Armazenamento Zero**, o sistema atua como um duto seguro e stateless de passagem de dados.

---

## 1. Visão Geral das Integrações e Autenticação

Todas as credenciais fornecidas pelos sellers são armazenadas de forma segura no banco de dados de metadados do seller (criptografadas com AES-256-GCM) e descriptografadas temporariamente em memória volátil durante a execução das Serverless Functions (Edge Functions) que atuam como proxy.

| Serviço / API | Tipo de Autenticação | Escopo / Permissões Exigidas | Armazenamento / Gerenciamento no Fluxo BYOK |
| :--- | :--- | :--- | :--- |
| **Stripe** | API Key (Bearer Token) | `write` (Clientes, Cobranças, Webhooks) | Salvo criptografado no Vault do Seller; descriptografado em memória no Serverless Proxy. |
| **Google Sheets** | OAuth 2.0 / Service Account | `https://www.googleapis.com/auth/spreadsheets` | Autenticação via fluxo OAuth do Google no Setup; Token de acesso gerenciado de forma segura. |
| **Gemini / OpenAI** | API Key (Bearer Token) | Acesso padrão de consumo de modelos de chat | Salvo criptografado no Vault do Seller; descriptografado em memória no Serverless Proxy. |
| **Mercado Envios** | OAuth 2.0 / API Key | Cálculo de frete e geração de etiquetas | Salvo criptografado no Vault do Seller; descriptografado em memória no Serverless Proxy. |
| **Instagram Graph API** | OAuth 2.0 (User Access Token) | `instagram_basic`, `instagram_content_publish` | Token de longa duração (60 dias) renovado automaticamente em background pelo PWA. |
| **Pinterest API** | OAuth 2.0 | `boards:read`, `pins:read`, `pins:write` | Token de acesso OAuth gerenciado no client-side do seller. |
| **TikTok API** | OAuth 2.0 | `video.publish` | Token de acesso OAuth gerenciado no client-side do seller. |

---

## 2. Contratos de Integração Detalhados

Abaixo estão detal<dyad-write path="entregaveis/07-contratos-api-mcp.md" description="Escrevendo o documento completo de Contratos de API/MCP para o CapybaraCart">
# Contratos de API/MCP — CapybaraCart

Este documento detalha os contratos de integração, mecanismos de autenticação, payloads de comunicação e estratégias de resiliência para as APIs externas que compõem o ecossistema do CapybaraCart. Operando sob o modelo **BYOK (Bring Your Own Key)** e uma arquitetura de **Armazenamento Zero**, o sistema atua como um duto seguro e stateless de passagem de dados.

---

## 1. Visão Geral das Integrações e Autenticação

Todas as credenciais fornecidas pelos sellers são armazenadas de forma segura no banco de dados de metadados do seller (criptografadas com AES-256-GCM) e descriptografadas temporariamente em memória volátil durante a execução das Serverless Functions (Edge Functions) que atuam como proxy.

| Serviço / API | Tipo de Autenticação | Escopo / Permissões Exigidas | Armazenamento / Gerenciamento no Fluxo BYOK |
| :--- | :--- | :--- | :--- |
| **Stripe** | API Key (Bearer Token) | `write` (Clientes, Cobranças, Webhooks) | Salvo criptografado no Vault do Seller; descriptografado em memória no Serverless Proxy. |
| **Google Sheets** | OAuth 2.0 / Service Account | `https://www.googleapis.com/auth/spreadsheets` | Autenticação via fluxo OAuth do Google no Setup; Token de acesso gerenciado de forma segura. |
| **Gemini / OpenAI** | API Key (Bearer Token) | Acesso padrão de consumo de modelos de chat | Salvo criptografado no Vault do Seller; descriptografado em memória no Serverless Proxy. |
| **Mercado Envios** | OAuth 2.0 / API Key | Cálculo de frete e geração de etiquetas | Salvo criptografado no Vault do Seller; descriptografado em memória no Serverless Proxy. |
| **Instagram Graph API** | OAuth 2.0 (User Access Token) | `instagram_basic`, `instagram_content_publish` | Token de longa duração (60 dias) renovado automaticamente em background pelo PWA. |
| **Pinterest API** | OAuth 2.0 | `boards:read`, `pins:read`, `pins:write` | Token de acesso OAuth gerenciado no client-side do seller. |
| **TikTok API** | OAuth 2.0 | `video.publish` | Token de acesso OAuth gerenciado no client-side do seller. |

---

## 2. Contratos de Integração Detalhados

Abaixo estão detalhados os contratos de integração para as três APIs mais críticas do sistema: Stripe, Google Sheets e OpenAI/Gemini.

### 2.1 Stripe (Processamento de Pagamentos)
*   **Endpoint/Serviço:** SDK oficial do Stripe (`stripe` npm package) ou endpoint base `https://api.stripe.com/v1/payment_intents`.
*   **Payload de Request (Criação de PaymentIntent):**
```json
{
  "amount": 8990,
  "currency": "brl",
  "payment_method_types": ["card", "pix"],
  "metadata": {
    "order_id": "CAPY-9823-1029",
    "seller_id": "sell_01H7X92B",
    "product_id": "prod_01H7X92C"
  }
}
```
*   **Payload de Response (Sucesso - HTTP 200):**
```json
{
  "id": "pi_3MxF42LkdIwHu7ix2D9a",
  "object": "payment_intent",
  "amount": 8990,
  "client_secret": "pi_3MxF42LkdIwHu7ix2D9a_secret_xyz789",
  "status": "requires_payment_method",
  "metadata": {
    "order_id": "CAPY-9823-1029",
    "seller_id": "sell_01H7X92B",
    "product_id": "prod_01H7X92C"
  }
}
```
*   **Tratamento de Rate Limits:** O Stripe possui um limite padrão de 100 requisições por segundo (RPS) em modo de teste e de produção. Ao receber um erro HTTP 429 (Too Many Requests), o Serverless Proxy do CapybaraCart aplicará uma fila de retentativas com backoff exponencial e jitter aleatório (máximo de 3 tentativas em um intervalo de 5 segundos).

### 2.2 Google Sheets (Banco de Dados Descentralizado)
*   **Endpoint/Serviço:** Google APIs Client Library ou endpoint base `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append`.
*   **Payload de Request (Inserção de Linha de Pedido):**
```json
{
  "range": "Pedidos!A:H",
  "valueInputOption": "USER_ENTERED",
  "insertDataOption": "INSERT_ROWS",
  "values": [
    [
      "CAPY-9823-1029",
      "2023-10-27T14:32:01Z",
      "Lucas Silva",
      "lucas.silva@email.com",
      "Rua das Flores, 123 - Curitiba/PR",
      "Muda de Orquídea Cattleya",
      "89.90",
      "Aguardando Envio"
    ]
  ]
}
```
*   **Payload de Response (Sucesso - HTTP 200):**
```json
{
  "spreadsheetId": "1X2y3Z_spreadsheet_id_example",
  "tableRange": "Pedidos!A1:H100",
  "updates": {
    "spreadsheetId": "1X2y3Z_spreadsheet_id_example",
    "updatedRange": "Pedidos!A101:H101",
    "updatedRows": 1,
    "updatedColumns": 8,
    "updatedCells": 8
  }
}
```
*   **Tratamento de Rate Limits:** A API do Google Sheets possui um limite de 300 requisições de gravação por minuto por projeto. Caso o limite seja atingido (HTTP 429), o proxy serverless enfileirará a requisição localmente e tentará novamente após 2 segundos. Se a falha persistir, o fluxo de resiliência local (IndexedDB) será ativado.

### 2.3 OpenAI / Gemini (Assistentes de IA)
*   **Endpoint/Serviço:** SDK oficial ou endpoint base `https://api.openai.com/v1/chat/completions` (ou equivalente do Gemini).
*   **Payload de Request (Geração de Descrição de Produto):**
```json
{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "system",
      "content": "Você é o Assistente de Cadastro de Produtos do CapybaraCart. Responda apenas em JSON."
    },
    {
      "role": "user",
      "content": "Muda de orquídea Cattleya walkeriana saudável, flor rosa perfumada."
    }
  ],
  "response_format": { "type": "json_object" }
}
```
*   **Payload de Response (Sucesso - HTTP 200):**
```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "{\n  \"titulo\": \"Muda de Orquídea Cattleya Walkeriana\",\n  \"descricao_curta\": \"Muda saudável de Cattleya walkeriana com flor rosa perfumada.\",\n  \"historia_detalhada\": \"Esta muda de Cattleya walkeriana é ideal para colecionadores que buscam uma planta vigorosa e de perfume marcante...\"\n}"
      },
      "finish_reason": "stop"
    }
  ]
}
```
*   **Tratamento de Rate Limits:** Varia de acordo com o tier da conta BYOK do seller. O proxy serverless intercepta erros HTTP 429 e exibe uma mensagem clara instruindo o seller a verificar o saldo ou limites de sua conta no painel do provedor de IA.

---

## 3. Estratégia de Versionamento de APIs

Para garantir que o CapybaraCart permaneça operacional mesmo diante de atualizações ou quebras de compatibilidade (breaking changes) nas APIs de terceiros, adotamos as seguintes práticas:

1.  **Fixação de Versões de API (API Pinning):**
    *   *Stripe:* O cabeçalho `Stripe-Version` é fixado no Serverless Proxy para a versão estável utilizada no desenvolvimento, garantindo que atualizações na conta do Stripe do seller não quebrem o payload esperado.
    *   *Google Sheets:* Utilização estrita da versão estável `/v4` da API.
2.  **Camada de Abstração de Payload (Adapter Pattern):**
    *   O Serverless Proxy traduz os payloads específicos de terceiros em um formato interno padronizado do CapybaraCart. Se a API de um parceiro mudar, apenas o adaptador correspondente no proxy precisa ser atualizado, mantendo o código do PWA intacto.
3.  **Monitoramento de Depreciação:**
    *   O proxy serverless registra avisos de depreciação retornados nos headers das APIs de terceiros para alertar os mantenedores da plataforma antes que uma versão seja desativada.

---

## 4. Tratamento de Indisponibilidade e Fallbacks (Resiliência)

A arquitetura descentralizada do CapybaraCart exige estratégias de contingência robustas para garantir que nenhuma venda seja perdida devido à indisponibilidade temporária de serviços externos.

### 4.1 Google Sheets Indisponível (Banco de Dados Fora do Ar)
*   **Cenário:** O pagamento do comprador é aprovado no Stripe, mas a API do Google Sheets falha ao registrar a linha do pedido.
*   **Estratégia de Mitigação:**
    1.  O Serverless Proxy confirma o sucesso do pagamento para o comprador final (evitando pânico ou dupla cobrança).
    2.  O proxy retorna os dados do pedido criptografados para o PWA do comprador, que os armazena temporariamente em uma fila local no `IndexedDB` ou `localStorage` do navegador.
    3.  O sistema tenta realizar a sincronização em background de forma silenciosa.
    4.  Caso a sincronização automática falhe, o vendedor verá um alerta vermelho proeminente ao acessar seu dashboard: *"Você tem 1 pedido pendente de sincronização devido a uma instabilidade na sua planilha do Google Sheets. Clique aqui para sincronizar manualmente."*

### 4.2 Stripe Webhook Falhar (Conciliação de Pagamento)
*   **Cenário:** O comprador realiza o pagamento, mas o webhook do Stripe falha ao notificar o Serverless Proxy para disparar a gravação no Google Sheets.
*   **Estratégia de Mitigação:**
    1.  **Polling Ativo no Client-Side:** O PWA do comprador não depende exclusivamente do webhook. Após a confirmação do pagamento na interface do Stripe Elements, o PWA faz consultas periódicas (polling) de até 10 segundos ao endpoint do proxy para verificar o status do `PaymentIntent`.
    2.  **Conciliação Manual no Dashboard:** Se o polling e o webhook falharem, o vendedor pode clicar em um botão de "Conciliar Pagamentos" no seu dashboard. O sistema consultará a API do Stripe usando a chave do seller para buscar transações aprovadas que ainda não constam na planilha do Google Sheets, realizando a inserção retroativa.

### 4.3 API de LLM Fora do Ar (Falha nos Assistentes de IA)
*   **Cenário:** O vendedor tenta cadastrar um produto ou gerar um post, mas a API de IA (Gemini/OpenAI) está indisponível ou sem saldo.
*   **Estratégia de Mitigação:**
    1.  **Degradação Suave (Graceful Degradation):** O sistema detecta a falha de conexão com a API de IA e desativa temporariamente o painel lateral do assistente.
    2.  **Foco no Fluxo Manual:** O formulário de cadastro de produtos permanece 100% funcional para preenchimento manual. O sistema exibe uma mensagem discreta e amigável: *"O assistente de IA está temporariamente indisponível. Você pode preencher o título e a descrição do seu produto manualmente abaixo."*