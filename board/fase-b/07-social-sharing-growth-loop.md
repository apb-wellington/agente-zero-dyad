# Card 07 — Social Sharing & Growth Loop

**Status:** A fazer
**Depende de:** 04-product-creation-ai-assistant, 05-public-product-page-one-page-checkout

## Objetivo
Implementar o assistente de publicação social por IA (geração de copys para posts) e o growth loop viral (marca d'água discreta e link do CapybaraCart nas vitrines públicas) para atração orgânica de novos sellers com custo zero de aquisição.

## Contexto essencial
*   **Growth Loop (Selo de Conversão):** Toda vitrine pública de produto (`/p/:id`) deve exibir no rodapé um selo discreto e elegante: *"Venda simplificada com o CapybaraCart. Crie sua vitrine grátis."*, apontando para a landing page de conversão.
*   **Assistente de Publicação (IA):** Integrar uma funcionalidade no dashboard que utiliza a API de LLM (Gemini/OpenAI) para gerar variações de copys de posts otimizadas para Instagram, Pinterest e TikTok com base no produto cadastrado.
*   **Foco em Conversão:** As copys geradas devem focar em gatilhos de escassez (essencial para itens únicos) e exclusividade, incentivando o clique direto no link de checkout.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro Frontend Sênior e especialista em Growth Hacking e Marketing de Produto. Seu objetivo é implementar as funcionalidades de compartilhamento social e o growth loop viral do CapybaraCart.

### Diretrizes de Implementação:
1. **O Selo de Conversão (Growth Loop):**
   - Adicione um componente de rodapé fixo ou flutuante discreto na página pública do produto (`/p/:id`).
   - O selo deve conter o texto: *"Venda simplificada com o CapybaraCart. Crie sua vitrine grátis."* e um link que redireciona para a landing page de cadastro da plataforma.
   - Garanta que o design do selo seja elegante, minimalista e não interfira no fluxo de checkout do comprador.
2. **Interface do Assistente de Publicação Social:**
   - No dashboard do seller, ao lado de cada produto cadastrado, adicione um botão "Gerar Post Social".
   - Ao clicar, abra um modal ou painel lateral integrado com o assistente de IA.
3. **Geração de Copys por IA:**
   - Envie uma requisição para o Serverless Proxy solicitando a geração de copys de divulgação.
   - O prompt de sistema deve instruir a IA a gerar 3 variações de texto formatadas para:
     - *Instagram:* Foco em engajamento, hashtags e chamada para o link da bio.
     - *Pinterest:* Foco em descrição visual e palavras-chave de busca.
     - *TikTok:* Foco em ganchos rápidos (hooks) e ideias de roteiro de vídeo curto.
4. **Facilidade de Compartilhamento:**
   - Exiba as copys geradas em abas organizadas por rede social.
   - Adicione um botão de "Copiar Texto" para cada variação e um botão de compartilhamento direto utilizando a Web Share API do navegador (quando disponível no dispositivo móvel).

Gere um código limpo, modular, com excelente usabilidade e focado em performance de conversão.
```

## Critério de aceite
1. O selo de conversão do CapybaraCart é exibido corretamente no rodapé de todas as vitrines públicas de produtos.
2. O botão "Gerar Post Social" está presente no dashboard e abre a interface do assistente.
3. A integração com a IA gera copys formatadas especificamente para Instagram, Pinterest e TikTok.
4. A funcionalidade de cópia rápida de texto e compartilhamento direto via Web Share API funciona perfeitamente.
5. A interface é responsiva e segue os Design Tokens de estilo e acessibilidade.