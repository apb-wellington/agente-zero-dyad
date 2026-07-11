# board/fase-a/ — Board de Descoberta

Esta pasta é populada pelo Chat 3 (`prompts/chat-3-engenharia-cards.md`),
um card por arquivo, gerado um de cada vez. Não edite esta pasta
manualmente fora da execução normal do sistema, exceto para atualizar o
campo `Status` de cada card conforme a execução avança.

## Convenção de nomenclatura

`NN-nome-do-artefato.md` ou `NN-nome-do-artefato-DESCARTADO.md`, onde
`NN` é o prefixo hierárquico definido por `outputs/02-diagnostico/diagnostico.md`
(ex.: `01-product-vision.md`, `03-01-personas-jtbd.md`,
`09-design-tokens-DESCARTADO.md`). A numeração reflete ordem de
execução recomendada, não apenas ordem de leitura.

## Ciclo de vida de um card

1. **A fazer** — gerado pelo Chat 3, ainda não executado.
2. **Em execução** — o "Prompt de execução" do card foi colado num chat
   novo do Dyad (Build mode) e está rodando.
3. **Concluído** — o artefato correspondente já existe em
   `entregaveis/NN-nome-do-artefato.md` e passou pelo critério de
   conclusão do próprio card.

Atualize o campo `**Status:**` no topo do arquivo do card conforme ele
avança — é a forma mais simples de acompanhar progresso sem depender de
nenhuma ferramenta externa.

## Cards "DESCARTADO"

Artefatos que a rubrica de complexidade dispensou para este projeto
ainda geram um card aqui, só que reduzido a nome + motivo do descarte.
Isso preserva o registro de *o que foi considerado e por quê* — não é
lixo, é rastreabilidade. Nunca delete um card descartado.

## Quando esta fase termina

Quando todo card **ativo** (não os descartados) estiver com `Status:
Concluído` e o artefato correspondente presente em `entregaveis/`, a
Fase A está completa. Só então abra um chat separado (fora do Agente
Zero) e cole `prompts/build-board.md` para gerar a Fase B.
