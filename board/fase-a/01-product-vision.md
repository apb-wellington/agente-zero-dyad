# Card 01 — Product Vision

**Status:** Concluído
**Depende de:** Nenhum
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: página completa — visão + público-alvo + diferencial + métricas de sucesso macro + contexto de mercado/concorrência + riscos estratégicos ligados à visão.

## Objetivo
Consolidar a visão estratégica do CapybaraCart, alinhando o propósito de simplicidade radical ("Filosofia Fusca") e o modelo BYOK com o posicionamento de mercado ideal para atrair hobbistas e colecionadores, mapeando os riscos estratégicos e as métricas de sucesso macro.

## Contexto essencial
*   **O Produto:** CapybaraCart, um checkout e vitrine PWA ultra-simples.
*   **Filosofia:** "Fusca" (bruto, robusto, confiável, simplicidade radical) e BYOK (Bring Your Own Key - chaves de API do próprio seller para Stripe, Google Sheets, OpenAI/Anthropic).
*   **Público-alvo:** Sellers eventuais, colecionadores e hobbistas (ex: criadores de orquídeas raras) que vendem em redes sociais (Instagram, Pinterest, TikTok) e detestam burocracia de e-commerce tradicional ou barganha direta no WhatsApp.
*   **Diferencial:** Fluxo de compra frictionless, sem login para compradores, armazenamento zero de dados de clientes na plataforma (dados vão direto para o Google Sheets do seller).
*   **Crescimento:** Orgânico e viral (growth loop) através de marcas d'água e tags do CapybaraCart nas imagens e posts gerados pela IA.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Diretor de Produto (CPO) experiente em estratégias de Go-To-Market para produtos de nicho e SaaS bootstrapped. Seu objetivo é criar o documento de Product Vision para o CapybaraCart, um checkout e vitrine PWA ultra-simples focado em hobbistas e colecionadores.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser uma página completa, escrita em português do Brasil, extremamente profissional, inspiradora e estratégica.

### Contexto Essencial do CapybaraCart:
- Proposta de valor: Checkout e vitrine PWA ultra-simples para sellers eventuais venderem nas redes sociais sem a complexidade de e-commerce tradicional e sem a barganha do WhatsApp.
- Filosofia "Fusca": Simplicidade radical, robustez, modularidade extrema.
- Modelo BYOK (Bring Your Own Key): O usuário traz suas próprias chaves de API (Stripe, Google Sheets, OpenAI/Anthropic).
- Armazenamento Zero: Nenhum dado de comprador é saved nos servidores do CapybaraCart. Os dados de vendas vão direto para o Google Sheets do seller.
- Público-alvo: Colecionadores, hobbistas e vendedores eventuais que usam Instagram, Pinterest e TikTok.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/01-product-vision.md`. O documento deve conter as seguintes seções detalhadas:

1. **Declaração de Visão (The Elevator Pitch):**
   - Use o framework clássico: "Para [público-alvo], que [declaração da necessidade/dor], o [nome do produto] é um [categoria do produto] que [benefício chave/razão convincente para comprar]. Diferente de [alternativas de mercado], nós [declaração de diferenciação primária]."

2. **Público-Alvo Detalhado:**
   - Quem são esses hobbistas e colecionadores? Por que eles rejeitam Shopify, WooCommerce ou a venda direta no WhatsApp?

3. **Diferenciais Competitivos (A Filosofia Fusca & BYOK):**
   - Explique como o modelo BYOK e a política de "armazenamento zero" se tornam vantagens competitivas de privacidade e custo.
   - Explique o conceito de "simplicidade bruta" como diferencial de experiência do usuário.

4. **Métricas de Sucesso Macro:**
   - Defina 3 a 4 métricas de sucesso de negócio e produto para o MVP (ex: taxa de ativação de chaves de API na primeira hora, taxa de conversão de checkout, coeficiente de crescimento viral do growth loop).

5. **Contexto de Mercado e Concorrência:**
   - Como o CapybaraCart se posiciona em relação aos gigantes do e-commerce (Shopify, Nuvemshop) e ferramentas de link de pagamento (Mercado Pago, Stripe Payment Links)? Mostre que o CapybaraCart ocupa um espaço único de "vitrine + checkout sem fricção".

6. **Riscos Estratégicos:**
   - Mapeie os riscos estratégicos ligados à visão (ex: barreira técnica do modelo BYOK para usuários leigos, dependência das políticas de API das redes sociais e do Google Sheets, risco de churn se o usuário achar o setup de chaves complexo).

Gere um texto fluido, maduro e sem clichês corporativos vazios. Foque na clareza e na viabilidade prática da visão.
```

## Critério de conclusão
1. O arquivo `entregaveis/01-product-vision.md` foi criado com todas as 6 seções especificadas no prompt de execução.
2. O documento reflete com precisão a "Filosofia Fusca", o modelo BYOK e a política de armazenamento zero de dados.
3. O tom do documento é estratégico, profissional e focado no público de hobbistas/colecionadores.
4. Não há placeholders ou seções incompletas.