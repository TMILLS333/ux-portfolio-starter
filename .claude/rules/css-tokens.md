---
description: Rules for editing CSS files — enforces token usage and dark mode
globs: ["**/*.css"]
---

# CSS Token Rules

- Always use `var(--color-*)` design tokens — never hardcode hex or RGB values
- When changing any color, update BOTH `:root` (light) and `.dark` (dark) blocks
- When changing `--color-accent`, also update `--color-accent-rgb` to match
- When changing `--color-bg`, also update `--color-bg-rgb` to match
- Hero orbs, header backdrop, and cine-glow reference `--color-accent-rgb` and
  `--color-bg-rgb` — they auto-follow when RGB tokens are updated

## Color token reference
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
--color-accent-rgb      → RGB triplet of accent (e.g. 8, 145, 178)
--color-bg-rgb          → RGB triplet of bg (e.g. 245, 240, 235)
```
