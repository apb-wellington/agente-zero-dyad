# Card 03-02 — Journey Map

**Status:** A fazer
**Depende de:** 03-01-personas-jtbd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: jornada completa com pontos de dor, emoções, e oportunidades por etapa.

## Objetivo
Mapear a jornada ponta a ponta tanto do vendedor (desde o setup BYOK até a entrega do produto) quanto do comprador (da descoberta nas redes sociais ao recebimento do item), identificando pontos de dor, estados emocionais e oportunidades de otimização em cada etapa.

## Contexto essencial
*   **Jornada do Vendedor:**
    1. *Setup:* Cadastro de chaves de API (Stripe, Google Sheets, OpenAI/Anthropic).
    2. *Cadastro:* Criação de produto assistida por IA (título, descrição, tratamento de fotos).
    3. *Divulgação:* Geração de posts e publicação/linkagem nas redes sociais.
    4. *Faturamento:* Recebimento de notificações de venda e acompanhamento de pedidos via Google Sheets.
*   **Jornada do Comprador:**
    1. *Descoberta:* Visualização do post ou link na rede social.
    2. *Navegação:* Acesso à vitrine/checkout PWA ultra-rápido e sem login.
    3. *Checkout:* Preenchimento de dados de entrega (Mercado Envios) e pagamento (Stripe).
    4. *Pós-venda:* Recebimento de confirmação e rastreio.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um UX Researcher e Service Designer sênior, especialista em mapeamento de jornadas de usuários e design de serviços digitais. Seu objetivo é criar o documento de Journey Map completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade radical, modularidade extrema) e BYOK (Bring Your Own Key).
- Fluxo de dados: Armazenamento zero de dados de compradores localmente (vão direto para o Google Sheets do seller).
- Personas: Vendedores hobbistas/colecionadores (Alberto, Mariana) e Compradores de itens únicos (Lucas).

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/03-02-journey-map.md`. O documento deve conter as seguintes seções detalhadas:

1. **Jornada do Vendedor (Alberto/Mariana):**
   - Mapeie as etapas: Setup Inicial (BYOK) -> Cadastro de Produto com IA -> Publicação Social -> Gestão de Pedidos (Google Sheets).
   - Para cada etapa, detalhe:
     - **Ações do Usuário:** O que ele faz concretamente.
     - **Pontos de Contato:** Onde ele interage com o sistema.
     - **Pensamentos e Emoções:** O que ele está pensando e sentindo (ex: ansiedade no setup de chaves, orgulho ao ver o produto cadastrado).
     - **Pontos de Dor:** Barreiras e dificuldades (ex: complexidade de achar a chave do Stripe).
     - **Oportunidades:** Como o CapybaraCart pode mitigar a dor (ex: tutoriais visuais ultra-simples).

2. **Jornada do Comprador (Lucas):**
   - Mapeie as etapas: Descoberta (Rede Social) -> Entrada na Vitrine PWA -> Checkout (Stripe/Mercado Envios) -> Confirmação e Pós-compra.
   - Para cada etapa, detalhe:
     - **Ações do Usuário:** O que ele faz concretamente.
     - **Pontos de Contato:** Onde ele interage com o sistema.
     - **Pensamentos e Emoções:** O que ele está pensando e sentindo (ex: pressa para não perder o item único, alívio por não precisar criar conta).
     - **Pontos de Dor:** Barreiras e dificuldades (ex: medo de golpe por ser uma plataforma desconhecida).
     - **Oportunidades:** Como o CapybaraCart pode mitigar a dor (ex: selos de segurança do Stripe visíveis, carregamento instantâneo).

3. **Pontos de Sincronização e Handoff:**
   - Explique como as duas jornadas se cruzam (ex: o momento em que o comprador finaliza o pagamento e a linha é inserida instantaneamente na planilha do vendedor).

Gere um documento profundo, empático e diretamente acionável para o time de design e desenvolvimento.
```

## Critério de conclusão
1. O arquivo `entregaveis/03-02-journey-map.md` foi criado com todas as 3 seções especificadas no prompt de execução.
2. O documento detalha as jornadas completas do vendedor e do comprador, cobrindo ações, pontos de contato, emoções, dores e oportunidades.
3. O mapeamento aborda especificamente as particularidades do modelo BYOK e do armazenamento zero de dados.
4. As oportunidades identificadas estão alinhadas com a filosofia de simplicidade radical do produto.