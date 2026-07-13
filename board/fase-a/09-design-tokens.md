# Card 09 — Design Tokens

**Status:** A fazer
**Depende de:** 08-wireframes
**Tier do projeto:** T3 Robusto
**Profundidade definida:** T3: paleta, tipografia, espaçamento e estados base — o essencial para consistência, sem sistema de design completo.

## Objetivo
Definir a fundação visual do CapybaraCart (cores, tipografia, espaçamento, bordas e estados interativos), garantindo consistência visual e agilidade no desenvolvimento do PWA, mantendo o alinhamento com a "Filosofia Fusca" de simplicidade bruta, alto contraste e leveza.

## Contexto essencial
*   **Filosofia Fusca:** Design utilitário, limpo e de alta legibilidade. Foco em performance de carregamento (especialmente em navegadores integrados de redes sociais como Instagram e TikTok).
*   **Necessidades Visuais:**
    *   *Contraste:* Excelente legibilidade sob luz solar (comum para hobbistas ao ar livre, como orquidófilos).
    *   *Estados Base:* Estados de foco, hover, ativo e desabilitado extremamente claros para evitar erros de clique no checkout.
    *   *Simplicidade:* Sem gradientes complexos ou sombras pesadas. Estética limpa, quase brutalista/flat.

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um UI Engineer e Design System Specialist sênior, com foco em acessibilidade (WCAG), performance web e frameworks utilitários (Tailwind CSS). Seu objetivo é criar o documento de Design Tokens completo para o CapybaraCart.

Use o contexto essencial fornecido abaixo para estruturar o documento. O resultado final deve ser extremamente detalhado, sem placeholders, escrito em português do Brasil.

### Contexto Essencial do CapybaraCart:
- Produto: Checkout e vitrine PWA ultra-simples.
- Filosofia: "Fusca" (simplicidade bruta, utilitário, alto contraste, leveza).
- Foco: Acessibilidade móvel e carregamento instantâneo.

### Instruções de Formato e Conteúdo:
Escreva o documento salvando-o diretamente em `entregaveis/09-design-tokens.md`. O documento deve conter as seguintes seções detalhadas:

1. **Paleta de Cores (Color Palette):**
   - Defina os valores hexadecimais e os papéis de cada cor, garantindo contraste WCAG AA/AAA:
     - **Brand/Primary:** Cor de destaque para ações principais (ex: um verde capivara ou laranja vibrante).
     - **Neutral/Background:** Cores de fundo para a aplicação (claro/escuro se aplicável).
     - **Neutral/Text:** Cores para textos principais, secundários e desabilitados.
     - **Borders & Dividers:** Cores para delimitação de inputs e cards.
     - **Status (Success, Warning, Error, Info):** Cores para feedbacks visuais (essencial para validação de chaves de API e checkout).

2. **Tipografia (Typography):**
   - Defina a escala tipográfica otimizada para dispositivos móveis:
     - **Font Families:** Fontes do sistema (sans-serif nativas) para evitar carregamento de arquivos externos de fonte.
     - **Font Sizes & Line Heights:** Escala de tamanhos (ex: de 12px a 32px) com suas respectivas alturas de linha para legibilidade perfeita.
     - **Font Weights:** Pesos utilizados (Regular, Medium, Bold).

3. **Espaçamento e Grid (Spacing & Layout):**
   - Defina uma escala de espaçamento baseada em 4px/8px (ex: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px) para margens, paddings e gaps de grid.

4. **Bordas e Arredondamentos (Borders & Radius):**
   - Defina a escala de border-radius (ex: none, small, medium, full) e border-width para manter a consistência dos botões, inputs e cards.

5. **Estados Interativos e Feedback (Interactive States):**
   - Mapeie visualmente os tokens para os estados de: Hover, Active, Focus (essencial para acessibilidade por teclado) e Disabled (botões de envio durante carregamento).

6. **Exemplo de Configuração Tailwind CSS:**
   - Forneça um bloco de código com a extensão do tema (`tailwind.config.js`) mapeando todos os tokens definidos acima, facilitando a implementação direta pelo desenvolvedor.

Gere um documento técnico preciso, limpo e diretamente utilizável no código frontend.
```

## Critério de conclusão
1. O arquivo `entregaveis/09-design-tokens.md` foi criado com todas as 6 seções especificadas no prompt de execução.
2. O documento define valores exatos (hexadecimais, pixels, rems) para cores, tipografia, espaçamento e bordas.
3. Os tokens propostos respeitam as diretrizes de acessibilidade e a "Filosofia Fusca" de alta legibilidade.
4. O arquivo de configuração do Tailwind CSS está presente e é sintaticamente válido.