# Registro de Riscos — CapybaraCart

Este documento apresenta a análise de riscos e o plano de mitigação para a operação do CapybaraCart. O objetivo é garantir a segurança das credenciais no modelo **BYOK (Bring Your Own Key)** e a resiliência da política de **Armazenamento Zero** de dados de compradores, mantendo a simplicidade e a robustez da solução.

---

## 1. Metodologia de Análise de Riscos

A avaliação de riscos utiliza uma matriz de criticidade baseada na probabilidade de ocorrência e no impacto gerado para o negócio ou para a segurança dos dados.

*   **Probabilidade (1 a 3):** 1 (Baixa), 2 (Média), 3 (Alta).
*   **Impacto (1 a 3):** 1 (Baixo), 2 (Médio), 3 (Alto).
*   **Score de Criticidade:** Calculado pela multiplicação da Probabilidade pelo Impacto (Score = P x I), variando de 1 a 9.

---

## 2. Tabela de Riscos

| ID | Risco | P | I | Score | Ação Preventiva (Mitigação) | Plano de Contingência | Responsável |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- | :--- |
| **R-01** | Vazamento de chaves de API do vendedor salvas localmente. | 2 | 3 | **6** | Criptografia AES-256-GCM no banco de metadados atrelada ao Google OAuth; Content Security Policy (CSP) estrito no PWA. | Revogação imediata das chaves nos painéis do Stripe/OpenAI e geração de novas credenciais. | Tech Lead / Seller |
| **R-02** | Falha de gravação de pedidos na planilha do Google Sheets. | 2 | 3 | **6** | Validação prévia de integridade da planilha no dashboard; tratamento de erros robusto no Serverless Proxy. | Armazenamento temporário criptografado no IndexedDB do vendedor para sincronização manual posterior. | Tech Lead / Seller |
| **R-03** | Falha de webhook do Stripe ou inconsistência no status de pagamento. | 2 | 2 | **4** | Polling ativo no client-side pós-checkout; envio de metadados de conciliação (`order_id`) em todas as transações. | Ferramenta de conciliação manual no dashboard do seller para buscar transações diretamente na API do Stripe. | Tech Lead |
| **R-04** | Alucinação de dados comerciais sensíveis (preço/estoque) pela IA. | 2 | 2 | **4** | Engenharia de prompt defensiva com restrições negativas absolutas; isolamento de campos numéricos no formulário. | Revisão obrigatória do seller antes da publicação; facilidade de edição manual rápida de qualquer campo gerado. | Seller |
| **R-05** | Bloqueio de chaves de API do seller por violação de termos de uso de terceiros. | 1 | 3 | **3** | Limitação de taxa (rate limiting) no proxy; sanitização de prompts para evitar abusos ou injeções de código. | Instruções claras para o seller solicitar revisão ou criar uma nova conta/chave nos provedores parceiros. | Seller / Plataforma |

---

## 3. Detalhamento dos Riscos e Planos de Ação

### R-01: Vazamento de chaves de API do vendedor
*   **Contexto:** Como o vendedor fornece suas próprias chaves de API (Stripe, OpenAI), o comprometimento do dispositivo ou ataques de injeção de script (XSS) poderiam expor essas credenciais.
*   **Ação Preventiva:** As chaves são criptografadas em repouso com AES-256-GCM utilizando chaves de criptografia gerenciadas por KMS e associadas de forma estrita ao ID do usuário autenticado via Google OAuth. O PWA utiliza cabeçalhos CSP estritos para impedir a execução de scripts não autorizados.
*   **Plano de Contingência:** O dashboard disponibiliza uma opção de revogação rápida de credenciais. O vendedor é instruído a invalidar a chave antiga diretamente no painel do Stripe/OpenAI e gerar um novo par de chaves.

### R-02: Falha de gravação de pedidos no Google Sheets
*   **Contexto:** O comprador realiza o pagamento com sucesso, mas a API do Google Sheets falha ao registrar a linha do pedido (planilha cheia, deletada ou API fora do ar).
*   **Ação Preventiva:** O dashboard do vendedor realiza verificações silenciosas de permissão de escrita na planilha sempre que o usuário faz login, alertando sobre inconsistências antes que as vendas ocorram.
*   **Plano de Contingência:** O Serverless Proxy confirma o sucesso do pagamento para o comprador (evitando pânico) e envia o payload do pedido criptografado de volta ao PWA do comprador, que o salva temporariamente no `IndexedDB` do navegador do vendedor. O dashboard exibe um alerta visual para que o vendedor sincronize o pedido manualmente assim que a conexão for restabelecida.

### R-03: Falha de webhook do Stripe ou inconsistência no status de pagamento
*   **Contexto:** O pagamento é aprovado, mas o webhook do Stripe falha ao notificar o proxy, impedindo o registro automático do pedido.
*   **Ação Preventiva:** O PWA do comprador realiza consultas periódicas (polling) de até 10 segundos ao endpoint do proxy para verificar o status do pagamento assim que a transação é confirmada na interface.
*   **Plano de Contingência:** O vendedor conta com um botão de "Conciliar Pagamentos" no dashboard, que consulta diretamente a API do Stripe em busca de transações aprovadas que ainda não constam na planilha, realizando a inserção retroativa de forma automática.

### R-04: Alucinação de dados comerciais sensíveis pela IA
*   **Contexto:** A IA gera descrições ou títulos contendo preços ou quantidades de estoque incorretas, induzindo o comprador ao erro.
*   **Ação Preventiva:** Os campos de preço e estoque são estritamente numéricos e isolados no formulário de cadastro, sem permissão de escrita direta pela IA. O prompt do assistente de IA possui instruções negativas explícitas contra a geração de valores monetários.
*   **Plano de Contingência:** O sistema opera sob o modelo de revisão obrigatória (*Human-in-the-Loop*). Nenhum produto é publicado sem a validação e aprovação explícita do vendedor na tela de rascunho.

### R-05: Bloqueio de chaves de API do seller por terceiros
*   **Contexto:** O vendedor utiliza sua chave de API de forma abusiva ou fora dos limites permitidos, resultando no bloqueio da credencial pela OpenAI, Google ou redes sociais.
*   **Ação Preventiva:** O proxy serverless implementa limites de requisições por IP e seller para evitar abusos, além de realizar a sanitização de prompts.
*   **Plano de Contingência:** O sistema desativa suavemente o assistente afetado e exibe uma notificação instrutiva para que o seller verifique o status de sua conta no provedor parceiro. O fluxo de cadastro manual de produtos permanece 100% funcional.