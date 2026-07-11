# Agente Zero (Dyad)

Sistema de descoberta e especificação de produto conduzido em 3 chats
sequenciais dentro do [Dyad](https://github.com/dyad-sh/dyad), usando o
Dyad como ambiente de execução de prompts — não como gerador de código de
aplicação.

> Este repositório **não contém um app**. É doc-as-code: prompts,
> rubricas, catálogos e o board de projeto vivem como arquivos Markdown.
> O `package.json` existe só para satisfazer a expectativa do Dyad de
> importar um projeto Node.js rodável.

## Por que 3 chats, e não 1 ou 23

Um único chat fazendo entrevista + geração de todos os artefatos em
sequência degrada e alucina antes do fim. Multiplicar chats sem
necessidade real (uma tentativa anterior chegou a ~23) recria o problema
de coordenação sem resolver o de degradação. A divisão em exatamente 3
chats existe porque há 3 competências cognitivas distintas envolvidas —
entrevistar, diagnosticar, e projetar prompts/cards — e cada uma merece
contexto limpo. Coordenação entre os chats acontece **sempre por arquivo
compartilhado**, nunca por memória de conversa.

## Fluxo (Fase A — Descoberta)

```
Chat 1: Briefing
  persona: facilitador de metodologias
  lê:      nada (parte da ideia crua do usuário)
  produz:  outputs/01-briefing/resumo-destilado.md
     │
     ▼
Chat 2: Diagnóstico de Complexidade
  persona: analista autoavaliativo
  lê:      outputs/01-briefing/resumo-destilado.md
  produz:  outputs/02-diagnostico/diagnostico.md
           (rubrica pontuada e justificada + escopo do pipeline)
     │
     ▼
Chat 3: Engenharia de Prompt + Cards
  persona: engenheiro de prompt + PO/tech lead
  lê:      outputs/01-briefing/resumo-destilado.md
           outputs/02-diagnostico/diagnostico.md
  produz:  board/fase-a/*.md
           (um card por vez, nunca todos numa resposta)
           + prompts/consultor-po-tech-lead.md (entregável avulso)
```

**Depois do Chat 3**, cada card ativo é executado individualmente: seu
"Prompt de execução" é colado num chat novo do Dyad (Build mode) — fora
dos 3 chats do Agente Zero — e o resultado (o artefato real: Product
Vision, PRD, etc.) é salvo em `entregaveis/`. É esse conjunto, não os
cards em si, que forma o pacote de handoff lido pela Fase B.

## Fluxo (Fase B — Build Board)

Chat separado, **depois** que todos os cards ativos da Fase A estiverem
concluídos. Lê o pacote de handoff completo e entrega, conforme a
complexidade do projeto:

- **baixa complexidade** → um mega-prompt único, ou
- **complexidade maior** → `board/fase-b/*.md`, cards de construção
  seguindo a mesma lógica de dosagem por tier da Fase A.

## Dúvidas durante a execução de um card

Não existe chat de acompanhamento contínuo. Toda vez que surgir dúvida
executando um card específico:

1. Abra um chat **novo** no Dyad.
2. Cole o conteúdo de `prompts/consultor-po-tech-lead.md`.
3. Aponte o card específico em questão (o card é autossuficiente — não
   precisa colar mais nada além dele).
4. Peça a orientação, resolva, feche o chat.

Esse prompt é reutilizável e descartável — não acumula contexto entre
usos.

## Estrutura do repositório

```
AI_RULES.md                        lido pelo Dyad em todo chat do projeto
ASSUMPTIONS.md                     suposições sobre o Dyad não testadas na prática
prompts/
  chat-1-briefing.md
  chat-2-diagnostico.md
  chat-3-engenharia-cards.md
  consultor-po-tech-lead.md
  build-board.md
rubrica/
  complexidade.md                  dimensões, escala, como pontuar e justificar
catalogo/
  artefatos-referencia.md          os artefatos que a rubrica pode ativar/pular/dosar
outputs/
  01-briefing/                     resumo destilado do Chat 1
  02-diagnostico/                  diagnóstico pontuado do Chat 2
entregaveis/                       artefatos reais gerados ao executar os cards
                                    (Product Vision, PRD, etc.) — o pacote de handoff
board/
  fase-a/                          cards de descoberta (gerados pelo Chat 3)
  fase-b/                          cards de construção (gerados pela Fase B)
```

## Convenção de nomenclatura dos cards

Sem dependência de Trello — os cards são arquivos Markdown lidos
diretamente no Dyad ou importados em qualquer gerenciador de tarefas.
Por isso o prefixo numérico hierárquico faz o trabalho que, no Trello,
seria feito por posição visual na coluna:

```
board/fase-a/
  01-product-vision.md
  02-prd.md
  03-01-personas-jtbd.md
  03-02-journey-map.md
  04-solution-architecture.md
  ...
```

Regras:
- Dois dígitos por nível (`01`, `02`, ...), separados por hífen.
- A ordem numérica é a ordem de execução recomendada, não apenas de
  leitura — cards com dependência entre si (ex.: Personas antes de
  Journey Map) usam o mesmo prefixo pai com sufixo sequencial.
- Nome descritivo em kebab-case depois do prefixo — nunca só o número.
- Artefatos dispensados pela rubrica **geram card mesmo assim**, com
  título no formato `NN-nome-do-artefato-DESCARTADO.md` e conteúdo
  reduzido a: nome do artefato, motivo do descarte (referenciando a
  dimensão da rubrica que justificou), e nada mais — sem prompt de
  execução, já que não será executado. Isso preserva rastreabilidade de
  *o que foi considerado e por quê*, não só do que ficou.
- Cards descartados ocupam a posição numérica que o artefato teria no
  pipeline (não são jogados para o fim da lista) — isso mantém o board
  legível como "o catálogo inteiro considerado", com o descarte visível
  no lugar certo, em vez de escondido numa seção à parte.

## Como começar

1. Suba este repositório no GitHub.
2. Importe no Dyad.
3. Confirme que `AI_RULES.md` foi lido (o Dyad não deve oferecer gerar um
   automático).
4. Abra um chat, cole `prompts/chat-1-briefing.md`, comece o briefing.

## Suposições não validadas

Ver `ASSUMPTIONS.md`. Nenhuma parte deste sistema foi testada num Dyad
real antes desta entrega — as suposições estão documentadas como nota
informativa, não como bloqueio.
