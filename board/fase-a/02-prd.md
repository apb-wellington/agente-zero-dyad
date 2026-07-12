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

```markdown
Você é um Product Manager (PM) sênior com forte background técnico, especializado em metodologias ágeis e especificação de produtos SaaS e PWAs. Seu objetivo é criar o PRD (Product Requirement Document) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser um PRD extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade radical, modularidade extrema) e BYOK (Bring Your Own Key).
- Integrações: Stripe (pagamento), Mercado Envios (frete), Google Sheets (banco de dados de clientes), APIs de LLM (OpenAI/Anthropic) e APIs de redes sociais (Instagram, Pinterest, TikTok).
- Armazenamento Zero: Dados de compradores vão direto para o Google Sheets do seller.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/02-prd.md`. O documento deve conter as seguintes seções detalhadas:

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
```

## Critério de conclusão
1. O arquivo `entregaveis/02-prd.md` foi criado com todas as 7 seções especificadas no prompt de execução.
2. O PRD detalha as histórias de usuário, requisitos funcionais e não funcionais de forma clara e numerada.
3. Os cenários de erro para falhas de API (Stripe, Google Sheets, LLM) estão mapeados com fluxos de fallback claros.
4. A matriz MoSCoW está presente e alinhada com a filosofia de simplicidade radical do MVP.