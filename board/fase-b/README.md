# board/fase-b/ — Board de Construção

Populada pelo chat de Build Board (`prompts/build-board.md`), rodado
**depois** que todos os cards ativos de `board/fase-a/` estiverem
concluídos e `entregaveis/` estiver completo. Não é um dos 3 chats do
Agente Zero — é uma etapa seguinte, separada.

## Dois formatos possíveis, decididos pelo tier do projeto

- **Tier T1 (Enxuto):** um único arquivo,
  `mega-prompt-construcao.md` — sem cards, sem numeração. Cole
  diretamente num agente de código.
- **Tier T2/T3 (Padrão/Robusto):** vários cards de construção,
  `NN-nome-do-epico.md`, numerados em sequência própria desta fase
  (não reaproveita a numeração de `board/fase-a/`).

Verifique `outputs/02-diagnostico/diagnostico.md` para saber qual dos
dois formatos este projeto usa antes de procurar arquivos aqui.

## Ciclo de vida (quando houver cards)

Mesmo ciclo de `board/fase-a/`: `Status` no topo do card evolui de
**A fazer** → **Em execução** → **Concluído**, conforme o "Prompt de
execução" de cada card é rodado num chat novo em Build mode.

## Dúvidas durante a execução

Mesmo protocolo da Fase A: chat novo, colar
`prompts/consultor-po-tech-lead.md`, resolver, fechar.
