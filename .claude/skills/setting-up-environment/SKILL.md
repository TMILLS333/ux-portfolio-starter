---
name: setting-up-environment
description: "Guides first-time environment setup. Triggers when the user says /setup, asks about setup, wants to check their environment, is getting started for the first time, or hits errors related to Node, Git, npm, or failed builds on first run. Do NOT use for ongoing portfolio changes, content updates, or deployment — use maintaining-portfolio instead."
---

# Setting Up Environment

Guide a non-developer through getting their portfolio running.
Be warm, specific, one step at a time. Never assume technical knowledge.

## Checks (run in order)

1. **Node.js** — `node --version` (need v18+)
   Missing: "You need Node.js to run the site. Grab it from
   nodejs.org — pick LTS, install, restart your terminal, then come back."
2. **Git** — `git --version`
   Missing: "Git tracks your changes. Get it from git-scm.com — defaults."
3. **npm** — `npm --version` (comes with Node)
4. **Dependencies** — check for node_modules, run `npm install` if missing
   "Downloading the libraries your site needs. One-time thing."
5. **Build test** — `npm run build`
   If fails: read the error, explain in plain language, fix it.
6. **Site URL** — check astro.config.mjs for placeholder
   Not a blocker for local work.
7. **Placeholders** — scan for: hello@example.com, social links = #,
   "Portfolio" branding, default Astro favicon, "Your Name" placeholders

## Report Format

```
Here's where you stand:

  Node.js v22 — good
  Git 2.45 — good
  Dependencies — installed
  Site builds — 6 pages
  Site URL — still placeholder (update after Cloudflare setup)
  Placeholders — email, social links, favicon need your info

You're ready! Try: "Change the accent color to coral" or
"Update the about page with my bio"
```

## Error Handling

Don't just say "there's an error." For every error:
1. Read the full error message
2. Explain what it means in one sentence
3. Fix it or provide a clear next step

Common first-run issues:
- Node not found → install from nodejs.org
- `npm install` fails → check Node version, try deleting node_modules and retrying
- Build fails → usually a typo or missing file, read the error carefully
- Permission errors → explain and suggest fix for their OS

## Self-Destruct

After the user has successfully made and published their first change,
automatically remove this skill folder and save the changes. No need to
ask the user — just clean it up and let them know:
"Setup is all done! I've tidied up the setup files since you won't
need them anymore. You're all set to keep customizing."
