# Rubrica de Complexidade

Usada pelo Chat 2 (Diagnóstico) para pontuar o projeto e decidir o
formato do pipeline. É a fonte de verdade que o Chat 3 consome
literalmente ao gerar cards — não uma referência solta.

## Como pontuar

5 dimensões, cada uma de **0 a 3**. Some as 5 para obter o score total
(0–15). Cada pontuação precisa vir acompanhada de uma justificativa de
1–3 frases amarrada às informações reais do `resumo-destilado.md` do
Chat 1 — nunca um número solto sem explicação.

---

### 1. Criticidade do erro de IA

Impacto de uma resposta errada, alucinada ou mal calibrada do
componente de IA/LLM no resultado final para o usuário ou negócio.

| Score | Descrição |
|---|---|
| 0 | Não há componente de IA/LLM no produto, ou o erro é puramente cosmético. |
| 1 | Erro é perceptível mas de baixo impacto (ex.: sugestão de conteúdo levemente fora do tom). |
| 2 | Erro pode gerar retrabalho, confusão real ou decisão ruim do usuário, mas é reversível. |
| 3 | Erro pode causar dano financeiro, legal, de segurança, ou decisão irreversível. |

### 2. Sensibilidade de dados

Natureza dos dados que o produto coleta, processa ou expõe.

| Score | Descrição |
|---|---|
| 0 | Dados públicos ou inexistentes. |
| 1 | Dados pessoais básicos (nome, e-mail) sem dado sensível. |
| 2 | Dados sensíveis (financeiro, saúde parcial, comportamental) sob regulação leve. |
| 3 | Dados sensíveis fortemente regulados (saúde, biométrico, financeiro crítico, menores de idade) exigindo compliance formal. |

### 3. Número de integrações externas

Quantidade e criticidade de sistemas externos (APIs, provedores,
plataformas) que o produto depende para funcionar.

| Score | Descrição |
|---|---|
| 0 | Nenhuma integração externa — produto standalone. |
| 1 | 1–2 integrações simples (ex.: uma API pública de leitura). |
| 2 | 3–5 integrações, incluindo alguma com autenticação ou troca de dados bidirecional. |
| 3 | 6+ integrações, ou poucas porém críticas/complexas (sistemas legados, múltiplos provedores de IA, dependência de disponibilidade de terceiros). |

### 4. Exposição a usuários reais

Quem de fato usa o produto e em que escala.

| Score | Descrição |
|---|---|
| 0 | Uso interno ou protótipo, sem usuário externo. |
| 1 | Usuários beta fechados, grupo pequeno e controlado. |
| 2 | Usuários reais em produção, escala moderada ou segmento definido. |
| 3 | Usuários reais em escala aberta, ou usuários vulneráveis (menores, saúde, situação de risco). |

### 5. Reversibilidade

Custo de desfazer uma decisão ou ação errada tomada pelo produto.

| Score | Descrição |
|---|---|
| 0 | Qualquer decisão/ação é 100% reversível, sem custo perceptível. |
| 1 | Reversível com custo baixo (tempo ou retrabalho pequeno). |
| 2 | Reversível com custo significativo (financeiro ou reputacional moderado). |
| 3 | Irreversível, ou com custo catastrófico (perda de dado, dano legal, dano a pessoa). |

---

## Mapeamento score → tier

| Score total | Tier | Nome |
|---|---|---|
| 0–4 | **T1** | Enxuto |
| 5–9 | **T2** | Padrão |
| 10–15 | **T3** | Robusto |

O tier define a **dosagem padrão** de profundidade dos artefatos
(ver `catalogo/artefatos-referencia.md`). Mas o tier **não é a única
variável** — dimensões individuais específicas podem forçar a ativação
ou aprofundamento de um artefato mesmo em tier baixo (ex.: um projeto
T1 que envolve dado de saúde de menores força NFRs + Registro de Riscos
ativos, mesmo sendo "enxuto" em todo o resto). Essas regras de override
estão documentadas artefato a artefato no catálogo — o Chat 2 deve
aplicá-las explicitamente, não só calcular o tier e parar.

## O que o Chat 2 entrega

Para cada uma das 5 dimensões: score + justificativa. Depois: score
total, tier resultante, e a lista final de artefatos ativos/dispensados
(cruzando tier + overrides do catálogo), já com a profundidade definida
para cada um. Esse cruzamento é o que o Chat 3 vai ler e aplicar
card a card — não é opcional nem estético.
