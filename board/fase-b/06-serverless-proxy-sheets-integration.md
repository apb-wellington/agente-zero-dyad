# Card 06 — Serverless Proxy & Google Sheets Integration

**Status:** A fazer
**Depende de:** 02-setup-byok-secure-vault, 05-public-product-page-one-page-checkout

## Objetivo
Implementar o Serverless Proxy (Vercel/Netlify Functions) stateless que atua como duto de passagem segura (Pass-Through), descriptografando temporariamente as chaves do seller em memória para processar a confirmação de pagamento no Stripe e gravar os dados do pedido diretamente na planilha do Google Sheets do vendedor.

## Contexto essencial
*   **ADR-02 (Armazenamento Zero):** O proxy não deve persistir nenhum dado de comprador em bancos de dados da plataforma. Toda a execução ocorre em memória volátil e os dados são destruídos após o encerramento da função.
*   **ADR-03 (Resiliência):** Se a API do Google Sheets falhar ou estiver fora do ar, o proxy deve retornar sucesso de pagamento ao comprador, mas enviar o payload criptografado de volta para ser armazenado no IndexedDB local do vendedor para sincronização posterior.
*   **Segurança:** As chaves privadas do seller são descriptografadas em memória utilizando a chave derivada do ID do usuário autenticado.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro de Integrações e Desenvolvedor Backend sênior, especialista em arquiteturas serverless e segurança de dados. Seu objetivo é implementar o Serverless Proxy e a integração com o Google Sheets para o CapybaraCart.

### Diretrizes de Implementação:
1. **Estrutura da Serverless Function (`api/checkout`):**
   - Crie uma função serverless stateless (Vercel/Netlify Functions) em Node.js para processar a finalização do checkout.
   - A função deve receber: dados do comprador (nome, e-mail, endereço), dados do pedido (produto, valor, frete), ID do PaymentIntent do Stripe e as credenciais criptografadas do seller.
2. **Descriptografia em Memória:**
   - Recupere a chave de criptografia associada ao seller e descriptografe as chaves privadas (Stripe Secret Key e credenciais do Google Sheets) estritamente em memória volátil.
3. **Confirmação de Pagamento (Stripe):**
   - Utilize o SDK do Stripe para validar o status do `PaymentIntent` recebido. Garanta que a cobrança foi realmente aprovada antes de prosseguir para a gravação dos dados.
4. **Gravação no Google Sheets (Pass-Through):**
   - Utilize a API oficial do Google Sheets (`googleapis` npm package) para conectar à planilha do seller utilizando as credenciais descriptografadas.
   - Insira uma nova linha na planilha contendo: ID do Pedido (gerado no formato `CAPY-XXXX-XXXX`), Data/Hora, Nome do Comprador, E-mail, Endereço de Entrega, Nome do Produto, Valor Pago e Status ("Aguardando Envio").
5. **Tratamento de Falhas e Resiliência:**
   - Se a gravação no Google Sheets falhar (timeout, planilha cheia ou erro de permissão), capture o erro, confirme o sucesso do pagamento para o comprador e retorne o payload do pedido criptografado com uma flag `pending_sync: true` para que o PWA salve no IndexedDB do vendedor.

Gere um código limpo, performático, sem persistência de dados de compradores e com tratamento de erros robusto.
```

## Critério de aceite
1. A Serverless Function `api/checkout` está criada e responde corretamente a requisições POST.
2. O sistema descriptografa as chaves do seller em memória e valida o pagamento no Stripe com sucesso.
3. Os dados do pedido são gravados corretamente como uma nova linha na planilha do Google Sheets do seller.
4. Nenhum dado de comprador é persistido no banco de dados da plataforma.
5. O fluxo de fallback funciona corretamente, retornando o payload de sincronização pendente caso a API do Google Sheets seja simulada como fora do ar.