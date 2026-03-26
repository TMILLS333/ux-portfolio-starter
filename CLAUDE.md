# UX Portfolio Starter — Tania Millan

A modern Astro + Tailwind portfolio site with a token-based design system. You are helping Tania Millan (UX designer) customize this site using natural language prompts.

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

ALL visual styling is controlled by CSS custom properties in `src/styles/global.css` and font/color tokens in `tailwind.config.mjs`. When restyling, update tokens — not individual components.

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

Dark mode is controlled via `.dark` class on `<html>` (not media query). Toggled by the sun/moon ThemeToggle component. Update BOTH `:root` and `.dark` values when changing colors.

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

## How to Restyle

The token architecture means changing a few values updates the entire site. Here's the approach:

1. **Colors** — Update CSS custom properties in `src/styles/global.css` (both `:root` for light mode AND the `.dark` block)
2. **Fonts** — Update `<link>` tags in `src/components/BaseHead.astro`, `fontFamily` in `tailwind.config.mjs`, and `font-family` in global.css
3. **Content** — Edit project markdown files in `src/content/projects/`, page content in `src/pages/`
4. **Images** — Add to `public/images/` and reference as `/images/filename.jpg`

Use Plan Mode (`Shift+Tab`) to preview what Claude would change before applying.

## Projects (Content Collection)
Projects live in `src/content/projects/` as markdown files:
```yaml
title: "Project Name"
description: "Short description"
image: "/images/project-name.jpg"
tags: ["UX Design", "Mobile"]
date: 2024-01-15
```

## Current State (as of 2026-03-14)

### What's been built
- **Name**: "Tania Millan" set across all pages (header, footer, index, about, 404, project pages)
- **Profile image**: `public/images/profile.png` displayed on about page
- **Dark/light toggle**: Sun/moon ThemeToggle component in header, persists to localStorage, respects OS preference as default
- **Vanta.js fog logo**: Animated Three.js fog orb in header next to name (loads via CDN in BaseLayout). Colors update on theme toggle.
- **Accent colors**: Hot pink — Light: `#FF1493` / Dark: `#FF69B4` (synced from Figma)
- **Scroll-snap sections**: Each section fills viewport, `scroll-snap-type: y mandatory` on `<main>`
- **Reveal animations**: IntersectionObserver triggers fade-up with staggered children (`.reveal`, `.reveal-stagger`, `.reveal-child`)
- **Magnetic hover**: Buttons and nav links track cursor and translate toward it (`.magnetic`, `.magnetic-inner`). Includes glow effect (`.btn-glow`) and expanding underline (`.nav-magnetic`)
- **Project slider**: Off-canvas horizontal carousel with prev/next buttons, counter, progress bar, keyboard nav, aria roles
- **Spacious layout**: Generous padding throughout — header h-20, sections py-20+, cards p-8

### Current accent colors
- Light: `--color-accent: #FF1493`, `--color-accent-hover: #E0007B`, `--color-accent-subtle: #FFD6EC`
- Dark: `--color-accent: #FF69B4`, `--color-accent-hover: #FF85C8`, `--color-accent-subtle: #3D0A1F`

### Vanta fog colors (in BaseLayout.astro)
Must be updated manually when accent colors change — they use hex literals, not CSS variables.

### Still placeholder — needs real content
- **Project case studies**: `src/content/projects/` has sample markdown (FinFlow, Wellness, E-Commerce)
- **Project images**: No real screenshots in `public/images/`
- **About page bio**: Generic filler text about background and interests
- **Contact email**: `hello@example.com` in index.astro, about.astro, and Footer.astro
- **Social links**: Footer LinkedIn/Dribbble hrefs point to `#`
- **Favicon**: Default Astro favicon.svg

### Figma design system
- File: "CC Portfolio" (fileKey: `nFnCpt5vM91oTKuXGe25Bd`)
- Variable collection: "Portfolio Design System" with Light + Dark modes (29 tokens)
- Home page frames: Light + Dark side by side, matching code layout
- Figma Desktop Bridge plugin tends to disconnect — reopen before each operation
- Design tokens can be synced in both directions (Figma → code, code → Figma)

## Components added
```
src/components/ThemeToggle.astro  → Sun/moon dark mode toggle button
```

## Key scripts in BaseLayout.astro
- **Theme init** (inline, in `<head>`): Prevents flash of wrong theme
- **Theme toggle**: Click handler + localStorage
- **Vanta fog init**: Creates fog in `#logo-fog`, re-inits on theme toggle
- **Reveal observer**: IntersectionObserver for `.reveal` elements
- **Magnetic hover**: Mouse-tracking transform on `.magnetic` elements

## Deployment
Not yet deployed. Deploys to Cloudflare Pages. After changes:
1. `git add -A && git commit -m "description of change"`
2. `git push`
3. Cloudflare auto-builds and deploys
