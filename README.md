# UX Portfolio Starter

A clean, SEO-ready portfolio template for UX designers. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), designed to be customized with [Claude Code](https://code.claude.com) — no coding experience needed.

## Prerequisites

Before you start, make sure you have:

- **Node.js** (v18+) — [nodejs.org](https://nodejs.org)
- **Git** — [git-scm.com](https://git-scm.com)
- **GitHub account** — free tier is fine
- **Claude Pro subscription** ($20/mo) — required for Claude Code → [claude.ai/upgrade](https://claude.ai/upgrade)
- **Claude Code** installed: `npm install -g @anthropic-ai/claude-code`

## Quick Start

### 1. Use This Template

Click **"Use this template"** > **"Create a new repository"** at the top of this page.

### 2. Clone & Run

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install
npm run dev
```

Your site is running at **http://localhost:4321**

### 3. Open Claude Code

In your project folder, open a terminal and type:

```bash
claude
```

That's it. Claude Code reads the `CLAUDE.md` file in this repo and understands the entire project — the design tokens, the file structure, where to make changes.

### 4. Customize with Prompts

Talk to Claude Code in plain English. Here are some starters:

**Change the accent color:**
```
Change the accent color to a warm coral (#C4553A). Update both light
and dark mode values in global.css.
```

**Swap the heading font:**
```
Swap the heading font to Instrument Serif from Google Fonts. Update
BaseHead.astro, tailwind.config.mjs, and global.css.
```

**Update your bio:**
```
Update the about page. My name is [name], I'm a UX designer based
in [city]. I specialize in [your focus]. Keep the existing layout.
```

**Add a project:**
```
Create a new project called "[name]". It's a [type] project for [client].
Add a placeholder image and tags for [tags]. Put it in the content collection.
```

**Preview before changing (Plan Mode):**
```
Shift+Tab → "Review CLAUDE.md and global.css. Tell me what you'd
change to apply a warm serif direction — don't make changes yet."
```

### 5. Deploy to Cloudflare Pages

Push your changes to GitHub:

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
- **AI-Ready** — CLAUDE.md gives Claude Code full project context so it makes smart changes
- **Dark Mode** — Automatic via `prefers-color-scheme`, token-based (light + dark values)

## Prompt Library

| Moment | Prompt |
|--------|--------|
| Plan Mode check | `Shift+Tab` → "Review CLAUDE.md and global.css. Tell me what you'd change to apply a warm serif direction — don't make changes yet." |
| Swap a single color | "Change `--color-accent` to `#C4553A`. Update both light and dark mode values in global.css." |
| Swap the heading font | "Swap the heading font to Instrument Serif from Google Fonts. Update BaseHead.astro, tailwind.config.mjs, and global.css." |
| Update your bio | "Update the about page with my name, location, and specialties. Keep the layout." |
| Add a project | "Create a new project called [name] with tags [tags] and a placeholder image." |
| Full restyle | "Give this site a warm, earthy feel — think terracotta accent, cream backgrounds, and a serif heading font. Update both light and dark mode." |
| Deploy | `git add -A && git commit -m "my design direction" && git push` |

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview the production build |

---

Built for the [Pixels & Charm](https://pixelsandcharm.com) workshop series.
