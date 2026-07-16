# Card 01 — PWA Shell & Design Tokens Setup

**Status:** A fazer
**Depende de:** Nenhum

## Objetivo
Estruturar o esqueleto inicial do Progressive Web App (PWA) utilizando React, Vite e Tailwind CSS, aplicando rigorosamente a escala de Design Tokens (cores, tipografia, espaçamento e acessibilidade) e configurando o suporte offline básico via Service Workers.

## Contexto essencial
*   **Filosofia Visual:** Design utilitário, limpo, de alto contraste e focado em performance móvel (WCAG AA/AAA).
*   **Pilha de Fontes:** Uso exclusivo de fontes nativas do sistema para evitar requisições externas e garantir carregamento instantâneo.
*   **Performance:** Meta de First Contentful Paint (FCP) < 1.2s em conexões móveis.
*   **Rotas Iniciais:**
    *   `/setup` (Configuração BYOK)
    *   `/dashboard` (Painel do Seller)
    *   `/produtos/novo` (Cadastro de Produto)
    *   `/p/:id` (Vitrine Pública e Checkout)

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro Frontend Sênior e especialista em Performance Web e PWAs. Seu objetivo é criar a estrutura inicial do Progressive Web App (PWA) do CapybaraCart utilizando React, Vite e Tailwind CSS.

### Diretrizes Técnicas e de Design:
1. **Configuração do Tailwind CSS:**
   - Configure o arquivo `tailwind.config.js` estendendo o tema padrão com os Design Tokens exatos do CapybaraCart:
     - **Cores:** Primary (Verde Capivara `#15803D`), Primary Dark (`#166534`), Primary Light (`#DCFCE7`), Neutral Bg (`#FFFFFF`), Neutral Bg Secondary (`#F9FAFB`), Text Primary (`#111827`), Text Secondary (`#4B5563`), Text Disabled (`#9CA3AF`), Border Default (`#D1D5DB`), Border Light (`#E5E7EB`).
     - **Status:** Success (`#166534`/`#DEF7EC`), Warning (`#9A3412`/`#FDF6B2`), Error (`#991B1B`/`#FDE8E8`), Info (`#1E40AF`/`#E1EFFE`).
     - **Fontes:** Pilha sans-serif nativa do sistema (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
     - **Bordas:** `radius-sm` (4px), `radius-md` (8px - padrão), `radius-lg` (12px).
2. **Estrutura de Pastas e Rotas:**
   - Configure o roteamento básico (utilizando `react-router-dom` ou similar) para as seguintes páginas (crie componentes dummy/esqueletos para cada uma):
     - `/setup` (Setup BYOK)
     - `/dashboard` (Dashboard do Seller)
     - `/produtos/novo` (Cadastro de Produto)
     - `/p/:id` (Vitrine Pública e Checkout)
3. **Configuração PWA e Service Worker:**
   - Configure o plugin do Vite para PWA (`vite-plugin-pwa`) para gerar um manifesto válido (`manifest.json`) com ícones de capivara e suporte a Service Worker.
   - Implemente uma estratégia básica de cache offline do tipo *Stale-While-Revalidate* para os assets estáticos (HTML, JS, CSS, imagens).
4. **Acessibilidade (WCAG):**
   - Garanta que os estados de foco (`focus-visible`) utilizem um anel duplo de alto contraste: `ring-2 ring-offset-2 ring-[#15803D]`.

Gere o código limpo, modular, sem placeholders e pronto para produção.
```

## Critério de aceite
1. O projeto inicial React + Vite + Tailwind CSS está configurado e rodando sem erros.
2. O arquivo `tailwind.config.js` contém a escala exata de cores, tipografia e espaçamentos especificados.
3. O roteamento entre as 4 páginas principais está funcional (renderizando os componentes esqueleto).
4. O manifesto do PWA é gerado corretamente e o Service Worker é registrado com sucesso no navegador.
5. Os estados de foco de acessibilidade estão implementados nos elementos interativos base.