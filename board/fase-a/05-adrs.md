# Card 05 — ADRs (Architecture Decision Records)

**Status:** A fazer
**Depende de:** 04-solution-architecture
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: ADR completo (contexto, decisão, alternativas consideradas, consequências) para cada decisão arquitetural relevante.

## Objetivo
Registrar formalmente as decisões arquiteturais mais críticas do CapybaraCart, garantindo rastreabilidade, justificativa técnica e alinhamento com a "Filosofia Fusca" e o modelo BYOK, mapeando as alternativas consideradas e as consequências de cada escolha.

## Contexto essencial
*   **Modelo BYOK:** O seller traz suas próprias chaves de API. Precisamos decidir onde e como armazenar essas chaves com segurança máxima sem um banco de dados centralizado.
*   **Armazenamento Zero:** Nenhum dado de comprador é retido nos servidores da plataforma. Precisamos formalizar como os dados de transação fluem diretamente para o Google Sheets do seller.
*   **Serverless Proxy vs. Client-side Direto:** Decidir se as chamadas de API (Stripe, OpenAI, Google Sheets) serão feitas diretamente pelo navegador do comprador/seller ou se passarão por um proxy serverless leve para evitar problemas de CORS e proteger chaves em trânsito.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Arquiteto de Software Principal com vasta experiência em sistemas distribuídos, segurança de dados e arquiteturas descentralizadas. Seu objetivo é criar o documento de ADRs (Architecture Decision Records) completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Filosofia: "Fusca" (simplicidade, robustez, modularidade).
- Modelo BYOK (Bring Your Own Key) e Armazenamento Zero de dados de compradores.
- Necessidade de garantir segurança das chaves de API do seller e viabilidade técnica de integrações sem banco de dados central.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/05-adrs.md`. O documento deve conter pelo menos 3 ADRs completos, estruturados no formato padrão de mercado:

1. **ADR-01: Armazenamento Seguro de Chaves de API do Seller (BYOK)**
   - **Status:** Aprovado
   - **Contexto:** Onde e como guardar as chaves de API (Stripe, Google Sheets, OpenAI) do seller de forma que ele não precise digitá-las a cada sessão, garantindo segurança contra ataques XSS/CSRF.
   - **Decisão:** [Defina a decisão técnica, ex: Criptografia local no client-side (AES-GCM) com chave derivada de senha do seller, ou armazenamento em cookies HttpOnly via proxy serverless].
   - **Alternativas Consideradas:** Banco de dados centralizado (rejeitado por violar o armazenamento zero e aumentar custo/risco); Armazenamento em texto puro no localStorage (rejeitado por risco de XSS).
   - **Consequências:** [Prós e contras da decisão tomada].

2. **ADR-02: Fluxo de Dados de Compradores (Armazenamento Zero)**
   - **Status:** Aprovado
   - **Contexto:** Como processar o checkout e enviar os dados de entrega e pagamento para o Google Sheets do seller sem reter nenhuma informação nos servidores do CapybaraCart.
   - **Decisão:** [Defina a decisão técnica, ex: Envio direto via Serverless Function que atua como pipeline de passagem (pass-through) e grava diretamente na API do Google Sheets usando a chave do seller].
   - **Alternativas Consideradas:** Armazenamento temporário em banco de dados Redis com expiração (rejeitado por violar a premissa de armazenamento zero); Envio direto do client-side do comprador (rejeitado por expor a chave do Google Sheets do seller ao comprador).
   - **Consequências:** [Prós e contras da decisão tomada].

3. **ADR-03: Uso de Serverless Proxy para Chamadas de API de Terceiros**
   - **Status:** Aprovado
   - **Contexto:** Como realizar chamadas seguras para as APIs do Stripe, Google Sheets e OpenAI sem expor as chaves de API do seller no frontend do comprador e contornando restrições de CORS.
   - **Decisão:** [Defina a decisão técnica, ex: Criação de um proxy serverless leve (Edge Functions) que recebe a chave criptografada do client, descriptografa em memória, faz a requisição ao terceiro e retorna o resultado].
   - **Alternativas Consideradas:** Chamadas diretas do client-side (rejeitado por expor chaves de API e limitações de CORS); Servidor monolítico tradicional (rejeitado por custo e complexidade de escala).
   - **Consequências:** [Prós e contras da decisão tomada].

Gere um documento técnico maduro, com justificativas arquiteturais sólidas e profundas.
```

## Critério de conclusão
1. O arquivo `entregaveis/05-adrs.md` foi criado com os 3 ADRs especificados no prompt de execução.
2. Cada ADR segue rigorosamente a estrutura: Título, Status, Contexto, Decisão, Alternativas Consideradas e Consequências.
3. As decisões técnicas estão perfeitamente alinhadas com a "Filosofia Fusca", o modelo BYOK e a política de armazenamento zero.
4. O documento demonstra maturidade técnica e resolve os principais desafios de segurança e integração do projeto.