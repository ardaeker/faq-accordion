import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      pink: {
        100: 'var(--color-pink-100)',
        800: 'var(--color-pink-800)',
      },
      purple: {
        700: 'var(--color-purple-700)',
        900: 'var(--color-purple-900)',
      },
    },
    keyframes: {
      slideDown: {
        from: { height: '0px' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0px' },
      },
    },
    animation: {
      slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },
    boxShadow: {
      card: '0px 32px 56px 0px rgba(80, 0, 118, 0.10)',
    },
    extend: {
      screens: {
        xs: '28.125rem',
      },
      maxWidth: {
        xl: '37.5rem',
      },
      fontSize: {
        sm: ['.875rem', { lineHeight: '1.3125rem' }],
        base: ['1rem', { lineHeight: '1.1875rem' }],
        lg: ['1.125rem', { lineHeight: '1.3125rem' }],
        xl: ['2rem', { lineHeight: '2.375rem' }],
        '2xl': ['3.5rem', { lineHeight: '4.125rem' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
