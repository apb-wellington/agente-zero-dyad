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