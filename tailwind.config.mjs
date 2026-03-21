/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      // ============================================
      // DESIGN TOKENS — Claude Code + Figma MCP will update these
      // to match your Figma design. Everything is in ONE place.
      // ============================================

      colors: {
        // Primary accent — used for links, CTAs, focus rings
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
        // Surface colors — backgrounds, cards, borders
        surface: {
          bg: 'var(--color-bg)',
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          border: 'var(--color-border)',
        },
        // Text colors — primary, secondary, faint
        content: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          faint: 'var(--color-text-faint)',
          inverse: 'var(--color-text-inverse)',
        },
      },

      fontFamily: {
        // Display / headings — swap this when restyling from Figma
        display: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
        // Body text — swap this when restyling from Figma
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Code blocks
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },

      fontSize: {
        // Custom scale for portfolio typography
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'subheading': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'tag': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
      },

      borderRadius: {
        'card': '12px',
        'button': '8px',
        'tag': '6px',
      },

      maxWidth: {
        'content': '72rem', // 1152px — main content area
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },

      backdropBlur: {
        'nav': '12px',
      },
    },
  },
  plugins: [],
};
