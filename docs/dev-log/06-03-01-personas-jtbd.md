---
title: "03-01-personas-jtbd"
dyad_chat_id: 18
dyad_app: agente-zero-dyad
created_at: 2026-07-14 16:56 UTC
message_count: 2
models: [gemini-flash-latest]
---

# 03-01-personas-jtbd

### 👤 Usuário · 2026-07-14 16:57 UTC

Você é um UX Researcher e Estrategista de Produto sênior, especialista em mapeamento de comportamento de usuários de nicho e na metodologia Jobs-to-be-Done (JTBD). Seu objetivo é criar o documento de Personas e JTBD completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Público-alvo: Sellers eventuais, colecionadores e hobbistas que expõem seus produtos em redes sociais (Instagram, Pinterest, TikTok).
- Dor: Detestam burocracia de e-commerce tradicional e a exaustão de negociar preços no WhatsApp.
- Filosofia: Simplicidade radical ("Fusca"), modelo BYOK e armazenamento zero de dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/03-01-personas-jtbd.md`. O documento deve conter as seguintes seções detalhadas:

1. **Personas Primárias (Mínimo de 2):**
    - Crie perfis detalhados para os vendedores (ex: "Seu Alberto, o Orquidófilo Hobbista" e "Mariana, a Colecionadora de Brechó Vintage").
    - Inclua: Perfil demográfico/psicográfico, comportamentos, dores com soluções atuais, objetivos e relação com a tecnologia (foco no modelo BYOK).

2. **Personas Secundárias (Mínimo de 1):**
    - Crie o perfil do comprador final (ex: "Lucas, o Caçador de Itens Únicos").
    - Inclua: Motivações de compra, comportamento em redes sociais, dores em checkouts tradicionais e por que ele valoriza um fluxo sem fricção e sem login.

3. **Mapeamento Jobs-to-be-Done (JTBD) Completo:**
    - Para cada persona (primárias e secundárias), estruture o Job principal usando o framework: "Quando [situação], eu quero [ação], para que eu possa [resultado esperado]."
    - Detalhe as três dimensões do Job para cada persona:
      - **Job Funcional:** A tarefa prática que o usuário quer realizar.
      - **Job Emocional (Pessoal):** Como o usuário quer se sentir ao realizar a tarefa.
      - **Job Social:** Como o usuário quer ser percebido pelos outros.

4. **Implicações para o Produto:**
    - Traduza as dores e os Jobs mapeados em diretrizes claras de design e funcionalidade para o CapybaraCart (ex: "Como o Job Emocional do hobbista é evitar o desgaste da barganha, o fluxo de checkout deve ser totalmente autônomo e definitivo").

Gere um documento profundo, empático e diretamente acionável para o time de design e desenvolvimento.

### 🤖 Assistente · 2026-07-14 16:57 UTC

<details>
<summary>🧠 raciocínio interno (colapsado)</summary>

**Defining the Scope**

I'm focusing intently on the initial prompt: "Card 03-01 — Personas / JTBD" for CapybaraCart. I'm taking a close look at the required role, which is that of a UX Researcher and Senior Product Strategist, with expertise in niche user behavior. I aim to fully grasp the scope and intent.


**Outlining the Personas**

I'm now diving deep into creating the specific personas outlined in Section 1 and 2, like "Seu Alberto" and "Lucas". I'm meticulously fleshing out their profiles, ensuring I cover demographics, pain points, and tech habits. I'm focusing on "Seu Alberto," the orchid hobbyist and Mariana, the vintage clothing collector, along with Lucas, the unique item hunter. The JTBD mapping for each user group is my next immediate task.


**Finalizing the Deliverables**

I'm now implementing the constraints. I'm focusing on crafting fully functional, Portuguese-language deliverables devoid of placeholders. I'm using the `＜dyad-write>` tag for the file output and avoiding markdown code blocks. I will be updating the card status in `board/fase-a/03-01-personas-jtbd.md` to "Concluído" to reflect the completion of the task, and writing both required files `entregaveis/03-01-personas-jtbd.md` as well.


**Refining the User Pain Points**

I'm digging deeper into "Decor"'s Instagram-focused business model. I'm noting her aversion to Nuvemshop due to its complexity and her frustration with WhatsApp's manual shipping calculations. I'm also examining Lucas's drive to instantly purchase unique items from Instagram. His aversion to account creation and the WhatsApp back-and-forth adds a crucial layer to the user experience, informing the JTBD framework.

</details>
Vou criar o documento completo de **Personas e JTBD** para o CapybaraCart, detalhando as motivações, dores e comportamentos dos vendedores e compradores de nicho, além de mapear seus Jobs-to-be-Done e traduzi-los em diretrizes de produto acionáveis. Também atualizarei o status do card correspondente no board para "Concluído".

<dyad-write path="entregaveis/03-01-personas-jtbd.md" description="Criando o documento de Personas e JTBD para o CapybaraCart">
# Personas e Jobs-to-be-Done (JTBD) — CapybaraCart

Este documento detalha os perfis comportamentais, as dores e as reais motivações dos usuários do CapybaraCart (vendedores e compradores), estruturados sob a metodologia Jobs-to-be-Done (JTBD). O objetivo é guiar as decisões de design, usabilidade e engenharia de software para garantir que o produto resolva os problemas mapeados de forma empática e precisa.

---

## 1. Personas Primárias (Vendedores)

### Persona 1: Seu Alberto, o Orquidófilo Hobbista
*   **Perfil:** 58 anos, engenheiro civil aposentado, morador de Petrópolis/RJ. Cultiva orquídeas raras em seu estufa caseira há mais de 15 anos.
*   **Comportamento:** Alberto usa o Instagram principalmente para compartilhar fotos de suas florações e trocar dicas com outros colecionadores. Ele não se considera um "comerciante", mas sim um hobbista que ocasionalmente vende mudas excedentes para cobrir os custos de adubos e novos vasos. Ele faz cerca de 3 a 5 vendas por mês.
*   **Dores com Soluções Atuais:**
    *   **Shopify/Nuvemshop:** Ele tentou criar uma loja virtual, mas achou o painel confuso, cheio de termos técnicos de e-commerce (como SKU, SEO, gateways, ERP) e desistiu ao ver que teria de pagar uma mensalidade fixa mesmo nos meses em que não vendesse nada.
    *   **WhatsApp:** Detesta o fluxo de vendas pelo WhatsApp. Ele se sente exausto ao responder dezenas de mensagens de curiosos perguntando "quanto custa?", calculando o frete manualmente nos Correios para cada pessoa e lidando com compradores que tentam barganhar o preço de plantas que levaram anos para crescer.
*   **Objetivos:** Vender suas mudas excedentes de forma digna, rápida e sem estresse, garantindo que o comprador pague o valor justo sem que ele precise ficar "de plantão" respondendo mensagens.
*   **Relação com a Tecnologia (Foco no BYOK):** Alberto é capaz de usar aplicativos comuns (Instagram, YouTube, internet banking), mas tem medo de configurações complexas. O modelo BYOK (Bring Your Own Key) o atrai pelo custo zero de mensalidade, mas ele precisará de um passo a passo visual extremamente didático para copiar e colar suas chaves do Stripe e do Google Sheets sem medo de errar.

### Persona 2: Mariana, a Curadora de Brechó Vintage
*   **Perfil:** 29 anos, designer de moda e criadora de conteúdo, moradora de São Paulo/SP. Garimpa roupas e objetos de decoração vintage e os vende em um perfil do Instagram com 15 mil seguidores.
*   **Comportamento:** Mariana publica "drops" semanais de peças únicas. Ela tira fotos conceituais das peças, posta nos Stories e no feed, e as vendas acontecem de forma extremamente rápida (geralmente em minutos após a publicação). Ela realiza cerca de 20 a 30 vendas por semana, todas de itens de estoque único (peças exclusivas).
*   **Dores com Soluções Atuais:**
    *   **WhatsApp/Direct:** O fluxo de "quem comentar primeiro leva" gera brigas nos comentários e dezenas de directs simultâneos. Ela perde horas organizando a fila de quem mandou mensagem primeiro, enviando dados de Pix, cobrando comprovantes e solicitando dados de endereço. Muitas vezes, compradores reservam a peça e somem, fazendo-a perder a venda para outros interessados.
    *   **E-commerce Tradicional:** Acha exaustivo cadastrar um produto completo em uma plataforma tradicional para vendê-lo em 5 minutos e nunca mais ter aquela peça em estoque. O processo de cadastro tradicional é lento e burocrático para a dinâmica de peças únicas.
*   **Objetivos:** Automatizar o processo de reserva e pagamento de suas peças exclusivas. Quem pagar primeiro leva, de forma transparente, sem que ela precise mediar disputas de directs ou cobrar comprovantes de Pix.
*   **Relação com a Tecnologia (Foco no BYOK):** Mariana é altamente digital, usa ferramentas de edição de imagem e IA generativa para criar seus posts. Ela entende o valor de ter suas próprias chaves de API (Stripe e OpenAI) para manter o controle de suas taxas e dados, valorizando a soberania técnica que o CapybaraCart oferece.

---

## 2. Persona Secundária (Comprador)

### Persona 3: Lucas, o Caçador de Itens Únicos
*   **Perfil:** 32 anos, designer de produto (UX), morador de Curitiba/PR. Consumidor ávido de itens de nicho, plantas exóticas, discos de vinil e roupas vintage.
*   **Comportamento:** Lucas passa bastante tempo no Instagram e Pinterest seguindo colecionadores e criadores de conteúdo. Quando vê um item exclusivo que deseja, ele quer comprar imediatamente, pois sabe que, por serem peças únicas, outra pessoa pode comprar antes dele.
*   **Dores em Checkouts Tradicionais:**
    *   **Fricção de Cadastro:** Detesta quando clica em um link de compra e é obrigado a criar uma conta, inventar uma senha, confirmar o e-mail e preencher dezenas de campos inúteis apenas para comprar um único item de R$ 80. Ele frequentemente abandona carrinhos por causa disso.
    *   **Atendimento Humano Lento:** Odeia ter que clicar em um link que o joga para o WhatsApp para "consultar preço e frete". Ele quer saber o preço na hora, calcular o frete instantaneamente e pagar com cartão de crédito ou Pix de forma autônoma.
*   **Por que valoriza o CapybaraCart:** Lucas valoriza a velocidade e a privacidade. O fluxo do CapybaraCart permite que ele compre o item em segundos, diretamente do navegador do Instagram, sem precisar criar uma conta (armazenamento zero) e com a segurança de que seus dados de pagamento estão sendo processados diretamente pelo Stripe.

---

## 3. Mapeamento Jobs-to-be-Done (JTBD)

### JTBD 1: Seu Alberto (Vendedor Hobbista)
*   **Job Principal:** "Quando eu tenho uma muda de orquídea rara pronta para venda, eu quero disponibilizar um link de checkout direto e autônomo nas minhas redes sociais, para que eu possa realizar a venda de forma segura e sem o desgaste de negociar preços ou calcular frete manualmente no WhatsApp."
*   **Dimensão Funcional:**
    *   Validar o pagamento do comprador de forma automática.
    *   Calcular o frete correto para a região do comprador sem intervenção manual.
    *   Registrar os dados de entrega do comprador de forma organizada para envio.
*   **Dimensão Emocional (Pessoal):**
    *   Sentir-se em paz e sem a ansiedade de precisar responder mensagens de compradores a qualquer hora do dia.
    *   Sentir orgulho de vender seu produto de forma profissional e elegante.
*   **Dimensão Social:**
    *   Ser percebido por outros colecionadores como um hobbista sério, organizado e respeitável, que valoriza o próprio tempo e o valor de suas plantas.

### JTBD 2: Mariana (Curadora de Brechó)
*   **Job Principal:** "Quando eu publico um novo drop de peças vintage exclusivas, eu quero que o primeiro comprador interessado possa pagar e garantir a peça instantaneamente, para que eu possa esgotar meu estoque de forma justa, rápida e sem precisar gerenciar filas de espera ou cobrar Pix atrasados no direct."
*   **Dimensão Funcional:**
    *   Garantir que um item de estoque único (1 unidade) não seja vendido para duas pessoas simultaneamente.
    *   Dar baixa automática no estoque assim que o pagamento for confirmado.
    *   Coletar os dados de envio do comprador e salvá-los automaticamente em sua planilha de controle.
*   **Dimensão Emocional (Pessoal):**
    *   Sentir o alívio de não precisar cobrar clientes ou lidar com desistências de reservas manuais.
    *   Sentir a satisfação de ver seu estoque esgotar de forma fluida e automatizada.
*   **Dimensão Social:**
    *   Ser percebida por seus seguidores como uma marca moderna, ágil, profissional e confiável, que oferece uma experiência de compra de alto nível.

### JTBD 3: Lucas (Comprador de Itens Únicos)
*   **Job Principal:** "Quando eu encontro um item exclusivo que desejo muito nas redes sociais, eu quero poder finalizar a compra em poucos segundos sem precisar criar uma conta ou falar com o vendedor, para que eu possa garantir o produto antes que esgote, com o mínimo de esforço e máxima segurança."
*   **Dimensão Funcional:**
    *   Visualizar o preço total (produto + frete) de forma clara e imediata.
    *   Realizar o pagamento de forma rápida usando cartão de crédito ou Pix.
    *   Não precisar preencher formulários de cadastro de conta ou criar senhas.
*   **Dimensão Emocional (Pessoal):**
    *   Sentir a empolgação e o alívio de ter garantido um item raro e exclusivo rapidamente.
    *   Sentir-se seguro de que seus dados pessoais e financeiros não estão sendo armazenados por plataformas terceiras desconhecidas.
*   **Dimensão Social:**
    *   Poder exibir sua nova aquisição exclusiva para seu círculo social sem ter passado pelo estresse de uma negociação burocrática.

---

## 4. Implicações para o Produto

A partir das dores e dos Jobs mapeados, estabelecemos as seguintes diretrizes de design e funcionalidade para o CapybaraCart:

1.  **Checkout Autônomo e Definitivo (One-Page Checkout):**
    *   *Diretriz:* O fluxo de compra do comprador deve ser contido em uma única página (vitrine + formulário de checkout). Não deve haver carrinho de compras multi-itens complexo no MVP, pois o foco é a compra por impulso de itens únicos vindos de links diretos de redes sociais.
    *   *Ação:* O formulário de checkout deve exigir apenas os dados estritamente necessários para entrega (endereço via CEP) e pagamento (Stripe). Sem campos de "criar senha" ou "cadastre-se".
2.  **Controle de Estoque Rígido para Itens Únicos (Race Condition Prevention):**
    *   *Diretriz:* Como Mariana vende peças únicas, o sistema deve garantir que, se dois compradores tentarem pagar pelo mesmo item ao mesmo tempo, o Stripe processe apenas o pagamento do primeiro e exiba uma mensagem de esgotado instantânea para o segundo, evitando estornos manuais e frustrações.
3.  **Setup BYOK Assistido e Didático:**
    *   *Diretriz:* Para que o Seu Alberto consiga usar a plataforma, a tela de configuração de chaves de API deve ser a mais simples possível.
    *   *Ação:* Incluir micro-tutoriais visuais (GIFs ou imagens anotadas) mostrando exatamente onde clicar no painel do Stripe e do Google Cloud para obter as chaves necessárias. Usar validação assíncrona com feedbacks visuais claros (ícones verdes de sucesso ou vermelhos de erro explicativo).
4.  **Armazenamento Zero e Transparência de Dados:**
    *   *Diretriz:* Para atender à necessidade de privacidade do Lucas e à simplicidade operacional do vendedor, o CapybaraCart deve atuar apenas como um duto de passagem de dados.
    *   *Ação:* Exibir selos claros de "Processado com segurança via Stripe" e "Dados salvos diretamente no seu Google Sheets" para educar e dar segurança a ambas as pontas sobre a soberania dos dados.
5.  **Dashboard "Fusca" Minimalista para o Vendedor:**
    *   *Diretriz:* O painel do vendedor deve focar apenas no essencial: cadastrar produto, copiar link de checkout e acessar a planilha de pedidos. Sem gráficos complexos ou relatórios que sobrecarreguem a usabilidade do Seu Alberto.
</dyad-write>

<dyad-write path="board/fase-a/03-01-personas-jtbd.md" description="Atualizando o status do Card 03-01 para Concluído">
# Card 03-01 — Personas / JTBD

**Status:** Concluído
**Depende de:** 02-prd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: personas primárias + secundárias, JTBD completo (funcional, emocional, social) por persona.

## Objetivo
Mapear detalhadamente as personas primárias e secundárias do CapybaraCart e seus respectivos Jobs-to-be-Done (JTBD) nos aspectos funcionais, emocionais e sociais, garantindo que o produto atenda às reais motivações, dores e comportamentos dos hobbistas, colecionadores e seus compradores.

## Contexto essencial
*   **Público-alvo:** Sellers eventuais, colecionadores e hobbistas (ex: criadores de orquídeas raras, colecionadores de itens vintage) que usam redes sociais para expor suas paixões.
*   **Dores principais:** Detestam a burocracia de setups de e-commerce tradicionais (ERPs, cadastros complexos) e a exaustão mental da barganha direta e negociação manual no WhatsApp.
*   **Comportamento:** Sentem orgulho de suas coleções/hobbies, não possuem ímpeto comercial agressivo, valorizam a privacidade e a simplicidade (BYOK, armazenamento zero).
*   **Compradores:** Pessoas que buscam itens únicos e querem um fluxo de compra rápido, direto e sem fricção (sem necessidade de criar contas ou fazer logins).

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um UX Researcher e Estrategista de Produto sênior, especialista em mapeamento de comportamento de usuários de nicho e na metodologia Jobs-to-be-Done (JTBD). Seu objetivo é criar o documento de Personas e JTBD completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Público-alvo: Sellers eventuais, colecionadores e hobbistas que expõem seus produtos em redes sociais (Instagram, Pinterest, TikTok).
- Dor: Detestam burocracia de e-commerce tradicional e a exaustão de negociar preços no WhatsApp.
- Filosofia: Simplicidade radical ("Fusca"), modelo BYOK e armazenamento zero de dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/03-01-personas-jtbd.md`. O documento deve conter as seguintes seções detalhadas:

1. **Personas Primárias (Mínimo de 2):**
   - Crie perfis detalhados para os vendedores (ex: "Seu Alberto, o Orquidófilo Hobbista" e "Mariana, a Colecionadora de Brechó Vintage").
   - Inclua: Perfil demográfico/psicográfico, comportamentos, dores com soluções atuais, objetivos e relação com a tecnologia (foco no modelo BYOK).

2. **Personas Secundárias (Mínimo de 1):**
   - Crie o perfil do comprador final (ex: "Lucas, o Caçador de Itens Únicos").
   - Inclua: Motivações de compra, comportamento em redes sociais, dores em checkouts tradicionais e por que ele valoriza um fluxo sem fricção e sem login.

3. **Mapeamento Jobs-to-be-Done (JTBD) Completo:**
   - Para cada persona (primárias e secundárias), estruture o Job principal usando o framework: "Quando [situação], eu quero [ação], para que eu possa [resultado esperado]."
   - Detalhe as três dimensões do Job para cada persona:
     - **Job Funcional:** A tarefa prática que o usuário quer realizar.
     - **Job Emocional (Pessoal):** Como o usuário quer se sentir ao realizar a tarefa.
     - **Job Social:** Como o usuário quer ser percebido pelos outros.

4. **Implicações para o Produto:**
   - Traduza as dores e os Jobs mapeados in diretrizes claras de design e funcionalidade para o CapybaraCart (ex: "Como o Job Emocional do hobbista é evitar o desgaste da barganha, o fluxo de checkout deve ser totalmente autônomo e definitivo").

Gere um documento profundo, empático e diretamente acionável para o time de design e desenvolvimento.
```

## Critério de conclusão
1. O arquivo `entregaveis/03-01-personas-jtbd.md` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento apresenta pelo menos 2 personas primárias (vendedores) e 1 persona secundária (comprador).
3. O mapeamento JTBD detalha claramente as dimensões funcional, emocional e social para cada persona.
4. As implicações para o produto estão diretamente conectadas com a filosofia de simplicidade radical e BYOK do CapybaraCart.
</dyad-write>

<dyad-chat-summary>Criando o documento de Personas e JTBD para o CapybaraCart</dyad-chat-summary>

Criei o documento completo de Personas e JTBD em `entregaveis/03-01-personas-jtbd.md` detalhando os perfis de vendedores e compradores de nicho, seus Jobs-to-be-Done e as implicações diretas para o produto, além de atualizar o status do card correspondente para "Concluído".
