# Journey Map — CapybaraCart

Este documento detalha a jornada ponta a ponta do vendedor (desde o setup inicial até a gestão de pedidos) e do comprador (da descoberta do produto nas redes sociais até o pós-compra), identificando os pontos de contato, pensamentos, emoções, dores e oportunidades de otimização em cada etapa do serviço.

---

## 1. Jornada do Vendedor (Alberto / Mariana)

A jornada do vendedor é desenhada para ser o mais simples e direta possível, reduzindo a carga cognitiva e eliminando a burocracia de plataformas tradicionais.

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   JORNADA DO VENDEDOR                                           │
├───────────────────┬───────────────────────────┬───────────────────────────┬─────────────────────┤
│ 1. Setup BYOK     │ 2. Cadastro com IA        │ 3. Publicação Social      │ 4. Gestão de Pedidos│
└───────────────────┴───────────────────────────┴───────────────────────────┴─────────────────────┘
```

### Etapa 1.1: Setup Inicial (BYOK)
*   **Ações do Usuário:**
    1. Acessar o PWA do CapybaraCart pela primeira vez.
    2. Definir uma senha mestre local para criptografia das chaves.
    3. Seguir os links de ajuda para obter as chaves de API do Stripe, Google Sheets e OpenAI/Anthropic.
    4. Colar as chaves no formulário de configuração.
    5. Clicar em "Validar e Salvar".
*   **Pontos de Contato:** Tela de Setup BYOK do CapybaraCart.
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Será que isso é seguro?", "Onde eu acho essa chave secreta no Stripe?", "Espero que não seja muito difícil."
    *   *Emoções:* Ansiedade leve ao lidar com termos técnicos (API, chaves), seguida de alívio e satisfação ao ver os indicadores verdes de validação bem-sucedida.
*   **Pontos de Dor:**
    *   Dificuldade de navegação nos painéis de desenvolvedor do Stripe e do Google Cloud Console (especialmente para o Seu Alberto).
    *   Medo de expor dados sensíveis ou errar a cópia das chaves.
*   **Oportunidades:**
    *   Oferecer micro-tutoriais visuais (passo a passo com GIFs) integrados diretamente ao lado de cada campo de input.
    *   Fornecer links diretos que abrem exatamente a página de credenciais de cada serviço de terceiros.
    *   Explicar de forma clara e transparente como a criptografia local (AES-GCM-256) protege as chaves no próprio navegador.

### Etapa 1.2: Cadastro de Produto com IA
*   **Ações do Usuário:**
    1. Clicar em "Novo Produto" no dashboard.
    2. Fazer o upload ou tirar uma foto do produto.
    3. Abrir o assistente de IA no painel lateral.
    4. Responder a perguntas simples da IA sobre o produto (história, estado de conservação, características únicas).
    5. Revisar o título e a descrição persuasiva gerados pela IA.
    6. Preencher manualmente o preço e o estoque (dados "hard").
    7. Clicar em "Salvar e Gerar Link".
*   **Pontos de Contato:** Tela de Cadastro de Produto, Painel do Assistente de IA.
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Nossa, essa descrição ficou muito melhor do que eu escreveria!", "Ficou muito profissional", "Será que a foto ficou boa?"
    *   *Emoções:* Orgulho do próprio produto, empolgação com a facilidade de criação e sensação de suporte profissional.
*   **Pontos de Dor:**
    *   Medo de a IA alucinar informações incorretas sobre o produto (como inventar um preço ou material errado).
    *   Dificuldade em tirar fotos com boa iluminação e enquadramento (especialmente para hobbistas ao ar livre).
*   **Oportunidades:**
    *   Garantir que a IA atue de forma estritamente defensiva, nunca preenchendo campos numéricos de preço ou estoque de forma autônoma.
    *   Integrar um guia visual simples de fotografia (ex: "Dicas do Capivara para uma boa foto: use luz natural, limpe a lente e centralize o objeto").

### Etapa 1.3: Publicação Social
*   **Ações do Usuário:**
    1. Copiar o link de checkout rápido gerado pelo CapybaraCart.
    2. Solicitar ao assistente de IA sugestões de legendas otimizadas para o Instagram, Pinterest ou TikTok.
    3. Abrir a rede social de preferência.
    4. Criar o post ou story, colando o link de checkout na bio ou usando o sticker de link.
*   **Pontos de Contato:** Dashboard do Seller (botão de cópia rápida), Assistente de Publicação Social, Redes Sociais (Instagram/Pinterest).
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Agora é só esperar os interessados clicarem", "Ficou muito prático compartilhar esse link direto."
    *   *Emoções:* Expectativa positiva, sensação de profissionalismo e controle sobre o canal de vendas.
*   **Pontos de Dor:**
    *   Falta de criatividade para escrever legendas atraentes que incentivem o clique direto no link de checkout.
*   **Oportunidades:**
    *   O assistente de publicação social deve gerar variações de textos focadas em gatilhos de escassez (essencial para os drops de peças únicas da Mariana) e exclusividade.

### Etapa 1.4: Gestão de Pedidos (Google Sheets)
*   **Ações do Usuário:**
    1. Receber uma notificação de venda aprovada (via e-mail do Stripe).
    2. Abrir a planilha do Google Sheets configurada no setup.
    3. Visualizar a nova linha de pedido preenchida com os dados do comprador (nome, endereço, produto, valor).
    4. Embalar o produto físico.
    5. Gerar a etiqueta de envio (Mercado Envios).
    6. Postar o produto e colar o código de rastreio na coluna correspondente da planilha.
*   **Pontos de Contato:** Planilha do Google Sheets do próprio seller, E-mail de notificação do Stripe.
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Vendi! E não precisei negociar nada no WhatsApp", "Que prático ver tudo organizado na planilha."
    *   *Emoções:* Satisfação extrema, sensação de eficiência e paz mental por não ter que gerenciar conversas exaustivas.
*   **Pontos de Dor:**
    *   Dependência de abrir a planilha manualmente para verificar novos pedidos e dados de entrega.
*   **Oportunidades:**
    *   Fornecer um template de planilha pré-formatado com cores, filtros e instruções claras de onde colar o código de rastreio para disparar notificações automáticas ao comprador.

---

## 2. Jornada do Comprador (Lucas)

A jornada do comprador é focada em velocidade, simplicidade e segurança, eliminando qualquer barreira que possa causar o abandono do carrinho.

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  JORNADA DO COMPRADOR                                           │
├───────────────────┬───────────────────────────┬───────────────────────────┬─────────────────────┤
│ 1. Descoberta     │ 2. Entrada na Vitrine     │ 3. Checkout de Passo Único│ 4. Pós-compra       │
└───────────────────┴───────────────────────────┴───────────────────────────┴─────────────────────┘
```

### Etapa 2.1: Descoberta (Rede Social)
*   **Ações do Usuário:**
    1. Navegar pelo feed ou stories do Instagram/Pinterest.
    2. Visualizar o post do seller exibindo um item exclusivo ou raro.
    3. Sentir interesse imediato pelo produto.
    4. Clicar no link de checkout direto disponibilizado na bio ou no sticker do story.
*   **Pontos de Contato:** Post ou Story na rede social (Instagram, Pinterest, TikTok).
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Que item incrível!", "Preciso garantir isso antes que outra pessoa compre", "Quanto será que custa o frete?"
    *   *Emoções:* Desejo de compra, senso de urgência (especialmente para itens únicos) e curiosidade.
*   **Pontos de Dor:**
    *   Frustração ao ter que mandar mensagem direta ("Preço no Direct") ou iniciar uma conversa no WhatsApp apenas para saber o preço e o frete.
*   **Oportunidades:**
    *   Incentivar os sellers a incluírem o preço e a chamada "Link de compra direta na bio" de forma clara em todas as publicações.

### Etapa 2.2: Entrada na Vitrine PWA
*   **Ações do Usuário:**
    1. Aguardar o carregamento da página do produto dentro do navegador integrado da rede social.
    2. Visualizar as fotos detalhadas do produto.
    3. Ler a descrição persuasiva gerada pela IA.
    4. Verificar o preço destacado e a disponibilidade de estoque.
*   **Pontos de Contato:** Vitrine PWA do Produto (Visualização do Comprador).
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Carregou muito rápido!", "O site é bem limpo e direto", "Parece um ambiente seguro."
    *   *Emoções:* Alívio por não se deparar com pop-ups, banners pesados ou solicitações invasivas de cookies.
*   **Pontos de Dor:**
    *   Lentidão de carregamento em conexões móveis instáveis (3G/4G).
    *   Desconfiança ao acessar um site desconhecido para realizar um pagamento.
*   **Oportunidades:**
    *   Otimização extrema de performance (First Contentful Paint < 1.5s).
    *   Exibição proeminente de selos de segurança oficiais do Stripe ("Powered by Stripe") para transmitir confiança imediata.

### Etapa 2.3: Checkout de Passo Único (One-Page Checkout)
*   **Ações do Usuário:**
    1. Digitar o CEP no campo de frete.
    2. Visualizar e selecionar a opção de frete calculada (Mercado Envios).
    3. Preencher os dados básicos de entrega (Nome, Endereço, Telefone).
    4. Preencher os dados do cartão de crédito ou selecionar a opção de Pix.
    5. Clicar no botão "Confirmar Compra".
*   **Pontos de Contato:** Formulário de Checkout de Passo Único integrado na página do produto.
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Que ótimo que não precisa criar conta!", "Muito rápido de preencher", "Espero que o pagamento passe de primeira."
    *   *Emoções:* Foco, pressa para garantir o item exclusivo e satisfação com a ausência de fricção.
*   **Pontos de Dor:**
    *   Fricção de ter que criar contas, inventar senhas e confirmar e-mails em checkouts tradicionais.
    *   Formulários longos com campos desnecessários.
*   **Oportunidades:**
    *   Implementar autocompletar de endereço instantâneo a partir do CEP.
    *   Utilizar o Stripe Elements para garantir um formulário de pagamento fluido, seguro e responsivo.

### Etapa 2.4: Confirmação e Pós-compra
*   **Ações do Usuário:**
    1. Visualizar a tela de sucesso com o resumo do pedido e o identificador único da transação.
    2. Receber o e-mail de confirmação de pagamento enviado diretamente pelo Stripe.
    3. Aguardar o envio do código de rastreio.
    4. Receber o produto em casa e verificar sua qualidade.
*   **Pontos de Contato:** Tela de Sucesso do Checkout, E-mail de confirmação do Stripe.
*   **Pensamentos e Emoções:**
    *   *Pensamentos:* "Deu tudo certo!", "O item já é meu", "Agora é só esperar chegar."
    *   *Emoções:* Alívio, satisfação com a compra e expectativa positiva pela entrega.
*   **Pontos de Dor:**
    *   Incerteza sobre o andamento do envio e falta de comunicação pós-pagamento.
*   **Oportunidades:**
    *   Disparar um e-mail automático de atualização de rastreio para o comprador assim que o seller preencher a coluna de rastreamento na planilha do Google Sheets.

---

## 3. Pontos de Sincronização e Handoff (Onde as Jornadas se Cruzam)

O sucesso do CapybaraCart reside na sincronização invisível e instantânea entre as ações do comprador e a planilha de controle do vendedor, operando sob a filosofia de armazenamento zero.

```
  COMPRADOR (Lucas)                                         VENDEDOR (Alberto/Mariana)
┌───────────────────┐                                     ┌───────────────────────────┐
│ Finaliza o        │ ───► [Serverless Proxy (BYOK)] ───► │ Recebe notificação Stripe │
│ pagamento no PWA  │                                     │ e nova linha no Sheets    │
└───────────────────┘                                     └───────────────────────────┘
```

### 1. O Momento da Transação (Handoff Financeiro e de Dados)
*   **Como funciona:** No exato momento em que o comprador (Lucas) clica em "Confirmar Compra", o PWA envia os dados de pagamento e entrega para a Serverless Function do CapybaraCart.
*   **A Sincronização:** A Serverless Function descriptografa temporariamente em memória as chaves do seller, processa a cobrança no Stripe e, imediatamente após a aprovação, grava uma nova linha na planilha do Google Sheets do vendedor.
*   **Resultado:** O comprador vê a tela de sucesso instantaneamente, enquanto o vendedor recebe a notificação de faturamento do Stripe no celular e vê o pedido aparecer organizado em sua planilha, sem que nenhum dado tenha sido retido nos servidores da plataforma.

### 2. O Loop de Logística e Rastreamento
*   **Como funciona:** O vendedor prepara o pacote físico e realiza a postagem nos Correios ou transportadora.
*   **A Sincronização:** Ao obter o código de rastreio, o vendedor abre sua planilha do Google Sheets e cola o código na coluna designada.
*   **Resultado:** Um gatilho leve (ou verificação periódica) detecta a atualização na planilha e dispara um e-mail automático para o comprador com o link de rastreamento, fechando o ciclo de comunicação de forma totalmente automatizada e transparente.