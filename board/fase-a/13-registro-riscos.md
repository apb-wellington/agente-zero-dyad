# Card 13 — Registro de riscos

**Status:** A fazer
**Depende de:** 02-prd, 04-solution-architecture, 10-nfrs-modelo-custo
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: tabela risco → mitigação cobrindo todas as dimensões com score >= 2 + probabilidade, impacto e responsável por risco.

## Objetivo
Mapear os riscos técnicos, operacionais, de segurança e de privacidade do CapybaraCart, definindo probabilidade, impacto, mitigação e responsáveis para cada um, garantindo a resiliência do modelo BYOK e da política de armazenamento zero.

## Contexto essencial
*   **Modelo BYOK:** Risco de vazamento de chaves de API locais, chaves inválidas, expiradas ou sem saldo por parte do seller.
*   **Armazenamento Zero:** Risco de perda de dados de transação se o Google Sheets do seller falhar, estiver inacessível ou com permissões incorretas.
*   **Integrações:** Dependência crítica de 7 APIs externas (Stripe, Google Sheets, OpenAI/Anthropic, Mercado Envios, Instagram, Pinterest, TikTok).
*   **Reversibilidade:** Decisões de arquitetura tomadas cedo (como criptografia local) têm alto custo de reversão se houver falhas de segurança.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Risk Manager, Security Engineer e Tech Lead sênior, especialista em segurança de dados, conformidade (LGPD/GDPR) e resiliência de sistemas distribuídos. Seu objetivo é criar o documento de Registro de Riscos completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, modular).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/13-registro-riscos.md`. O documento deve conter as seguintes seções detalhadas:

1. **Metodologia de Análise de Riscos:**
   - Explique brevemente a matriz de risco utilizada (Probabilidade de 1 a 3 vs. Impacto de 1 a 3) para calcular a criticidade (Score = Probabilidade x Impacto).

2. **Tabela de Registro de Riscos Completa:**
   - Crie uma tabela detalhada contendo pelo menos 6 riscos críticos cobrindo as dimensões com score >= 2 no diagnóstico (Sensibilidade de dados, Integrações externas, Exposição a usuários reais, Reversibilidade).
   - Para cada risco, inclua:
     - **ID do Risco:** (ex: R-01, R-02).
     - **Descrição do Risco:** O que pode acontecer e qual a causa.
     - **Probabilidade:** (1 - Baixa, 2 - Média, 3 - Alta).
     - **Impacto:** (1 - Baixo, 2 - Médio, 3 - Alto).
     - **Score de Criticidade:** (Multiplicação de Probabilidade x Impacto).
     - **Ação de Mitigação:** O que o sistema faz preventivamente para evitar o risco.
     - **Plano de Contingência:** O que fazer se o risco se concretizar.
     - **Responsável:** Quem monitora ou responde pelo risco (ex: Tech Lead, Seller, Plataforma).

3. **Detalhamento dos Riscos Críticos (Mapeamento Obrigatório):**
   - **R-01 (Segurança):** Vazamento ou roubo de chaves de API do seller salvas localmente (XSS/comprometimento do dispositivo).
   - **R-02 (Integração/Dados):** Falha de gravação no Google Sheets do seller (planilha cheia, deletada ou API fora do ar) resultando em perda de dados de pedidos.
   - **R-03 (Transacional):** Falha de webhook do Stripe ou inconsistência no status de pagamento.
   - **R-04 (IA):** Alucinação de dados "hard" (preço/estoque) pela IA gerando problemas legais ou prejuízo financeiro para o seller.
   - **R-05 (Operacional):** Bloqueio ou banimento de chaves de API do seller por violação de termos de uso de terceiros (ex: OpenAI, Redes Sociais).

Gere um documento técnico rigoroso, focado em segurança defensiva e resiliência operacional.
```

## Critério de conclusão
1. O arquivo `entregaveis/13-registro-riscos.md` foi criado com todas as 3 seções especificadas no prompt de execução.
2. A tabela de riscos cobre todas as dimensões críticas (Sensibilidade de dados, Integrações, Exposição e Reversibilidade).
3. Cada risco possui probabilidade, impacto, score, mitigação, plano de contingência e responsável definidos.
4. Os riscos específicos de vazamento de chaves (BYOK) e falha de gravação de pedidos (Google Sheets) estão detalhados.