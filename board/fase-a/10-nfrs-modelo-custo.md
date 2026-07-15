# Card 10 — NFRs + modelo de custo

**Status:** Concluído
**Depende de:** 04-solution-architecture
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: NFRs completos (performance, disponibilidade, segurança, privacidade) + modelo de custo detalhado por componente.

## Objetivo
Definir os requisitos não funcionais (NFRs) críticos para o CapybaraCart (com foco em segurança de chaves de API, privacidade de dados de compradores, performance de carregamento em redes sociais e disponibilidade) e estruturar um modelo de custo detalhado por componente para o modelo BYOK.

## Contexto essencial
*   **Filosofia Fusca:** Leveza, robustez e custo operacional mínimo para a plataforma.
*   **Modelo BYOK:** O custo de infraestrutura de APIs (Stripe, OpenAI, Google Sheets) é repassado ao seller. O custo da plataforma em si deve ser próximo de zero (hospedagem estática + serverless).
*   **Segurança:** Criptografia local de chaves de API.
*   **Privacidade:** Armazenamento zero de dados de compradores.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Arquiteto de Infraestrutura, Engenheiro de Segurança e FinOps sênior. Seu objetivo é criar o documento de NFRs + modelo de custo completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, alto contraste, leveza).
- Modelo BYOK: O usuário traz suas próprias chaves de API.
- Armazenamento Zero: Sem banco de dados central para dados de compradores.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/10-nfrs-modelo-custo.md`. O documento deve conter as seguintes seções detalhadas:

1. **Requisitos Não Funcionais (NFRs) Detalhados:**
   - **Performance:** Tempo de carregamento da vitrine PWA (ex: First Contentful Paint < 1.5s em conexões 3G móveis, essencial para tráfego vindo de redes sociais).
   - **Disponibilidade:** SLA esperado para o PWA e estratégias de cache offline (Service Workers) para garantir que a vitrine abra mesmo com oscilações de rede.
   - **Segurança:** Padrões de criptografia para chaves de API locais (ex: AES-GCM-256), proteção contra XSS/CSRF e segurança no tráfego de dados (HTTPS forçado, CSP headers).
   - **Privacidade e Compliance:** Como a política de "armazenamento zero" simplifica a conformidade com a LGPD/GDPR, detalhando a responsabilidade legal compartilhada no modelo BYOK.

2. **Modelo de Custo Detalhado por Componente:**
   - **Custos da Plataforma (Hospedagem e Proxy):** Projeção de custos para manter o CapybaraCart no ar (ex: Vercel/Netlify Free Tier vs. Pro Tier, custos de Serverless Functions). Mostre como a arquitetura permite escala massiva com custo quase zero para os criadores da plataforma.
   - **Custos do Seller (Modelo BYOK):** Estimativa de custos operacionais para o vendedor com base no volume de vendas:
     - *Stripe:* Taxas por transação bem-sucedida.
     - *OpenAI/Anthropic:* Custo estimado de tokens por produto cadastrado/post gerado.
     - *Google Sheets:* Gratuito dentro dos limites da API do Google Workspace.
     - *Mercado Envios:* Custos de frete integrados e repassados ao comprador.

3. **Estratégia de Monitoramento e Alertas:**
   - Como monitorar a saúde do PWA e falhas de integração de forma descentralizada (ex: logs de erros locais, telemetria leve sem violar a privacidade do comprador).

Gere um documento técnico rigoroso, com estimativas financeiras realistas e diretrizes de segurança sólidas.
```

## Critério de conclusão
1. O arquivo `entregaveis/10-nfrs-modelo-custo.md` foi criado com todas as 3 seções especificadas no prompt de execução.
2. O documento detalha os NFRs de performance (métricas de carregamento móvel), segurança (criptografia de chaves) e privacidade (LGPD/GDPR).
3. O modelo de custo diferencia claramente o que é custo da plataforma (Vercel/Netlify free tier) e o que é custo do seller (Stripe, OpenAI, Google Sheets).
4. As estimativas financeiras e técnicas são realistas e alinhadas com a filosofia de simplicidade radical do MVP.