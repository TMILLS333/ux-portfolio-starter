---
description: Rules for git operations and deployment
globs: ["**/.git/**", "**/.github/**"]
alwaysApply: false
---

# Deployment Rules

This site deploys to Cloudflare Pages:
- Every push to `main` auto-triggers a build and deploy
- Build command: `npm run build` → outputs to `dist/`
- Live URL: the user's `your-project.pages.dev`
- Build takes ~30-60 seconds after push

## Git workflow
- The user never touches git — you handle stage, commit, push
- Write clear commit messages in plain language (e.g., "Updated accent color to coral")
- Check `.gitignore` covers `.env` before creating env files
- Never commit secrets, API keys, or credentials to tracked files
- Scan staged files for hardcoded credentials before committing

## If a deploy fails
- Check the Cloudflare Pages dashboard build log
- Common causes: import errors, missing dependencies, TypeScript errors
- Explain the error in plain language and fix it
