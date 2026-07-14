# Product Requirement Document (PRD) — CapybaraCart

## 1. Introdução e Objetivos

### 1.1 Problema Detalhado
Hobbistas, colecionadores e pequenos vendedores eventuais (como criadores de plantas raras, artesãos e curadores de brechós) enfrentam uma barreira dupla ao tentar comercializar seus produtos digitalmente:
1. **Complexidade Operacional:** Plataformas de e-commerce tradicionais (Shopify, Nuvemshop) exigem setups complexos, configurações de ERP, taxas fixas mensais e uma curva de aprendizado desproporcional para quem vende de forma esporádica.
2. **Exaustão de Atendimento:** O uso do WhatsApp como canal de fechamento de vendas gera um desgaste mental severo devido à necessidade de atendimento em tempo real, cálculo manual de frete e negociações repetitivas de preço (barganha).

### 1.2 Solução Proposta
O **CapybaraCart** é uma vitrine e checkout PWA (Progressive Web App) ultra-simples que opera sob o modelo **BYOK (Bring Your Own Key)** e **Armazenamento Zero**. Ele permite que o vendedor configure sua própria infraestrutura de pagamentos (Stripe), banco de dados (Google Sheets) e inteligência artificial (OpenAI/Anthropic) em minutos. O comprador final acessa uma página de produto leve, direta e realiza a compra de forma autônoma em um checkout de passo único, sem necessidade de criar conta ou fazer login.

### 1.3 Objetivos de Negócio e Produto
* **Time-to-Value (TTV) Mínimo:** Permitir que um vendedor leigo configure suas chaves de API, cadastre um produto com auxílio de IA e publique o link de venda em menos de 1 hora.
* **Custo Operacional Zero para a Plataforma:** Viabilizar uma arquitetura serverless/estática onde a plataforma não arque com custos de banco de dados ou processamento de transações dos usuários.
* **Frictionless Checkout:** Maximizar a conversão de vendas vindas de redes sociais através de um fluxo de checkout de passo único sem fricção de login.

---

## 2. Escopo do MVP (In-Scope vs. Out-of-Scope)

### 2.1 In-Scope (O que entra no MVP)
* **Módulo de Setup BYOK:** Interface para inserção, validação técnica e salvamento seguro (criptografado localmente) das chaves de API do Stripe, Google Sheets e OpenAI/Anthropic.
* **Vitrine PWA Estática:** Geração de uma página pública de produto otimizada para dispositivos móveis, com carregamento instantâneo e suporte offline básico.
* **Checkout de Passo Único (One-Page Checkout):** Formulário unificado de frete (Mercado Envios) e pagamento (Stripe) sem exigência de login ou cadastro de conta para o comprador.
* **Assistente de Cadastro de Produtos (IA):** Interface conversacional que ajuda o vendedor a gerar títulos e descrições persuasivas sem alucinar dados técnicos ou preços.
* **Integração de Passagem (Pass-Through Integration):** Mecanismo serverless que recebe os dados do checkout e os grava diretamente na planilha do Google Sheets do vendedor, realizando o processamento do pagamento no Stripe sem reter dados no servidor da plataforma.

### 2.2 Out-of-Scope (O que está fora do MVP)
* **Área de Membros/Login para Compradores:** Compradores não possuem conta; cada compra é tratada de forma isolada e direta.
* **Banco de Dados Central de Pedidos:** A plataforma não armazena histórico de vendas; a planilha do Google Sheets do vendedor é o único banco de dados de pedidos.
* **Painel de Analytics Complexo:** Gráficos de faturamento e relatórios avançados não serão desenvolvidos (o vendedor pode analisar seus dados diretamente no Google Sheets ou Stripe).
* **Aplicativos Móveis Nativos:** O produto será exclusivamente um PWA responsivo rodando no navegador.

---

## 3. User Stories Principais

| ID | Ator | Descrição (Eu quero... Para que...) | Critério de Aceite Básico |
|---|---|---|---|
| **US-01** | Vendedor | Como vendedor eventual, quero inserir minhas chaves de API de forma simples e segura para que eu possa usar a plataforma sem pagar comissões ou mensalidades. | Validação em tempo real de cada chave inserida com feedback visual de sucesso/erro. |
| **US-02** | Vendedor | Como hobbista sem experiência em marketing, quero que uma IA me ajude a escrever a descrição do meu produto para que eu possa publicá-lo com um apelo comercial profissional rapidamente. | Chat interativo que gera título e descrição baseados em perguntas simples sobre o produto. |
| **US-03** | Comprador | Como comprador vindo do Instagram, quero fechar a compra de um item em uma única tela sem precisar criar conta para que eu não desista da compra por preguiça ou falta de tempo. | Formulário de checkout unificado (dados de entrega + cartão) que processa a compra em menos de 30 segundos. |
| **US-04** | Vendedor | Como vendedor, quero que todos os dados dos meus compradores e pedidos caiam direto na minha planilha do Google Sheets para que eu possa gerenciar minhas entregas sem precisar de um painel administrativo complexo. | Inserção automática de uma nova linha contendo dados do comprador, produto, valor e código de rastreio assim que o pagamento for aprovado. |
| **US-05** | Comprador | Como comprador, quero pagar de forma segura usando meu cartão de crédito para que eu tenha certeza de que meus dados financeiros não serão roubados ou expostos. | Integração direta com o Stripe Elements/SDK garantindo conformidade PCI-DSS. |
| **US-06** | Vendedor | Como vendedor, quero gerar um link direto de checkout para compartilhar nas minhas redes sociais para que meus seguidores comprem sem precisar falar comigo no WhatsApp. | Botão de cópia rápida do link da vitrine PWA diretamente no dashboard do vendedor. |

---

## 4. Requisitos Funcionais Numerados (RFs)

### 4.1 Módulo de Setup e BYOK
* **RF-01 (Prioridade: Alta | Dep: Nenhum):** O sistema deve fornecer um formulário para inserção das chaves de API: Stripe (Secret Key/Publishable Key), Google Sheets (Spreadsheet ID e credenciais de serviço) e OpenAI/Anthropic (API Key).
* **RF-02 (Prioridade: Alta | Dep: RF-01):** O sistema deve validar a conexão de cada chave de API de forma assíncrona antes de permitir o salvamento.
* **RF-03 (Prioridade: Alta | Dep: RF-02):** O sistema deve criptografar as chaves de API no navegador do vendedor utilizando criptografia simétrica (AES-GCM-256) baseada em uma senha mestre definida pelo vendedor.

### 4.2 Cadastro de Produtos e IA
* **RF-04 (Prioridade: Alta | Dep: RF-01):** O sistema deve permitir o cadastro manual de produtos (nome, preço, estoque, fotos e descrição).
* **RF-05 (Prioridade: Média | Dep: RF-01):** O sistema deve integrar um assistente de IA que entrevista o vendedor para gerar títulos e descrições otimizadas para conversão.
* **RF-06 (Prioridade: Média | Dep: RF-04):** O sistema deve fornecer instruções visuais assistidas por IA para que o vendedor tire e enquadre fotos dos produtos de forma adequada.

### 4.3 Vitrine e Checkout PWA
* **RF-07 (Prioridade: Alta | Dep: RF-04):** O sistema deve gerar uma página pública (vitrine) responsiva para cada produto cadastrado.
* **RF-08 (Prioridade: Alta | Dep: RF-07):** O sistema deve integrar um formulário de checkout de passo único na própria página do produto.
* **RF-09 (Prioridade: Alta | Dep: RF-01, RF-08):** O sistema deve processar pagamentos via Stripe utilizando as credenciais fornecidas pelo vendedor.
* **RF-10 (Prioridade: Média | Dep: RF-08):** O sistema deve calcular o frete dinamicamente utilizando a API do Mercado Envios (ou similar configurada pelo vendedor).

### 4.4 Integração e Sincronização de Dados
* **RF-11 (Prioridade: Alta | Dep: RF-01, RF-09):** O sistema deve disparar uma requisição serverless (pass-through) após a confirmação de pagamento do Stripe para gravar os dados do pedido na planilha do Google Sheets do vendedor.
* **RF-12 (Prioridade: Alta | Dep: RF-11):** O sistema deve gerar um identificador único de pedido e incluí-lo tanto no Stripe quanto no Google Sheets para fins de conciliação.

---

## 5. Requisitos Não Funcionais Integrados (RNFs)

* **RNF-01 (Segurança - Criptografia Local):** Nenhuma chave de API do vendedor deve ser transmitida ou armazenada em texto puro nos servidores da plataforma. Toda criptografia e descriptografia de credenciais sensíveis deve ocorrer no client-side ou em memória volátil de execução serverless.
* **RNF-02 (Performance - Carregamento Rápido):** A vitrine PWA do produto deve atingir um tempo de carregamento (First Contentful Paint - FCP) inferior a 1.5 segundos em conexões 3G móveis simuladas, garantindo que compradores vindos de redes sociais não abandonem a página.
* **RNF-03 (Confiabilidade - Degradação Suave):** Se o serviço de IA (OpenAI/Anthropic) estiver indisponível, o sistema deve desativar o assistente de escrita e permitir o cadastro 100% manual sem travar a aplicação.
* **RNF-04 (Privacidade - Armazenamento Zero):** O CapybaraCart não deve possuir banco de dados relacional ou não-relacional próprio para dados de compradores. Dados de cartão de crédito, nomes e endereços de entrega devem transitar diretamente para os serviços finais (Stripe e Google Sheets) sob protocolo HTTPS estrito.

---

## 6. Matriz de Priorização (MoSCoW)

```
┌───────────────────────────────────────────┐  ┌───────────────────────────────────────────┐
│                 MUST HAVE                 │  │                SHOULD HAVE                │
│ - RF-01: Formulário de chaves BYOK        │  │ - RF-05: Assistente de descrição por IA   │
│ - RF-02: Validação assíncrona de chaves   │  │ - RF-06: Assistente de fotos de produtos  │
│ - RF-03: Criptografia local de chaves     │  │ - RF-10: Cálculo de frete Mercado Envios  │
│ - RF-04: Cadastro manual de produtos      │  │                                           │
│ - RF-07: Vitrine PWA responsiva           │  │                                           │
│ - RF-08: Checkout de passo único          │  │                                           │
│ - RF-09: Processamento de pagamento Stripe│  │                                           │
│ - RF-11: Gravação direta no Google Sheets │  │                                           │
│ - RF-12: Identificador único de pedido    │  │                                           │
└───────────────────────────────────────────┘  └───────────────────────────────────────────┘
┌───────────────────────────────────────────┐  ┌───────────────────────────────────────────┐
│                COULD HAVE                 │  │                WON'T HAVE                 │
│ - Assistente de publicação social por IA  │  │ - Área de membros para compradores        │
│ - Múltiplos temas visuais para a vitrine  │  │ - Banco de dados central de compradores   │
│ - Notificação de venda via Telegram/Whats │  │ - Painel de analytics nativo complexo     │
│                                           │  │ - Aplicativos móveis nativos (iOS/Android)│
└───────────────────────────────────────────┘  └───────────────────────────────────────────┘
```

---

## 7. Cenários de Erro e Exceção Mapeados

### 7.1 Cenário 01: Chave de API do Stripe Inválida ou Expirada
* **Gatilho:** O comprador tenta finalizar o pagamento, mas a chave do Stripe do vendedor foi revogada ou está incorreta.
* **Comportamento do Sistema:** O checkout captura o erro HTTP 401/403 retornado pelo Stripe.
* **Mensagem de Erro Amigável:** *"Não foi possível processar o pagamento. O checkout deste vendedor está temporariamente em manutenção. Por favor, tente novamente mais tarde ou entre em contato com o vendedor."*
* **Fluxo de Fallback:** O sistema bloqueia novas tentativas de checkout para aquela vitrine e envia um alerta visual no dashboard privado do vendedor solicitando a revalidação da chave do Stripe.

### 7.2 Cenário 02: Planilha do Google Sheets Inacessível ou Cheia
* **Gatilho:** O pagamento é aprovado no Stripe, mas a planilha do Google Sheets do vendedor está inacessível (deletada, sem permissão de escrita ou limite de linhas excedido).
* **Comportamento do Sistema:** A Serverless Function captura a falha de gravação da API do Google.
* **Mensagem de Erro Amigável (Comprador):** Nenhuma mensagem de erro impeditiva é exibida ao comprador (para não gerar pânico pós-pagamento). A tela exibe: *"Sua compra foi aprovada com sucesso! O vendedor foi notificado e enviará os detalhes do pedido."*
* **Fluxo de Fallback:** O sistema salva os dados do pedido criptografados no `localStorage` ou `IndexedDB` do navegador do vendedor (ou em uma fila de contingência serverless temporária). Assim que o vendedor acessar o dashboard, o sistema exibe um alerta vermelho: *"Atenção: Existem pedidos pendentes de sincronização devido a um problema na sua planilha do Google Sheets. Clique aqui para sincronizar manualmente."*

### 7.3 Cenário 03: Falha ou Timeout na API de LLM (OpenAI/Anthropic)
* **Gatilho:** O vendedor tenta usar o assistente de IA para gerar a descrição do produto, mas a API de LLM retorna timeout ou erro de cota excedida.
* **Comportamento do Sistema:** O frontend captura a falha de requisição da API de IA.
* **Mensagem de Erro Amigável:** *"O assistente de IA está temporariamente descansando. Não se preocupe, você pode digitar o título e a descrição do seu produto manualmente no formulário ao lado!"*
* **Fluxo de Fallback:** O painel lateral do assistente de IA é minimizado suavemente e o foco do cursor é direcionado automaticamente para os campos de texto manuais do formulário de cadastro de produto.