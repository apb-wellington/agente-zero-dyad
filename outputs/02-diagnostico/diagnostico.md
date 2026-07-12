# Diagnóstico de Complexidade — CapybaraCart

## Pontuação por dimensão

### Criticidade do erro de IA — score 1/3
Justificativa: A IA atua como assistente de apoio (setup, fotos, cadastro e posts) sob o modelo BYOK. O erro é perceptível (ex.: descrição fora do tom ou post inadequado), mas de baixo impacto direto, pois o seller pode revisar e editar tudo antes de publicar, e o sistema "jamais alucina dados 'hard' (como preço, nome ou características físicas)".

### Sensibilidade de dados — score 2/3
Justificativa: O projeto adota uma política de "armazenamento zero" de dados de compradores, enviando-os diretamente para o Google Sheets do seller. No entanto, lida com dados sensíveis de pagamento (via Stripe) e exige "cuidado extremo de segurança local" para o armazenamento e tráfego das chaves de API dos sellers (Stripe, Google, OpenAI).

### Número de integrações externas — score 3/3
Justificativa: O produto possui uma alta dependência de ecossistemas de terceiros para funcionar, totalizando pelo menos 7 integrações: Stripe (pagamentos), Mercado Envios (frete), Google Sheets (banco de dados de clientes), APIs de LLM (OpenAI/Anthropic) e APIs de redes sociais (Instagram, Pinterest, TikTok).

### Exposição a usuários reais — score 2/3
Justificativa: Embora comece com um "lançamento silencioso (soft launch) focado em comunidades específicas", o produto lida com transações financeiras reais de compradores e sellers em produção desde o início, caracterizando uma exposição moderada em um segmento definido.

### Reversibilidade — score 2/3
Justificativa: A arquitetura modular e isolada ("Filosofia Fusca") facilita a reversibilidade de código e desativação de features. Contudo, falhas em transações financeiras ou vazamentos de chaves de API locais possuem custo reputacional e financeiro significativo para os sellers e para a plataforma.

---

## Score total e tier

**Score total: 10/15 → Tier: T3 Robusto**

O CapybaraCart se apresenta sob uma filosofia de simplicidade radical ("Fusca"), mas sua infraestrutura técnica é altamente complexa devido ao modelo BYOK descentralizado e ao grande volume de integrações externas críticas (pagamento, frete, redes sociais e IA). O Tier T3 Robusto garante que, apesar da interface simples para o usuário final, a arquitetura de segurança, os contratos de integração e o mapeamento de riscos sejam tratados com o rigor necessário para evitar falhas transacionais e vazamentos de credenciais.

---

## Pipeline resultante

| # | Artefato | Status | Profundidade | Gatilho |
|---|---|---|---|---|
| 01 | Product Vision | Ativo | T3: página completa — visão + público-alvo + diferencial + métricas de sucesso macro + contexto de mercado/concorrência + riscos estratégicos ligados à visão. | Padrão do tier |
| 02 | PRD | Ativo | T3: problema, solução, escopo do MVP, fora de escopo, métrica de sucesso, user stories principais, requisitos funcionais numerados, dependências, requisitos não funcionais integrados, matriz de priorização e cenários de erro/exceção mapeados. | Padrão do tier |
| 03-01 | Personas/JTBD | Ativo | T3: personas primárias + secundárias, JTBD completo (funcional, emocional, social) por persona. | Padrão do tier |
| 03-02 | Journey Map | Ativo | T3: jornada completa com pontos de dor, emoções, e oportunidades por etapa. | Padrão do tier |
| 04 | Solution Architecture | Ativo | T3: diagrama de componentes de alto nível + descrição textual + fluxo de dados entre componentes, decisões de escala/performance e pontos de falha considerados. | Padrão do tier |
| 05 | ADRs | Ativo | T3: ADR completo (contexto, decisão, alternativas consideradas, consequências) para cada decisão arquitetural relevante. | Padrão do tier |
| 06 | AI/LLM System Design Doc | Ativo | Criticidade 1: descrição do papel do LLM no produto + failure modes básicos esperados. | Override: Criticidade do erro de IA >= 1 |
| 07 | Contratos de API/MCP | Ativo | Integrações 3: contrato por integração (request/response, auth, rate limits) + estratégia de versionamento e tratamento de indisponibilidade de terceiros. | Override: Número de integrações externas >= 1 |
| 08 | Wireframes | Ativo | T3: wireframes de baixa fidelidade das telas principais (fluxo crítico), telas secundárias e estados alternativos (vazio, erro, carregando). | Padrão do tier |
| 09 | Design Tokens | Ativo | T3: paleta, tipografia, espaçamento e estados base — o essencial para consistência, sem sistema de design completo. | Padrão do tier |
| 10 | NFRs + modelo de custo | Ativo | T3: NFRs completos (performance, disponibilidade, segurança, privacidade) + modelo de custo detalhado por componente. | Padrão do tier |
| 11 | Critérios de aceite/testes | Ativo | T3: checklist simples por funcionalidade, critérios Given/When/Then por user story principal, casos de erro e edge cases (com atenção especial aos ligados à IA). | Padrão do tier |
| 12 | Roadmap/MVP scope (MoSCoW) | Ativo | T3: MoSCoW completo (Must/Should/Could/Won't) + fases e marcos temporais aproximados. | Padrão do tier |
| 13 | Registro de riscos | Ativo | T3: tabela risco → mitigação cobrindo todas as dimensões com score >= 2 + probabilidade, impacto e responsável por risco. | Override: Reversibilidade >= 2 / Sensibilidade de dados >= 2 |

---

## Artefatos dispensados — motivo

Nenhum artefato foi dispensado. Devido ao score total de complexidade (Tier T3) e aos gatilhos específicos de integração, sensibilidade de dados e uso de IA, todos os 14 artefatos do catálogo de referência foram ativados para garantir a segurança, robustez e viabilidade do CapybaraCart.