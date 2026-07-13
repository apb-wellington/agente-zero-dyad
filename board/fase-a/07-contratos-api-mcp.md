# Card 07 — Contratos de API/MCP

**Status:** A fazer
**Depende de:** 04-solution-architecture
**Tier do projeto:** T3 Robusto (Profundidade: Integrações 3)
**Profundidade definida:** Integrações 3: contrato por integração (request/response, auth, rate limits) + estratégia de versionamento e tratamento de indisponibilidade de terceiros.

## Objetivo
Mapear e documentar os contratos de integração com as APIs externas críticas do CapybaraCart (Stripe, Google Sheets, OpenAI/Anthropic, Mercado Envios e Redes Sociais), detalhando os mecanismos de autenticação, payloads de request/response, limites de requisição (rate limits) e estratégias de resiliência para indisponibilidade de terceiros.

## Contexto essencial
*   **Modelo BYOK:** O seller fornece suas próprias credenciais para todas as integrações. O sistema precisa validar essas chaves e utilizá-las de forma segura.
*   **As 7 Integrações Críticas:**
    1. *Stripe:* Processamento de pagamentos e webhooks de confirmação.
    2. *Google Sheets:* Gravação de dados de pedidos e clientes (banco de dados descentralizado).
    3. *OpenAI/Anthropic:* Geração de conteúdo e assistentes de IA.
    4. *Mercado Envios (ou similar):* Cálculo de frete e geração de etiquetas.
    5. *APIs de Redes Sociais (Instagram, Pinterest, TikTok):* Publicação e tagueamento de produtos.
*   **Resiliência:** Como não há banco de dados central, falhas temporárias em APIs de terceiros (especialmente Google Sheets e Stripe) precisam de estratégias de contorno robustas (ex: retries locais, filas em memória ou localStorage temporário).

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro de Integrações e Arquiteto de APIs sênior. Seu objetivo é criar o documento de Contratos de API/MCP completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Integrações: Stripe, Google Sheets, OpenAI/Anthropic, Mercado Envios, Instagram, Pinterest e TikTok.
- Sem banco de dados central: Os dados de transação fluem diretamente para o Google Sheets do seller.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/07-contratos-api-mcp.md`. O documento deve conter as seguintes seções detalhadas:

1. **Visão Geral das Integrações e Autenticação:**
   - Tabela consolidada listando todas as integrações, o tipo de autenticação exigido (Bearer Token, OAuth2, API Key) e onde a credencial é armazenada/gerenciada no fluxo BYOK.

2. **Contratos de Integração Detalhados (Mínimo para as 3 mais críticas: Stripe, Google Sheets e OpenAI):**
   - Para cada uma das integrações críticas, forneça:
     - **Endpoint/Serviço:** URL base ou SDK utilizado.
     - **Payload de Request (Exemplo JSON):** Estrutura exata enviada pelo CapybaraCart.
     - **Payload de Response (Exemplo JSON - Sucesso):** Estrutura exata retornada pelo serviço.
     - **Tratamento de Rate Limits:** Limites conhecidos da API e como o CapybaraCart deve se comportar ao receber um erro HTTP 429 (Too Many Requests).

3. **Estratégia de Versionamento de APIs:**
   - Como o CapybaraCart gerencia atualizações e quebras de compatibilidade (breaking changes) nas APIs de terceiros, garantindo que o PWA não pare de funcionar repentinamente.

4. **Tratamento de Indisponibilidade e Fallbacks (Resiliência):**
   - Mapeie estratégias detalhadas para quando um serviço estiver fora do ar:
     - **Google Sheets Indisponível:** Como salvar temporariamente os dados do pedido no client-side (ex: IndexedDB/localStorage criptografado) e sincronizar quando o serviço voltar, sem perder a venda.
     - **Stripe Webhook Falhar:** Como garantir a conciliação do pagamento sem depender exclusivamente do webhook instantâneo.
     - **API de LLM Fora do Ar:** Como desativar suavemente os assistentes de IA mantendo o fluxo de cadastro manual de produtos 100% funcional.

Gere um documento técnico rigoroso, com exemplos de JSON válidos e estratégias de resiliência realistas para um ambiente sem banco de dados central.
```

## Critério de conclusão
1. O arquivo `entregaveis/07-contratos-api-mcp.md` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento detalha os contratos de request/response (com exemplos JSON válidos) para Stripe, Google Sheets e OpenAI.
3. As estratégias de tratamento de rate limits (HTTP 429) e indisponibilidade (fallbacks locais) estão claramente documentadas.
4. O fluxo de autenticação BYOK está mapeado para cada uma das integrações.