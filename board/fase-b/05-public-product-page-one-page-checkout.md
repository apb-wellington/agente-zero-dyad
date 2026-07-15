# Card 05 — Public Product Page & One-Page Checkout

**Status:** A fazer
**Depende de:** 04-product-creation-ai-assistant

## Objetivo
Construir a página pública do produto (`/p/:id`) otimizada para dispositivos móveis, integrando a vitrine de exibição com um formulário de checkout de passo único (One-Page Checkout) utilizando o Stripe Elements para pagamentos seguros e sem fricção de login.

## Contexto essencial
*   **Filosofia "Fusca" (Frictionless):** O comprador não precisa criar conta ou fazer login. O fluxo de compra deve ser concluído em uma única tela de rolagem contínua.
*   **Stripe Elements:** Integração direta com o SDK do Stripe para renderizar os campos de cartão de crédito e Pix de forma segura e em conformidade com o PCI-DSS.
*   **Cálculo de Frete:** Integração com a API do Mercado Envios (ou similar) para calcular o frete dinamicamente a partir do CEP do comprador.
*   **Performance:** Carregamento instantâneo (FCP < 1.2s) para evitar abandono de tráfego vindo de redes sociais.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro Frontend Sênior especialista em Checkout, Conversão e Integração com Gateways de Pagamento. Seu objetivo é construir a página pública do produto e o checkout de passo único (`/p/:id`) do CapybaraCart.

### Diretrizes de Implementação:
1. **Design Mobile-First e Responsivo:**
   - Renderize a vitrine do produto no topo (imagens, título, descrição persuasiva e preço destacado).
   - Logo abaixo, exiba o formulário de checkout unificado dividido em seções visuais claras:
     - *1. Entrega:* Campo de CEP com cálculo de frete assíncrono (Mercado Envios) e campos de endereço autocompletados.
     - *2. Identificação:* Nome completo e e-mail (apenas para envio do código de rastreio).
     - *3. Pagamento:* Formulário seguro do Stripe Elements (suportando Cartão de Crédito e Pix).
2. **Integração com Stripe Elements:**
   - Carregue o SDK do Stripe utilizando a chave pública (`Publishable Key`) do seller (recuperada do banco de metadados).
   - Monte o componente `Elements` e renderize os campos de pagamento de forma segura.
3. **Processamento do Checkout:**
   - Ao clicar em "Confirmar e Pagar Agora", desabilite o botão e exiba o loader de carregamento.
   - Envie o payload de checkout (dados do comprador, frete selecionado, itens e as chaves criptografadas do seller) para o Serverless Proxy para processar a transação.
4. **Tratamento de Erros e Sucesso:**
   - Se o pagamento for aprovado, redirecione o comprador para a tela de sucesso exibindo o resumo do pedido e o ID único da transação.
   - Se falhar, exiba mensagens de erro amigáveis e claras (ex: saldo insuficiente, cartão recusado) sem expor logs técnicos.

Gere um código limpo, performático, com excelente usabilidade e acessibilidade WCAG AA.
```

## Critério de aceite
1. A rota pública `/p/:id` renderiza as informações do produto corretamente a partir do ID.
2. O formulário de checkout é exibido na mesma página de forma responsiva e sem exigência de login.
3. O campo de CEP calcula o frete dinamicamente e atualiza o valor total do pedido.
4. O Stripe Elements é carregado e renderizado com sucesso utilizando as credenciais do seller.
5. O clique em pagar envia o payload correto para o proxy e lida adequadamente com as respostas de sucesso ou erro.