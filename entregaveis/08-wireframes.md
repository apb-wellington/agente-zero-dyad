# Wireframes — CapybaraCart

Este documento apresenta a arquitetura de informação e os wireframes estruturais do CapybaraCart. Seguindo a filosofia **"New Beetle"** (uma evolução inteligente da simplicidade bruta do Fusca: moderna, limpa, altamente utilitária e focada em conversão instantânea), as interfaces são projetadas para carregar instantaneamente e guiar o usuário de forma intuitiva, sem distrações visuais.

---

## 1. Arquitetura de Informação e Mapa do Site (Sitemap)

O fluxo de navegação é dividido de forma estrita entre a área administrativa do vendedor (Seller) e a experiência pública de compra (Comprador).

```
[ÁREA DO SELLER (Autenticada via Google)]
       │
       ├──► /setup (Setup BYOK - Configuração de Chaves)
       │
       ├──► /dashboard (Painel Geral de Produtos e Links)
       │
       └──► /produtos/novo (Cadastro de Produto + Assistente de IA)


[ÁREA DO COMPRADOR (Pública, Sem Login)]
       │
       └──► /p/:id (Vitrine de Produto + Checkout de Passo Único Integrado)
```

---

## 2. Wireframes das Telas do Seller

As telas do vendedor são projetadas para desktop e mobile (responsivas), priorizando clareza no preenchimento de dados e facilidade de cópia de links.

### 2.1 Tela de Setup BYOK (`/setup`)

Esta tela é o ponto de partida. Ela permite que o vendedor insira suas credenciais de forma segura e didática.

```
+-----------------------------------------------------------------------------+
|  [CapybaraCart Logo]                                    [Seu Alberto v]     |
+-----------------------------------------------------------------------------+
|                                                                             |
|  Configuração de Chaves (BYOK)                                              |
|  Traga suas próprias chaves de API para operar com custo zero de comissão.  |
|                                                                             |
|  +-----------------------------------------------------------------------+  |
|  | 1. Gateway de Pagamento (Stripe)                                      |  |
|  |    Chave Pública (Publishable Key):                                   |  |
|  |    [ pk_live_...                                                  ]   |  |
|  |    Chave Secreta (Secret Key):                                        |  |
|  |    [ ******************************************                   ]   |  |
|  |                                              [ Status: Conectado (V) ]|  |
|  +-----------------------------------------------------------------------+  |
|  | 2. Banco de Dados de Pedidos (Google Sheets)                          |  |
|  |    [ Conectar com o Google Drive ] -> OAuth Flow                      |  |
|  |    ID da Planilha de Destino:                                         |  |
|  |    [ 1X2y3Z_spreadsheet_id_example                                 ]   |  |
|  |                                              [ Status: Conectado (V) ]|  |
|  +-----------------------------------------------------------------------+  |
|  | 3. Inteligência Artificial (Gemini / OpenAI)                          |  |
|  |    Provedor: (o) Gemini (Grátis)   ( ) OpenAI (Pago)                  |  |
|  |    Chave de API:                                                      |  |
|  |    [ AIzaSy...                                                    ]   |  |
|  |                                              [ Status: Conectado (V) ]|  |
|  +-----------------------------------------------------------------------+  |
|                                                                             |
|                                                     [ Salvar Configurações ]|
+-----------------------------------------------------------------------------+
```

### 2.2 Tela de Dashboard (`/dashboard`)

O painel de controle foca no essencial: gerenciar produtos ativos, copiar links de checkout rápidos e acessar a planilha de pedidos.

```
+-----------------------------------------------------------------------------+
|  [CapybaraCart Logo]      [Planilha de Pedidos (Sheets)]     [Seu Alberto v] |
+-----------------------------------------------------------------------------+
|                                                                             |
|  Seus Produtos Ativos                                    [+ Novo Produto]   |
|                                                                             |
|  +-----------------------------------------------------------------------+  |
|  | [Foto]  Muda de Orquídea Cattleya Walkeriana                          |  |
|  |         Preço: R$ 89,90 | Estoque: 1 un.                              |  |
|  |         Link: https://capy.cart/p/walkeriana-01   [Copiar Link]       |  |
|  |                                                       [Editar] [Excluir]  |
|  +-----------------------------------------------------------------------+  |
|  | [Foto]  Vaso de Barro Artesanal - Médio                               |  |
|  |         Preço: R$ 35,00 | Estoque: 5 un.                              |  |
|  |         Link: https://capy.cart/p/vaso-barro-02   [Copiar Link]       |  |
|  |                                                       [Editar] [Excluir]  |
|  +-----------------------------------------------------------------------+  |
|                                                                             |
+-----------------------------------------------------------------------------+
```

### 2.3 Tela de Cadastro de Produto com Assistente de IA (`/produtos/novo`)

Layout dividido em duas colunas (lado a lado no desktop, empilhado no mobile) para permitir a interação fluida com o assistente de IA durante o preenchimento do formulário.

```
+-----------------------------------------------------------------------------+
|  [CapybaraCart Logo]                                    [Seu Alberto v]     |
+-----------------------------------------------------------------------------+
|  < Voltar para o Dashboard                                                  |
|                                                                             |
|  +-----------------------------------+ +----------------------------------+ |
|  | FORMULÁRIO DO PRODUTO             | | ASSISTENTE DE IA (COPILOTO)      | |
|  |                                   | |                                  | |
|  | Fotos do Produto:                 | | [Capy]: Olá! Me fale um pouco    | |
|  | +-------------------------------+ | | sobre o produto que você quer    | |
|  | | [Clique para enviar foto]     | | | cadastrar hoje.                  | |
|  | +-------------------------------+ | |                                  | |
|  |                                   | | [Seller]: É uma muda de orquídea | |
|  | Título do Produto:                | | Cattleya walkeriana bem cheirosa | |
|  | [ Muda de Orquídea Cattleya...  ] | | que eu mesmo dividi do meu vaso. | |
|  |                                   | |                                  | |
|  | Descrição do Produto:             | | [Capy]: Excelente! Gerando       | |
|  | +-------------------------------+ | | sugestão de título e descrição   | |
|  | | Esta muda de Cattleya...      | | | otimizados para conversão...     | |
|  | |                               | | |                                  | |
|  | +-------------------------------+ | | [Aplicar Título e Descrição (->)]| |
|  |                                   | |                                  | |
|  | Preço (R$):      Estoque (un.):   | |                                  | |
|  | [ 89,90       ]  [ 1 ]            | |                                  | |
|  |                                   | |                                  | |
|  | [ Salvar e Publicar ]             | | [Digite sua mensagem...       ]  | |
|  +-----------------------------------+ +----------------------------------+ |
+-----------------------------------------------------------------------------+
```

---

## 3. Wireframes das Telas do Comprador

A experiência do comprador é otimizada para dispositivos móveis (Mobile-First), pois a maior parte do tráfego é proveniente de links diretos em redes sociais (Instagram, TikTok, Pinterest).

### 3.1 Tela da Vitrine do Produto + Checkout de Passo Único (`/p/:id`)

Tudo acontece em uma única página de rolagem contínua para maximizar a conversão.

```
+---------------------------------------+
| [CapybaraCart Logo]                   |
+---------------------------------------+
|                                       |
|  +---------------------------------+  |
|  |                                 |  |
|  |                                 |  |
|  |         FOTO DO PRODUTO         |  |
|  |                                 |  |
|  |                                 |  |
|  +---------------------------------+  |
|                                       |
|  Muda de Orquídea Cattleya Walkeriana |
|  R$ 89,90                             |
|                                       |
|  Descrição:                           |
|  Esta muda de Cattleya walkeriana é   |
|  uma divisão direta da planta matriz  |
|  da minha coleção pessoal. Flor rosa  |
|  altamente perfumada e saudável.      |
|                                       |
|  ===================================  |
|  FINALIZAR COMPRA (Sem criar conta)   |
|  ===================================  |
|                                       |
|  1. Dados de Entrega                  |
|  CEP:                                 |
|  [ 25620-000 ] [Calcular Frete]       |
|                                       |
|  Opções de Envio:                     |
|  (o) Mercado Envios (3 dias) - R$ 15  |
|                                       |
|  Endereço Completo:                   |
|  [ Rua das Flores, 123 - Petrópolis ] |
|  Nome Completo:                       |
|  [ Lucas Silva                      ] |
|  E-mail (para receber o rastreio):    |
|  [ lucas.silva@email.com            ] |
|                                       |
|  2. Pagamento (Processado via Stripe) |
|  Número do Cartão:                    |
|  [ 4111 1111 1111 1111            ]   |
|  Validade:          CVC:              |
|  [ 12/26 ]          [ 123 ]           |
|                                       |
|  Total a Pagar: R$ 104,90             |
|                                       |
|  [ (V) Confirmar e Pagar Agora ]      |
|  (Seus dados estão protegidos)        |
|                                       |
+---------------------------------------+
```

---

## 4. Estados Alternativos

### 4.1 Estado Vazio (Empty State) - Dashboard do Seller

Exibido quando o vendedor acessa o painel pela primeira vez e ainda não possui produtos cadastrados.

```
+-----------------------------------------------------------------------------+
|  [CapybaraCart Logo]                                    [Seu Alberto v]     |
+-----------------------------------------------------------------------------+
|                                                                             |
|  Seus Produtos Ativos                                                       |
|                                                                             |
|  +-----------------------------------------------------------------------+  |
|  |                                                                       |  |
|  |                      [Ícone de Capivara Simpática]                    |  |
|  |                                                                       |  |
|  |                     Nenhum produto cadastrado ainda!                  |  |
|  |         Que tal cadastrar seu primeiro item com a ajuda da nossa IA?  |  |
|  |                                                                       |  |
|  |                            [+ Cadastrar Meu Primeiro Produto]         |  |
|  |                                                                       |  |
|  +-----------------------------------------------------------------------+  |
|                                                                             |
+-----------------------------------------------------------------------------+
```

### 4.2 Estado de Carregamento (Loading State)

Exibido durante validações de chaves de API ou processamento de pagamento no checkout.

```
+-----------------------------------------------------------------------------+
|  [ (V) Confirmar e Pagar Agora ]                                            |
|                                                                             |
|  +-----------------------------------------------------------------------+  |
|  |                                                                       |  |
|  |                       [ Loader Animado de Capivara ]                  |  |
|  |                                                                       |  |
|  |                     Processando seu pagamento com segurança...        |  |
|  |                     Por favor, não feche esta janela.                 |  |
|  |                                                                       |  |
|  +-----------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------+
```

### 4.3 Estado de Erro (Error State) - Falha de Pagamento no Checkout

Exibido de forma clara e amigável quando ocorre uma falha transacional, sem expor detalhes técnicos confusos ao comprador.

```
+-----------------------------------------------------------------------------+
|  [ (V) Confirmar e Pagar Agora ]                                            |
|                                                                             |
|  +-----------------------------------------------------------------------+  |
|  |                                                                       |  |
|  |                       [ Ícone de Alerta Vermelho ]                    |  |
|  |                                                                       |  |
|  |                     Não foi possível processar o pagamento.           |  |
|  |                     Motivo: Cartão com saldo insuficiente ou recusado. |  |
|  |                                                                       |  |
|  |                     [ Tentar Novamente com Outro Cartão ]             |  |
|  |                                                                       |  |
|  +-----------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------+