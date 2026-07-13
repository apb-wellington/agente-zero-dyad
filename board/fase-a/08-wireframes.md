# Card 08 — Wireframes

**Status:** A fazer
**Depende de:** 02-prd, 03-02-journey-map
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: wireframes de baixa fidelidade das telas principais (fluxo crítico), telas secundárias e estados alternativos (vazio, erro, carregando).

## Objetivo
Mapear a estrutura visual, a hierarquia de informação e o fluxo de navegação das telas do CapybaraCart (Dashboard do Seller, Setup BYOK, Cadastro de Produto, Vitrine do Comprador e Checkout), incluindo estados alternativos (vazio, erro, carregando) para garantir uma experiência fluida, responsiva e sem fricção.

## Contexto essencial
*   **Filosofia Fusca:** Interface limpa, direta e focada na ação. Sem elementos decorativos desnecessários.
*   **Fluxo do Seller:**
    1. *Setup BYOK:* Tela para inserção e validação das chaves de API (Stripe, Google Sheets, OpenAI).
    2. *Dashboard:* Visão geral minimalista com lista de produtos cadastrados, links de compartilhamento e atalho para a planilha de pedidos.
    3. *Cadastro de Produto:* Formulário assistido por IA (chat lateral ou assistente integrado) para gerar títulos, descrições e tratar fotos.
*   **Fluxo do Comprador:**
    1. *Vitrine PWA:* Página do produto limpa, com fotos, descrição persuasiva, preço e botão de checkout direto.
    2. *Checkout:* Formulário de entrega (Mercado Envios) e pagamento (Stripe) integrado na mesma página, sem necessidade de login.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um UX/UI Designer sênior com forte foco em usabilidade, conversão de checkout e design de interfaces minimalistas (PWAs). Seu objetivo é criar o documento de Wireframes completo para o CapybaraCart.

Como este é um projeto doc-as-code, você deve representar os wireframes de forma textual estruturada (usando blocos de código, tabelas ou ASCII art para representar o layout das telas) e detalhar a hierarquia de informação de cada elemento.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade radical, foco na conversão, sem login para compradores).
- Fluxo do Seller: Setup BYOK, Dashboard e Cadastro de Produto com IA.
- Fluxo do Comprador: Vitrine de Produto e Checkout de Passo Único (One-page Checkout).

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/08-wireframes.md`. O documento deve conter as seguintes seções detalhadas:

1. **Arquitetura de Informação e Mapa do Site (Sitemap):**
   - Mapeamento simples de todas as rotas do Seller e do Comprador.

2. **Wireframes das Telas do Seller (com representação visual em texto/ASCII):**
   - **Tela de Setup BYOK:** Campos para chaves de API, status de validação de cada chave e botão de salvar.
   - **Tela de Dashboard (Estado Populado):** Lista de produtos, links de checkout rápidos, botão de cadastrar novo produto e link para a planilha do Google Sheets.
   - **Tela de Cadastro de Produto (com Assistente de IA):** Formulário de produto (nome, preço, fotos) lado a lado com o painel interativo do assistente de IA.

3. **Wireframes das Telas do Comprador (com representação visual em texto/ASCII):**
   - **Tela da Vitrine do Produto:** Imagem do produto, título, descrição persuasiva, preço destacado e botão "Comprar Agora".
   - **Tela de Checkout de Passo Único:** Formulário de entrega (Mercado Envios) e formulário de pagamento (Stripe) integrados na mesma tela, com resumo do pedido e botão de confirmação.

4. **Estados Alternativos (Mapeamento Detalhado):**
   - **Estado Vazio (Empty State):** Dashboard do seller sem nenhum produto cadastrado (com call-to-action claro para cadastrar o primeiro).
   - **Estado de Carregamento (Loading State):** Como o sistema exibe skeletons ou loaders durante a validação de chaves de API ou processamento de pagamento.
   - **Estado de Erro (Error State):** Como o sistema exibe erros de chaves inválidas no setup ou falhas de pagamento no checkout.

Gere um documento de design extremamente claro, que permita a qualquer desenvolvedor frontend construir a interface exatamente como planejada.
```

## Critério de conclusão
1. O arquivo `entregaveis/08-wireframes.md` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento inclui representações visuais textuais (ASCII art, tabelas ou blocos estruturados) para todas as telas principais do seller e do comprador.
3. Os estados alternativos (vazio, carregando e erro) estão detalhados visual e funcionalmente.
4. O design proposto reflete a "Filosofia Fusca" de simplicidade radical e foco em conversão.