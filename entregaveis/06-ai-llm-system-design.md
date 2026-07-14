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