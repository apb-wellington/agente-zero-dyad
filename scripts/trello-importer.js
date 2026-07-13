// ==============================================================================
// 1. CREDENCIAIS (PREENCHA AQUI)
// ==============================================================================
// Pegue sua chave e token em: https://trello.com/app-key
const TRELLO_API_KEY = 'xxxx';
const TRELLO_TOKEN = 'xxxx';
const BOARD_NAME = 'CapybaraCart - Fase A (Descoberta)';

// ==============================================================================
// 2. DADOS DO PROJETO (CONTEÚDO INTEGRAL DOS CARDS DA FASE A)
// ==============================================================================
const RAW_MARKDOWN = `
# Card 01 — Product Vision

**Status:** A fazer
**Depende de:** Nenhum
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: página completa — visão + público-alvo + diferencial + métricas de sucesso macro + contexto de mercado/concorrência + riscos estratégicos ligados à visão.

## Objetivo
Consolidar a visão estratégica do CapybaraCart, alinhando o propósito de simplicidade radical ("Filosofia Fusca") e o modelo BYOK com o posicionamento de mercado ideal para atrair hobbistas e colecionadores, mapeando os riscos estratégicos e as métricas de sucesso macro.

## Contexto essencial
*   **O Produto:** CapybaraCart, um checkout e vitrine PWA ultra-simples.
*   **Filosofia:** "Fusca" (bruto, robusto, confiável, simplicidade radical) e BYOK (Bring Your Own Key - chaves de API do próprio seller para Stripe, Google Sheets, OpenAI/Anthropic).
*   **Público-alvo:** Sellers eventuais, colecionadores e hobbistas (ex: criadores de orquídeas raras) que vendem em redes sociais (Instagram, Pinterest, TikTok) e detestam burocracia de e-commerce tradicional ou barganha direta no WhatsApp.
*   **Diferencial:** Fluxo de compra frictionless, sem login para compradores, armazenamento zero de dados de clientes na plataforma (dados vão direto para o Google Sheets do seller).
*   **Crescimento:** Orgânico e viral (growth loop) através de marcas d'água e tags do CapybaraCart nas imagens e posts gerados pela IA.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Diretor de Produto (CPO) experiente em estratégias de Go-To-Market para produtos de nicho e SaaS bootstrapped. Seu objetivo é criar o documento de Product Vision para o CapybaraCart, um checkout e vitrine PWA ultra-simples focado em hobbistas e colecionadores.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser uma página completa, escrita em português do Brasil, extremamente profissional, inspiradora e estratégica.

### Contexto Essencial do CapybaraCart:
- Proposta de valor: Checkout e vitrine PWA ultra-simples para sellers eventuais venderem nas redes sociais sem a complexidade de e-commerce tradicional e sem a barganha do WhatsApp.
- Filosofia "Fusca": Simplicidade radical, robustez, modularidade extrema.
- Modelo BYOK (Bring Your Own Key): O usuário traz suas próprias chaves de API (Stripe, Google Sheets, OpenAI/Anthropic).
- Armazenamento Zero: Nenhum dado de comprador é salvo nos servidores do CapybaraCart. Os dados de vendas vão direto para o Google Sheets do seller.
- Público-alvo: Colecionadores, hobbistas e vendedores eventuais que usam Instagram, Pinterest e TikTok.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/01-product-vision.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Declaração de Visão (The Elevator Pitch):**
   - Use o framework clássico: "Para [público-alvo], que [declaração da necessidade/dor], o [nome do produto] é um [categoria do produto] que [benefício chave/razão convincente para comprar]. Diferente de [alternativas de mercado], nós [declaração de diferenciação primária]."

2. **Público-Alvo Detalhado:**
   - Quem são esses hobbistas e colecionadores? Por que eles rejeitam Shopify, WooCommerce ou a venda direta no WhatsApp?

3. **Diferenciais Competitivos (A Filosofia Fusca & BYOK):**
   - Explique como o modelo BYOK e a política de "armazenamento zero" se tornam vantagens competitivas de privacidade e custo.
   - Explique o conceito de "simplicidade bruta" como diferencial de experiência do usuário.

4. **Métricas de Sucesso Macro:**
   - Defina 3 a 4 métricas de sucesso de negócio e produto para o MVP (ex: taxa de ativação de chaves de API na primeira hora, taxa de conversão de checkout, coeficiente de crescimento viral do growth loop).

5. **Contexto de Mercado e Concorrência:**
   - Como o CapybaraCart se posiciona em relação aos gigantes do e-commerce (Shopify, Nuvemshop) e ferramentas de link de pagamento (Mercado Pago, Stripe Payment Links)? Mostre que o CapybaraCart ocupa um espaço único de "vitrine + checkout sem fricção".

6. **Riscos Estratégicos:**
   - Mapeie os riscos estratégicos ligados à visão (ex: barreira técnica do modelo BYOK para usuários leigos, dependência das políticas de API das redes sociais e do Google Sheets, risco de churn se o usuário achar o setup de chaves complexo).

Gere um texto fluido, maduro e sem clichês corporativos vazios. Foque na clareza e na viabilidade prática da visão.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/01-product-vision.md\` foi criado com todas as 6 seções especificadas no prompt de execução.
2. O documento reflete com precisão a "Filosofia Fusca", o modelo BYOK e a política de armazenamento zero de dados.
3. O tom do documento é estratégico, profissional e focado no público de hobbistas/colecionadores.
4. Não há placeholders ou seções incompletas.

# Card 02 — PRD (Product Requirement Document)

**Status:** A fazer
**Depende de:** 01-product-vision
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: problema, solução, escopo do MVP, fora de escopo, métrica de sucesso, user stories principais, requisitos funcionais numerados, dependências, requisitos não funcionais integrados, matriz de priorização e cenários de erro/exceção mapeados.

## Objetivo
Definir detalhadamente os requisitos funcionais e não funcionais do CapybaraCart, mapeando o escopo do MVP, as histórias de usuário, as dependências técnicas, a matriz de priorização e os cenários de erro/exceção para guiar o desenvolvimento sem ambiguidades.

## Contexto essencial
*   **Problema:** Sellers eventuais e colecionadores precisam de um fluxo de checkout simples, sem a burocracia de e-commerces tradicionais e sem o desgaste de negociar manualmente no WhatsApp.
*   **Solução:** Vitrine e checkout PWA ultra-simples, operando sob o modelo BYOK (Stripe, Google Sheets, OpenAI/Anthropic, APIs de Redes Sociais) e armazenamento zero de dados de compradores localmente.
*   **Escopo do MVP:** Setup BYOK, cadastro de produtos assistido por IA, assistente de fotos, assistente de posicionamento de marca, geração de vitrine/checkout PWA, integração com Google Sheets para pedidos, integração com Stripe para pagamentos, integração com Mercado Envios para frete, e assistente de publicação social.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Product Manager (PM) sênior com forte background técnico, especializado em metodologias ágeis e especificação de produtos SaaS e PWAs. Seu objetivo é criar o PRD (Product Requirement Document) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser um PRD extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade radical, modularidade extrema) e BYOK (Bring Your Own Key).
- Integrações: Stripe (pagamento), Mercado Envios (frete), Google Sheets (banco de dados de clientes), APIs de LLM (OpenAI/Anthropic) e APIs de redes sociais (Instagram, Pinterest, TikTok).
- Armazenamento Zero: Dados de compradores vão direto para o Google Sheets do seller.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/02-prd.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Introdução e Objetivos:**
   - Problema detalhado, Solução proposta e Objetivos de Negócio/Produto.

2. **Escopo do MVP (In-Scope vs. Out-of-Scope):**
   - O que entra obrigatoriamente no MVP (Setup BYOK, Vitrine PWA, Checkout, Integrações essenciais, Assistentes de IA).
   - O que está explicitamente fora do escopo (Área de membros para compradores, painel de analytics complexo, banco de dados próprio para dados de compradores, etc.).

3. **User Stories Principais (Mínimo de 6):**
   - No formato clássico: "Como [tipo de usuário], eu quero [ação] para que [benefício/valor]."
   - Cada história deve ter um identificador único (ex: US-01, US-02).

4. **Requisitos Funcionais Numerados (RFs):**
   - Mapeie todos os requisitos funcionais necessários para atender às User Stories (ex: RF-01: Cadastro de chaves de API, RF-02: Geração de descrição de produto por IA, RF-03: Sincronização com Google Sheets).
   - Indique a prioridade (Alta, Média, Baixa) e as dependências entre os requisitos.

5. **Requisitos Não Funcionais Integrados (RNFs):**
   - Segurança (criptografia local de chaves de API), Performance (tempo de carregamento do PWA), Confiabilidade (tratamento de falhas de API de terceiros) e Privacidade (armazenamento zero de dados de compradores).

6. **Matriz de Priorização (MoSCoW):**
   - Classifique os requisitos funcionais em Must Have, Should Have, Could Have e Won't Have para o MVP.

7. **Cenários de Erro e Exceção Mapeados:**
   - O que acontece se a chave de API do Stripe do seller for inválida?
   - O que acontece se a planilha do Google Sheets estiver inacessível ou cheia?
   - O que acontece se a API de LLM falhar ou retornar timeout durante a geração de descrição?
   - Mapeie as mensagens de erro amigáveis e os fluxos de fallback para cada cenário.

Gere um documento técnico robusto, claro e diretamente acionável por engenheiros de software.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/02-prd.md\` foi criado com todas as 7 seções especificadas no prompt de execução.
2. O PRD detalha as histórias de usuário, requisitos funcionais e não funcionais de forma clara e numerada.
3. Os cenários de erro para falhas de API (Stripe, Google Sheets, LLM) estão mapeados com fluxos de fallback claros.
4. A matriz MoSCoW está presente e alinhada com a filosofia de simplicidade radical do MVP.

# Card 03-01 — Personas / JTBD

**Status:** A fazer
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

\`\`\`markdown
Você é um UX Researcher e Estrategista de Produto sênior, especialista em mapeamento de comportamento de usuários de nicho e na metodologia Jobs-to-be-Done (JTBD). Seu objetivo é criar o documento de Personas e JTBD completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Público-alvo: Sellers eventuais, colecionadores e hobbistas que expõem seus produtos em redes sociais (Instagram, Pinterest, TikTok).
- Dor: Detestam burocracia de e-commerce tradicional e a exaustão de negociar preços no WhatsApp.
- Filosofia: Simplicidade radical ("Fusca"), modelo BYOK e armazenamento zero de dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/03-01-personas-jtbd.md\`. O documento deve conter as seguintes seções detalhadas:

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
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/03-01-personas-jtbd.md\` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento apresenta pelo menos 2 personas primárias (vendedores) e 1 persona secundária (comprador).
3. O mapeamento JTBD detalha claramente as dimensões funcional, emocional e social para cada persona.
4. As implicações para o produto estão diretamente conectadas com a filosofia de simplicidade radical e BYOK do CapybaraCart.

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

\`\`\`markdown
Você é um UX Researcher e Service Designer sênior, especialista em mapeamento de jornadas de usuários e design de serviços digitais. Seu objetivo é criar o documento de Journey Map completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade radical, modularidade extrema) e BYOK (Bring Your Own Key).
- Fluxo de dados: Armazenamento zero de dados de compradores localmente (vão direto para o Google Sheets do seller).
- Personas: Vendedores hobbistas/colecionadores (Alberto, Mariana) e Compradores de itens únicos (Lucas).

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/03-02-journey-map.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Jornada do Vendedor (Alberto/Mariana):**
   - Mapeie as etapas: Setup Inicial (BYOK) -> Cadastro de Produto com IA -> Publicação Social -> Gestão de Pedidos (Google Sheets).
   - Para cada etapa, detalhe:
     - **Ações do Usuário:** O que ele faz concretamente.
     - **Pontos de Contato:** Onde ele interage com o system.
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
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/03-02-journey-map.md\` foi criado com todas as 3 seções especificadas no prompt de execução.
2. O documento detalha as jornadas completas do vendedor e do comprador, cobrindo ações, pontos de contato, emoções, dores e oportunidades.
3. O mapeamento aborda especificamente as particularidades do modelo BYOK e do armazenamento zero de dados.
4. As oportunidades identificadas estão alinhadas com a filosofia de simplicidade radical do produto.

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

\`\`\`markdown
Você é um Arquiteto de Software Principal e Tech Lead sênior, especialista em arquiteturas serverless, PWAs e integrações descentralizadas (BYOK). Seu objetivo é criar o documento de Solution Architecture completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Stack sugerido: Frontend PWA (React/Vite ou similar) estático, hospedado em CDN (Vercel/Netlify), com Serverless Functions/Edge Functions apenas para proxy de APIs (evitando expor chaves de API no client-side quando necessário, ou gerenciando o fluxo de autenticação de forma segura).
- Modelo BYOK: Chaves do seller (Stripe, Google Sheets, OpenAI/Anthropic) salvas de forma segura (criptografadas no localStorage do seller ou passadas via headers seguros).
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/04-solution-architecture.md\`. O documento deve conter as seguintes seções detalhadas:

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
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/04-solution-architecture.md\` foi criado com todas as 5 seções especificadas no prompt de execução.
2. O documento inclui um diagrama Mermaid.js válido representando a arquitetura do sistema.
3. O fluxo de dados explica claramente como a segurança das chaves de API (BYOK) e a política de armazenamento zero são mantidas.
4. As estratégias de resiliência para falhas de APIs de terceiros estão detalhadas e alinhadas com a "Filosofia Fusca".

# Card 05 — ADRs (Architecture Decision Records)

**Status:** A fazer
**Depende de:** 04-solution-architecture
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: ADR completo (contexto, decisão, alternativas consideradas, consequências) para cada decisão arquitetural relevante.

## Objetivo
Registrar formalmente as decisões arquiteturais mais críticas do CapybaraCart, garantindo rastreabilidade, justificativa técnica e alinhamento com a "Filosofia Fusca" e o modelo BYOK, mapeando as alternativas consideradas e as consequências de cada escolha.

## Contexto essencial
*   **Modelo BYOK:** O seller traz suas próprias chaves de API. Precisamos decidir onde e como armazenar essas chaves com segurança máxima sem um banco de dados centralizado.
*   **Armazenamento Zero:** Nenhum dado de comprador é retido nos servidores da plataforma. Precisamos formalizar como os dados de transação fluem diretamente para o Google Sheets do seller.
*   **Serverless Proxy vs. Client-side Direto:** Decidir se as chamadas de API (Stripe, OpenAI, Google Sheets) serão feitas diretamente pelo navegador do comprador/seller ou se passarão por um proxy serverless leve para evitar problemas de CORS e proteger chaves em trânsito.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Arquiteto de Software Principal com vasta experiência em sistemas distribuídos, segurança de dados e arquiteturas descentralizadas. Seu objetivo é criar o documento de ADRs (Architecture Decision Records) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Filosofia: "Fusca" (simplicidade, robustez, modularidade).
- Modelo BYOK (Bring Your Own Key) e Armazenamento Zero de dados de compradores.
- Necessidade de garantir segurança das chaves de API do seller e viabilidade técnica de integrações sem banco de dados central.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/05-adrs.md\`. O documento deve conter pelo menos 3 ADRs completos, estruturados no formato padrão de mercado:

1. **ADR-01: Armazenamento Seguro de Chaves de API do Seller (BYOK)**
   - **Status:** Aprovado
   - **Contexto:** Onde e como guardar as chaves de API (Stripe, Google Sheets, OpenAI) do seller de forma que ele não precise digitá-las a cada sessão, garantindo segurança contra ataques XSS/CSRF.
   - **Decisão:** [Defina a decisão técnica, ex: Criptografia local no client-side (AES-GCM) com chave derivada de senha do seller, ou armazenamento em cookies HttpOnly via proxy serverless].
   - **Alternativas Consideradas:** Banco de dados centralizado (rejeitado por violar o armazenamento zero e aumentar custo/risco); Armazenamento em texto puro no localStorage (rejeitado por risco de XSS).
   - **Consequências:** [Prós e contras da decisão tomada].

2. **ADR-02: Fluxo de Dados de Compradores (Armazenamento Zero)**
   - **Status:** Aprovado
   - **Contexto:** Como processar o checkout e enviar os dados de entrega e pagamento para o Google Sheets do seller sem reter nenhuma informação nos servidores do CapybaraCart.
   - **Decisão:** [Defina a decisão técnica, ex: Envio direto via Serverless Function que atua como pipeline de passagem (pass-through) e grava diretamente na API do Google Sheets usando a chave do seller].
   - **Alternativas Consideradas:** Armazenamento temporário em banco de dados Redis com expiração (rejeitado por violar a premissa de armazenamento zero); Envio direto do client-side do comprador (rejeitado por expor a chave do Google Sheets do seller ao comprador).
   - **Consequências:** [Prós e contras da decisão tomada].

3. **ADR-03: Uso de Serverless Proxy para Chamadas de API de Terceiros**
   - **Status:** Aprovado
   - **Contexto:** Como realizar chamadas seguras para as APIs do Stripe, Google Sheets e OpenAI sem expor as chaves de API do seller no frontend do comprador e contornando restrições de CORS.
   - **Decisão:** [Defina a decisão técnica, ex: Criação de um proxy serverless leve (Edge Functions) que recebe a chave criptografada do client, descriptografa em memória, faz a requisição ao terceiro e retorna o resultado].
   - **Alternativas Consideradas:** Chamadas diretas do client-side (rejeitado por expor chaves de API e limitações de CORS); Servidor monolítico tradicional (rejeitado por custo e complexidade de escala).
   - **Consequências:** [Prós e contras da decisão tomada].

Gere um documento técnico maduro, com justificativas arquiteturais sólidas e profundas.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/05-adrs.md\` foi criado com os 3 ADRs especificados no prompt de execução.
2. Cada ADR segue rigorosamente a estrutura: Título, Status, Contexto, Decisão, Alternativas Consideradas e Consequências.
3. As decisões técnicas estão perfeitamente alinhadas com a "Filosofia Fusca", o modelo BYOK e a política de armazenamento zero.
4. O documento demonstra maturidade técnica e resolve os principais desafios de segurança e integração do projeto.

# Card 06 — AI/LLM System Design Doc

**Status:** A fazer
**Depende de:** 02-prd, 04-solution-architecture
**Tier do projeto:** T3 Robusto (Profundidade: Criticidade 1)
**Profundidade definida:** Criticidade 1: descrição do papel do LLM no produto + failure modes básicos esperados.

## Objetivo
Mapear e documentar o papel dos modelos de linguagem (LLMs) no CapybaraCart, detalhando os assistentes inteligentes (Setup, Fotos, Cadastro e Publicação) e prevendo os modos de falha básicos para garantir uma experiência robusta e segura sob o modelo BYOK.

## Contexto essencial
*   **Modelo BYOK:** O usuário fornece suas próprias chaves de API (OpenAI/Anthropic). O sistema não consome créditos centralizados.
*   **Os 4 Assistentes de IA:**
    1. *Setup/Posicionamento:* Conduz um briefing interativo para definir o tom de voz e posicionamento da marca do seller.
    2. *Fotos:* Auxilia no tratamento e estilização de imagens (instruções de crop, tags, etc.) sem alterar o produto real.
    3. *Cadastro de Produtos:* Entrevista o seller para gerar títulos e descrições persuasivas (foco no 80/20 do marketing), sem alucinar dados "hard" (preço, estoque, características físicas).
    4. *Publicação Social:* Cria posts otimizados para Instagram, Pinterest e TikTok.
*   **Mitigação de Erros:** Como o seller revisa tudo antes de publicar, o impacto de erros de IA é baixo (Criticidade 1), mas o sistema precisa lidar elegantemente com chaves inválidas, timeouts e rate limits.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Engenheiro de Prompt Principal e Arquiteto de Soluções de IA sênior. Seu objetivo é criar o documento de AI/LLM System Design Doc para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser detalhado, focado na viabilidade prática do modelo BYOK, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Modelo BYOK: O seller insere sua própria chave de API (OpenAI ou Anthropic).
- Papel da IA: Assistentes de Setup, Fotos, Cadastro de Produtos e Publicação Social.
- Criticidade do Erro: Baixa (Criticidade 1), pois o seller revisa todas as saídas antes de qualquer publicação ou salvamento definitivo.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/06-ai-llm-system-design.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Descrição do Papel do LLM no Produto:**
   - Detalhe o escopo de atuação de cada um dos 4 assistentes (Setup, Fotos, Cadastro e Publicação).
   - Explique a arquitetura de prompts (ex: se haverá um prompt de sistema base compartilhado ou se cada assistente terá seu próprio prompt isolado).
   - Defina os modelos recomendados (ex: gpt-4o-mini ou claude-3-5-haiku para custo-benefício sob o modelo BYOK).

2. **Mapeamento de Failure Modes Básicos (Modos de Falha):**
   - Identifique e descreva os cenários de falha técnica e comportamental da IA:
     - **Chave de API Inválida ou Sem Saldo:** Como o sistema detecta e avisa o seller de forma amigável.
     - **Rate Limit / Quota Excedida:** Como o sistema gerencia o erro retornado pela API de LLM.
     - **Timeout de Requisição:** Tempo limite de espera e fluxo de retry no client-side.
     - **Alucinação de Dados Críticos:** Como estruturar os prompts de cadastro de produtos para proibir terminantemente a IA de inventar preços, estoque ou dimensões físicas do produto.

3. **Diretrizes de Engenharia de Prompt (System Prompts Base):**
   - Forneça um exemplo de System Prompt estruturado para o *Assistente de Cadastro de Produtos*, demonstrando o uso de poucas tomadas (few-shot prompting) ou instruções negativas claras para evitar alucinações de dados "hard".

Gere um documento técnico claro, focado em engenharia de prompt defensiva e resiliência de integração.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/06-ai-llm-system-design.md\` foi criado com todas as 3 seções especificadas no prompt de execução.
2. O documento descreve claramente o papel dos 4 assistentes de IA no CapybaraCart.
3. Os modos de falha técnica (chaves inválidas, rate limits, timeouts) e comportamentais (alucinações) estão mapeados com estratégias de mitigação.
4. Um exemplo prático de System Prompt defensivo está documentado.

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

\`\`\`markdown
Você é um Engenheiro de Integrações e Arquiteto de APIs sênior. Seu objetivo é criar o documento de Contratos de API/MCP completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Integrações: Stripe, Google Sheets, OpenAI/Anthropic, Mercado Envios, Instagram, Pinterest e TikTok.
- Sem banco de dados central: Os dados de transação fluem diretamente para o Google Sheets do seller.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/07-contratos-api-mcp.md\`. O documento deve conter as seguintes seções detalhadas:

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
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/07-contratos-api-mcp.md\` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento detalha os contratos de request/response (com exemplos JSON válidos) para Stripe, Google Sheets e OpenAI.
3. As estratégias de tratamento de rate limits (HTTP 429) e indisponibilidade (fallbacks locais) estão claramente documentadas.
4. O fluxo de autenticação BYOK está mapeado para cada uma das integrações.

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

\`\`\`markdown
Você é um UX/UI Designer sênior com forte foco em usabilidade, conversão de checkout e design de interfaces minimalistas (PWAs). Seu objetivo é criar o documento de Wireframes completo para o CapybaraCart.

Como este é um projeto doc-as-code, você deve representar os wireframes de forma textual estruturada (usando blocos de código, tabelas ou ASCII art para representar o layout das telas) e detalhar a hierarquia de informação de cada elemento.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade radical, foco na conversão, sem login para compradores).
- Fluxo do Seller: Setup BYOK, Dashboard e Cadastro de Produto com IA.
- Fluxo do Comprador: Vitrine de Produto e Checkout de Passo Único (One-page Checkout).

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/08-wireframes.md\`. O documento deve conter as seguintes seções detalhadas:

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
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/08-wireframes.md\` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento inclui representações visuais textuais (ASCII art, tabelas ou blocos estruturados) para todas as telas principais do seller e do comprador.
3. Os estados alternativos (vazio, carregando e erro) estão detalhados visual e funcionalmente.
4. O design proposto reflete a "Filosofia Fusca" de simplicidade radical e foco em conversão.

# Card 09 — Design Tokens

**Status:** A fazer
**Depende de:** 08-wireframes
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: paleta, tipografia, espaçamento e estados base — o essencial para consistência, sem sistema de design completo.

## Objetivo
Definir a fundação visual do CapybaraCart (cores, tipografia, espaçamento, bordas e estados interativos), garantindo consistência visual e agilidade no desenvolvimento do PWA, mantendo o alinhamento com a "Filosofia Fusca" de simplicidade bruta, alto contraste e leveza.

## Contexto essencial
*   **Filosofia Fusca:** Design utilitário, limpo e de alta legibilidade. Foco em performance de carregamento (especialmente em navegadores integrados de redes sociais como Instagram e TikTok).
*   **Necessidades Visuais:**
    *   *Contraste:* Excelente legibilidade sob luz solar (comum para hobbistas ao ar livre, como orquidófilos).
    *   *Estados Base:* Estados de foco, hover, ativo e desabilitado extremamente claros para evitar erros de clique no checkout.
    *   *Simplicidade:* Sem gradientes complexos ou sombras pesadas. Estética limpa, quase brutalista/flat.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um UI Engineer e Design System Specialist sênior, com foco em acessibilidade (WCAG), performance web e frameworks utilitários (Tailwind CSS). Seu objetivo é criar o documento de Design Tokens completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, alto contraste, leveza).
- Foco: Acessibilidade móvel e carregamento instantâneo.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/09-design-tokens.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Paleta de Cores (Color Palette):**
   - Defina os valores hexadecimais e os papéis de cada cor, garantindo contraste WCAG AA/AAA:
     - **Brand/Primary:** Cor de destaque para ações principais (ex: um verde capivara ou laranja vibrante).
     - **Neutral/Background:** Cores de fundo para a aplicação (claro/escuro se aplicável).
     - **Neutral/Text:** Cores para textos principais, secundários e desabilitados.
     - **Borders & Dividers:** Cores para delimitação de inputs e cards.
     - **Status (Success, Warning, Error, Info):** Cores para feedbacks visuais (essencial para validação de chaves de API e checkout).

2. **Tipografia (Typography):**
   - Defina a escala tipográfica otimizada para dispositivos móveis:
     - **Font Families:** Fontes do sistema (sans-serif nativas) para evitar carregamento de arquivos externos de fonte.
     - **Font Sizes & Line Heights:** Escala de tamanhos (ex: de 12px a 32px) com suas respectivas alturas de linha para legibilidade perfeita.
     - **Font Weights:** Pesos utilizados (Regular, Medium, Bold).

3. **Espaçamento e Grid (Spacing & Layout):**
   - Defina uma escala de espaçamento baseada em 4px/8px (ex: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px) para margens, paddings e gaps de grid.

4. **Bordas e Arredondamentos (Borders & Radius):**
   - Defina a escala de border-radius (ex: none, small, medium, full) e border-width para manter a consistência dos botões, inputs e cards.

5. **Estados Interativos e Feedback (Interactive States):**
   - Mapeie visualmente os tokens para os estados de: Hover, Active, Focus (essencial para acessibilidade por teclado) e Disabled (botões de envio durante carregamento).

6. **Exemplo de Configuração Tailwind CSS:**
   - Forneça um bloco de código com a extensão do tema (\`tailwind.config.js\`) mapeando todos os tokens definidos acima, facilitando a implementação direta pelo desenvolvedor.

Gere um documento técnico preciso, limpo e diretamente utilizável no código frontend.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/09-design-tokens.md\` foi criado com todas as 6 seções especificadas no prompt de execução.
2. O documento define valores exatos (hexadecimais, pixels, rems) para cores, tipografia, espaçamento e bordas.
3. Os tokens propostos respeitam as diretrizes de acessibilidade e a "Filosofia Fusca" de alta legibilidade.
4. O arquivo de configuração do Tailwind CSS está presente e é sintaticamente válido.

# Card 10 — NFRs + modelo de custo

**Status:** A fazer
**Depende de:** 04-solution-architecture
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: NFRs completos (performance, disponibilidade, segurança, privacidade) + modelo de custo detalhado por componente.

## Objetivo
Definir os requisitos não funcionais (NFRs) críticos para o CapybaraCart (com foco em segurança de chaves de API, privacidade de dados de compradores, performance de carregamento em redes sociais e disponibilidade) e estruturar um modelo de custo detalhado por componente para o modelo BYOK.

## Contexto essencial
*   **Filosofia Fusca:** Leveza, robustez e custo operacional mínimo para a plataforma.
*   **Modelo BYOK:** O custo de infraestrutura de APIs (Stripe, OpenAI, Google Sheets) é repassado ao seller. O custo da plataforma em si deve ser próximo de zero (hospedagem estática + serverless).
*   **Segurança:** Criptografia local de chaves de API.
*   **Privacidade:** Armazenamento zero de dados de compradores.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Arquiteto de Infraestrutura, Engenheiro de Segurança e FinOps sênior. Seu objetivo é criar o documento de NFRs + modelo de custo completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, alto contraste, leveza).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/10-nfrs-modelo-custo.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Requisitos Não Funcionais (NFRs) Detalhados:**
   - **Performance:** Tempo de carregamento da vitrine PWA (ex: First Contentful Paint < 1.5s em conexões 3G móveis, essencial para tráfego vindo de redes sociais).
   - **Disponibilidade:** SLA esperado para o PWA e estratégias de cache offline (Service Workers) para garantir que a vitrine abra mesmo com oscilações de rede.
   - **Segurança:** Padrões de criptografia para chaves de API locais (ex: AES-GCM-256), proteção contra XSS/CSRF e segurança no tráfego de dados (HTTPS forçado, CSP headers).
   - **Privacidade e Compliance:** Como a política de "armazenamento zero" simplifica a conformidade com a LGPD/GDPR, detalhando a responsabilidade legal compartilhada no modelo BYOK.

2. **Modelo de Custo Detalhado por Componente:**
   - **Custos da Plataforma (Hospedagem e Proxy):** Projeção de custos para manter o CapybaraCart no ar (ex: Vercel/Netlify Free Tier vs. Pro Tier, custos de Serverless Functions). Mostre como a arquitetura permite escala massiva com custo quase zero para os criadores da plataforma.
   - **Custos do Seller (Modelo BYOK):** Estimativa de custos operacionais para o vendedor com base no volume de vendas:
     - *Stripe:* Taxas por transação bem-sucedida.
     - *OpenAI/Anthropic:* Custo estimado de tokens por produto cadastrado/post gerado.
     - *Google Sheets:* Gratuito dentro dos limites da API do Google Workspace.
     - *Mercado Envios:* Custos de frete integrados e repassados ao comprador.

3. **Estratégia de Monitoramento e Alertas:**
   - Como monitorar a saúde do PWA e falhas de integração de forma descentralizada (ex: logs de erros locais, telemetria leve sem violar a privacidade do comprador).

Gere um documento técnico rigoroso, com estimativas financeiras realistas e diretrizes de segurança sólidas.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/10-nfrs-modelo-custo.md\` foi criado com todas as 3 seções especificadas no prompt de execução.
2. O documento detalha os NFRs de performance (métricas de carregamento móvel), segurança (criptografia de chaves) e privacidade (LGPD/GDPR).
3. O modelo de custo diferencia claramente o que é custo da plataforma (Vercel/Netlify free tier) e o que é custo do seller (Stripe, OpenAI, Google Sheets).
4. As estimativas financeiras e técnicas são realistas e alinhadas com a filosofia de simplicidade radical do MVP.

# Card 11 — Critérios de aceite/testes

**Status:** A fazer
**Depende de:** 02-prd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: checklist simples por funcionalidade, critérios Given/When/Then por user story principal, casos de erro e edge cases (com atenção especial aos ligados à IA).

## Objetivo
Definir os critérios de aceitação e cenários de teste para o CapybaraCart, utilizando o formato Given/When/Then para as histórias de usuário principais, e mapeando casos de erro e edge cases críticos (especialmente os relacionados à IA e falhas de API) para garantir a robustez do sistema.

## Contexto essencial
*   **Filosofia Fusca:** Testes focados no fluxo crítico de checkout e validação de chaves.
*   **Modelo BYOK:** Testar cenários onde as chaves de API do seller estão inválidas, expiradas ou sem saldo.
*   **Armazenamento Zero:** Garantir que nenhum dado de comprador seja retido localmente ou no servidor intermediário após a transação, e que a gravação no Google Sheets ocorra com sucesso.
*   **IA:** Testar comportamento defensivo da IA para evitar alucinações de dados "hard" (preço, estoque).

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um QA Engineer e SDET sênior, especialista em testes de integração de APIs, comportamento (BDD) e testes de robustez para sistemas descentralizados. Seu objetivo é criar o documento de Critérios de Aceite/Testes completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, robustez, modularidade).
- Modelo BYOK: O usuário traz suas próprias chaves de API (Stripe, Google Sheets, OpenAI/Anthropic).
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/11-criterios-aceite-testes.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Visão Geral da Estratégia de Testes:**
   - Abordagem de testes para um sistema sem banco de dados centralizado (foco em testes de integração de ponta a ponta e testes de contrato de API).

2. **Critérios de Aceite BDD (Given/When/Then):**
   - Mapeie cenários de teste detalhados no formato BDD para pelo menos 4 fluxos críticos:
     - **Setup BYOK:** Validação e salvamento seguro das chaves de API.
     - **Cadastro de Produto com IA:** Geração de descrição e tratamento de fotos.
     - **Fluxo de Compra (Checkout):** Processamento de pagamento no Stripe e cálculo de frete.
     - **Sincronização de Pedido:** Gravação dos dados do comprador diretamente no Google Sheets do seller.

3. **Casos de Erro e Edge Cases (Cenários de Exceção):**
   - Detalhe os cenários de teste e o comportamento esperado para:
     - Chave de API do Stripe inválida ou expirada durante o checkout.
     - Planilha do Google Sheets do seller deletada, renomeada ou sem permissão de escrita.
     - Queda de conexão de internet do comprador no meio do processamento do pagamento.
     - Tentativa de compra de um produto com estoque zerado (se aplicável).

4. **Testes Específicos de IA (Robustez e Segurança):**
   - Cenários de teste para garantir que a IA não alucine dados "hard" (preço, estoque, características físicas).
   - Testes de injeção de prompt (prompt injection) nos assistentes de IA para garantir que o comportamento do assistente permaneça seguro.

Gere um documento técnico rigoroso, que sirva de base para a automação de testes e homologação do sistema.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/11-criterios-aceite-testes.md\` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento apresenta cenários Given/When/Then claros para os fluxos de Setup, Cadastro, Checkout e Sincronização.
3. Os casos de erro para falhas de chaves de API e indisponibilidade de serviços de terceiros estão mapeados.
4. Os testes de comportamento e segurança da IA estão detalhados para evitar alucinações de dados críticos.

# Card 12 — Roadmap/MVP scope (MoSCoW)

**Status:** A fazer
**Depende de:** 02-prd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: MoSCoW completo (Must/Should/Could/Won't) + fases e marcos temporais aproximados.

## Objetivo
Definir o escopo do MVP do CapybaraCart utilizando o framework MoSCoW e estruturar um roadmap evolutivo com fases e marcos temporais aproximados para guiar o desenvolvimento e lançamentos futuros, garantindo o alinhamento com a "Filosofia Fusca" de simplicidade radical.

## Contexto essencial
*   **Filosofia Fusca:** Foco absoluto no core funcional. O MVP deve ser bruto, robusto e focado em resolver a venda sem fricção.
*   **Modelo BYOK:** O setup de chaves de API (Stripe, Google Sheets, OpenAI) é um requisito "Must Have" absoluto, pois o sistema não funciona sem ele.
*   **Armazenamento Zero:** A gravação direta no Google Sheets e o checkout direto no Stripe são o coração do fluxo de compra.
*   **Meta de Sucesso do MVP:** O seller consegue realizar todo o setup, cadastrar seu primeiro produto com o auxílio da IA e publicá-lo nas redes sociais com sucesso dentro da primeira hora de uso.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Product Manager (PM) e Release Manager sênior, especialista em estratégias de lançamento de produtos digitais (Go-To-Market), priorização ágil e desenvolvimento de MVPs. Seu objetivo é criar o documento de Roadmap/MVP scope (MoSCoW) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, modular).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instructions de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/12-roadmap-mvp-scope.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Matriz MoSCoW Completa e Justificada:**
   - Classifique detalhadamente os requisitos e funcionalidades do CapybaraCart nas quatro categorias, justificando cada escolha com base na filosofia do produto:
     - **Must Have (Essencial para o MVP):** O mínimo viável para o seller configurar, cadastrar e vender (ex: Setup BYOK, Vitrine PWA, Checkout Stripe, Integração Google Sheets, Assistente de Cadastro de Produtos).
     - **Should Have (Importante, mas não vital para o primeiro dia):** Funcionalidades que agregam muito valor mas podem esperar um segundo momento (ex: Assistente de Fotos, Assistente de Posicionamento de Marca, cálculo automático de frete via Mercado Envios).
     - **Could Have (Desejável, se houver tempo/recursos):** Melhorias de usabilidade ou features secundárias (ex: Assistente de Publicação Social, múltiplos temas visuais para a vitrine).
     - **Won't Have (Fora do escopo do MVP):** Funcionalidades explicitamente descartadas para manter a simplicidade (ex: Área de membros para compradores, painel de analytics complexo, banco de dados próprio para dados de compradores).

2. **Fases do Roadmap de Desenvolvimento:**
   - Divida o desenvolvimento do CapybaraCart in fases lógicas e incrementais:
     - **Fase 1: Fundação & BYOK (Core):** Setup de chaves, criptografia local e estrutura básica do PWA.
     - **Fase 2: Cadastro & IA (Criação):** Formulário de cadastro e integração com a API de LLM para geração de conteúdo.
     - **Fase 3: Transação & Entrega (Checkout):** Integração com Stripe e Google Sheets para fechamento de vendas.
     - **Fase 4: Divulgação & Growth (Lançamento):** Marcas d'água, tags de compartilhamento e assistente de posts.

3. **Marcos Temporais Aproximados (Milestones):**
   - Defina uma estimativa de tempo realista para cada fase (ex: Semana 1-2, Semana 3-4, etc.) considerando um desenvolvimento ágil via vibe-coding no Dyad.
   - Estabeleça critérios de aceitação claros para a conclusão de cada marco (Milestone Criteria).

4. **Estratégia de Soft Launch e Growth Loop:**
   - Como o MVP será testado com os primeiros hobbistas e colecionadores.
   - Como o growth loop viral (marcas d'água e tags do CapybaraCart nas imagens e posts gerados pela IA) será ativado para atrair novos sellers organicamente.

Gere um documento estratégico claro, realista e diretamente acionável para o time de desenvolvimento e produto.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/12-roadmap-mvp-scope.md\` foi criado com todas as 4 seções especificadas no prompt de execução.
2. A matriz MoSCoW está completa, justificada e alinhada com a filosofia de simplicidade radical do MVP.
3. O roadmap apresenta fases claras e marcos temporais realistas para o desenvolvimento.
4. A estratégia de soft launch e o growth loop viral estão documentados.

# Card 13 — Registro de riscos

**Status:** A fazer
**Depende de:** 02-prd, 04-solution-architecture, 10-nfrs-modelo-custo
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: tabela risco → mitigação cobrindo todas as dimensões com score >= 2 + probabilidade, impacto e responsável por risco.

## Objetivo
Mapear os riscos técnicos, operacionais, de segurança e de privacidade do CapybaraCart, definindo probabilidade, impacto, mitigação e responsáveis para cada um, garantindo a resiliência do modelo BYOK e da política de armazenamento zero.

## Contexto essencial
*   **Modelo BYOK:** Risco de vazamento de chaves de API locais, chaves inválidas, expiradas ou sem saldo por parte do seller.
*   **Armazenamento Zero:** Risco de perda de dados de transação se o Google Sheets do seller falhar, estiver inacessível ou com permissões incorretas.
*   **Integrações:** Dependência crítica de 7 APIs externas (Stripe, Google Sheets, OpenAI/Anthropic, Mercado Envios, Instagram, Pinterest, TikTok).
*   **Reversibilidade:** Decisões de arquitetura tomadas cedo (como criptografia local) têm alto custo de reversão se houver falhas de segurança.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Risk Manager, Security Engineer e Tech Lead sênior, especialista em segurança de dados, conformidade (LGPD/GDPR) e resiliência de sistemas distribuídos. Seu objetivo é criar o documento de Registro de Riscos completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, modular).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em \`entregaveis/13-registro-riscos.md\`. O documento deve conter as seguintes seções detalhadas:

1. **Metodologia de Análise de Riscos:**
   - Explique brevemente a matriz de risco utilizada (Probabilidade de 1 a 3 vs. Impacto de 1 a 3) para calcular a criticidade (Score = Probabilidade x Impacto).

2. **Tabela de Registro de Riscos Completa:**
   - Crie uma tabela detalhada contendo pelo menos 6 riscos críticos cobrindo as dimensões com score >= 2 no diagnóstico (Sensibilidade de dados, Integrações externas, Exposição a usuários reais, Reversibilidade).
   - Para cada risco, inclua:
     - **ID do Risco:** (ex: R-01, R-02).
     - **Descrição do Risco:** O que pode acontecer e qual a causa.
     - **Probabilidade:** (1 - Baixa, 2 - Média, 3 - Alta).
     - **Impacto:** (1 - Baixo, 2 - Médio, 3 - Alto).
     - **Score de Criticidade:** (Multiplicação de Probabilidade x Impacto).
     - **Ação de Mitigação:** O que o sistema faz preventivamente para evitar o risco.
     - **Plano de Contingência:** O que fazer se o risco se concretizar.
     - **Responsável:** Quem monitora ou responde pelo risco (ex: Tech Lead, Seller, Plataforma).

3. **Detalhamento dos Riscos Críticos (Mapeamento Obrigatório):**
   - **R-01 (Segurança):** Vazamento ou roubo de chaves de API do seller salvas localmente (XSS/comprometimento do dispositivo).
   - **R-02 (Integração/Dados):** Falha de gravação no Google Sheets do seller (planilha cheia, deletada ou API fora do ar) resultando em perda de dados de pedidos.
   - **R-03 (Transacional):** Falha de webhook do Stripe ou inconsistência no status de pagamento.
   - **R-04 (IA):** Alucinação de dados "hard" (preço/estoque) pela IA gerando problemas legais ou prejuízo financeiro para o seller.
   - **R-05 (Operacional):** Bloqueio ou banimento de chaves de API do seller por violação de termos de uso de terceiros (ex: OpenAI, Redes Sociais).

Gere um documento técnico rigoroso, focado em segurança defensiva e resiliência operacional.
\`\`\`

## Critério de conclusão
1. O arquivo \`entregaveis/13-registro-riscos.md\` foi criado com todas as 3 seções especificadas no prompt de execução.
2. A tabela de riscos cobre todas as dimensões críticas (Sensibilidade de dados, Integrações, Exposição e Reversibilidade).
3. Cada risco possui probabilidade, impacto, score, mitigação, plano de contingência e responsável definidos.
4. Os riscos específicos de vazamento de chaves (BYOK) e falha de gravação de pedidos (Google Sheets) estão detalhados.
`;

// ==============================================================================
// 3. MOTOR DO SCRIPT - NÃO É NECESSÁRIO ALTERAR
// ==============================================================================

/**
 * Função principal que orquestra a criação do Board no Trello
 */
function startTrelloMigration() {
  Logger.log('Iniciando o parse do Markdown...');
  var cardsData = extractCards(RAW_MARKDOWN);
  Logger.log('Extraídos ' + cardsData.length + ' cards do projeto.');

  Logger.log('Criando Board: ' + BOARD_NAME);
  // DefaultLists=false garante que o board nasça limpo (sem To Do, Doing, Done)
  var boardRes = trelloRequest('boards/?name=' + encodeURIComponent(BOARD_NAME) + '&defaultLists=false', 'POST');
  if (!boardRes || !boardRes.id) {
    Logger.log('Falha fatal ao criar o Board.');
    return;
  }
  var boardId = boardRes.id;

  Logger.log('Criando Listas (Garantindo a ordem rigorosa)...');
  // Criar sequencialmente na base ("bottom") assegura a ordem exata exigida.
  var listsToCreate = ['Backlog', 'Em andamento', 'Validação manual', 'Concluído'];
  var listIds = {};
  for (var i = 0; i < listsToCreate.length; i++) {
    var res = trelloRequest('boards/' + boardId + '/lists?name=' + encodeURIComponent(listsToCreate[i]) + '&pos=bottom', 'POST');
    listIds[listsToCreate[i]] = res.id;
  }

  var backlogId = listIds['Backlog'];

  Logger.log('Identificando e criando Labels...');
  var uniqueLabels = {};
  cardsData.forEach(function(card) {
    card.labels.forEach(function(l) { uniqueLabels[l] = true; });
  });

  var labelIds = {};
  var tColors = ['green', 'yellow', 'orange', 'red', 'purple', 'blue', 'sky', 'lime', 'pink', 'black'];
  var cIndex = 0;

  for (var labelName in uniqueLabels) {
    var clr = tColors[cIndex % tColors.length];
    var lRes = trelloRequest('boards/' + boardId + '/labels?name=' + encodeURIComponent(labelName) + '&color=' + clr, 'POST');
    if (lRes && lRes.id) {
      labelIds[labelName] = lRes.id;
    }
    cIndex++;
  }

  Logger.log('Populando cards na lista Backlog...');
  for (var k = 0; k < cardsData.length; k++) {
    var card = cardsData[k];

    // Mapeia IDs dos Labels
    var idLabels = card.labels.map(function(l) { return labelIds[l]; }).filter(Boolean).join(',');

    var cardPayload = {
      name: card.name,
      desc: card.description,
      pos: 'bottom',
      idLabels: idLabels
    };

    var cRes = trelloRequest('cards?idList=' + backlogId, 'POST', cardPayload);

    // Processamento de checklists
    if (cRes && cRes.id && card.checklists.length > 0) {
      var checkRes = trelloRequest('cards/' + cRes.id + '/checklists?name=' + encodeURIComponent('Critérios de conclusão'), 'POST');
      if (checkRes && checkRes.id) {
        for (var idx = 0; idx < card.checklists.length; idx++) {
          trelloRequest('checklists/' + checkRes.id + '/checkItems?name=' + encodeURIComponent(card.checklists[idx]), 'POST');
        }
      }
    }
    Logger.log('Card criado: ' + card.name);
  }

  Logger.log('Sucesso! O board foi configurado integralmente.');
}

/**
 * Função utilitária para fazer chamadas à API do Trello
 */
function trelloRequest(path, method, payload) {
  var url = 'https://api.trello.com/1/' + path;
  url += (url.indexOf('?') > -1 ? '&' : '?') + 'key=' + TRELLO_API_KEY + '&token=' + TRELLO_TOKEN;

  var options = {
    method: method,
    muteHttpExceptions: true
  };

  if (payload) {
    options.contentType = 'application/json';
    options.payload = JSON.stringify(payload);
  }

  var response = UrlFetchApp.fetch(url, options);

  // Rate limiter defensivo (Evita HTTP 429 - Too Many Requests)
  Utilities.sleep(250);

  if (response.getResponseCode() >= 400) {
    Logger.log('Erro na API Trello (' + path + '): ' + response.getContentText());
    return null;
  }

  return JSON.parse(response.getContentText());
}

/**
 * Parser customizado para estruturar o Markdown exato do projeto em JSON utilizável
 */
function extractCards(markdown) {
  var cards = [];
  // Divide o markdown usando o padrão "# Card " como delimitador de início de card
  var blocks = markdown.split(/(?=# Card )/);
  
  for (var b = 0; b < blocks.length; b++) {
    var block = blocks[b].trim();
    if (!block) continue;
    
    var lines = block.split('\n');
    var firstLine = lines[0].trim();
    
    // Extrai o nome do card
    var name = firstLine.replace('# ', '').trim();
    
    var labels = ['Fase A']; // Label padrão para identificar a fase
    var descriptionLines = [];
    var checklists = [];
    var captureMode = 'desc';
    
    for (var i = 1; i < lines.length; i++) {
      var line = lines[i].trim();
      var rawLine = lines[i];
      
      // Extrai metadados para virarem Labels no Trello
      if (line.indexOf('**Status:**') === 0) {
        var status = line.replace('**Status:**', '').trim();
        labels.push(status);
        descriptionLines.push(rawLine);
        continue;
      }
      if (line.indexOf('**Tier do projeto:**') === 0) {
        var tier = line.replace('**Tier do projeto:**', '').trim();
        labels.push(tier);
        descriptionLines.push(rawLine);
        continue;
      }
      if (line.indexOf('**Depende de:**') === 0) {
        descriptionLines.push(rawLine);
        continue;
      }
      if (line.indexOf('**Profundidade definida:**') === 0) {
        descriptionLines.push(rawLine);
        continue;
      }
      
      // Detecta seção de checklist
      if (line.indexOf('## Critério de conclusão') === 0 || line.indexOf('## Critério de aceite') === 0) {
        captureMode = 'checklist';
        descriptionLines.push(rawLine);
        continue;
      }
      
      // Se estivermos no modo checklist, captura os itens numerados ou com bullet points
      if (captureMode === 'checklist') {
        // Captura padrões como "1. Item" ou "- [ ] Item" ou "- Item"
        var match = line.match(/^(\d+\.\s*|-\s*\[\s*\]\s*|-\s*)\s*(.*)$/);
        if (match) {
          checklists.push(match[2].trim());
        }
        descriptionLines.push(rawLine);
      } else {
        descriptionLines.push(rawLine);
      }
    }
    
    cards.push({
      name: name,
      labels: labels,
      description: descriptionLines.join('\n').trim(),
      checklists: checklists
    });
  }
  
  return cards;
}