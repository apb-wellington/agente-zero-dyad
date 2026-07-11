# AI_RULES.md — Agente Zero

Este arquivo é lido pelo Dyad em todo chat deste projeto. Aplica-se aos
3 chats do Agente Zero (Fase A) e ao chat de Build Board (Fase B), além
de qualquer chat avulso do consultor PO+Tech Lead.

## O que este repositório é (e não é)

Este é um repositório **doc-as-code**, não um app. Não existe código de
produto aqui — nenhum componente, rota, schema de banco, ou lógica de
negócio. O `package.json` na raiz é um artefato dummy só para satisfazer
o import do Dyad; nunca sugira alterá-lo para virar um app real, e nunca
gere scaffolding de aplicação (componentes React, APIs, migrations,
etc.) em nenhum chat da Fase A. Isso é uma regra dura, não uma
preferência.

## Coordenação entre chats: sempre por arquivo, nunca por memória

Nenhum chat deste sistema tem acesso à conversa de outro chat. Toda
informação que precisa atravessar de um chat para o próximo **tem que
estar escrita em arquivo** dentro deste repositório, nos caminhos
definidos por cada prompt de persona. Se um chat precisar de contexto
que só existiria "lembrando" de uma conversa anterior, ele deve ler o
arquivo correspondente — nunca assumir ou inventar o que teria sido
dito em outro chat.

## Modos de operação neste projeto

- **Ask mode**: usado apenas para consulta pontual (ex.: o prompt do
  consultor PO+Tech Lead). Não escreve arquivo.
- **Build mode**: usado pelos 3 chats do Agente Zero e pela Fase B —
  eles precisam escrever e comitar arquivos. Não use o Agent mode neste
  projeto.

## Convenções de arquivo

- Todo prompt de IA usado em qualquer parte do sistema vive em arquivo
  próprio dentro de `prompts/`, editável isoladamente.
- Saídas dos Chats 1 e 2 vão em `outputs/01-briefing/` e
  `outputs/02-diagnostico/`, respectivamente — sempre sobrescrevendo o
  arquivo anterior daquele chat, nunca criando versões numeradas soltas.
- Cards de board vão em `board/fase-a/` (Fase A) ou `board/fase-b/`
  (Fase B), um arquivo por card, com prefixo numérico hierárquico
  (`01-`, `02-01-`, `02-02-`, ...) que reflete a ordem de execução
  recomendada — ver `README.md` para a convenção completa.
- Artefatos reais produzidos ao **executar** um card (o Product Vision
  em si, o PRD em si, etc. — não o card, o resultado de rodar o card)
  vão em `entregaveis/`, com o mesmo prefixo numérico do card que os
  gerou. É esse conjunto que forma o pacote de handoff lido pela Fase B.
- Nunca escreva fora dessas pastas sem necessidade explícita.

## Persona por chat

Cada chat deste sistema tem uma persona fixa, definida no arquivo de
prompt correspondente em `prompts/`. Ao iniciar qualquer chat deste
projeto, adote **apenas** a persona do prompt colado pelo usuário
naquele chat — não misture personas nem tente cobrir o escopo de outro
chat, mesmo que pareça faltar contexto. Se faltar um arquivo que
deveria já existir (ex.: Chat 2 sem `outputs/01-briefing/resumo-destilado.md`),
avise o usuário em vez de inventar o conteúdo.

## Sobre profundidade e dosagem

A rubrica de complexidade (`rubrica/complexidade.md`) e o catálogo de
artefatos (`catalogo/artefatos-referencia.md`) não são referência
opcional — são a fonte de verdade sobre o que cada card deve conter e
em que profundidade. Nenhum chat deve gerar um artefato mais raso ou
mais profundo do que o que esses dois arquivos determinam para o tier
do projeto em questão.

## Idioma

Todos os artefatos, cards e interações neste projeto são em
português do Brasil, salvo instrução explícita em contrário.
