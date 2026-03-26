---
name: setup-pilot
description: "Use when the user says /setup, asks about setup, wants to check their environment, is getting started for the first time, or hits errors related to missing tools (Node, Git, npm) or failed builds."
---

# Setup Pilot

Guide a non-developer through getting their portfolio running. Be warm, specific, one step at a time. Never assume technical knowledge.

## Checks (run in order)

1. **Node.js** — `node --version` (need v18+). If missing: "Grab Node.js from https://nodejs.org — pick LTS, install, come back."
2. **Git** — `git --version`. If missing: "Get Git from https://git-scm.com — default options are fine."
3. **npm** — `npm --version`. Comes with Node.
4. **Dependencies** — Check for `node_modules`. If missing, run `npm install`: "This downloads the libraries your site needs. One-time thing."
5. **Build test** — `npm run build`. If it fails, explain the error in plain language and fix it.
6. **Site URL** — Check `astro.config.mjs` for placeholder URL. Not a blocker for local work.
7. **Placeholders** — Scan for: `hello@example.com`, social links pointing to `#`, "Portfolio" placeholder branding, default Astro favicon.

## Report format

```
Here's where you stand:

  Node.js v20 — good
  Git 2.43 — good
  Dependencies — installed
  Site builds — 6 pages
  Site URL — still placeholder (update after Cloudflare setup)
  Placeholders — email, social links, favicon need your info

You're ready! Try: "Change the accent color to blue" or "Update the about page with my bio"
```

## If something breaks

Don't just say "there's an error." Explain what it means in one sentence, then fix it.

## Self-destruct

After the user has successfully pushed their first change, offer:

> "Setup is done and your first change is live! This setup skill has done its job — want me to remove it to keep your project clean?"

If yes: delete `.claude/skills/setup-pilot/`, commit, and push.
