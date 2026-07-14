# Card 03-01 — Personas / JTBD

**Status:** Concluído
**Depende de:** 02-prd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: personas primárias + secundárias, JTBD completo (funcional, emocional, social) por persona.

## Objetivo
Mapear detalhadamente as personas primárias e secundárias do CapybaraCart e seus respectivos Jobs-to-be-Done (JTBD) nos aspectos funcionais, emocionais e sociais, garantindo que o produto atenda às reais motivações, dores e comportamentos dos hobbistas, colecionadores e seus compradores.

## Contexto essencial
*   **Público-alvo:** Sellers eventuais, colecionadores e hobbistas (ex: criadores de orquídeas raras, colecionadores de itens vintage) que usam redes sociais para expor suas paixões.
*   **Dores principais:** Detestam a burocracia de setups de e-commerce tradicionais (ERPs, cadastros complexos) e a exaustão mental da barganha direta e negociação manual no WhatsApp.
*   **Comportamento:** Sentem orgulho de suas coleções/hobbies, não possuem ímpeto comercial agressivo, valorizam a privacidade e a simplicidade (BYOK, armazenamento zero).
*   **Compradores:** Pessoas que buscam itens únicos e querem um fluxo de compra rápido, direto e sem fricção (sem necessidade de criar contas ou fazer logins).

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um UX Researcher e Estrategista de Produto sênior, especialista em mapeamento de comportamento de usuários de nicho e na metodologia Jobs-to-be-Done (JTBD). Seu objetivo é criar o documento de Personas e JTBD completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Público-alvo: Sellers eventuais, colecionadores e hobbistas que expõem seus produtos em redes sociais (Instagram, Pinterest, TikTok).
- Dor: Detestam burocracia de e-commerce tradicional e a exaustão de negociar preços no WhatsApp.
- Filosofia: Simplicidade radical ("Fusca"), modelo BYOK e armazenamento zero de dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/03-01-personas-jtbd.md`. O documento deve conter as seguintes seções detalhadas:

1. **Personas Primárias (Mínimo de 2):**
   - Crie perfis detalhados para os vendedores (ex: "Seu Alberto, o Orquidófilo Hobbista" e "Mariana, a Colecionadora de Brechó Vintage").
   - Inclua: Perfil demográfico/psicográfico, comportamentos, dores com soluções atuais, objetivos e relação com a tecnologia (foco no modelo BYOK).

2. **Personas Secundárias (Mínimo de 1):**
   - Crie o perfil do comprador final (ex: "Lucas, o Caçador de Itens Únicos").
   - Inclua: Motivações de compra, comportamento em redes sociais, dores em checkouts tradicionais e por que ele valoriza um fluxo sem fricção e sem login.

3. **Mapeamento Jobs-to-be-Done (JTBD) Completo:**
   - Para cada persona (primárias e secundárias), estruture o Job principal usando o framework: "Quando [situação], eu quero [ação], para que eu possa [resultado esperado]."
   - Detalhe as três dimensões do Job para cada persona:
     - **Job Funcional:** A tarefa prática que o usuário quer realizar.
     - **Job Emocional (Pessoal):** Como o usuário quer se sentir ao realizar a tarefa.
     - **Job Social:** Como o usuário quer ser percebido pelos outros.

4. **Implicações para o Produto:**
   - Traduza as dores e os Jobs mapeados in diretrizes claras de design e funcionalidade para o CapybaraCart (ex: "Como o Job Emocional do hobbista é evitar o desgaste da barganha, o fluxo de checkout deve ser totalmente autônomo e definitivo").

Gere um documento profundo, empático e diretamente acionável para o time de design e desenvolvimento.
```

## Critério de conclusão
1. O arquivo `entregaveis/03-01-personas-jtbd.md` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento apresenta pelo menos 2 personas primárias (vendedores) e 1 persona secundária (comprador).
3. O mapeamento JTBD detalha claramente as dimensões funcional, emocional e social para cada persona.
4. As implicações para o produto estão diretamente conectadas com a filosofia de simplicidade radical e BYOK do CapybaraCart.