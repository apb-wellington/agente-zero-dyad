# Suposições não testadas sobre o comportamento do Dyad

Este arquivo registra, de forma cumulativa, toda suposição feita durante
a construção deste repositório que **não foi validada num Dyad real**.
São notas informativas — não bloqueiam a entrega, mas devem ser
conferidas por você no primeiro uso real. Se alguma se provar errada, o
desenho correspondente deve ser ajustado (e este arquivo, atualizado).

Cada entrada segue o formato: **Suposição → Por quê → O que fazer se
estiver errada.**

## Índice

1. `package.json` com script `dev` que nunca termina
2. `AI_RULES.md` precisa existir no repo antes do primeiro import
3. Build mode comita automaticamente a cada escrita de arquivo
4. Ask mode consegue ler arquivos do repositório mesmo sem escrever
5. Build mode cobre uso de MCP sem exigir o Agent mode pago
6. Nomenclatura hierárquica de cards é suficiente como substituto de Trello
7. O prompt do consultor PO+Tech Lead pode ser estático (não gerado por projeto)
8. Um "Prompt de execução" colado num chat novo consegue escrever em `entregaveis/` sozinho

Nenhuma destas suposições foi validada num Dyad real. Se qualquer uma se
provar errada no primeiro uso, o ajuste é local ao ponto indicado em
"Se estiver errada" — nenhuma delas, se cair, derruba a arquitetura
geral do sistema (3 chats + coordenação por arquivo + dosagem por
rubrica).

---

## 1. `package.json` com script `dev` que nunca termina

**Suposição:** o Dyad, ao rodar `npm run dev` num projeto importado,
espera um processo de longa duração (como um servidor dev) e pode tratar
a saída rápida do processo como falha/crash. Por isso o script `dev`
deste repo termina com `sleep 999999` em vez de simplesmente fazer
`echo` e sair.

**Por quê:** repositórios doc-as-code não têm nada para "servir", mas o
Dyad foi desenhado assumindo apps rodáveis.

**Se estiver errada:** se o Dyad não se importa com o processo
terminando (ou trata isso como sucesso), o `sleep` é inofensivo mas
desnecessário — pode ser removido sem impacto em nenhuma outra parte do
sistema.

---

## 2. `AI_RULES.md` precisa existir no repo *antes* do primeiro import

**Suposição:** conforme informado no contexto original, isso já é dado
como fato conhecido, não suposição — o Dyad gera um `AI_RULES.md`
automático (assumindo projeto de código) se não encontrar um já no
repositório no momento do import. Por isso este arquivo é entregue no
Incremento 2, antes de qualquer prompt de chat.

**Por quê:** evitar que o Dyad trate o projeto como app de código e
direcione sugestões/comportamento de chat nessa direção.

**Se estiver errada:** não deveria estar — foi informado como
comportamento conhecido por você, não inferido por mim.

---

## 3. Dyad em Build mode comita automaticamente a cada escrita de arquivo

**Suposição:** cada vez que um chat em Build mode gera ou edita um
arquivo (ex.: Chat 1 escrevendo `outputs/01-briefing/resumo-destilado.md`,
Chat 3 escrevendo um card em `board/fase-a/`), o Dyad cria um commit git
automaticamente, sem passo manual do usuário.

**Por quê:** informado no contexto original como comportamento do Build
mode. Os prompts deste sistema (ex.: instrução para os chats "salvar em
arquivo") dependem disso para a coordenação entre chats funcionar sem
intervenção manual de copiar/colar.

**Se estiver errada:** se o commit não for automático, ou se o Dyad
exigir confirmação, os prompts continuam funcionando (o arquivo ainda é
escrito no disco/working tree), mas você precisará comitar manualmente
entre um chat e outro para garantir que o próximo chat veja a versão
mais recente ao ler o arquivo.

---

## 4. Chat em Ask mode consegue ler arquivos do repositório mesmo sem escrever

**Suposição:** embora o Ask mode não escreva arquivos nem comite, ele
consegue *ler* o conteúdo de arquivos existentes no repositório quando
referenciado no prompt (relevante para o prompt do consultor
PO+Tech Lead, que só precisa ler o mapa do repo e o card em questão, não
escrever nada).

**Por quê:** o desenho do consultor PO+Tech Lead assume que um chat
aberto especificamente para esclarecer dúvida não precisa estar em Build
mode — só precisa enxergar o conteúdo existente.

**Se estiver errada:** se o Ask mode não tiver acesso de leitura ao
conteúdo real dos arquivos (só ao que é colado manualmente no prompt), o
prompt do consultor precisa ser ajustado para instruir explicitamente o
usuário a colar o conteúdo do card (e, se necessário, de arquivos
correlatos) na mensagem, em vez de assumir que o chat "vai lá ler
sozinho".

---

## 5. Build mode cobre uso de MCP sem exigir o Agent mode pago

**Suposição:** informado no contexto original como fato, não inferência
— o Build mode do Dyad é suficiente para qualquer necessidade de MCP
deste sistema, mesmo sem o Agent mode pago/limitado. Como este projeto
não usa nenhuma integração MCP (é doc-as-code puro), essa suposição hoje
não tem nenhum ponto de contato ativo no repositório — está registrada
apenas para rastreabilidade, caso o sistema evolua para usar MCP no
futuro (ex.: integração com GitHub Issues).

**Se estiver errada:** sem impacto na entrega atual. Só passaria a
importar se, no futuro, algum prompt deste sistema passasse a depender
de uma ferramenta MCP específica.

---

## 6. Nomenclatura hierárquica de cards é suficiente como substituto de Trello

**Suposição:** prefixos numéricos hierárquicos (`01-`, `02-01-`, etc.) em
nomes de arquivo dentro de `board/fase-a/` e `board/fase-b/` comunicam
ordem e dependência de forma legível o suficiente para uso direto no
Dyad ou importação manual em qualquer gerenciador de tarefas (Trello,
Notion, Linear, etc.), sem precisar de um formato de exportação
específico (ex.: `.csv` compatível com import do Trello).

**Por quê:** você confirmou que não há dependência de Trello — os cards
podem ser lidos como arquivo Markdown puro.

**Se estiver errada:** se no uso real você quiser importação automatizada
para uma ferramenta específica, um script de conversão (Markdown →
formato de import daquela ferramenta) pode ser adicionado depois, sem
alterar a estrutura de conteúdo dos cards em si.

---

## 7. O prompt do consultor PO+Tech Lead pode ser estático (não gerado por projeto)

**Suposição:** o Chat 3 "entrega" o prompt do consultor PO+Tech Lead no
sentido de apresentá-lo e confirmar sua existência, não de gerá-lo do
zero a cada projeto. Como esse prompt é genérico por natureza (orienta-se
lendo o repositório e o card em questão, não carrega conteúdo específico
de projeto), ele vem pré-escrito no repositório (`prompts/consultor-po-tech-lead.md`)
em vez de ser reescrito em toda execução do Agente Zero.

**Por quê:** evita trabalho redundante e risco de inconsistência entre
projetos; o conteúdo desse prompt não depende de nada que só existe
depois do briefing/diagnóstico.

**Se estiver errada:** se no uso real fizer sentido que esse prompt seja
customizado por projeto (ex.: referenciando particularidades do stack
escolhido), o Chat 3 pode ser ajustado para regenerá-lo como parte de
sua entrega, usando o mesmo arquivo como ponto de partida.

## 8. Um "Prompt de execução" colado num chat novo consegue escrever em `entregaveis/` sozinho

**Suposição:** ao colar o bloco "Prompt de execução" de um card num chat
novo em Build mode, a IA consegue localizar e escrever corretamente em
`entregaveis/NN-nome-do-artefato.md` só com a instrução textual do
prompt — sem precisar que a pessoa aponte manualmente o caminho por
fora do prompt.

**Por quê:** é assim que o Build mode foi descrito no contexto original
(escreve/edita arquivo). O prompt de cada card sempre inclui o caminho
exato de destino, então a suposição é só sobre o chat conseguir agir
sobre esse caminho relativo à raiz do repositório importado.

**Se estiver errada:** se o Build mode precisar de um caminho absoluto,
ou tiver dificuldade para criar arquivo em pasta já existente vs. nova,
o ajuste é local a cada prompt de execução (adicionar instrução mais
explícita de caminho) — não afeta a arquitetura do sistema.


