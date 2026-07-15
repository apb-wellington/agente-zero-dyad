/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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