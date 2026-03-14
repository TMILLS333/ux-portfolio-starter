# UX Portfolio Starter

A clean, SEO-ready portfolio template for UX designers. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), designed to be restyled with [Claude Code](https://code.claude.com) + [Figma MCP](https://help.figma.com/hc/en-us/articles/32132100833559).

## Prerequisites

Before you start, make sure you have:

- **Node.js** (v18+) — [nodejs.org](https://nodejs.org)
- **Git** — [git-scm.com](https://git-scm.com)
- **GitHub account** — free tier is fine
- **Claude Pro subscription** ($20/mo) — required for Claude Code → [claude.ai/upgrade](https://claude.ai/upgrade)
- **Claude Code** installed: `npm install -g @anthropic-ai/claude-code`
- **Figma Pro account** ($3/mo per editor, annual billing) with a Full or Dev seat — [figma.com/pricing](https://www.figma.com/pricing/)

> **Why Figma Pro?** The Figma Starter (free) plan only allows 6 MCP tool calls per month. A single restyle exercise uses 3–5 calls. The Pro plan gives you 200 calls/day. [Learn more](https://developers.figma.com/docs/figma-mcp-server/plans-access-and-permissions/)

## Quick Start

### 1. Use This Template

Click **"Use this template"** > **"Create a new repository"** at the top of this page.

### 2. Clone Your Repo

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install
npm run dev
```

Your site is running at **http://localhost:4321**

### 3. Connect MCP Servers

This repo includes a `.mcp.json` that pre-configures both the Figma MCP and Astro Docs MCP servers. You just need to add them to your Claude Code:

**Figma MCP** (one command):
```bash
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp
```

**Astro Docs MCP** (gives Claude live Astro 5.x docs):
```bash
claude mcp add --transport http "Astro docs" https://mcp.docs.astro.build/mcp
```

The `--scope user` flag on the Figma command makes it available across all your projects.

### 4. Authenticate Figma

> **Important:** OAuth triggers at first use, not at install.

1. Open Claude Code in your project directory: `claude`
2. Type `/mcp`
3. Select **figma** from the list → click **Authenticate**
4. Browser pop-up appears → click **Allow Access**
5. Return to terminal — you should see: `figma ✓ connected`

Run `/mcp` again to verify both servers show green:
```
figma           ✓ connected
Astro docs      ✓ connected
```

### 5. Restyle with Figma

Share your Figma portfolio link with Claude Code using the 2-step approach:

**Step 1 — Read the tokens (don't change anything yet):**
```
Here's the Figma Design Kit link: [paste your Figma link]

Use get_variable_defs to extract the color and typography tokens
from this file. List what you found — don't make any changes yet.
```

**Step 2 — Apply the restyle:**
```
Now apply those tokens to the project following the architecture
in CLAUDE.md. Update src/styles/global.css (both light AND dark
mode values) and update the font families in tailwind.config.mjs
and BaseHead.astro. Do not change any page structure or content.
```

### 6. Deploy to Cloudflare Pages

```bash
git add -A && git commit -m "Apply my design direction" && git push
```

Then connect to Cloudflare Pages:
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) > Workers & Pages > Create > Pages
2. Connect your GitHub repo
3. Framework preset: **Astro**, Build command: `npm run build`, Output: `dist`
4. Click **Save and Deploy**

Your site is live at `your-project.pages.dev` — every future `git push` auto-deploys.

---

## Project Structure

```
src/
  components/   → Reusable UI (Header, Footer, ProjectCard)
  content/
    projects/   → Your projects (one markdown file each)
  layouts/      → Page wrapper (BaseLayout)
  pages/        → Routes (index, about, project pages)
  styles/       → Global CSS + design tokens
public/         → Static files (images, favicon)
.mcp.json       → Pre-configured MCP servers (Figma + Astro Docs)
CLAUDE.md       → Project context for Claude Code
```

## Adding a Project

Create a new file in `src/content/projects/`:

```markdown
---
title: "My Project"
description: "A short description for the card"
image: "/images/my-project.jpg"
tags: ["UX Design", "Mobile"]
date: 2024-06-15
---

Write the full case study here using markdown.
```

Put images in `public/images/`.

## What's Included

- **SEO** — Meta tags, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt
- **Accessibility** — Skip links, semantic HTML, ARIA, focus indicators, reduced motion
- **Security** — Cloudflare security headers (X-Frame-Options, CSP hints, etc.)
- **Performance** — Zero JavaScript by default, lazy-loaded images, static output
- **AI-Ready** — CLAUDE.md gives Claude Code full project context; .mcp.json pre-configures MCP servers
- **Dark Mode** — Automatic via `prefers-color-scheme`, token-based (light + dark values)

## Prompt Library

| Moment | Prompt |
|--------|--------|
| Plan Mode check | `Shift+Tab` → "Review CLAUDE.md and global.css. Tell me what you'd change to apply a warm serif direction — don't make changes yet." |
| Restyle from Figma link | "Here's the Figma link: [url]. Use get_variable_defs to extract tokens, then apply them to global.css (light + dark) and tailwind.config.mjs." |
| Swap a single color | "Change `--color-accent` to `#C4553A`. Update both light and dark mode values in global.css." |
| Swap the heading font | "Swap the heading font to Instrument Serif from Google Fonts. Update BaseHead.astro, tailwind.config.mjs, and global.css." |
| Deploy | `git add -A && git commit -m "my design direction" && git push` |

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview the production build |

---

Built for the [Pixels & Charm](https://pixelsandcharm.com) workshop series.
