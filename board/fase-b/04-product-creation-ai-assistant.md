# Card 04 — Product Creation & AI Assistant

**Status:** A fazer
**Depende de:** 03-dashboard-product-list

## Objetivo
Implementar a interface de cadastro de produtos (`/produtos/novo`) integrada ao painel lateral do Assistente de IA, permitindo que o vendedor gere títulos e descrições persuasivas a partir de notas brutas, além de receber dicas de fotografia.

## Contexto essencial
*   **Filosofia "Fusca" (Human-in-the-Loop):** A IA atua estritamente como assistente de apoio. O vendedor revisa e edita tudo antes de salvar.
*   **Prevenção de Alucinações:** A IA é proibida de inventar ou preencher dados "hard" (preço e estoque). Estes campos são numéricos e preenchidos exclusivamente pelo vendedor no formulário principal.
*   **Modelos Suportados:** Integração flexível via Serverless Proxy com `gemini-1.5-flash` (recomendado/grátis) ou `gpt-4o-mini`.
*   **Formato de Saída:** A IA deve responder em JSON estruturado para permitir o preenchimento automático dos campos do formulário com um clique.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro Frontend e especialista em Engenharia de Prompt. Seu objetivo é implementar a página de Cadastro de Produtos (`/produtos/novo`) integrada ao Assistente de IA do CapybaraCart.

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
   - Utilize o System Prompt estruturado do `AI/LLM System Design Doc` para garantir que a IA não alucine preços ou estoque e responda estritamente no formato JSON esperado.
5. **Degradação Suave (Graceful Degradation):**
   - Se a API de IA falhar (timeout, chave sem saldo ou rate limit), exiba uma mensagem amigável e garanta que o formulário manual continue 100% funcional.

Gere um código limpo, modular, com excelente usabilidade e feedbacks visuais de carregamento.
```

## Critério de aceite
1. A rota `/produtos/novo` renderiza o formulário e o painel de chat lateral corretamente.
2. O upload de fotos exibe a pré-visualização da imagem localmente.
3. A integração com a API de IA funciona, enviando o prompt e retornando a resposta estruturada.
4. O botão "Aplicar ao Formulário" preenche os campos de título e descrição com sucesso.
5. Os campos de preço e estoque são validados numericamente e não são alterados pela IA.
6. O sistema lida com falhas de API de IA exibindo mensagens de erro amigáveis sem travar o formulário manual.