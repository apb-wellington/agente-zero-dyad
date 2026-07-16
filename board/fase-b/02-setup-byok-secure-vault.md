# Card 02 — Setup BYOK & Secure Vault

**Status:** A fazer
**Depende de:** 01-pwa-shell-design-tokens

## Objetivo
Implementar o fluxo de autenticação do vendedor (Google OAuth 2.0) e a interface de configuração BYOK, garantindo o salvamento e a validação assíncrona das chaves de API (Stripe, Google Sheets e Gemini/OpenAI) de forma criptografada e segura no banco de metadados (Secure Vault).

## Contexto essencial
*   **ADR-01 (Soberania e Segurança):** Autenticação via Google OAuth. As chaves de API do seller são criptografadas em repouso (AES-256-GCM) no banco de metadados (ex: Supabase Vault ou similar). Nenhum dado de comprador é salvo neste banco.
*   **Validação Ativa:** O sistema deve testar cada chave de API de forma assíncrona antes de permitir o salvamento definitivo, exibindo feedbacks visuais claros (verde para sucesso, vermelho para erro).
*   **Chaves Necessárias:**
    *   Stripe (Publishable Key e Secret Key)
    *   Google Sheets (Spreadsheet ID e credenciais de acesso)
    *   Gemini/OpenAI (API Key)

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro de Segurança e Desenvolvedor Backend sênior. Seu objetivo é implementar o fluxo de autenticação do vendedor e o cofre seguro de chaves (Secure Vault) para o CapybaraCart.

### Diretrizes de Implementação:
1. **Autenticação do Seller:**
   - Implemente o login social do Google (OAuth 2.0) utilizando um provedor de backend/banco gerenciado (como Supabase Auth ou Firebase Auth).
   - Proteja a rota `/setup` e `/dashboard` para que apenas usuários autenticados tenham acesso.
2. **Interface de Setup BYOK (`/setup`):**
   - Crie o formulário responsivo para inserção das chaves de API (Stripe, Google Sheets, Gemini/OpenAI).
   - Aplique os Design Tokens de status (Success, Warning, Error) para dar feedback visual em tempo real.
3. **Validação Assíncrona de Chaves:**
   - Crie funções serverless (Edge Functions) para testar a validade de cada chave de API de forma isolada:
     - *Stripe:* Realize uma chamada simples de listagem (ex: `stripe.customers.list({ limit: 1 })`).
     - *Google Sheets:* Tente ler os metadados da planilha informada (`Spreadsheet ID`).
     - *IA:* Realize uma chamada de teste de chat de baixo custo (ex: 1 token de entrada).
4. **Criptografia e Armazenamento Seguro (Vault):**
   - Salve as chaves validadas no banco de dados de metadados do seller.
   - As chaves privadas (Stripe Secret Key, OpenAI API Key) devem ser criptografadas em repouso utilizando AES-256-GCM antes de serem salvas no banco de dados, atrelando a chave de descriptografia ao ID do usuário autenticado.

Gere um código limpo, seguro, com tratamento de erros robusto e em conformidade com a LGPD.
```

## Critério de aceite
1. O login via Google OAuth 2.0 está funcional e redireciona o usuário corretamente.
2. A rota `/setup` está protegida e exibe o formulário de chaves de API.
3. O sistema valida assincronamente cada chave de API e exibe o status visual de "Conectado" ou "Erro" na tela.
4. As chaves privadas são criptografadas com AES-256-GCM antes de serem persistidas no banco de dados.
5. O banco de dados armazena apenas os metadados do seller, sem qualquer dado de comprador.