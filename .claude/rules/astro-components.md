---
description: Rules for editing Astro components
globs: ["**/*.astro"]
---

# Astro Component Rules

- Use Tailwind utility classes for styling — avoid inline `<style>` blocks
  unless scoping is genuinely needed
- Use semantic HTML elements: `nav`, `main`, `article`, `section`, `footer`
- One `<h1>` per page — maintain heading hierarchy (h1 → h2 → h3)
- All images need `alt` text. Interactive elements need `aria-label`
- Use `style="color: var(--color-*)"` for inline styles — never hex
- Images go in `public/images/`, referenced as `/images/filename.jpg`
- For design system classes, prefer the Tailwind tokens defined in
  `tailwind.config.mjs` (e.g., `text-heading`, `font-display`, `rounded-card`)
- Test at 375px (mobile) and 1280px (desktop)
