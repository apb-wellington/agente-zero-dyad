# Card 12 — Roadmap/MVP scope (MoSCoW)

**Status:** A fazer
**Depende de:** 02-prd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: MoSCoW completo (Must/Should/Could/Won't) + fases e marcos temporais aproximados.

## Objetivo
Definir o escopo do MVP do CapybaraCart utilizando o framework MoSCoW e estruturar um roadmap evolutivo com fases e marcos temporais aproximados para guiar o desenvolvimento e lançamentos futuros, garantindo o alinhamento com a "Filosofia Fusca" de simplicidade radical.

## Contexto essencial
*   **Filosofia Fusca:** Foco absoluto no core funcional. O MVP deve ser bruto, robusto e focado em resolver a venda sem fricção.
*   **Modelo BYOK:** O setup de chaves de API (Stripe, Google Sheets, OpenAI) é um requisito "Must Have" absoluto, pois o sistema não funciona sem ele.
*   **Armazenamento Zero:** A gravação direta no Google Sheets e o checkout direto no Stripe são o coração do fluxo de compra.
*   **Meta de Sucesso do MVP:** O seller consegue realizar todo o setup, cadastrar seu primeiro produto com o auxílio da IA e publicá-lo nas redes sociais com sucesso dentro da primeira hora de uso.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Product Manager (PM) e Release Manager sênior, especialista em estratégias de lançamento de produtos digitais (Go-To-Market), priorização ágil e desenvolvimento de MVPs. Seu objetivo é criar o documento de Roadmap/MVP scope (MoSCoW) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, modular).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/12-roadmap-mvp-scope.md`. O documento deve conter as seguintes seções detalhadas:

1. **Matriz MoSCoW Completa e Justificada:**
   - Classifique detalhadamente os requisitos e funcionalidades do CapybaraCart nas quatro categorias, justificando cada escolha com base na filosofia do produto:
     - **Must Have (Essencial para o MVP):** O mínimo viável para o seller configurar, cadastrar e vender (ex: Setup BYOK, Vitrine PWA, Checkout Stripe, Integração Google Sheets, Assistente de Cadastro de Produtos).
     - **Should Have (Importante, mas não vital para o primeiro dia):** Funcionalidades que agregam muito valor mas podem esperar um segundo momento (ex: Assistente de Fotos, Assistente de Posicionamento de Marca, cálculo automático de frete via Mercado Envios).
     - **Could Have (Desejável, se houver tempo/recursos):** Melhorias de usabilidade ou features secundárias (ex: Assistente de Publicação Social, múltiplos temas visuais para a vitrine).
     - **Won't Have (Fora do escopo do MVP):** Funcionalidades explicitamente descartadas para manter a simplicidade (ex: Área de membros para compradores, painel de analytics complexo, banco de dados próprio para dados de compradores).

2. **Fases do Roadmap de Desenvolvimento:**
   - Divida o desenvolvimento do CapybaraCart em fases lógicas e incrementais:
     - **Fase 1: Fundação & BYOK (Core):** Setup de chaves, criptografia local e estrutura básica do PWA.
     - **Fase 2: Cadastro & IA (Criação):** Formulário de cadastro e integração com a API de LLM para geração de conteúdo.
     - **Fase 3: Transação & Entrega (Checkout):** Integração com Stripe e Google Sheets para fechamento de vendas.
     - **Fase 4: Divulgação & Growth (Lançamento):** Marcas d'água, tags de compartilhamento e assistente de posts.

3. **Marcos Temporais Aproximados (Milestones):**
   - Defina uma estimativa de tempo realista para cada fase (ex: Semana 1-2, Semana 3-4, etc.) considerando um desenvolvimento ágil via vibe-coding no Dyad.
   - Estabeleça critérios de aceitação claros para a conclusão de cada marco (Milestone Criteria).

4. **Estratégia de Soft Launch e Growth Loop:**
   - Como o MVP será testado com os primeiros hobbistas e colecionadores.
   - Como o growth loop viral (marcas d'água e tags do CapybaraCart nas imagens e posts gerados pela IA) será ativado para atrair novos sellers organicamente.

Gere um documento estratégico claro, realista e diretamente acionável para o time de desenvolvimento e produto.
```

## Critério de conclusão
1. O arquivo `entregaveis/12-roadmap-mvp-scope.md` foi criado com todas as 4 seções especificadas no prompt de execução.
2. A matriz MoSCoW está completa, justificada e alinhada com a filosofia de simplicidade radical do MVP.
3. O roadmap apresenta fases claras e marcos temporais realistas para o desenvolvimento.
4. A estratégia de soft launch e o growth loop viral estão documentados.