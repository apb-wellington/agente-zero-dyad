# Design Tokens — CapybaraCart

Este documento estabelece a especificação técnica dos Design Tokens do CapybaraCart. Alinhado com a filosofia **"New Beetle"** (uma evolução inteligente da simplicidade bruta do Fusca: moderna, limpa, altamente utilitária, de alto contraste e focada em performance móvel), este sistema de design garante acessibilidade estrita (WCAG AA/AAA) e carregamento instantâneo sem dependências pesadas.

---

## 1. Paleta de Cores (Color Palette)

Todas as cores foram selecionadas e testadas para garantir taxas de contraste em conformidade com as diretrizes WCAG AA (mínimo de 4.5:1 para texto normal) e AAA (mínimo de 7:1 para texto grande/destaques).

### 1.1 Brand & Primary (Identidade)
*   **Primary (Verde Capivara):** `#15803D` (Green 700)
    *   *Papel:* Botões de ação principal (CTA), links importantes e destaques de marca.
    *   *Contraste:* 5.1:1 em fundo branco (Aprovado WCAG AA para texto normal, AAA para texto grande).
*   **Primary Dark:** `#166534` (Green 800)
    *   *Papel:* Estado de hover/active para botões principais.
*   **Primary Light:** `#DCFCE7` (Green 100)
    *   *Papel:* Fundos de destaque leve, badges e alertas de sucesso.

### 1.2 Neutral (Estrutura e Texto)
*   **Bg/Primary (Fundo Claro):** `#FFFFFF`
    *   *Papel:* Fundo principal da aplicação e vitrines.
*   **Bg/Secondary (Fundo Alternativo):** `#F9FAFB` (Gray 50)
    *   *Papel:* Fundo de inputs, cards e seções secundárias.
*   **Text/Primary (Texto Principal):** `#111827` (Gray 900)
    *   *Papel:* Títulos, preços e corpo de texto principal. Contraste de 19.5:1 em fundo branco (Aprovado WCAG AAA).
*   **Text/Secondary (Texto Secundário):** `#4B5563` (Gray 600)
    *   *Papel:* Legendas, descrições secundárias e placeholders. Contraste de 4.8:1 em fundo branco (Aprovado WCAG AA).
*   **Text/Disabled (Texto Desabilitado):** `#9CA3AF` (Gray 400)
    *   *Papel:* Textos em botões ou inputs desabilitados.

### 1.3 Borders & Dividers (Delimitação)
*   **Border/Default:** `#D1D5DB` (Gray 300)
    *   *Papel:* Bordas de inputs, divisores de seção e contornos de cards.
*   **Border/Light:** `#E5E7EB` (Gray 200)
    *   *Papel:* Linhas divisórias sutis e separadores de lista.

### 1.4 Status (Feedback Visual)
*   **Success (Verde):** `#166534` (Texto) / `#DEF7EC` (Fundo)
    *   *Papel:* Confirmação de pagamento aprovado e chaves de API validadas.
*   **Warning (Laranja):** `#9A3412` (Texto) / `#FDF6B2` (Fundo)
    *   *Papel:* Alertas de chaves pendentes ou estoque baixo.
*   **Error (Vermelho):** `#991B1B` (Texto) / `#FDE8E8` (Fundo)
    *   *Papel:* Falhas de pagamento, chaves inválidas ou campos obrigatórios vazios.
*   **Info (Azul):** `#1E40AF` (Texto) / `#E1EFFE` (Fundo)
    *   *Papel:* Dicas de usabilidade e instruções de configuração.

---

## 2. Tipografia (Typography)

Para garantir carregamento instantâneo e performance máxima (zero requisições de rede para arquivos de fonte), o CapybaraCart utiliza exclusivamente a pilha de fontes nativas do sistema operacional.

### 2.1 Font Families
*   **Sans-Serif (Padrão do Sistema):** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
    *   *Papel:* Toda a interface, títulos, inputs e descrições.

### 2.2 Font Sizes & Line Heights (Escala Móvel Otimizada)
A escala tipográfica foi projetada para manter excelente legibilidade em telas pequenas de smartphones, comuns no tráfego vindo de redes sociais.

| Token | Tamanho (rem / px) | Altura da Linha (Line Height) | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| `font-xs` | `0.75rem` (12px) | `1.125rem` (18px) | Legendas de fotos, metadados e badges. |
| `font-sm` | `0.875rem` (14px) | `1.25rem` (20px) | Textos secundários, placeholders e labels de input. |
| `font-base` | `1.00rem` (16px) | `1.50rem` (24px) | Corpo de texto principal, inputs e botões. |
| `font-lg` | `1.125rem` (18px) | `1.75rem` (28px) | Subtítulos e títulos de seções pequenas. |
| `font-xl` | `1.25rem` (20px) | `1.875rem` (30px) | Títulos de cards e cabeçalhos secundários. |
| `font-2xl` | `1.50rem` (24px) | `2.25rem` (36px) | Título do produto na vitrine e cabeçalhos principais. |
| `font-3xl` | `1.875rem` (30px) | `2.625rem` (42px) | Destaque de preço e telas de sucesso. |

### 2.3 Font Weights
*   **Regular:** `400` (Corpo de texto e descrições).
*   **Medium:** `500` (Labels de formulário, botões e subtítulos).
*   **Bold:** `700` (Títulos principais, preços e destaques de ação).

---

## 3. Espaçamento e Grid (Spacing & Layout)

Baseado em um sistema de grade de 4px/8px para garantir alinhamento matemático perfeito e consistência visual em qualquer tamanho de tela.

| Token | Valor (rem / px) | Uso Recomendado |
| :--- | :--- | :--- |
| `space-1` | `0.25rem` (4px) | Espaçamento interno de badges, pequenos gaps entre ícone e texto. |
| `space-2` | `0.50rem` (8px) | Gap entre label e input, espaçamento interno de itens de lista. |
| `space-3` | `0.75rem` (12px) | Padding interno de inputs pequenos, gap entre elementos de formulário. |
| `space-4` | `1.00rem` (16px) | Padding padrão de botões, inputs, margens laterais de telas mobile. |
| `space-6` | `1.50rem` (24px) | Padding interno de cards, gap entre seções de formulário. |
| `space-8` | `2.00rem` (32px) | Margem entre blocos principais (ex: vitrine de produto e checkout). |
| `space-12`| `3.00rem` (48px) | Espaçamento superior/inferior de páginas e rodapés. |

---

## 4. Bordas e Arredondamentos (Borders & Radius)

Estética limpa, moderna e utilitária, evitando cantos excessivamente arredondados ou pontiagudos para manter o equilíbrio visual "New Beetle".

### 4.1 Border Radius (Arredondamento)
*   **`radius-none`:** `0px` (Estética brutalista opcional ou telas cheias mobile).
*   **`radius-sm`:** `0.25rem` (4px) (Badges, tags e pequenos elementos).
*   **`radius-md`:** `0.50rem` (8px) (Inputs, botões e cards pequenos - Padrão do sistema).
*   **`radius-lg`:** `0.75rem` (12px) (Cards principais e modais).
*   **`radius-full`:** `9999px` (Botões circulares de ícone e avatares).

### 4.2 Border Width (Espessura)
*   **`border-1`:** `1px` (Borda padrão de inputs, divisores e contornos de cards).
*   **`border-2`:** `2px` (Borda de foco ativo e estados de seleção).

---

## 5. Estados Interativos e Feedback (Interactive States)

Garantia de usabilidade e acessibilidade por meio de feedbacks visuais claros para ações do usuário, especialmente em navegação por teclado ou leitores de tela.

*   **Hover (Ponteiro do Mouse):**
    *   *Botão Principal:* Escurece a cor de fundo para `Primary Dark` (`#166534`). Transição suave de `150ms`.
    *   *Botão Secundário:* Altera o fundo para `Bg/Secondary` (`#F9FAFB`).
*   **Active (Clique/Toque):**
    *   *Botão Principal:* Reduz levemente a escala do botão (`scale-98`) para dar feedback físico de clique.
*   **Focus (Foco de Teclado/Acessibilidade):**
    *   *Inputs e Botões:* Aplica um anel de foco duplo de alta visibilidade: `ring-2 ring-offset-2 ring-[#15803D]`. O contorno azul padrão do navegador é substituído por este anel de alto contraste.
*   **Disabled (Desabilitado):**
    *   *Botões e Inputs:* Opacidade reduzida para `50%` (`opacity-50`), cursor não permitido (`cursor-not-allowed`), fundo cinza claro (`#E5E7EB`) e texto cinza médio (`#9CA3AF`).

---

## 6. Exemplo de Configuração Tailwind CSS

Arquivo de configuração `tailwind.config.js` pronto para uso, estendendo o tema padrão do Tailwind com os tokens definidos neste documento.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#15803D',     // Verde Capivara (Ações principais)
          'primary-dark': '#166534', // Hover/Active
          'primary-light': '#DCFCE7', // Badges e fundos leves
        },
        neutral: {
          bg: '#FFFFFF',          // Fundo principal
          'bg-secondary': '#F9FAFB', // Fundo de inputs/cards
          text: '#111827',        // Texto principal (Alto contraste)
          'text-secondary': '#4B5563', // Texto secundário
          'text-disabled': '#9CA3AF', // Texto desabilitado
          border: '#D1D5DB',      // Borda padrão
          'border-light': '#E5E7EB', // Divisores sutis
        },
        status: {
          success: {
            text: '#166534',
            bg: '#DEF7EC',
          },
          warning: {
            text: '#9A3412',
            bg: '#FDF6B2',
          },
          error: {
            text: '#991B1B',
            bg: '#FDE8E8',
          },
          info: {
            text: '#1E40AF',
            bg: '#E1EFFE',
          },
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.625rem' }],
      },
      spacing: {
        1: '0.25rem',  // 4px
        2: '0.5rem',   // 8px
        3: '0.75rem',  // 12px
        4: '1rem',     // 16px
        6: '1.5rem',   // 24px
        8: '2rem',     // 32px
        12: '3rem',    // 48px
      },
      borderRadius: {
        sm: '0.25rem',  // 4px
        md: '0.5rem',   // 8px (Padrão)
        lg: '0.75rem',  // 12px
      },
      borderWidth: {
        1: '1px',
        2: '2px',
      },
    },
  },
  plugins: [],
}