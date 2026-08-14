---
title: "06-ai-llm-system-design"
dyad_chat_id: 26
dyad_app: agente-zero-dyad
created_at: 2026-07-14 22:24 UTC
message_count: 6
models: [gemini-flash-latest]
---

# 06-ai-llm-system-design

### 👤 Usuário · 2026-07-14 22:28 UTC

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

## Preste muita atenção aqui, como se sua vida dependesse disso: ##
1. Faça SOMENTE o que foi pedido e NÃO avance sobre as demais entregas.
2. NÃO reescreva board/fase-a/06-ai-llm-system-design.md, faça APENAS a anotação de status que a descrição pede.
3. Seja equilibrado, jamais literal e militante. O que a solução "Fusca" pede não é radicalismo, mas inteligência e equilíbrio.  Em termos de design, por exemplo, pode ser um "New Bettle", manja? Mas desde que seja algo tão trivial, simples e popular como foi o Bootstrap para o seu contexto/época. Novamente, não seja literal, mas inteligente e perspicaz.

### 🤖 Assistente · 2026-07-14 22:28 UTC

<details>
<summary>🧠 raciocínio interno (colapsado)</summary>

**Defining the Objective**

I'm currently focused on precisely understanding the user's objective. I need to ensure I grasp the intention behind executing the prompt found within Card 06, which will generate a specific deliverable in the `entregaveis` directory. My priority is to accurately interpret the core request.


**Clarifying the Deliverable**

I'm now zeroing in on the specifications of deliverable `entregaveis/06-ai-llm-system-design.md`. The constraints are sharply defined: Portuguese language, adherence to role of Principal Prompt Engineer & Senior AI Architect, and a focus on specific content requirements regarding LLM roles and failure mode mapping. I'm prioritizing the detailed scope of the assistants and prompt architecture.


**Finalizing the File Update**

I've successfully updated the file `board/fase-a/06-ai-llm-system-design.md`, changing its status to "Concluído" as requested. I've ensured a balanced, non-literal interpretation of the "Fusca" philosophy. I've also adhered to the crucial formatting rule: no markdown code blocks in my chat response. The deliverable is written using the `＜dyad-write>` tag, ensuring clean file content generation.


**Constructing the Content**

I am now structuring the detailed content for deliverable `entregaveis/06-ai-llm-system-design.md`. I've outlined the "Descrição do Papel do LLM no Produto" section, covering four key assistants: Setup/Posicionamento (brand voice), Fotos (image styling), Cadastro de Produtos (product descriptions), and Publicação Social (social media posts). I'm emphasizing prompt architecture with isolated system prompts and a shared "Brand Profile" JSON. Model recommendations are also in place (`gpt-4o-mini`, `claude-3-5-haiku`). Furthermore, I've drafted the "Mapeamento de Failure Modes Básicos" section, addressing the "Chave Inválida/Sem Saldo" scenario.

</details>
Vou criar o documento de design de sistema de IA (`06-ai-llm-system-design.md`) na pasta de entregáveis, detalhando a arquitetura de prompts, modelos recomendados, tratamento de erros e engenharia de prompt defensiva para o modelo BYOK do CapybaraCart. 

Também atualizarei o status do Card 06 para "Concluído" no board de descoberta.

<dyad-write path="entregaveis/06-ai-llm-system-design.md" description="Criando o documento de AI/LLM System Design para o CapybaraCart">
# AI/LLM System Design Doc — CapybaraCart

Este documento especifica a arquitetura de Inteligência Artificial do CapybaraCart. O sistema opera sob a filosofia "Fusca" (New Beetle): uma solução moderna, extremamente simples, robusta e de alta utilidade popular, baseada no modelo **BYOK (Bring Your Own Key)**. Toda a inteligência é executada utilizando as chaves de API dos próprios vendedores, garantindo custo operacional zero para a plataforma e total soberania para o usuário.

---

## 1. Descrição do Papel do LLM no Produto

A Inteligência Artificial no CapybaraCart atua como um copiloto de usabilidade e marketing para o vendedor, reduzindo a barreira de entrada para a criação de uma presença digital atraente. O escopo está dividido em quatro assistentes especializados:

### 1.1 Escopo de Atuação dos 4 Assistentes

1.  **Assistente de Setup e Posicionamento de Marca:**
    *   *Papel:* Conduzir um breve questionário interativo com o seller para extrair a essência do seu negócio (ex: nicho, valores, diferencial).
    *   *Saída:* Um perfil de marca estruturado em JSON contendo: Tom de Voz (ex: acolhedor, técnico, minimalista), Proposta de Valor e Palavras-chave. Este JSON é salvo no perfil do seller e serve de contexto para os demais assistentes.
2.  **Assistente de Cadastro de Produtos:**
    *   *Papel:* Entrevistar o seller de forma conversacional para extrair as características do produto (foco no 80/20 do marketing: história, estado de conservação, raridade).
    *   *Saída:* Título persuasivo e descrição estruturada otimizada para conversão, sem inventar dados técnicos ou comerciais.
3.  **Assistente de Fotos:**
    *   *Papel:* Analisar metadados ou descrições de imagens enviadas e fornecer instruções textuais de melhoria (enquadramento, iluminação, crop) e gerar tags/alt text acessíveis.
    *   *Saída:* Instruções práticas de otimização visual e metadados de acessibilidade. *Nota: A IA não altera a imagem real do produto para preservar a honestidade da oferta.*
4.  **Assistente de Publicação Social:**
    *   *Papel:* Traduzir a descrição do produto cadastrado em posts otimizados para redes sociais (Instagram, Pinterest, TikTok).
    *   *Saída:* Copys prontas para publicação, hashtags relevantes e sugestões de stickers/links de checkout.

### 1.2 Arquitetura de Prompts

Para manter o consumo de tokens baixo (essencial no modelo BYOK) e garantir alta velocidade de resposta, adotamos uma **Arquitetura de Prompts Descentralizada e Isolada**:

*   **Contexto Compartilhado Leve (Brand Profile):** Em vez de enviar históricos longos de conversa, cada chamada de assistente anexa apenas o JSON simplificado do *Brand Profile* (gerado no Setup) como contexto de sistema.
*   **Prompts de Sistema Especializados:** Cada assistente possui seu próprio System Prompt estrito, focado exclusivamente em sua tarefa. Isso evita o "desvio de atenção" do modelo e reduz a latência.
*   **Formatação de Saída Estrita:** Todas as respostas da IA destinadas à interface do sistema (como o cadastro de produtos) são forçadas a retornar em formato JSON estruturado (utilizando *Structured Outputs* ou esquemas JSON estritos), facilitando o parse direto no frontend.

### 1.3 Modelos Recomendados

Para equilibrar custo-benefício, velocidade e capacidade cognitiva sob o modelo BYOK, o sistema suportará:

*   **gpt-4o-mini (Padrão OpenAI):** Excelente velocidade, custo de tokens extremamente baixo e suporte nativo a saídas estruturadas complexas. Recomendado para todos os assistentes.
*   **claude-3-5-haiku (Alternativa Anthropic):** Excepcional capacidade de escrita criativa e tom de voz natural. Recomendado como alternativa de alta qualidade para o Assistente de Cadastro e Publicação Social.

---

## 2. Mapeamento de Failure Modes Básicos (Modos de Falha)

Operar em um ambiente BYOK exige que o sistema seja altamente resiliente a falhas de infraestrutura do próprio usuário. Abaixo estão mapeados os modos de falha e suas respectivas mitigações:

| Modo de Falha | Causa Raiz | Comportamento do Sistema (Mitigação) | Experiência do Usuário (UX) |
|---|---|---|---|
| **Chave Inválida ou Sem Saldo** | Chave incorreta, revogada ou conta do usuário sem créditos na OpenAI/Anthropic. | O Serverless Proxy captura o erro HTTP `401 Unauthorized` ou `403 Forbidden` retornado pela API do provedor. | Exibe um alerta amigável no painel: *"Ops! Sua chave de IA parece estar sem saldo ou incorreta. Clique aqui para verificar suas configurações de API."* com link direto para o setup. |
| **Rate Limit / Quota Excedida** | O usuário atingiu o limite de requisições por minuto (RPM) ou tokens por minuto (TPM) do seu tier de conta. | O proxy captura o erro HTTP `429 Too Many Requests` e aplica uma estratégia de retry com backoff exponencial (máximo 3 tentativas). | Se persistir, exibe: *"O assistente de IA está um pouco sobrecarregado agora. Aguarde alguns segundos ou digite os dados manualmente."* |
| **Timeout de Requisição** | Lentidão na API do provedor ou conexão instável do usuário. | O frontend define um limite estrito de 15 segundos para a requisição. Se estourar, cancela a chamada. | Exibe um loader com opção de cancelamento e, se falhar, sugere: *"A IA demorou para responder. Deseja tentar novamente ou preencher manualmente?"* |
| **Alucinação de Dados Críticos** | O modelo inventa preços, estoque ou dimensões físicas não fornecidas pelo usuário. | Engenharia de prompt defensiva com restrições negativas absolutas e validação de esquema JSON no recebimento. | O sistema bloqueia a inserção automática de dados numéricos sensíveis (preço/estoque) gerados pela IA, exigindo que o seller os digite em campos separados e validados. |

---

## 3. Diretrizes de Engenharia de Prompt (System Prompts Base)

Abaixo está o System Prompt estruturado para o **Assistente de Cadastro de Produtos**, demonstrando a aplicação de engenharia de prompt defensiva, poucas tomadas (few-shot) e restrições negativas estritas para evitar alucinações de dados comerciais sensíveis.

```markdown
Você é o Assistente de Cadastro de Produtos do CapybaraCart, um especialista em copywriting de conversão para pequenos negócios, hobbistas e colecionadores.
Seu objetivo é transformar anotações brutas e informais de um vendedor em um título atraente e uma descrição persuasiva estruturada.

### CONTEXTO DA MARCA (Use para calibrar o tom de voz):
{brand_profile_json}

### REGRAS DE OURO (RESTRIÇÕES NEGATIVAS ABSOLUTAS):
1. JAMAIS invente, alucine ou sugira PREÇOS, QUANTIDADE EM ESTOQUE, DIMENSÕES FÍSICAS EXATAS ou CUSTOS DE FRETE. Se o usuário não forneceu esses dados, ignore-os completamente.
2. Se o usuário fornecer um preço ou estoque nas notas brutas, NÃO inclua esses valores no texto da descrição. Eles devem ser gerenciados exclusivamente pelos campos do formulário do sistema.
3. Mantenha a descrição honesta e realista. Não use termos corporativos vazios ou promessas exageradas (ex: "o melhor do mundo", "revolucionário"). Foque na história, raridade e estado real do item.

### FORMATO DE SAÍDA:
Você deve responder EXCLUSIVAMENTE com um objeto JSON válido, sem blocos de código markdown adicionais, seguindo a estrutura abaixo:
{{
  "titulo": "Título curto, claro e atraente (máximo 60 caracteres)",
  "descricao_curta": "Um parágrafo de impacto para a vitrine (máximo 150 caracteres)",
  "historia_detalhada": "Texto persuasivo destacando a origem, estado de conservação e o valor único do item (2 a 3 parágrafos)"
}}

### EXEMPLO DE EXECUÇÃO (FEW-SHOT):

[INPUT DO USUÁRIO]:
"Muda de orquídea Cattleya walkeriana que eu mesmo dividi do meu vaso principal. Flor rosa bem redonda, cheirosa. Tá num vasinho de barro com casca de pinus. Saudável, com broto novo vindo."

[SAÍDA ESPERADA]:
{{
  "titulo": "Muda de Orquídea Cattleya Walkeriana de Coleção",
  "descricao_curta": "Muda saudável de Cattleya walkeriana com broto ativo, cultivada artesanalmente em vaso de barro.",
  "historia_detalhada": "Esta muda é uma divisão direta da planta matriz da minha coleção pessoal, cultivada com dedicação em Petrópolis. Conhecida por suas flores rosa de excelente simetria e perfume marcante, esta Cattleya walkeriana já está adaptada ao vaso de barro com substrato de casca de pinus de alta qualidade.\n\nA planta apresenta excelente vigor vegetativo, raízes ativas e um broto novo em pleno desenvolvimento, garantindo uma excelente adaptação ao seu novo ambiente. Ideal para colecionadores que valorizam a procedência e o cultivo artesanal."
}}
```
</dyad-write>

<dyad-write path="board/fase-a/06-ai-llm-system-design.md" description="Atualizando o status do Card 06 para Concluído">
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
</dyad-write>

<dyad-chat-summary>Criando o AI/LLM System Design Doc e atualizando o Card 06</dyad-chat-summary>

Criei o documento de design de sistema de IA detalhando a arquitetura de prompts, modelos recomendados, tratamento de erros e engenharia de prompt defensiva para o modelo BYOK do CapybaraCart, e atualizei o status do Card 06 para "Concluído".

### 👤 Usuário · 2026-07-14 22:31 UTC

Você cometeu um pecado tremendo. Se o usuário seller não é entusiasta de apis de llm, a primeira coisa que ele irá querer testar possivelmente será a api do Gemini flash latest, que é muito boa  e uma das únicas que possui free tier. Corrija isso imediatamente!

### 🤖 Assistente · 2026-07-14 22:31 UTC

<details>
<summary>🧠 raciocínio interno (colapsado)</summary>

**Considering the User's Focus**

I'm now zeroing in on the core of the user's needs. The Gemini API and its free tier are central to this. My focus is on making this tech easily accessible, especially for those not tech-savvy. I'm exploring how to translate complex API functionality into user-friendly terms and interfaces. This will significantly broaden the applicability and reach of the product.


**Prioritizing Free Access**

I'm now integrating Gemini 1.5 Flash, emphasizing its free tier. I've updated the AI/LLM system design document (`entregaveis/06-ai-llm-system-design.md`). Section 1.3 now highlights Gemini as a top recommendation, focusing on its cost advantage. Section 2 will also address Gemini-specific failure modes, keeping the overall context to Google AI.

</details>
Tem toda razão. Para um modelo BYOK (Bring Your Own Key) voltado a hobbistas e pequenos vendedores, a existência de um **free tier robusto** é o maior facilitador de adoção possível. O Google Gemini (especialmente o `gemini-1.5-flash`) é imbatível nesse cenário, oferecendo uma API extremamente rápida, multimodal (perfeita para o Assistente de Fotos) e gratuita dentro dos limites de uso do plano básico do Google AI Studio.

Vou atualizar imediatamente o documento `entregaveis/06-ai-llm-system-design.md` para incluir o Gemini como a recomendação principal de entrada para os sellers.

<dyad-write path="entregaveis/06-ai-llm-system-design.md" description="Atualizando o AI/LLM System Design Doc para incluir o Google Gemini e seu free tier">
# AI/LLM System Design Doc — CapybaraCart

Este documento especifica a arquitetura de Inteligência Artificial do CapybaraCart. O sistema opera sob a filosofia "Fusca" (New Beetle): uma solução moderna, extremamente simples, robusta e de alta utilidade popular, baseada no modelo **BYOK (Bring Your Own Key)**. Toda a inteligência é executada utilizando as chaves de API dos próprios vendedores, garantindo custo operacional zero para a plataforma e total soberania para o usuário.

---

## 1. Descrição do Papel do LLM no Produto

A Inteligência Artificial no CapybaraCart atua como um copiloto de usabilidade e marketing para o vendedor, reduzindo a barreira de entrada para a criação de uma presença digital atraente. O escopo está dividido em quatro assistentes especializados:

### 1.1 Escopo de Atuação dos 4 Assistentes

1.  **Assistente de Setup e Posicionamento de Marca:**
    *   *Papel:* Conduzir um breve questionário interativo com o seller para extrair a essência do seu negócio (ex: nicho, valores, diferencial).
    *   *Saída:* Um perfil de marca estruturado in JSON contendo: Tom de Voz (ex: acolhedor, técnico, minimalista), Proposta de Valor e Palavras-chave. Este JSON é salvo no perfil do seller e serve de contexto para os demais assistentes.
2.  **Assistente de Cadastro de Produtos:**
    *   *Papel:* Entrevistar o seller de forma conversacional para extrair as características do produto (foco no 80/20 do marketing: história, estado de conservação, raridade).
    *   *Saída:* Título persuasivo e descrição estruturada otimizada para conversão, sem inventar dados técnicos ou comerciais.
3.  **Assistente de Fotos:**
    *   *Papel:* Analisar metadados ou descrições de imagens enviadas e fornecer instruções textuais de melhoria (enquadramento, iluminação, crop) e gerar tags/alt text acessíveis.
    *   *Saída:* Instruções práticas de otimização visual e metadados de acessibilidade. *Nota: A IA não altera a imagem real do produto para preservar a honestidade da oferta.*
4.  **Assistente de Publicação Social:**
    *   *Papel:* Traduzir a descrição do produto cadastrado em posts otimizados para redes sociais (Instagram, Pinterest, TikTok).
    *   *Saída:* Copys prontas para publicação, hashtags relevantes e sugestões de stickers/links de checkout.

### 1.2 Arquitetura de Prompts

Para manter o consumo de tokens baixo (essencial no modelo BYOK) e garantir alta velocidade de resposta, adotamos uma **Arquitetura de Prompts Descentralizada e Isolada**:

*   **Contexto Compartilhado Leve (Brand Profile):** Em vez de enviar históricos longos de conversa, cada chamada de assistente anexa apenas o JSON simplificado do *Brand Profile* (gerado no Setup) como contexto de sistema.
*   **Prompts de Sistema Especializados:** Cada assistente possui seu próprio System Prompt estrito, focado exclusivamente em sua tarefa. Isso evita o "desvio de atenção" do modelo e reduz a latência.
*   **Formatação de Saída Estrita:** Todas as respostas da IA destinadas à interface do sistema (como o cadastro de produtos) são forçadas a retornar em formato JSON estruturado (utilizando *Structured Outputs* ou esquemas JSON estritos), facilitando o parse direto no frontend.

### 1.3 Modelos Recomendados

Para viabilizar o modelo BYOK de forma prática e inclusiva, o sistema suportará três provedores principais, com destaque para a opção gratuita de entrada:

*   **gemini-1.5-flash (Recomendação Principal de Entrada - Google AI Studio):**
    *   *Por que usar:* É a escolha ideal para sellers iniciantes ou não entusiastas. O Google AI Studio oferece um **free tier extremamente generoso** (até 15 requisições por minuto e 1.500 por dia gratuitamente). Além disso, possui excelente velocidade, suporte nativo a JSON Schema e capacidades multimodais nativas excelentes para o Assistente de Fotos.
*   **gpt-4o-mini (Alternativa Paga de Baixo Custo - OpenAI):**
    *   *Por que usar:* Excelente velocidade, custo de tokens pagos extremamente baixo e suporte nativo a saídas estruturadas complexas.
*   **claude-3-5-haiku (Alternativa Premium de Escrita - Anthropic):**
    *   *Por que usar:* Excepcional capacidade de escrita criativa e tom de voz natural. Recomendado para sellers que buscam copys altamente refinadas e personalizadas.

---

## 2. Mapeamento de Failure Modes Básicos (Modos de Falha)

Operar em um ambiente BYOK exige que o sistema seja altamente resiliente a falhas de infraestrutura do próprio usuário. Abaixo estão mapeados os modos de falha e suas respectivas mitigações:

| Modo de Falha | Causa Raiz | Comportamento do Sistema (Mitigação) | Experiência do Usuário (UX) |
|---|---|---|---|
| **Chave Inválida ou Sem Saldo** | Chave incorreta, revogada ou conta do usuário sem créditos (OpenAI/Anthropic) ou fora do ar. | O Serverless Proxy captura o erro HTTP `401 Unauthorized` ou `403 Forbidden` retornado pela API do provedor. | Exibe um alerta amigável no painel: *"Ops! Sua chave de IA parece estar sem saldo ou incorreta. Clique aqui para verificar suas configurações de API."* com link direto para o setup. |
| **Rate Limit / Quota Excedida** | O usuário atingiu o limite de requisições por minuto (RPM) ou tokens por minuto (TPM) do seu tier de conta (comum no free tier do Gemini se houver cliques muito rápidos). | O proxy captura o erro HTTP `429 Too Many Requests` e aplica uma estratégia de retry com backoff exponencial (máximo 3 tentativas). | Se persistir, exibe: *"O assistente de IA está um pouco sobrecarregado agora. Aguarde alguns segundos ou digite os dados manualmente."* |
| **Timeout de Requisição** | Lentidão na API do provedor ou conexão instável do usuário. | O frontend define um limite estrito de 15 segundos para a requisição. Se estourar, cancela a chamada. | Exibe um loader com opção de cancelamento e, se falhar, sugere: *"A IA demorou para responder. Deseja tentar novamente ou preencher manualmente?"* |
| **Alucinação de Dados Críticos** | O modelo inventa preços, estoque ou dimensões físicas não fornecidas pelo usuário. | Engenharia de prompt defensiva com restrições negativas absolutas e validação de esquema JSON no recebimento. | O sistema bloqueia a inserção automática de dados numéricos sensíveis (preço/estoque) gerados pela IA, exigindo que o seller os digite em campos separados e validados. |

---

## 3. Diretrizes de Engenharia de Prompt (System Prompts Base)

Abaixo está o System Prompt estruturado para o **Assistente de Cadastro de Produtos**, demonstrando a aplicação de engenharia de prompt defensiva, poucas tomadas (few-shot) e restrições negativas estritas para evitar alucinações de dados comerciais sensíveis.

```markdown
Você é o Assistente de Cadastro de Produtos do CapybaraCart, um especialista em copywriting de conversão para pequenos negócios, hobbistas e colecionadores.
Seu objetivo é transformar anotações brutas e informais de um vendedor em um título atraente e uma descrição persuasiva estruturada.

### CONTEXTO DA MARCA (Use para calibrar o tom de voz):
{brand_profile_json}

### REGRAS DE OURO (RESTRIÇÕES NEGATIVAS ABSOLUTAS):
1. JAMAIS invente, alucine ou sugira PREÇOS, QUANTIDADE EM ESTOQUE, DIMENSÕES FÍSICAS EXATAS ou CUSTOS DE FRETE. Se o usuário não forneceu esses dados, ignore-os completamente.
2. Se o usuário fornecer um preço ou estoque nas notas brutas, NÃO inclua esses valores no texto da descrição. Eles devem ser gerenciados exclusivamente pelos campos do formulário do sistema.
3. Mantenha a descrição honesta e realista. Não use termos corporativos vazios ou promessas exageradas (ex: "o melhor do mundo", "revolucionário"). Foque na história, raridade e estado real do item.

### FORMATO DE SAÍDA:
Você deve responder EXCLUSIVAMENTE com um objeto JSON válido, sem blocos de código markdown adicionais, seguindo a estrutura abaixo:
{{
  "titulo": "Título curto, claro e atraente (máximo 60 caracteres)",
  "descricao_curta": "Um parágrafo de impacto para a vitrine (máximo 150 caracteres)",
  "historia_detalhada": "Texto persuasivo destacando a origem, estado de conservação e o valor único do item (2 a 3 parágrafos)"
}}

### EXEMPLO DE EXECUÇÃO (FEW-SHOT):

[INPUT DO USUÁRIO]:
"Muda de orquídea Cattleya walkeriana que eu mesmo dividi do meu vaso principal. Flor rosa bem redonda, cheirosa. Tá num vasinho de barro com casca de pinus. Saudável, com broto novo vindo."

[SAÍDA ESPERADA]:
{{
  "titulo": "Muda de Orquídea Cattleya Walkeriana de Coleção",
  "descricao_curta": "Muda saudável de Cattleya walkeriana com broto ativo, cultivada artesanalmente em vaso de barro.",
  "historia_detalhada": "Esta muda é uma divisão direta da planta matriz da minha coleção pessoal, cultivada com dedicação em Petrópolis. Conhecida por suas flores rosa de excelente simetria e perfume marcante, esta Cattleya walkeriana já está adaptada ao vaso de barro com substrato de casca de pinus de alta qualidade.\n\nA planta apresenta excelente vigor vegetativo, raízes ativas e um broto novo em pleno desenvolvimento, garantindo uma excelente adaptação ao seu novo ambiente. Ideal para colecionadores que valorizam a procedência e o cultivo artesanal."
}}
```
</dyad-write>

<dyad-chat-summary>Incluindo o Google Gemini e seu free tier no AI/LLM System Design Doc</dyad-chat-summary>

Corrigi o documento de design de sistema de IA para incluir o Google Gemini (`gemini-1.5-flash`) como a recomendação principal de entrada, destacando a viabilidade prática do seu free tier para os sellers.

### 👤 Usuário · 2026-07-14 22:33 UTC

Não seja teimoso, gemini-flash-latest é o que você deve usar. O modelo gemini-1.5-flash nem existe mais.

### 🤖 Assistente · 2026-07-14 22:33 UTC

<details>
<summary>🧠 raciocínio interno (colapsado)</summary>

**Correcting My Assumptions**

I've zeroed in on the user's feedback, recognizing my initial model choice (`gemini-1.5-flash`) was outdated. I'm now actively focusing on using `gemini-flash-latest` as the primary model. I understand the user's expertise and will work with the latest information, I will no longer make such assumptions.

</details>
Tens toda razão, peço desculpas pela teimosia. O modelo correto e ativo na API do Google AI Studio é o `gemini-flash-latest`. Vou atualizar o documento imediatamente para refletir essa nomenclatura oficial e garantir que a integração funcione perfeitamente.

<dyad-write path="entregaveis/06-ai-llm-system-design.md" description="Corrigindo o modelo do Gemini para gemini-flash-latest no AI/LLM System Design Doc">
# AI/LLM System Design Doc — CapybaraCart

Este documento especifica a arquitetura de Inteligência Artificial do CapybaraCart. O sistema opera sob a filosofia "Fusca" (New Beetle): uma solução moderna, extremamente simples, robusta e de alta utilidade popular, baseada no modelo **BYOK (Bring Your Own Key)**. Toda a inteligência é executada utilizando as chaves de API dos próprios vendedores, garantindo custo operacional zero para a plataforma e total soberania para o usuário.

---

## 1. Descrição do Papel do LLM no Produto

A Inteligência Artificial no CapybaraCart atua como um copiloto de usabilidade e marketing para o vendedor, reduzindo a barreira de entrada para a criação de uma presença digital atraente. O escopo está dividido em quatro assistentes especializados:

### 1.1 Escopo de Atuação dos 4 Assistentes

1.  **Assistente de Setup e Posicionamento de Marca:**
    *   *Papel:* Conduzir um breve questionário interativo com o seller para extrair a essência do seu negócio (ex: nicho, valores, diferencial).
    *   *Saída:* Um perfil de marca estruturado em JSON contendo: Tom de Voz (ex: acolhedor, técnico, minimalista), Proposta de Valor e Palavras-chave. Este JSON é salvo no perfil do seller e serve de contexto para os demais assistentes.
2.  **Assistente de Cadastro de Produtos:**
    *   *Papel:* Entrevistar o seller de forma conversacional para extrair as características do produto (foco no 80/20 do marketing: história, estado de conservação, raridade).
    *   *Saída:* Título persuasivo e descrição estruturada otimizada para conversão, sem inventar dados técnicos ou comerciais.
3.  **Assistente de Fotos:**
    *   *Papel:* Analisar metadados ou descrições de imagens enviadas e fornecer instruções textuais de melhoria (enquadramento, iluminação, crop) e gerar tags/alt text acessíveis.
    *   *Saída:* Instruções práticas de otimização visual e metadados de acessibilidade. *Nota: A IA não altera a imagem real do produto para preservar a honestidade da oferta.*
4.  **Assistente de Publicação Social:**
    *   *Papel:* Traduzir a descrição do produto cadastrado em posts otimizados para redes sociais (Instagram, Pinterest, TikTok).
    *   *Saída:* Copys prontas para publicação, hashtags relevantes e sugestões de stickers/links de checkout.

### 1.2 Arquitetura de Prompts

Para manter o consumo de tokens baixo (essencial no modelo BYOK) e garantir alta velocidade de resposta, adotamos uma **Arquitetura de Prompts Descentralizada e Isolada**:

*   **Contexto Compartilhado Leve (Brand Profile):** Em vez de enviar históricos longos de conversa, cada chamada de assistente anexa apenas o JSON simplificado do *Brand Profile* (gerado no Setup) como contexto de sistema.
*   **Prompts de Sistema Especializados:** Cada assistente possui seu próprio System Prompt estrito, focado exclusivamente em sua tarefa. Isso evita o "desvio de atenção" do modelo e reduz a latência.
*   **Formatação de Saída Estrita:** Todas as respostas da IA destinadas à interface do sistema (como o cadastro de produtos) são forçadas a retornar em formato JSON estruturado (utilizando *Structured Outputs* ou esquemas JSON estritos), facilitando o parse direto no frontend.

### 1.3 Modelos Recomendados

Para viabilizar o modelo BYOK de forma prática e inclusiva, o sistema suportará três provedores principais, com destaque para a opção gratuita de entrada:

*   **gemini-flash-latest (Recomendação Principal de Entrada - Google AI Studio):**
    *   *Por que usar:* É a escolha ideal para sellers iniciantes ou não entusiastas. O Google AI Studio oferece um **free tier extremamente generoso** (até 15 requisições por minuto e 1.500 por dia gratuitamente). Além disso, possui excelente velocidade, suporte nativo a JSON Schema e capacidades multimodais nativas excelentes para o Assistente de Fotos.
*   **gpt-4o-mini (Alternativa Paga de Baixo Custo - OpenAI):**
    *   *Por que usar:* Excelente velocidade, custo de tokens pagos extremamente baixo e suporte nativo a saídas estruturadas complexas.
*   **claude-3-5-haiku (Alternativa Premium de Escrita - Anthropic):**
    *   *Por que usar:* Excepcional capacidade de escrita criativa e tom de voz natural. Recomendado para sellers que buscam copys altamente refinadas e personalizadas.

---

## 2. Mapeamento de Failure Modes Básicos (Modos de Falha)

Operar em um ambiente BYOK exige que o sistema seja altamente resiliente a falhas de infraestrutura do próprio usuário. Abaixo estão mapeados os modos de falha e suas respectivas mitigações:

| Modo de Falha | Causa Raiz | Comportamento do Sistema (Mitigação) | Experiência do Usuário (UX) |
|---|---|---|---|
| **Chave Inválida ou Sem Saldo** | Chave incorreta, revogada ou conta do usuário sem créditos (OpenAI/Anthropic) ou fora do ar. | O Serverless Proxy captura o erro HTTP `401 Unauthorized` ou `403 Forbidden` retornado pela API do provedor. | Exibe um alerta amigável no painel: *"Ops! Sua chave de IA parece estar sem saldo ou incorreta. Clique aqui para verificar suas configurações de API."* com link direto para o setup. |
| **Rate Limit / Quota Excedida** | O usuário atingiu o limite de requisições por minuto (RPM) ou tokens por minuto (TPM) do seu tier de conta (comum no free tier do Gemini se houver cliques muito rápidos). | O proxy captura o erro HTTP `429 Too Many Requests` e aplica uma estratégia de retry com backoff exponencial (máximo 3 tentativas). | Se persistir, exibe: *"O assistente de IA está um pouco sobrecarregado agora. Aguarde alguns segundos ou digite os dados manualmente."* |
| **Timeout de Requisição** | Lentidão na API do provedor ou conexão instável do usuário. | O frontend define um limite estrito de 15 segundos para a requisição. Se estourar, cancela a chamada. | Exibe um loader com opção de cancelamento e, se falhar, sugere: *"A IA demorou para responder. Deseja tentar novamente ou preencher manualmente?"* |
| **Alucinação de Dados Críticos** | O modelo inventa preços, estoque ou dimensões físicas não fornecidas pelo usuário. | Engenharia de prompt defensiva com restrições negativas absolutas e validação de esquema JSON no recebimento. | O sistema bloqueia a inserção automática de dados numéricos sensíveis (preço/estoque) gerados pela IA, exigindo que o seller os digite em campos separados e validados. |

---

## 3. Diretrizes de Engenharia de Prompt (System Prompts Base)

Abaixo está o System Prompt estruturado para o **Assistente de Cadastro de Produtos**, demonstrando a aplicação de engenharia de prompt defensiva, poucas tomadas (few-shot) e restrições negativas estritas para evitar alucinações de dados comerciais sensíveis.

```markdown
Você é o Assistente de Cadastro de Produtos do CapybaraCart, um especialista em copywriting de conversão para pequenos negócios, hobbistas e colecionadores.
Seu objetivo é transformar anotações brutas e informais de um vendedor em um título atraente e uma descrição persuasiva estruturada.

### CONTEXTO DA MARCA (Use para calibrar o tom de voz):
{brand_profile_json}

### REGRAS DE OURO (RESTRIÇÕES NEGATIVAS ABSOLUTAS):
1. JAMAIS invente, alucine ou sugira PREÇOS, QUANTIDADE EM ESTOQUE, DIMENSÕES FÍSICAS EXATAS ou CUSTOS DE FRETE. Se o usuário não forneceu esses dados, ignore-os completamente.
2. Se o usuário fornecer um preço ou estoque nas notas brutas, NÃO inclua esses valores no texto da descrição. Eles devem ser gerenciados exclusivamente pelos campos do formulário do sistema.
3. Mantenha a descrição honesta e realista. Não use termos corporativos vazios ou promessas exageradas (ex: "o melhor do mundo", "revolucionário"). Foque na história, raridade e estado real do item.

### FORMATO DE SAÍDA:
Você deve responder EXCLUSIVAMENTE com um objeto JSON válido, sem blocos de código markdown adicionais, seguindo a estrutura abaixo:
{{
  "titulo": "Título curto, claro e atraente (máximo 60 caracteres)",
  "descricao_curta": "Um parágrafo de impacto para a vitrine (máximo 150 caracteres)",
  "historia_detalhada": "Texto persuasivo destacando a origem, estado de conservação e o valor único do item (2 a 3 parágrafos)"
}}

### EXEMPLO DE EXECUÇÃO (FEW-SHOT):

[INPUT DO USUÁRIO]:
"Muda de orquídea Cattleya walkeriana que eu mesmo dividi do meu vaso principal. Flor rosa bem redonda, cheirosa. Tá num vasinho de barro com casca de pinus. Saudável, com broto novo vindo."

[SAÍDA ESPERADA]:
{{
  "titulo": "Muda de Orquídea Cattleya Walkeriana de Coleção",
  "descricao_curta": "Muda saudável de Cattleya walkeriana com broto ativo, cultivada artesanalmente em vaso de barro.",
  "historia_detalhada": "Esta muda é uma divisão direta da planta matriz da minha coleção pessoal, cultivada com dedicação em Petrópolis. Conhecida por suas flores rosa de excelente simetria e perfume marcante, esta Cattleya walkeriana já está adaptada ao vaso de barro com substrato de casca de pinus de alta qualidade.\n\nA planta apresenta excelente vigor vegetativo, raízes ativas e um broto novo em pleno desenvolvimento, garantindo uma excelente adaptação ao seu novo ambiente. Ideal para colecionadores que valorizam a procedência e o cultivo artesanal."
}}
```
</dyad-write>

<dyad-chat-summary>Corrigindo o modelo do Gemini para gemini-flash-latest no AI/LLM System Design Doc</dyad-chat-summary>

Corrigi o documento de design de sistema de IA para utilizar a nomenclatura oficial e ativa `gemini-flash-latest` como a recomendação principal de entrada para os sellers.
