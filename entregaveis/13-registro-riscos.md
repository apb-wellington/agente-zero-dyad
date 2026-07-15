# Registro de Riscos — CapybaraCart

Este documento estabelece o mapeamento, a análise e o plano de mitigação de riscos técnicos, operacionais, de segurança e de privacidade para o CapybaraCart. Alinhado com a filosofia **"New Beetle"** (simplicidade inteligente, robustez e utilidade prática), o gerenciamento de riscos foca em proteger a soberania de dados do modelo **BYOK (Bring Your Own Key)** e garantir a resiliência da política de **Armazenamento Zero** de dados de compradores.

---

## 1. Metodologia de Análise de Riscos

A análise de riscos do CapybaraCart utiliza uma matriz bidimensional de criticidade baseada na multiplicação dos fatores de **Probabilidade** e **Impacto**, ambos pontuados em uma escala de 1 a 3.

### 1.1 Escala de Probabilidade
*   **1 (Baixa):** Evento raro, com histórico quase inexistente ou altamente improvável de ocorrer devido às barreiras técnicas existentes.
*   **2 (Média):** Evento possível, que pode ocorrer sob condições específicas ou falhas de processos operacionais comuns.
*   **3 (Alta):** Evento provável, com recorrência esperada caso não existam controles preventivos ativos.

### 1.2 Escala de Impacto
*   **1 (Baixo):** Causa inconveniência leve ou degradação temporária de recursos não essenciais, sem prejuízo financeiro ou legal.
*   **2 (Médio):** Causa interrupção temporária de fluxos críticos (como checkout ou cadastro), gerando retrabalho ou perda potencial de vendas pontuais.
*   **3 (Alto):** Causa vazamento de credenciais sensíveis, perda definitiva de dados transacionais, prejuízo financeiro direto ou violação grave de conformidade legal (LGPD).

### 1.3 Matriz de Criticidade (Score = Probabilidade x Impacto)
O Score de Criticidade varia de 1 a 9, classificando os riscos em três níveis de atenção:
*   **Score 1 a 3 (Verde - Baixo):** Risco aceitável. Monitoramento periódico e aplicação de boas práticas padrão.
*   **Score 4 a 6 (Amarelo - Médio):** Risco moderado. Exige ações de mitigação planejadas e monitoramento ativo.
*   **Score 8 a 9 (Vermelho - Alto):** Risco crítico. Exige mitigação imediata na arquitetura do sistema e planos de contingência detalhados.

---

## 2. Tabela de Registro de Riscos Completa

A tabela abaixo consolida os riscos críticos identificados para o CapybaraCart, cobrindo as dimensões de Sensibilidade de Dados, Integrações Externas, Exposição a Usuários Reais e Reversibilidade.

| ID | Descrição do Risco | Probabilidade (P) | Impacto (I) | Score (P x I) | Ação de Mitigação (Preventiva) | Plano de Contingência (Reativa) | Responsável |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- | :--- |
| **R-01** | Vazamento ou roubo de chaves de API do seller salvas localmente (XSS/comprometimento do dispositivo). | 2 | 3 | **6** | Criptografia simétrica AES-256-GCM no banco de metadados associada ao Google OAuth; Content Security Policy (CSP) estrito no PWA. | Revogação imediata das chaves nos painéis dos provedores (Stripe/OpenAI) e geração de novas credenciais. | Tech Lead / Seller |
| **R-02** | Falha de gravação no Google Sheets do seller (planilha cheia, deletada ou API fora do ar) resultando em perda de dados de pedidos. | 2 | 3 | **6** | Validação prévia de integridade da planilha no dashboard; Serverless Proxy com tratamento de erros robusto. | Armazenamento temporário criptografado no IndexedDB do seller para sincronização manual posterior. | Tech Lead / Seller |
| **R-03** | Falha de webhook do Stripe ou inconsistência no status de pagamento durante o checkout. | 2 | 2 | **4** | Polling ativo no client-side pós-checkout; envio de metadados de conciliação (`order_id`) em todas as transações. | Ferramenta de conciliação manual no dashboard do seller para buscar transações órfãs diretamente na API do Stripe. | Tech Lead |
| **R-04** | Alucinação de dados "hard" (preço/estoque) pela IA gerando problemas legais ou prejuízo financeiro para o seller. | 2 | 2 | **4** | Engenharia de prompt defensiva com restrições negativas absolutas; isolamento de campos numéricos no formulário. | Revisão obrigatória do seller antes da publicação; facilidade de edição manual rápida de qualquer campo gerado. | Seller |
| **R-05** | Bloqueio ou banimento de chaves de API do seller por violação de termos de uso de terceiros (ex: OpenAI, Redes Sociais). | 1 | 3 | **3** | Limitação de taxa (rate limiting) no proxy; sanitização de prompts para evitar abusos ou injeções de código. | Instruções claras para o seller solicitar revisão ou criar uma nova conta/chave nos provedores parceiros. | Seller / Plataforma |
| **R-06** | Interceptação de dados pessoais de compradores em trânsito (ataques Man-in-the-Middle). | 1 | 3 | **3** | Uso obrigatório de HTTPS com TLS 1.3; cabeçalhos HSTS estritos; proibição de conexões HTTP inseguras. | Revogação de sessões ativas; auditoria de logs de tráfego do proxy serverless; aviso de segurança aos usuários afetados. | Tech Lead |

---

## 3. Detalhamento dos Riscos Críticos (Mapeamento Obrigatório)

### R-01 (Segurança): Vazamento ou roubo de chaves de API do seller salvas localmente
*   **Cenário:** Um atacante explora uma vulnerabilidade de Cross-Site Scripting (XSS) no PWA ou compromete o dispositivo físico do vendedor, obtendo acesso às chaves privadas de API (Stripe Secret Key, OpenAI Key) armazenadas.
*   **Impacto Detalhado:** Acesso administrativo não autorizado à conta do Stripe do seller (permitindo desvios de saldo ou estornos maliciosos) e consumo abusivo de créditos na API de IA.
*   **Mitigação Preventiva:**
    1.  **Criptografia no Banco de Metadados:** As chaves de API nunca são salvas em texto puro. Elas são criptografadas com AES-256-GCM no banco de metadados da plataforma, utilizando chaves de criptografia gerenciadas por KMS e atreladas ao ID do usuário autenticado via Google OAuth.
    2.  **Content Security Policy (CSP) Estrito:** Configuração de cabeçalhos CSP que proíbem a execução de scripts inline não autorizados e limitam as conexões de rede apenas aos domínios confiáveis do proxy e das APIs oficiais.
    3.  **Sanitização de Inputs:** Uso de bibliotecas de sanitização no frontend para neutralizar qualquer tentativa de injeção de scripts em campos de texto.
*   **Plano de Contingência:**
    1.  O sistema deve fornecer um botão de "Emergência: Revogar Conexões" no dashboard do seller.
    2.  Ao ser acionado, o sistema limpa as chaves criptografadas do banco de metadados e instrui o seller a acessar imediatamente o painel do Stripe e da OpenAI para deletar as chaves de API antigas e gerar novas.

### R-02 (Integração/Dados): Falha de gravação no Google Sheets do seller
*   **Cenário:** O comprador finaliza o pagamento com sucesso no Stripe, mas a API do Google Sheets falha ao registrar a linha do pedido porque a planilha atingiu o limite de linhas, foi deletada pelo seller ou a API do Google está fora do ar.
*   **Impacto Detalhado:** O comprador é cobrado, mas o vendedor não recebe os dados de entrega do cliente, gerando atrito comercial, atrasos na logística e risco de disputas judiciais.
*   **Mitigação Preventiva:**
    1.  **Health Check de Inicialização:** O dashboard do seller realiza uma verificação silenciosa de permissões de escrita na planilha do Google Sheets sempre que o vendedor faz login.
    2.  **Validação de Payload:** O Serverless Proxy valida a estrutura da planilha antes de tentar a inserção para garantir que as colunas necessárias existam.
*   **Plano de Contingência:**
    1.  **Resiliência Stateless (IndexedDB):** Se a gravação falhar, o Serverless Proxy retorna o status de sucesso de pagamento ao comprador (para evitar pânico) e envia o payload do pedido criptografado de volta ao PWA do comprador.
    2.  O pedido é armazenado temporariamente em uma fila local no `IndexedDB` do navegador do vendedor.
    3.  O dashboard do seller exibe um alerta vermelho crítico: *"Atenção: Existem pedidos pendentes de sincronização devido a um problema na sua planilha do Google Sheets. Clique aqui para sincronizar manualmente."*

### R-03 (Transacional): Falha de webhook do Stripe ou inconsistência no status de pagamento
*   **Cenário:** O comprador realiza o pagamento com sucesso, mas o webhook enviado pelo Stripe para notificar o Serverless Proxy falha (devido a timeout, instabilidade na rede ou erro de servidor), impedindo o disparo da gravação do pedido no Google Sheets.
*   **Impacto Detalhado:** Inconsistência transacional onde o pagamento é processado, mas o pedido não é registrado na planilha do vendedor.
*   **Mitigação Preventiva:**
    1.  **Polling Ativo no Client-Side:** O PWA do comprador realiza consultas periódicas (polling) de até 10 segundos ao endpoint do proxy para verificar o status do `PaymentIntent` assim que o Stripe Elements confirma a transação na interface.
    2.  **Idempotência de Gravação:** O ID único do pedido (`order_id`) é enviado como metadado para o Stripe e usado como chave primária de verificação no Google Sheets, impedindo que duplicidades ocorram caso o webhook e o polling funcionem simultaneamente.
*   **Plano de Contingência:**
    1.  **Conciliador Manual:** O dashboard do seller disponibiliza um botão de "Conciliar Pagamentos".
    2.  Ao ser clicado, o sistema consulta a API do Stripe usando a chave do seller para buscar transações aprovadas nas últimas 24 horas que ainda não constam na planilha do Google Sheets, realizando a inserção retroativa de forma automática.

### R-04 (IA): Alucinação de dados "hard" (preço/estoque) pela IA
*   **Cenário:** O assistente de IA, ao gerar a descrição do produto ou o post para redes sociais, alucina e insere um preço menor ou uma quantidade de estoque incorreta no texto descritivo.
*   **Impacto Detalhado:** O seller pode publicar um anúncio com preço errado, gerando prejuízo financeiro direto ou problemas legais de publicidade enganosa perante o Código de Defesa do Consumidor.
*   **Mitigação Preventiva:**
    1.  **Isolamento de Campos Sensíveis:** Os campos de preço e estoque são estritamente numéricos e isolados no formulário de cadastro. A IA não tem permissão de escrita direta nesses campos.
    2.  **System Prompt Defensivo:** O prompt do assistente de IA contém restrições negativas absolutas e exemplos (few-shot) instruindo o modelo a nunca inventar ou incluir valores monetários ou de estoque no corpo do texto gerado.
*   **Plano de Contingência:**
    1.  **Revisão Obrigatória (Human-in-the-Loop):** O sistema nunca publica um produto ou post de forma 100% autônoma. Toda geração da IA é exibida em uma área de rascunho editável, exigindo a revisão e aprovação explícita do seller antes de salvar ou compartilhar.

### R-05 (Operacional): Bloqueio ou banimento de chaves de API do seller por violação de termos de uso
*   **Cenário:** O seller utiliza sua chave de API da OpenAI/Gemini ou de redes sociais de forma abusiva (ex: gerando spam ou conteúdo impróprio), resultando no banimento de suas credenciais pelos provedores parceiros.
*   **Impacto Detalhado:** Interrupção imediata dos assistentes de IA ou dos fluxos de publicação social para aquele seller específico, degradando a experiência de uso da plataforma.
*   **Mitigação Preventiva:**
    1.  **Sanitização de Prompts:** O Serverless Proxy realiza uma filtragem prévia de palavras-chave e padrões de abuso nos prompts enviados pelos sellers antes de encaminhá-los às APIs de IA.
    2.  **Rate Limiting por IP/Seller:** Implementação de limites de requisições no proxy para evitar que um único seller abuse do consumo de tokens e cause bloqueios em massa.
*   **Plano de Contingência:**
    1.  **Degradação Suave:** Se a chave do seller for banida ou bloqueada, o sistema desativa suavemente o assistente correspondente e exibe uma notificação instrutiva: *"Sua chave de API foi recusada pelo provedor. Por favor, verifique o status da sua conta no painel do parceiro ou insira uma nova chave nas configurações."*
    2.  O fluxo de cadastro manual de produtos permanece 100% funcional, garantindo que a operação de vendas não seja interrompida.
</dyad-file>

<dyad-write path="board/fase-a/13-registro-riscos.md" description="Atualizando o status do Card 13 para Concluído">
# Card 13 — Registro de riscos

**Status:** Concluído
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