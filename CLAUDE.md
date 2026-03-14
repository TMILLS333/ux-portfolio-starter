# UX Portfolio Starter

A modern Astro + Tailwind portfolio site with a token-based design system. You are helping a UX designer customize this site from their Figma designs.

## Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to dist/
- `npm run preview` — preview the build

## Project Structure
```
src/
  components/   → Reusable UI (Header, Footer, ProjectCard, BaseHead, SkipLink)
  content/
    projects/   → Markdown files for each project (frontmatter + body)
  layouts/      → BaseLayout.astro wraps every page
  pages/        → Each .astro file = one URL route
  styles/       → global.css (design tokens + Tailwind + dark mode)
public/         → Static files (images, favicon, _headers for Cloudflare)
```

## Design System — Token Architecture

ALL visual styling is controlled by CSS custom properties in `src/styles/global.css` and font/color tokens in `tailwind.config.mjs`. When restyling from Figma, update tokens — not individual components.

### Colors (in global.css `:root`)
```
--color-bg              → Page background
--color-surface         → Card/container backgrounds
--color-surface-elevated→ Elevated surfaces, code blocks
--color-border          → Borders and dividers
--color-text            → Primary text
--color-text-muted      → Secondary/body text
--color-text-faint      → Tertiary text, placeholders
--color-text-inverse    → Text on accent backgrounds
--color-accent          → Links, CTAs, focus rings
--color-accent-hover    → Hover state for accent
--color-accent-subtle   → Light accent tint for tags, selections
```

Dark mode variants live in `@media (prefers-color-scheme: dark)` in the same file. Update BOTH light and dark values when changing colors.

### Fonts (in tailwind.config.mjs)
```
font-display → Headings (currently Satoshi via Fontshare)
font-body    → Body text (currently Inter via Google Fonts)
font-mono    → Code (JetBrains Mono)
```
Font URLs are loaded in `src/components/BaseHead.astro`. When swapping fonts:
1. Update the `<link>` tags in BaseHead.astro with the new font URLs
2. Update `fontFamily` in tailwind.config.mjs
3. Update the `body` font-family in global.css

### Typography Scale (in tailwind.config.mjs)
```
text-display-xl → Hero headlines (4.5rem)
text-display-lg → Page titles (3.5rem)
text-display    → Section titles (2.5rem)
text-heading    → H2 headings (1.75rem)
text-subheading → H3 / card titles (1.25rem)
text-body-lg    → Lead paragraphs (1.125rem)
text-body       → Default body (1rem)
text-caption    → Small labels (0.875rem)
text-tag        → Tags / chips (0.75rem)
```

### Spacing
Uses Tailwind defaults (multiples of 4) plus custom: `spacing-18` (4.5rem), `spacing-22` (5.5rem), `spacing-30` (7.5rem).

## Key Rules
- IMPORTANT: Use Tailwind CSS utility classes for all styling
- IMPORTANT: Use the design token CSS variables (var(--color-*)) for colors — not hardcoded hex values
- IMPORTANT: Keep all HTML semantic (nav, main, article, section, footer)
- IMPORTANT: Preserve accessibility — alt text on images, aria-labels on nav, heading hierarchy (one h1 per page)
- IMPORTANT: Keep the responsive design — mobile-first, test at 375px and 1280px
- IMPORTANT: Dark mode support — always update both light AND dark token values
- When adding images, put them in `public/images/` and reference as `/images/filename.jpg`

## Projects (Content Collection)
Projects live in `src/content/projects/` as markdown files:
```yaml
title: "Project Name"
description: "Short description"
image: "/images/project-name.jpg"
tags: ["UX Design", "Mobile"]
date: 2024-01-15
```

## Figma MCP

This project includes a pre-configured `.mcp.json` at the repo root with both the Figma MCP server and the Astro Docs MCP server. Claude Code loads these automatically.

When the user shares a Figma link or says "use my Figma selection":

1. Call `get_variable_defs` first — extract all color and typography variables from the Figma file
2. Call `get_design_context` for layout structure if component changes are needed (select specific sections, not full pages — full-page payloads are verbose and dilute accuracy)
3. Map Figma variable names → CSS custom properties in `src/styles/global.css` (e.g., `color/accent` → `--color-accent`)
4. Update font families in `tailwind.config.mjs` + `<link>` tags in `src/components/BaseHead.astro`
5. Update BOTH light AND dark token values in global.css — never update one without the other
6. Keep the existing page structure — restyle tokens only, do not restructure HTML

### Important Notes
- The Design Kit uses **flat, single-tier variables** (not aliased). `get_variable_defs` returns resolved hex values, not alias names — so variable names map directly to CSS custom properties.
- When restyling from Figma, update tokens in `global.css` and `tailwind.config.mjs` — NOT individual components. The token architecture means every component updates automatically.
- Use Plan Mode (`Shift+Tab`) to preview changes before applying them.

## Deployment
Deploys to Cloudflare Pages. After changes:
1. `git add -A && git commit -m "description of change"`
2. `git push`
3. Cloudflare auto-builds and deploys
