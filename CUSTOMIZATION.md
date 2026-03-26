# Customization Guide

This document is the detailed reference for restyling the portfolio.
Claude reads this when someone asks to change the design.

## How to Restyle — The 4-Step Process

Changing the entire look of the site follows this order:

1. **Colors** — Update CSS custom properties in `src/styles/global.css`
   (both `:root` for light mode AND the `.dark` block)
2. **Fonts** — Update `<link>` tags in `src/components/BaseHead.astro`,
   `fontFamily` in `tailwind.config.mjs`, and `font-family` in global.css body rule
3. **Content** — Edit project markdown files in `src/content/projects/`,
   page content in `src/pages/`
4. **Images** — Add to `public/images/` and reference as `/images/filename.jpg`

The token architecture means changing a few values updates the entire site.

## Color Token Table

All 11 color tokens with their current light and dark values:

| Token                      | Light         | Dark          | Used for                          |
|----------------------------|---------------|---------------|-----------------------------------|
| `--color-bg`               | `#F5F0EB`     | `#141413`     | Page background                   |
| `--color-surface`          | `#FBF8F5`     | `#1C1B19`     | Card/container backgrounds        |
| `--color-surface-elevated` | `#FBF8F5`     | `#242320`     | Elevated surfaces, code blocks    |
| `--color-border`           | `#DDD6CC`     | `#2E2D2B`     | Borders and dividers              |
| `--color-text`             | `#1A1918`     | `#E0DFDD`     | Primary text                      |
| `--color-text-muted`       | `#6B6966`     | `#8A8886`     | Secondary/body text               |
| `--color-text-faint`       | `#A8A5A0`     | `#5A5957`     | Tertiary text, placeholders       |
| `--color-text-inverse`     | `#F5F0EB`     | `#1A1918`     | Text on accent backgrounds        |
| `--color-accent`           | `#0891B2`     | `#22D3EE`     | Links, CTAs, focus rings          |
| `--color-accent-hover`     | `#0E7490`     | `#67E8F9`     | Hover state for accent            |
| `--color-accent-subtle`    | `#CFFAFE`     | `#164E63`     | Light accent tint for tags        |

### Derived RGB tokens (auto-follow accent + bg)
When changing `--color-accent` or `--color-bg`, also update these:
- `--color-accent-rgb` — the RGB triplet of accent (e.g., `8, 145, 178`)
- `--color-bg-rgb` — the RGB triplet of background (e.g., `245, 240, 235`)

These power the hero orbs, header backdrop transparency, and ambient glows.

## Font Swap Process

Three files need updating when changing fonts:

### 1. BaseHead.astro — Load the font
```html
<!-- Replace the <link> tags with your new font URLs -->
<!-- Google Fonts example: -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 2. tailwind.config.mjs — Register the font
```js
fontFamily: {
  display: ['YourDisplayFont', 'system-ui', 'sans-serif'],
  body: ['YourBodyFont', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Consolas', 'monospace'],
}
```

### 3. global.css — Update the body fallback
```css
body {
  font-family: 'YourBodyFont', system-ui, -apple-system, sans-serif;
}
```

## Typography Scale

Defined in `tailwind.config.mjs`. These class names are used across all pages:

| Class               | Size    | Weight | Used for                  |
|---------------------|---------|--------|---------------------------|
| `text-display-xl`   | 4.5rem  | 700    | Hero headlines            |
| `text-display-lg`   | 3.5rem  | 700    | Page titles               |
| `text-display`      | 2.5rem  | 700    | Section titles            |
| `text-heading`      | 1.75rem | 600    | H2 headings               |
| `text-subheading`   | 1.25rem | 500    | H3 / card titles          |
| `text-body-lg`      | 1.125rem|        | Lead paragraphs           |
| `text-body`         | 1rem    |        | Default body              |
| `text-caption`      | 0.875rem|        | Small labels              |
| `text-tag`          | 0.75rem | 500    | Tags / chips              |

## Spacing

Uses Tailwind defaults (multiples of 4) plus custom values:
- `spacing-18` → 4.5rem
- `spacing-22` → 5.5rem
- `spacing-30` → 7.5rem

## Border Radius Tokens

| Token           | Value | Used for      |
|-----------------|-------|---------------|
| `rounded-card`  | 12px  | Cards         |
| `rounded-button`| 8px   | Buttons       |
| `rounded-tag`   | 6px   | Tags / chips  |

## Projects Content Collection

Each project is a markdown file in `src/content/projects/`:

```yaml
---
title: "Project Name"
description: "Short description for the card and meta tags"
image: "/images/project-name.jpg"
tags: ["UX Design", "Mobile"]
date: 2024-01-15
---

## Overview
Your case study content goes here...
```

- Images must exist in `public/images/`
- Date format: `YYYY-MM-DD`
- Tags appear as chips on cards and project pages

## Common Restyle Recipes

### Warm & Editorial
```
Accent: amber/gold (#D97706 light, #F59E0B dark)
Display font: Playfair Display or Lora
Body font: Source Serif 4
Bg: warm white (#FFFBF5 light, #1A1814 dark)
```

### Minimal & Clean
```
Accent: neutral gray (#525252 light, #A3A3A3 dark)
Display font: Inter or DM Sans
Body font: Inter
Bg: pure white (#FFFFFF light, #0A0A0A dark)
```

### Bold & Vibrant
```
Accent: electric blue (#2563EB light, #60A5FA dark)
Display font: Space Grotesk or Syne
Body font: DM Sans
Bg: off-white (#F8FAFC light, #0F172A dark)
```

### Soft & Organic
```
Accent: sage green (#059669 light, #34D399 dark)
Display font: Fraunces or DM Serif Display
Body font: Nunito
Bg: warm cream (#FAF5F0 light, #1C1917 dark)
```

## Cinematic Styles (Optional)

The `.cine-*` classes in global.css add immersive visual polish:
section labels, giant watermark text, ambient glow orbs, floating
stat badges, marquee strips, timeline hover effects, and pull-quotes.

These are safe to remove for a simpler site. They're grouped under
the `/* CINEMATIC — Optional polish */` header in global.css.
