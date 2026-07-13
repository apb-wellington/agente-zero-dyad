# Card 11 — Critérios de aceite/testes

**Status:** A fazer
**Depende de:** 02-prd
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: checklist simples por funcionalidade, critérios Given/When/Then por user story principal, casos de erro e edge cases (com atenção especial aos ligados à IA).

## Objetivo
Definir os critérios de aceitação e cenários de teste para o CapybaraCart, utilizando o formato Given/When/Then para as histórias de usuário principais, e mapeando casos de erro e edge cases críticos (especialmente os relacionados à IA e falhas de API) para garantir a robustez do sistema.

## Contexto essencial
*   **Filosofia Fusca:** Testes focados no fluxo crítico de checkout e validação de chaves.
*   **Modelo BYOK:** Testar cenários onde as chaves de API do seller estão inválidas, expiradas ou sem saldo.
*   **Armazenamento Zero:** Garantir que nenhum dado de comprador seja retido localmente ou no servidor intermediário após a transação, e que a gravação no Google Sheets ocorra com sucesso.
*   **IA:** Testar comportamento defensivo da IA para evitar alucinações de dados "hard" (preço, estoque).

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um QA Engineer e SDET sênior, especialista em testes de integração de APIs, comportamento (BDD) e testes de robustez para sistemas descentralizados. Seu objetivo é criar o documento de Critérios de Aceite/Testes completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, robustez, modularidade).
- Modelo BYOK: O usuário traz suas próprias chaves de API (Stripe, Google Sheets, OpenAI/Anthropic).
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/11-criterios-aceite-testes.md`. O documento deve conter as seguintes seções detalhadas:

1. **Visão Geral da Estratégia de Testes:**
   - Abordagem de testes para um sistema sem banco de dados centralizado (foco em testes de integração de ponta a ponta e testes de contrato de API).

2. **Critérios de Aceite BDD (Given/When/Then):**
   - Mapeie cenários de teste detalhados no formato BDD para pelo menos 4 fluxos críticos:
     - **Setup BYOK:** Validação e salvamento seguro das chaves de API.
     - **Cadastro de Produto com IA:** Geração de descrição e tratamento de fotos.
     - **Fluxo de Compra (Checkout):** Processamento de pagamento no Stripe e cálculo de frete.
     - **Sincronização de Pedido:** Gravação dos dados do comprador diretamente no Google Sheets do seller.

3. **Casos de Erro e Edge Cases (Cenários de Exceção):**
   - Detalhe os cenários de teste e o comportamento esperado para:
     - Chave de API do Stripe inválida ou expirada durante o checkout.
     - Planilha do Google Sheets do seller deletada, renomeada ou sem permissão de escrita.
     - Queda de conexão de internet do comprador no meio do processamento do pagamento.
     - Tentativa de compra de um produto com estoque zerado (se aplicável).

4. **Testes Específicos de IA (Robustez e Segurança):**
   - Cenários de teste para garantir que a IA não alucine dados "hard" (preço, estoque, características físicas).
   - Testes de injeção de prompt (prompt injection) nos assistentes de IA para garantir que o comportamento do assistente permaneça seguro.

Gere um documento técnico rigoroso, que sirva de base para a automação de testes e homologação do sistema.
```

## Critério de conclusão
1. O arquivo `entregaveis/11-criterios-aceite-testes.md` foi criado com todas as 4 seções especificadas no prompt de execução.
2. O documento apresenta cenários Given/When/Then claros para os fluxos de Setup, Cadastro, Checkout e Sincronização.
3. Os casos de erro para falhas de chaves de API e indisponibilidade de serviços de terceiros estão mapeados.
4. Os testes de comportamento e segurança da IA estão detalhados para evitar alucinações de dados críticos.