# Catálogo de Artefatos de Referência

Lado operacional da rubrica de complexidade. Para cada artefato: quando
ele é ativado (regra padrão por tier + overrides por dimensão) e o que
muda concretamente no seu conteúdo em cada profundidade — não apenas
"mais curto" ou "mais longo", mas o que entra e o que sai.

O Chat 2 usa este arquivo para decidir a lista final de artefatos ativos
e a profundidade de cada um. O Chat 3 usa a coluna de profundidade para
literalmente calibrar o prompt embutido em cada card — se este arquivo
diz que a versão T1 de um artefato não tem uma seção, o card T1 não deve
gerar essa seção.

Convenção: **ativo por padrão no tier X** = gerado automaticamente se o
projeto cair nesse tier, sem precisar de gatilho extra. **Override** =
condição que ativa (ou aprofunda) o artefato mesmo fora do seu tier
padrão, ou que o desativa mesmo dentro dele.

---

## 1. Product Vision
**Ativação:** sempre ativo (T1, T2, T3) — é a fundação mínima de
qualquer projeto, mesmo o mais simples.
**Profundidade:**
- T1: 1 parágrafo + 3 bullets (o quê, para quem, por que agora).
- T2: meia página — visão + público-alvo + diferencial + métricas de
  sucesso macro.
- T3: página completa — + contexto de mercado/concorrência + riscos
  estratégicos ligados à visão.

## 2. PRD
**Ativação:** sempre ativo (T1, T2, T3).
**Profundidade:**
- T1: problema, solução, escopo do MVP, fora de escopo, métrica de
  sucesso — sem user stories detalhadas.
- T2: + user stories principais, requisitos funcionais numerados,
  dependências entre eles.
- T3: + requisitos não funcionais integrados ao corpo do PRD, matriz de
  priorização, cenários de erro/exceção mapeados.

## 3. Personas / JTBD
**Ativação padrão:** dispensado em T1; ativo em T2 e T3.
**Override:** ativa mesmo em T1 se Exposição a usuários reais ≥ 2.
**Profundidade:**
- T2: 1–2 personas primárias, formato JTBD simples (quando... eu
  quero... para...).
- T3: personas primárias + secundárias, JTBD completo (funcional,
  emocional, social) por persona.

## 4. Journey Map
**Ativação padrão:** dispensado em T1 e T2; ativo em T3.
**Override:** ativa em T2 se Exposição a usuários reais ≥ 2.
**Profundidade:**
- T2 (via override): jornada única, etapas principais, sem
  emoção/pontos de dor detalhados.
- T3: jornada completa com pontos de dor, emoções, e oportunidades por
  etapa.

## 5. Solution Architecture
**Ativação padrão:** dispensado em T1; ativo em T2 e T3.
**Override:** ativa em T1 se Número de integrações externas ≥ 2.
**Profundidade:**
- T2: diagrama de componentes de alto nível + descrição textual de cada
  um.
- T3: + fluxo de dados entre componentes, decisões de escala/
  performance, pontos de falha considerados.

## 6. ADRs (Architecture Decision Records)
**Ativação padrão:** dispensado em T1; ativo em T2 e T3.
**Override:** ativa 1 ADR-lite em T1 se Reversibilidade = 3 (decisão
irreversível merece registro mesmo em projeto simples).
**Profundidade:**
- T1 (via override): formato ADR-lite — 1 parágrafo decisão + 1
  parágrafo alternativa considerada.
- T2: ADR-lite para cada decisão arquitetural relevante.
- T3: ADR completo (contexto, decisão, alternativas consideradas,
  consequências) para cada decisão relevante.

## 7. AI/LLM System Design Doc
**Ativação:** ativo em qualquer tier se Criticidade do erro de IA ≥ 1;
dispensado se = 0 (produto sem componente de IA relevante).
**Profundidade** (quando ativo, escala com o próprio score de
Criticidade, não só com o tier):
- Criticidade 1: descrição do papel do LLM no produto + failure modes
  básicos esperados.
- Criticidade 2: + estratégia de mitigação (guardrails, validação de
  saída, fallback).
- Criticidade 3: + estratégia de avaliação/monitoramento contínuo do
  comportamento do modelo em produção.

## 8. Contratos de API/MCP
**Ativação:** ativo se Número de integrações externas ≥ 1; dispensado
se = 0.
**Profundidade** (escala com o score de integrações, não só tier):
- Integrações 1: lista simples de endpoints consumidos, sem contrato
  formal.
- Integrações 2: contrato por integração (request/response, auth,
  rate limits).
- Integrações 3: + estratégia de versionamento e tratamento de
  indisponibilidade de terceiros.

## 9. Wireframes
**Ativação padrão:** dispensado em T1; ativo em T2 e T3. Pode ser
ativado manualmente em T1 pelo Chat 2 se a interface for central à
proposta de valor (julgamento do analista — não capturado por nenhuma
dimensão numérica da rubrica; se ativado assim, justificar
explicitamente no diagnóstico).
**Profundidade:**
- T2: wireframes de baixa fidelidade das telas principais (fluxo
  crítico apenas).
- T3: + telas secundárias e estados alternativos (vazio, erro,
  carregando).

## 10. Design Tokens
**Ativação padrão:** dispensado em T1 e T2; ativo em T3. Pode ser
ativado manualmente em T2 se o produto tiver múltiplas telas/temas
(mesmo critério de julgamento do item 9).
**Profundidade:**
- T3: paleta, tipografia, espaçamento e estados base — o essencial para
  consistência, sem sistema de design completo.

## 11. NFRs + modelo de custo
**Ativação:** ativo se Sensibilidade de dados ≥ 2 OU Exposição a
usuários reais ≥ 2 OU tier = T3; dispensado caso contrário.
**Profundidade:**
- Ativação por override em T1/T2: NFRs essenciais ligados à dimensão
  que ativou (ex.: privacidade se foi sensibilidade de dados) + estimativa
  de custo simples.
- T3: NFRs completos (performance, disponibilidade, segurança,
  privacidade) + modelo de custo detalhado por componente.

## 12. Critérios de aceite/testes
**Ativação:** sempre ativo (T1, T2, T3) — fundação mínima.
**Profundidade:**
- T1: checklist simples por funcionalidade.
- T2: critérios Given/When/Then por user story principal.
- T3: + casos de erro e edge cases, com atenção especial aos ligados à
  Criticidade do erro de IA quando ela for ≥ 2.

## 13. Roadmap / MVP scope (MoSCoW)
**Ativação:** sempre ativo (T1, T2, T3).
**Profundidade:**
- T1: lista simples Must-have / Won't-have.
- T2: MoSCoW completo (Must/Should/Could/Won't).
- T3: + fases e marcos temporais aproximados.

## 14. Registro de riscos
**Ativação:** ativo se Reversibilidade ≥ 2 OU Criticidade do erro de IA
≥ 2 OU Sensibilidade de dados ≥ 2; dispensado caso contrário.
**Profundidade:**
- Ativação por override em T1: tabela simples risco → mitigação, só
  para os riscos ligados à dimensão que ativou.
- T2: tabela risco → mitigação cobrindo todas as dimensões com score
  ≥ 2.
- T3: + probabilidade, impacto e responsável por risco.

---

## Resumo de ativação por tier (visão rápida)

| Artefato | T1 | T2 | T3 |
|---|---|---|---|
| Product Vision | ✅ | ✅ | ✅ |
| PRD | ✅ | ✅ | ✅ |
| Personas/JTBD | override | ✅ | ✅ |
| Journey Map | ❌ | override | ✅ |
| Solution Architecture | override | ✅ | ✅ |
| ADRs | override | ✅ | ✅ |
| AI/LLM System Design Doc | condicional* | condicional* | condicional* |
| Contratos de API/MCP | condicional* | condicional* | condicional* |
| Wireframes | manual | ✅ | ✅ |
| Design Tokens | ❌ | manual | ✅ |
| NFRs + modelo de custo | condicional* | condicional* | ✅ |
| Critérios de aceite/testes | ✅ | ✅ | ✅ |
| Roadmap MoSCoW | ✅ | ✅ | ✅ |
| Registro de riscos | condicional* | condicional* | condicional* |

\* condicional = independe do tier, depende do score de uma dimensão
específica. Ver regra de ativação do artefato acima.
