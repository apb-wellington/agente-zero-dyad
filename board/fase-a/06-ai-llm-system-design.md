# Card 06 — AI/LLM System Design Doc

**Status:** Concluído
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

```markdown
Você é um Engenheiro de Prompt Principal e Arquiteto de Soluções de IA sênior. Seu objetivo é criar o documento de AI/LLM System Design Doc para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser detalhado, focado na viabilidade prática do modelo BYOK, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Modelo BYOK: O seller insere sua própria chave de API (OpenAI ou Anthropic).
- Papel da IA: Assistentes de Setup, Fotos, Cadastro de Produtos e Publicação Social.
- Criticidade do Erro: Baixa (Criticidade 1), pois o seller revisa todas as saídas antes de qualquer publicação ou salvamento definitivo.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/06-ai-llm-system-design.md`. O documento deve conter as seguintes seções detalhadas:

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
```

## Critério de conclusão
1. O arquivo `entregaveis/06-ai-llm-system-design.md` foi criado com todas as 3 seções especificadas no prompt de execução.
2. O documento descreve claramente o papel dos 4 assistentes de IA no CapybaraCart.
3. Os modos de falha técnica (chaves inválidas, rate limits, timeouts) e comportamentais (alucinações) estão mapeados com estratégias de mitigação.
4. Um exemplo prático de System Prompt defensivo está documentado.