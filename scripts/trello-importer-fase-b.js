// ==============================================================================
// 1. CREDENCIAIS (PREENCHA AQUI)
// ==============================================================================
// Pegue sua chave e token em: https://trello.com/app-key
const TRELLO_API_KEY = 'xxxx';
const TRELLO_TOKEN = 'xxxx';
const BOARD_NAME = 'CapibaraCart Development';

// ==============================================================================
// 2. DADOS DO PROJETO (CONTEÚDO INTEGRAL DOS CARDS DA FASE B)
// ==============================================================================
const RAW_MARKDOWN = `
# Card 01 — PWA Shell & Design Tokens Setup

**Status:** A fazer
**Depende de:** Nenhum

## Objetivo
Estruturar o esqueleto inicial do Progressive Web App (PWA) utilizando React, Vite e Tailwind CSS, aplicando rigorosamente a escala de Design Tokens (cores, tipografia, espaçamento e acessibilidade) e configurando o suporte offline básico via Service Workers.

## Contexto essencial
*   **Filosofia Visual:** Design utilitário, limpo, de alto contraste e focado em performance móvel (WCAG AA/AAA).
*   **Pilha de Fontes:** Uso exclusivo de fontes nativas do sistema para evitar requisições externas e garantir carregamento instantâneo.
*   **Performance:** Meta de First Contentful Paint (FCP) < 1.2s em conexões móveis.
*   **Rotas Iniciais:**
    *   \`/setup\` (Configuração BYOK)
    *   \`/dashboard\` (Painel do Seller)
    *   \`/produtos/novo\` (Cadastro de Produto)
    *   \`/p/:id\` (Vitrine Pública e Checkout)

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Engenheiro Frontend Sênior e especialista em Performance Web e PWAs. Seu objetivo é criar a estrutura inicial do Progressive Web App (PWA) do CapybaraCart utilizando React, Vite e Tailwind CSS.

### Diretrizes Técnicas e de Design:
1. **Configuração do Tailwind CSS:**
   - Configure o arquivo \`tailwind.config.js\` estendendo o tema padrão com os Design Tokens exatos do CapybaraCart:
     - **Cores:** Primary (Verde Capivara \`#15803D\`), Primary Dark (\`#166534\`), Primary Light (\`#DCFCE7\`), Neutral Bg (\`#FFFFFF\`), Neutral Bg Secondary (\`#F9FAFB\`), Text Primary (\`#111827\`), Text Secondary (\`#4B5563\`), Text Disabled (\`#9CA3AF\`), Border Default (\`#D1D5DB\`), Border Light (\`#E5E7EB\`).
     - **Status:** Success (\`#166534\`/\`#DEF7EC\`), Warning (\`#9A3412\`/\`#FDF6B2\`), Error (\`#991B1B\`/\`#FDE8E8\`), Info (\`#1E40AF\`/\`#E1EFFE\`).
     - **Fontes:** Pilha sans-serif nativa do sistema (\`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif\`).
     - **Bordas:** \`radius-sm\` (4px), \`radius-md\` (8px - padrão), \`radius-lg\` (12px).
2. **Estrutura de Pastas e Rotas:**
   - Configure o roteamento básico (utilizando \`react-router-dom\` ou similar) para as seguintes páginas (crie componentes dummy/esqueletos para cada uma):
     - \`/setup\` (Setup BYOK)
     - \`/dashboard\` (Dashboard do Seller)
     - \`/produtos/novo\` (Cadastro de Produto)
     - \`/p/:id\` (Vitrine Pública e Checkout)
3. **Configuração PWA e Service Worker:**
   - Configure o plugin do Vite para PWA (\`vite-plugin-pwa\`) para gerar um manifesto válido (\`manifest.json\`) com ícones de capivara e suporte a Service Worker.
   - Implemente uma estratégia básica de cache offline do tipo *Stale-While-Revalidate* para os assets estáticos (HTML, JS, CSS, imagens).
4. **Acessibilidade (WCAG):**
   - Garanta que os estados de foco (\`focus-visible\`) utilizem um anel duplo de alto contraste: \`ring-2 ring-offset-2 ring-[#15803D]\`.

Gere o código limpo, modular, sem placeholders e pronto para produção.
\`\`\`

## Critério de aceite
1. O projeto inicial React + Vite + Tailwind CSS está configurado e rodando sem erros.
2. O arquivo \`tailwind.config.js\` contém a escala exata de cores, tipografia e espaçamentos especificados.
3. O roteamento entre as 4 páginas principais está funcional (renderizando os componentes esqueleto).
4. O manifesto do PWA é gerado corretamente e o Service Worker é registrado com sucesso no navegador.
5. Os estados de foco de acessibilidade estão implementados nos elements interativos base.

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

\`\`\`markdown
Você é um Engenheiro de Segurança e Desenvolvedor Backend sênior. Seu objetivo é implementar o fluxo de autenticação do vendedor e o cofre seguro de chaves (Secure Vault) para o CapybaraCart.

### Diretrizes de Implementação:
1. **Autenticação do Seller:**
   - Implemente o login social do Google (OAuth 2.0) utilizando um provedor de backend/banco gerenciado (como Supabase Auth ou Firebase Auth).
   - Proteja a rota \`/setup\` e \`/dashboard\` para que apenas usuários autenticados tenham acesso.
2. **Interface de Setup BYOK (\`/setup\`):**
   - Crie o formulário responsivo para inserção das chaves de API (Stripe, Google Sheets, Gemini/OpenAI).
   - Aplique os Design Tokens de status (Success, Warning, Error) para dar feedback visual em tempo real.
3. **Validação Assíncrona de Chaves:**
   - Crie funções serverless (Edge Functions) para testar a validade de cada chave de API de forma isolada:
     - *Stripe:* Realize uma chamada simples de listagem (ex: \`stripe.customers.list({ limit: 1 })\`).
     - *Google Sheets:* Tente ler os metadados da planilha informada (\`Spreadsheet ID\`).
     - *IA:* Realize uma chamada de teste de chat de baixo custo (ex: 1 token de entrada).
4. **Criptografia e Armazenamento Seguro (Vault):**
   - Salve as chaves validadas no banco de dados de metadados do seller.
   - As chaves privadas (Stripe Secret Key, OpenAI API Key) devem ser criptografadas em repouso utilizando AES-256-GCM antes de serem salvas no banco de dados, atrelando a chave de descriptografia ao ID do usuário autenticado.

Gere um código limpo, seguro, com tratamento de erros robusto e em conformidade com a LGPD.
\`\`\`

## Critério de aceite
1. O login via Google OAuth 2.0 está funcional e redireciona o usuário corretamente.
2. A rota \`/setup\` está protegida e exibe o formulário de chaves de API.
3. O sistema valida assincronamente cada chave de API e exibe o status visual de "Conectado" ou "Erro" na tela.
4. As chaves privadas são criptografadas com AES-256-GCM antes de serem persistidas no banco de dados.
5. O banco de dados armazena apenas os metadados do seller, sem qualquer dado de comprador.

# Card 03 — Dashboard & Product List

**Status:** A fazer
**Depende de:** 02-setup-byok-secure-vault

## Objetivo
Construir a interface do painel de controle do vendedor (Dashboard), exibindo a listagem de produtos cadastrados, links rápidos de compartilhamento de checkout, atalhos para a planilha do Google Sheets e tratamento de estado vazio (Empty State).

## Contexto essencial
*   **Filosofia Fusca:** Interface limpa, direta e focada na ação. Sem gráficos complexos ou distrações visuais.
*   **Soberania de Dados:** O dashboard exibe os produtos cadastrados pelo seller (armazenados de forma segura no banco de metadados do seller) e fornece um link direto para a planilha do Google Sheets onde os pedidos dos compradores são registrados.
*   **Funcionalidades Principais:**
    *   Listagem de produtos com foto, título, preço e estoque.
    *   Botão de cópia rápida do link público de checkout (\`/p/:id\`).
    *   Atalho proeminente para abrir a planilha do Google Sheets.
    *   Botão para criar novo produto (redireciona para \`/produtos/novo\`).

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Engenheiro Frontend Sênior com foco em UX/UI e usabilidade. Seu objetivo é construir a página de Dashboard do Seller (\`/dashboard\`) para o CapybaraCart.

### Diretrizes de Implementação:
1. **Layout e Estrutura (Responsivo):**
   - Crie um cabeçalho limpo contendo o logo do CapybaraCart, um botão de atalho para abrir a planilha do Google Sheets do seller (em nova aba) e o menu de perfil do usuário.
   - O corpo da página deve listar os produtos ativos do seller em formato de grid (desktop) ou lista vertical (mobile).
2. **Listagem de Produtos:**
   - Cada card de produto deve exibir: imagem em miniatura, título, preço formatado em BRL, quantidade em estoque, link público de checkout e botões de ação (Editar, Excluir).
   - Implemente a funcionalidade de cópia rápida do link de checkout para a área de transferência (Clipboard API) com feedback visual temporário de "Copiado!".
3. **Estado Vazio (Empty State):**
   - Se o seller não tiver nenhum produto cadastrado, exiba uma ilustração amigável de capivara com uma mensagem de incentivo e um botão de destaque (CTA) para cadastrar o primeiro produto.
4. **Integração com o Backend:**
   - Busque a lista de produtos do banco de metadados do seller (Supabase/Firebase) filtrando pelo ID do usuário autenticado.
   - Garanta que a página exiba skeletons de carregamento enquanto os dados são buscados.

Utilize os Design Tokens de cores, tipografia e espaçamento configurados no Tailwind CSS. Gere um código limpo, modular e acessível.
\`\`\`

## Critério de aceite
1. A rota \`/dashboard\` renderiza a listagem de produtos corretamente para usuários autenticados.
2. O botão de cópia rápida do link de checkout funciona e exibe feedback visual de sucesso.
3. O atalho para a planilha do Google Sheets abre a URL correta em uma nova aba.
4. O estado vazio (Empty State) é exibido corretamente quando a lista de produtos está vazia.
5. A interface é totalmente responsiva e atende aos critérios de contraste WCAG AA.

# Card 04 — Product Creation & AI Assistant

**Status:** A fazer
**Depende de:** 03-dashboard-product-list

## Objetivo
Implementar a interface de cadastro de produtos (\`/produtos/novo\`) integrada ao painel lateral do Assistente de IA, permitindo que o vendedor gere títulos e descrições persuasivas a partir de notas brutas, além de receber dicas de fotografia.

## Contexto essencial
*   **Filosofia "Fusca" (Human-in-the-Loop):** A IA atua estritamente como assistente de apoio. O vendedor revisa e edita tudo antes de salvar.
*   **Prevenção de Alucinações:** A IA é proibida de inventar ou preencher dados "hard" (preço e estoque). Estes campos são numéricos e preenchidos exclusivamente pelo vendedor no formulário principal.
*   **Modelos Suportados:** Integração flexível via Serverless Proxy com \`gemini-1.5-flash\` (recomendado/grátis) ou \`gpt-4o-mini\`.
*   **Formato de Saída:** A IA deve responder em JSON estruturado para permitir o preenchimento automático dos campos do formulário com um clique.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Engenheiro Frontend e especialista em Engenharia de Prompt. Seu objetivo é implementar a página de Cadastro de Produtos (\`/produtos/novo\`) integrada ao Assistente de IA do CapybaraCart.

### Diretrizes de Implementação:
1. **Layout de Duas Colunas (Responsivo):**
   - No desktop, exiba o formulário de cadastro na esquerda e o painel do Assistente de IA na direita. No mobile, empilhe os elementos de forma fluida.
2. **Formulário de Cadastro:**
   - Campos obrigatórios: Título, Descrição Curta, História Detalhada, Preço (BRL) e Estoque (numérico).
   - Área de upload de fotos com pré-visualização local.
3. **Painel do Assistente de IA (Chat Lateral):**
   - Interface de chat simples para o seller interagir com a IA.
   - Envie as notas brutas do seller para o Serverless Proxy (que descriptografa a chave de IA do seller e faz a chamada ao provedor).
   - Quando a IA retornar o JSON estruturado (Título, Descrição Curta, História Detalhada), exiba um botão proeminente "Aplicar ao Formulário" que preenche os campos correspondentes automaticamente.
4. **Engenharia de Prompt Defensiva:**
   - Utilize o System Prompt estruturado do \`AI/LLM System Design Doc\` para garantir que a IA não alucine preços ou estoque e responda estritamente no formato JSON esperado.
5. **Degradação Suave (Graceful Degradation):**
   - Se a API de IA falhar (timeout, chave sem saldo ou rate limit), exiba uma mensagem amigável e garanta que o formulário manual continue 100% funcional.

Gere um código limpo, modular, com excelente usabilidade e feedbacks visuais de carregamento.
\`\`\`

## Critério de aceite
1. A rota \`/produtos/novo\` renderiza o formulário e o painel de chat lateral corretamente.
2. O upload de fotos exibe a pré-visualização da imagem localmente.
3. A integração com a API de IA funciona, enviando o prompt e retornando a resposta estruturada.
4. O botão "Aplicar ao Formulário" preenche os campos de título e descrição com sucesso.
5. Os campos de preço e estoque são validados numericamente e não são alterados pela IA.
6. O sistema lida com falhas de API de IA exibindo mensagens de erro amigáveis sem travar o formulário manual.

# Card 05 — Public Product Page & One-Page Checkout

**Status:** A fazer
**Depende de:** 04-product-creation-ai-assistant

## Objetivo
Construir a página pública do produto (\`/p/:id\`) otimizada para dispositivos móveis, integrando a vitrine de exibição com um formulário de checkout de passo único (One-Page Checkout) utilizando o Stripe Elements para pagamentos seguros e sem fricção de login.

## Contexto essencial
*   **Filosofia "Fusca" (Frictionless):** O comprador não precisa criar conta ou fazer login. O fluxo de compra deve ser concluído em uma única tela de rolagem contínua.
*   **Stripe Elements:** Integração direta com o SDK do Stripe para renderizar os campos de cartão de crédito e Pix de forma segura e em conformidade com o PCI-DSS.
*   **Cálculo de Frete:** Integração com a API do Mercado Envios (ou similar) para calcular o frete dinamicamente a partir do CEP do comprador.
*   **Performance:** Carregamento instantâneo (FCP < 1.2s) para evitar abandono de tráfego vindo de redes sociais.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

\`\`\`markdown
Você é um Engenheiro Frontend Sênior especialista em Checkout, Conversão e Integração com Gateways de Pagamento. Seu objetivo é construir a página pública do produto e o checkout de passo único (\`/p/:id\`) do CapybaraCart.

### Diretrizes de Implementação:
1. **Design Mobile-First e Responsivo:**
   - Renderize a vitrine do produto no topo (imagens, título, descrição persuasiva e preço destacado).
   - Logo abaixo, exiba o formulário de checkout unificado dividido em seções visuais claras:
     - *1. Entrega:* Campo de CEP com cálculo de frete assíncrono (Mercado Envios) e campos de endereço autocompletados.
     - *2. Identificação:* Nome completo e e-mail (apenas para envio do código de rastreio).
     - *3. Pagamento:* Formulário seguro do Stripe Elements (suportando Cartão de Crédito e Pix).
2. **Integração com Stripe Elements:**
   - Carregue o SDK do Stripe utilizando a chave pública (\`Publishable Key\`) do seller (recuperada do banco de metadados).
   - Monte o componente \`Elements\` e renderize os campos de pagamento de forma segura.
3. **Processamento do Checkout:**
   - Ao clicar em "Confirmar e Pagar Agora", desabilite o botão e exiba o loader de carregamento.
   - Envie o payload de checkout (dados do comprador, frete selecionado, itens e as chaves criptografadas do seller) para o Serverless Proxy para processar a transação.
4. **Tratamento de Erros e Sucesso:**
   - Se o pagamento for aprovado, redirecione o comprador para a tela de sucesso exibindo o resumo do pedido e o ID único da transação.
   - Se falhar, exiba mensagens de erro amigáveis e claras (ex: saldo insuficiente, cartão recusado) sem expor logs técnicos.

Gere um código limpo, performático, com excelente usabilidade e acessibilidade WCAG AA.
\`\`\`

## Critério de aceite
1. A rota pública \`/p/:id\` renderiza as informações do produto corretamente a partir do ID.
2. O formulário de checkout é exibido na mesma página de forma responsiva e sem exigência de login.
3. O campo de CEP calcula o frete dinamicamente e atualiza o valor total do pedido.
4. O Stripe Elements é carregado e renderizado com sucesso utilizando as credenciais do seller.
5. O clique em pagar envia o payload correto para o proxy e lida adequadamente com as respostas de sucesso ou erro.

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

\`\`\`markdown
Você é um Engenheiro de Integrações e Desenvolvedor Backend sênior, especialista em arquiteturas serverless e segurança de dados. Seu objetivo é implementar o Serverless Proxy e a integração com o Google Sheets para o CapybaraCart.

### Diretrizes de Implementação:
1. **Estrutura da Serverless Function (\`api/checkout\`):**
   - Crie uma função serverless stateless (Vercel/Netlify Functions) em Node.js para processar a finalização do checkout.
   - A função deve receber: dados do comprador (nome, e-mail, endereço), dados do pedido (produto, valor, frete), ID do PaymentIntent do Stripe e as credenciais criptografadas do seller.
2. **Descriptografia em Memória:**
   - Recupere a chave de criptografia associada ao seller e descriptografe as chaves privadas (Stripe Secret Key e credenciais do Google Sheets) estritamente em memória volátil.
3. **Confirmação de Pagamento (Stripe):**
   - Utilize o SDK do Stripe para validar o status do \`PaymentIntent\` recebido. Garanta que a cobrança foi realmente aprovada antes de prosseguir para a gravação dos dados.
4. **Gravação no Google Sheets (Pass-Through):**
   - Utilize a API oficial do Google Sheets (\`googleapis\` npm package) para conectar à planilha do seller utilizando as credenciais descriptografadas.
   - Insira uma nova linha na planilha contendo: ID do Pedido (gerado no formato \`CAPY-XXXX-XXXX\`), Data/Hora, Nome do Comprador, E-mail, Endereço de Entrega, Nome do Produto, Valor Pago e Status ("Aguardando Envio").
5. **Tratamento de Falhas e Resiliência:**
   - Se a gravação no Google Sheets falhar (timeout, planilha cheia ou erro de permissão), capture o erro, confirme o sucesso do pagamento para o comprador e retorne o payload do pedido criptografado com uma flag \`pending_sync: true\` para que o PWA salve no IndexedDB do vendedor.

Gere um código limpo, performático, sem persistência de dados de compradores e com tratamento de erros robusto.
\`\`\`

## Critério de aceite
1. A Serverless Function \`api/checkout\` está criada e responde corretamente a requisições POST.
2. O sistema descriptografa as chaves do seller em memória e valida o pagamento no Stripe com sucesso.
3. Os dados do pedido são gravados corretamente como uma nova linha na planilha do Google Sheets do seller.
4. Nenhum dado de comprador é persistido no banco de dados da plataforma.
5. O fluxo de fallback funciona corretamente, retornando o payload de sincronização pendente caso a API do Google Sheets seja simulada como fora do ar.

# Card 07 — Social Sharing & Growth Loop

**Status:** A fazer
**Depende de:** 04-product-creation-ai-assistant, 05-public-product-page-one-page-checkout

## Objetivo
Implementar o assistente de publicação social por IA (geração de copys para posts) e o growth loop viral (marca d'água discreta e link do CapybaraCart nas vitrines públicas) para atração orgânica de novos sellers com custo zero de aquisição.

## Contexto essencial
*   **Growth Loop (Selo de Conversão):** Toda vitrine pública de produto (\`/p/:id\`) deve exibir no rodapé um selo discreto e elegante: *"Venda simplificada com o CapybaraCart. Crie sua vitrine grátis."*, apontando para a landing page de conversão.
*   **Assistente de Publicação (IA):** Integrar uma funcionalidade no dashboard que utiliza a API de LLM (Gemini/OpenAI) para gerar variações de copys de posts otimizadas para Instagram, Pinterest e TikTok com base no produto cadastrado.
*   **Foco em Conversão:** As copys geradas devem focar em gatilhos de escassez (essencial para itens únicos) e exclusividade, incentivando o clique direto no link de checkout.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro Frontend Sênior e especialista em Growth Hacking e Marketing de Produto. Seu objetivo é implementar as funcionalidades de compartilhamento social e o growth loop viral do CapybaraCart.

### Diretrizes de Implementação:
1. **O Selo de Conversão (Growth Loop):**
   - Adicione um componente de rodapé fixo ou flutuante discreto na página pública do produto (\`/p/:id\`).
   - O selo deve conter o texto: *"Venda simplificada com o CapybaraCart. Crie sua vitrine grátis."* e um link que redireciona para a landing page de cadastro da plataforma.
   - Garanta que o design do selo seja elegante, minimalista e não interfira no fluxo de checkout do comprador.
2. **Interface do Assistente de Publicação Social:**
   - No dashboard do seller, ao lado de cada produto cadastrado, adicione um botão "Gerar Post Social".
   - Ao clicar, abra um modal ou painel lateral integrado com o assistente de IA.
3. **Geração de Copys por IA:**
   - Envie uma requisição para o Serverless Proxy solicitando a geração de copys de divulgação.
   - O prompt de sistema deve instruir a IA a gerar 3 variações de texto formatadas para:
     - *Instagram:* Foco em engajamento, hashtags e chamada para o link da bio.
     - *Pinterest:* Foco em descrição visual e palavras-chave de busca.
     - *TikTok:* Foco em ganchos rápidos (hooks) e ideias de roteiro de vídeo curto.
4. **Facilidade de Compartilhamento:**
   - Exiba as copys geradas em abas organizadas por rede social.
   - Adicione um botão de "Copiar Texto" para cada variação e um botão de compartilhamento direto utilizando a Web Share API do navegador (quando disponível no dispositivo móvel).

Gere um código limpo, modular, com excelente usabilidade e focado em performance de conversão.
```

## Critério de aceite
1. O selo de conversão do CapybaraCart é exibido corretamente no rodapé de todas as vitrines públicas de produtos.
2. O botão "Gerar Post Social" está presente no dashboard e abre a interface do assistente.
3. A integração com a IA gera copys formatadas especificamente para Instagram, Pinterest e TikTok.
4. A funcionalidade de cópia rápida de texto e compartilhamento direto via Web Share API funciona perfeitamente.
5. A interface é responsiva e segue os Design Tokens de estilo e acessibilidade.
\`;

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
      var checkRes = trelloRequest('cards/' + cRes.id + '/checklists?name=' + encodeURIComponent('Critérios de aceite'), 'POST');
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
    
    var labels = ['Fase B']; // Label padrão para identificar a fase de desenvolvimento
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
      if (line.indexOf('**Depende de:**') === 0) {
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