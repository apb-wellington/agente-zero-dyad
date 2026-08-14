---
title: "12-roadmap-mvp"
dyad_chat_id: 32
dyad_app: agente-zero-dyad
created_at: 2026-07-15 15:11 UTC
message_count: 2
models: [gemini-flash-latest]
---

# 12-roadmap-mvp

### 👤 Usuário · 2026-07-15 15:11 UTC

Você é um Product Manager (PM) e Release Manager sênior, especialista em estratégias de lançamento de produtos digitais (Go-To-Market), priorização ágil e desenvolvimento de MVPs. Seu objetivo é criar o documento de Roadmap/MVP scope (MoSCoW) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, modular).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instructions de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/12-roadmap-mvp-scope.md`. O documento deve conter as seguintes seções detalhadas:

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


## Preste muita atenção aqui, como se sua vida dependesse disso: ##
1. Faça SOMENTE o que foi pedido e NÃO avance sobre as demais entregas.
2. NÃO reescreva totalmente os arquivos da pasta /board/, faça APENAS a anotação de status que é necessária.
3. Seja equilibrado, jamais literal e militante. O que a solução "Fusca" pede não é radicalismo, mas inteligência e equilíbrio. Novamente, não seja literal, mas inteligente e perspicaz.

### 🤖 Assistente · 2026-07-15 15:11 UTC

<details>
<summary>🧠 raciocínio interno (colapsado)</summary>

**Defining the Objective**

I'm currently focused on defining the project objective. I understand I need to act as a Senior Product Manager and Release Manager for the CapybaraCart project, creating the `entregaveis/12-roadmap-mvp-scope.md` file. I'm breaking down the requirements and the scope of the project.


**Structuring the Roadmap**

I've made good progress outlining the MVP scope, creating the sections requested for the `entregaveis/12-roadmap-mvp-scope.md` file. I've focused on the MoSCoW matrix, development phases, approximate milestones, and the soft launch/growth strategy. I'm ensuring everything aligns with the "Fusca" philosophy, BYOK, and zero storage principles. I've also updated the corresponding board card to "Concluído" and I'm meticulously following all guidelines, especially about the format and using Portuguese.


**Refining the MVP Scope**

I'm now diving deep into refining the MVP scope for `entregaveis/12-roadmap-mvp-scope.md`, specifically the MoSCoW matrix. I'm carefully detailing the "Must Have," "Should Have," "Could Have," and "Won't Have" features. This involves solidifying justifications for each category, ensuring the core functionality is prioritized. I'm considering BYOK integration, particularly with Stripe, Google Sheets, and AI tools, to create the minimum viable product. I am creating the `entregaveis/12-roadmap-mvp-scope.md` file following project instructions.


**Analyzing the Structure**

I'm currently analyzing the structure of the roadmap, specifically focusing on how the proposed milestones and phases align with "Armazenamento Zero" and the "Fusca" philosophy. I've broken down the roadmap into four key phases: Foundation & BYOK, Cadastro & IA, Transação & Entrega, and Divulgação & Growth. Each phase has corresponding milestones, each with clear criteria that I'm checking against the core principles of the project. I'm focusing on ensuring zero storage is maintained.

</details>
<dyad-write path="entregaveis/12-roadmap-mvp-scope.md" description="Criando o documento de Roadmap e Escopo do MVP (MoSCoW) para o CapybaraCart">
# Roadmap e Escopo do MVP (MoSCoW) — CapybaraCart

Este documento define o escopo do MVP (Minimum Viable Product) do CapybaraCart utilizando a matriz de priorização MoSCoW, além de estruturar o roadmap de desenvolvimento em fases incrementais e detalhar a estratégia de lançamento e crescimento viral. Toda a estratégia é guiada pela **Filosofia Fusca** (simplicidade bruta, utilitária e modular) e pelo modelo descentralizado **BYOK** com **Armazenamento Zero**.

---

## 1. Matriz MoSCoW Completa e Justificada

A priorização dos requisitos do CapybaraCart busca o equilíbrio pragmático: viabilizar o fluxo de venda autônomo o mais rápido possível, sem sobrecarregar o desenvolvimento com recursos secundários ou violar as premissas de privacidade e custo zero de infraestrutura.

### 1.1 Must Have (Essencial para o MVP)
*Requisitos sem os quais o produto não pode ser lançado, pois formam o core loop de configuração, cadastro e venda.*

*   **Módulo de Setup BYOK (Stripe, Google Sheets e Gemini/OpenAI):** Interface para inserção, validação técnica em tempo real e salvamento seguro das credenciais do próprio vendedor.
    *   *Justificativa:* O modelo BYOK é a fundação do produto. Sem a conexão segura com o Stripe (pagamentos) e Google Sheets (banco de dados), o sistema não tem como transacionar ou registrar pedidos.
*   **Vitrine PWA Estática e Responsiva:** Geração de uma página pública de produto otimizada para dispositivos móveis, com carregamento instantâneo.
    *   *Justificativa:* Os compradores vêm de redes sociais pelo celular. A vitrine precisa ser extremamente leve e abrir perfeitamente dentro dos navegadores integrados (Instagram, TikTok).
*   **Checkout de Passo Único (One-Page Checkout):** Formulário unificado de dados de entrega e pagamento integrado diretamente na página do produto, sem exigência de login ou cadastro de conta para o comprador.
    *   *Justificativa:* Eliminar a fricção de cadastro é o principal fator para garantir alta conversão de compras por impulso de itens de nicho.
*   **Integração de Passagem (Pass-Through) com Google Sheets:** Mecanismo serverless que grava os dados do comprador e do pedido diretamente na planilha do vendedor após a aprovação do pagamento.
    *   *Justificativa:* Garante a premissa de "Armazenamento Zero" de dados de compradores nos servidores da plataforma, mantendo a conformidade com a LGPD.
*   **Assistente de Cadastro de Produtos (IA):** Interface conversacional simples que ajuda o vendedor a estruturar títulos e descrições persuasivas a partir de notas brutas.
    *   *Justificativa:* Resolve a principal dor de hobbistas que não possuem habilidades de marketing ou escrita comercial, acelerando o cadastro.

### 1.2 Should Have (Importante, mas não vital para o primeiro dia)
*Recursos de alto valor que melhoram significativamente a experiência, mas cuja ausência não impede a realização de uma venda manual ou simplificada.*

*   **Cálculo Automático de Frete (Mercado Envios ou Correios):** Integração para cálculo dinâmico de frete com base no CEP do comprador.
    *   *Justificativa:* Altamente importante para automatizar o checkout. No entanto, no primeiro dia, o vendedor pode operar com uma taxa de frete fixa (Flat Rate) configurada manualmente no setup para simplificar o lançamento.
*   **Assistente de Fotos (IA):** Instruções textuais de enquadramento e iluminação para fotos de produtos, além de geração automática de Alt Text para acessibilidade.
    *   *Justificativa:* Melhora a qualidade visual da vitrine, mas o vendedor ainda consegue cadastrar produtos fazendo o upload de fotos comuns sem o auxílio da IA.
*   **Assistente de Posicionamento de Marca (Setup de Tom de Voz):** Questionário inicial para definir o tom de voz do seller e salvar como contexto para as futuras gerações da IA.
    *   *Justificativa:* Agrega consistência ao marketing, mas o assistente de cadastro pode operar com um tom de voz padrão (neutro e amigável) caso este setup ainda não esteja pronto.

### 1.3 Could Have (Desejável, se houver tempo/recursos)
*Melhorias de usabilidade, automações secundárias ou recursos estéticos que enriquecem o produto, mas não afetam o core transacional.*

*   **Assistente de Publicação Social (IA):** Geração de copys e sugestões de posts para Instagram, Pinterest e TikTok com base no produto cadastrado.
    *   *Justificativa:* Facilita a divulgação, mas o vendedor pode simplesmente copiar o link do produto e escrever sua própria legenda diretamente na rede social.
*   **Notificações de Venda via Telegram ou WhatsApp:** Disparo de alertas instantâneos para o celular do vendedor quando uma venda for aprovada.
    *   *Justificativa:* Conveniente para o vendedor, mas ele já recebe a notificação padrão de faturamento enviada por e-mail pelo próprio Stripe.
*   **Múltiplos Temas Visuais para a Vitrine:** Opções de personalização de cores e fontes para a página pública do produto.
    *   *Justificativa:* Estético. O tema padrão baseado nos Design Tokens (limpo, alto contraste e minimalista) é suficiente para garantir excelente conversão.

### 1.4 Won't Have (Fora do escopo do MVP)
*Funcionalidades explicitamente descartadas para o MVP para preservar a simplicidade técnica, evitar custos de infraestrutura e manter a privacidade.*

*   **Área de Membros ou Login para Compradores:** Histórico de compras ou painel do cliente.
    *   *Justificativa:* Viola a premissa de checkout sem fricção e exige armazenamento de dados de compradores, quebrando a política de Armazenamento Zero.
*   **Banco de Dados Central de Pedidos:** Armazenamento de transações nos servidores do CapybaraCart.
    *   *Justificativa:* Aumentaria os custos de infraestrutura da plataforma e o risco de vazamento de dados. A planilha do Google Sheets do seller é o único banco de dados de pedidos.
*   **Painel de Analytics Complexo Nativo:** Gráficos de faturamento, taxas de conversão detalhadas e relatórios financeiros dentro do dashboard do seller.
    *   *Justificativa:* O vendedor pode analisar seus dados de forma muito mais robusta e segura diretamente dentro do painel do Stripe ou utilizando os recursos nativos de gráficos do Google Sheets.

---

## 2. Fases do Roadmap de Desenvolvimento

O desenvolvimento do CapybaraCart é estruturado em quatro fases lógicas e incrementais, garantindo que cada etapa entregue uma fundação técnica estável para a fase seguinte.

```
┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│  FASE 1: FUNDAÇÃO    │ ──► │  FASE 2: CRIAÇÃO     │ ──► │  FASE 3: TRANSAÇÃO   │ ──► │  FASE 4: LANÇAMENTO  │
│  Setup BYOK & PWA    │     │  Cadastro & IA       │     │  Checkout & Sheets   │     │  Growth & Soft Launch│
└──────────────────────┘     └──────────────────────┘     └──────────────────────┘     └──────────────────────┘
```

### Fase 1: Fundação & BYOK (Core)
*Foco em segurança, infraestrutura básica e armazenamento local.*
*   Configuração do shell do PWA (React + Vite) com suporte offline básico (Service Workers).
*   Implementação do formulário de Setup BYOK para inserção de chaves.
*   Desenvolvimento do fluxo de autenticação do vendedor via Google OAuth 2.0.
*   Implementação da criptografia simétrica (AES-256-GCM) para salvar as chaves de API de forma segura no banco de metadados do seller.

### Fase 2: Cadastro & IA (Criação)
*Foco na experiência do vendedor e na utilidade da inteligência artificial.*
*   Desenvolvimento do formulário de cadastro manual de produtos (nome, preço, estoque, fotos).
*   Integração com a API de LLM (Gemini/OpenAI) via Serverless Proxy para o Assistente de Cadastro de Produtos.
*   Implementação do assistente de fotos (instruções de enquadramento e geração de Alt Text).
*   Desenvolvimento do dashboard do seller para listagem de produtos cadastrados e cópia de links.

### Fase 3: Transação & Entrega (Checkout)
*Foco na experiência do comprador, segurança financeira e integração de dados.*
*   Desenvolvimento da página pública da vitrine do produto (`/p/:id`) otimizada para mobile.
*   Integração do Stripe Elements no checkout de passo único para processamento seguro de cartões de crédito e Pix.
*   Desenvolvimento da Serverless Function (pass-through) para gravação de pedidos na API do Google Sheets do seller.
*   Implementação do mecanismo de resiliência local (IndexedDB) para salvar pedidos temporariamente em caso de falha na API do Google Sheets.

### Fase 4: Divulgação & Growth (Lançamento)
*Foco em atração orgânica, marketing e validação real.*
*   Desenvolvimento do assistente de publicação social (geração de copys para posts).
*   Implementação do growth loop viral (inserção automática de marca d'água discreta e link do CapybaraCart nas vitrines públicas).
*   Realização do Soft Launch com um grupo controlado de hobbistas e colecionadores.

---

## 3. Marcos Temporais Aproximados (Milestones)

Considerando um desenvolvimento ágil via vibe-coding no Dyad, estabelecemos um cronograma de **8 semanas** para o lançamento do MVP.

| Milestone | Período | Foco Principal | Critérios de Aceitação (Milestone Criteria) |
| :--- | :--- | :--- | :--- |
| **M1: Fundação Segura** | Semanas 1-2 | Setup BYOK e PWA Shell | 1. O PWA carrega em menos de 1.5s e possui manifesto válido.<br>2. O login via Google OAuth funciona.<br>3. As chaves de API são validadas assincronamente e salvas criptografadas no banco de metadados. |
| **M2: Motor de Criação** | Semanas 3-4 | Cadastro de Produtos e IA | 1. O formulário de cadastro de produtos salva dados localmente.<br>2. O assistente de IA gera títulos e descrições em JSON estruturado sem alucinar preços.<br>3. O dashboard lista os produtos e permite copiar os links de checkout. |
| **M3: Fluxo Transacional** | Semanas 5-6 | Checkout e Sincronização | 1. A vitrine pública do produto renderiza perfeitamente no mobile.<br>2. O Stripe processa pagamentos de teste com sucesso.<br>3. Os dados do pedido são gravados instantaneamente no Google Sheets do seller pós-pagamento.<br>4. O fallback de IndexedDB funciona ao simular queda da API do Google. |
| **M4: Lançamento Viral** | Semanas 7-8 | Growth e Soft Launch | 1. O gerador de posts sociais entrega copys formatadas.<br>2. A marca d'água do CapybaraCart é exibida de forma elegante nas vitrines.<br>3. Pelo menos 10 hobbistas realizam o setup completo e cadastram um produto na primeira hora de uso. |

---

## 4. Estratégia de Soft Launch e Growth Loop

Para garantir que o CapybaraCart cresça de forma sustentável, orgânica e com custo zero de aquisição de clientes (CAC), o lançamento e a tração inicial serão baseados em duas estratégias integradas:

### 4.1 Estratégia de Soft Launch (Lançamento Silencioso)
Em vez de um lançamento massivo para o público geral, o CapybaraCart iniciará sua operação focando em comunidades fechadas e altamente qualificadas de hobbistas e colecionadores:

1.  **Mapeamento de Nichos:** Identificar grupos específicos no Facebook, fóruns de colecionadores, associações de orquidófilos e feiras de brechó locais.
2.  **Recrutamento de Early Adopters:** Convidar manualmente de 15 a 20 vendedores influentes nessas comunidades para testarem a ferramenta gratuitamente.
3.  **Acompanhamento Ativo (Concierge onboarding):** O time de produto acompanhará de perto o primeiro setup desses vendedores para identificar gargalos de usabilidade na obtenção das chaves de API (Stripe/Google) e refinar os tutoriais de ajuda.
4.  **Coleta de Depoimentos:** Utilizar o sucesso das primeiras vendas autônomas desses hobbistas como prova social para atrair novos usuários do mesmo nicho.

### 4.2 O Growth Loop Viral (Ciclo de Crescimento Orgânico)
Como a plataforma não cobra comissões ou mensalidades, o marketing deve ser autossustentável. O CapybaraCart utiliza o próprio fluxo de compra como canal de atração de novos vendedores:

```
  [Vendedor publica link nas redes sociais]
                     │
                     ▼
  [Comprador acessa a vitrine pública PWA]
                     │
                     ▼
  [Comprador visualiza o selo "Criado com CapybaraCart"]
                     │
                     ▼
  [Comprador (que também é hobbista) clica no selo]
                     │
                     ▼
  [Acessa a landing page e cria seu próprio checkout]
```

1.  **O Selo de Conversão (Badge):** Toda vitrine pública de produto exibirá no rodapé um selo discreto, elegante e de alta qualidade visual: *"Venda simplificada com o CapybaraCart. Crie sua vitrine grátis."*
2.  **Público Espelho:** Hobbistas compram de hobbistas. O comprador de uma orquídea rara ou de uma peça de brechó vintage frequentemente também possui itens para vender ou conhece pessoas no mesmo nicho. Ao experimentar um fluxo de compra tão rápido e sem fricção (sem login), o comprador é naturalmente incentivado a clicar no selo para entender como funciona.
3.  **Landing Page de Conversão Direta:** O clique no selo direciona o usuário para uma landing page extremamente simples que explica a Filosofia Fusca e o modelo BYOK em 3 pontos: *"Sem taxas de comissão, sem mensalidades, configure e venda em 15 minutos."*
4.  **Ativação Instantânea:** O novo vendedor pode iniciar o setup imediatamente via Google Login, perpetuando o ciclo de crescimento viral de forma totalmente orgânica.
</dyad-write>

<dyad-write path="board/fase-a/12-roadmap-mvp-scope.md" description="Atualizando o status do Card 12 para Concluído">
# Card 12 — Roadmap/MVP scope (MoSCoW)

**Status:** Concluído
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

```markdown
Você é um Product Manager (PM) e Release Manager sênior, especialista em estratégias de lançamento de produtos digitais (Go-To-Market), priorização ágil e desenvolvimento de MVPs. Seu objetivo é criar o documento de Roadmap/MVP scope (MoSCoW) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, modular).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/12-roadmap-mvp-scope.md`. O documento deve conter as seguintes seções detalhadas:

1. **Matriz MoSCoW Completa e Justificada:**
   - Classifique detalhadamente os requisitos e funcionalidades do CapybaraCart nas quatro categorias, justificando cada escolha com base na filosofia do produto:
     - **Must Have (Essencial para o MVP):** O mínimo viável para o seller configurar, cadastrar e vender (ex: Setup BYOK, Vitrine PWA, Checkout Stripe, Integração Google Sheets, Assistente de Cadastro de Produtos).
     - **Should Have (Importante, mas não vital para o primeiro dia):** Funcionalidades que agregam muito valor mas podem esperar um segundo momento (ex: Assistente de Fotos, Assistente de Posicionamento de Marca, cálculo automático de frete via Mercado Envios).
     - **Could Have (Desejável, se houver tempo/recursos):** Melhorias de usabilidade ou features secundárias (ex: Assistente de Publicação Social, múltiplos temas visuais para a vitrine).
     - **Won't Have (Fora do escopo do MVP):** Funcionalidades explicitamente descartadas para manter a simplicidade (ex: Área de membros para compradores, painel de analytics complexo, banco de dados próprio para dados de compradores).

2. **Fases do Roadmap de Desenvolvimento:**
   - Divida o desenvolvimento do CapybaraCart em fases lógicas e incrementais:
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
```

## Critério de conclusão
1. O arquivo `entregaveis/12-roadmap-mvp-scope.md` foi criado com todas as 4 seções especificadas no prompt de execução.
2. A matriz MoSCoW está completa, justificada e alinhada com a filosofia de simplicidade radical do MVP.
3. O roadmap apresenta fases claras e marcos temporais realistas para o desenvolvimento.
4. A estratégia de soft launch e o growth loop viral estão documentados.
</dyad-write>

<dyad-chat-summary>Criando o Roadmap e Escopo do MVP (MoSCoW) e atualizando o Card 12</dyad-chat-summary>

Eu criei o documento completo de **Roadmap e Escopo do MVP (MoSCoW)** em `entregaveis/12-roadmap-mvp-scope.md` detalhando a matriz de priorização, as fases de desenvolvimento, os marcos temporais (milestones) e a estratégia de crescimento viral (growth loop), além de atualizar o status do Card 12 para **Concluído** em `board/fase-a/12-roadmap-mvp-scope.md`.
