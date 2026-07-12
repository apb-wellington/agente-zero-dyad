# Card 04 — Solution Architecture

**Status:** A fazer
**Depende de:** 02-prd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: diagrama de componentes de alto nível + descrição textual + fluxo de dados entre componentes, decisões de escala/performance e pontos de falha considerados.

## Objetivo
Definir a arquitetura técnica do CapybaraCart, detalhando os componentes do sistema, o fluxo de dados descentralizado (BYOK), as decisões de performance/escala e as estratégias de resiliência para pontos de falha, seguindo a "Filosofia Fusca" de robustez e simplicidade.

## Contexto essencial
*   **Filosofia Fusca:** Arquitetura modular, isolada por funções, de fácil manutenção e desacoplada. Se uma feature de IA ou rede social falhar, o checkout principal deve continuar funcionando.
*   **Modelo BYOK (Bring Your Own Key):** O cliente executa as requisições utilizando suas próprias credenciais (Stripe, Google Sheets, OpenAI/Anthropic).
*   **Armazenamento Zero:** O frontend PWA interage diretamente com as APIs de terceiros (ou através de um proxy/serverless helper ultra-leve que não retém estado) para enviar os dados de compra diretamente para o Google Sheets do seller e processar o pagamento no Stripe.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Arquiteto de Software Principal e Tech Lead sênior, especialista em arquiteturas serverless, PWAs e integrações descentralizadas (BYOK). Seu objetivo é criar o documento de Solution Architecture completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Stack sugerido: Frontend PWA (React/Vite ou similar) estático, hospedado em CDN (Vercel/Netlify), com Serverless Functions/Edge Functions apenas para proxy de APIs (evitando expor chaves de API no client-side quando necessário, ou gerenciando o fluxo de autenticação de forma segura).
- Modelo BYOK: Chaves do seller (Stripe, Google Sheets, OpenAI/Anthropic) salvas de forma segura (criptografadas no localStorage do seller ou passadas via headers seguros).
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/04-solution-architecture.md`. O documento deve conter as seguintes seções detalhadas:

1. **Diagrama de Componentes de Alto Nível:**
   - Crie um diagrama usando a sintaxe Mermaid.js representando: Frontend PWA (Seller Dashboard & Buyer Checkout), Serverless Proxy/Helper (se houver), e os serviços externos (Stripe, Google Sheets, OpenAI, Redes Sociais).

2. **Descrição Textual dos Componentes:**
   - Detalhe o papel de cada componente do diagrama, as tecnologias recomendadas e como eles se comunicam.

3. **Fluxo de Dados (Data Flows):**
   - Descreva o passo a passo técnico dos fluxos críticos:
     - **Fluxo de Setup:** Como o seller insere e salva suas chaves de API com segurança.
     - **Fluxo de Compra e Checkout:** Como o comprador seleciona o produto, calcula o frete (Mercado Envios), paga (Stripe) e como os dados são gravados no Google Sheets do seller, sem passar por um banco de dados do CapybaraCart.
     - **Fluxo de Assistente de IA:** Como as requisições de IA (OpenAI/Anthropic) são processadas usando a chave do seller.

4. **Decisões de Escala, Performance e Custo:**
   - Justifique a escolha de uma arquitetura estática/serverless (custo operacional quase zero para a plataforma, escalabilidade infinita para picos de acesso nos checkouts).

5. **Pontos de Falha e Resiliência (Failure Modes):**
   - Mapeie o que acontece e como o sistema se comporta se:
     - A API do Google Sheets falhar ou estiver com rate limit.
     - A API do Stripe falhar durante a confirmação do webhook.
     - A API de LLM falhar no cadastro de produtos.
   - Defina estratégias de retry, filas locais (se aplicável) ou degradação suave (graceful degradation).

Gere um documento técnico impecável, que sirva de guia definitivo para a implementação do sistema.
```

## Critério de conclusão
1. O arquivo `entregaveis/04-solution-architecture.md` foi criado com todas as 5 seções especificadas no prompt de execução.
2. O documento inclui um diagrama Mermaid.js válido representando a arquitetura do sistema.
3. O fluxo de dados explica claramente como a segurança das chaves de API (BYOK) e a política de armazenamento zero são mantidas.
4. As estratégias de resiliência para falhas de APIs de terceiros estão detalhadas e alinhadas com a "Filosofia Fusca".