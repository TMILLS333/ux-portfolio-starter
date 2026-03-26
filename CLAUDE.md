# UX Portfolio Starter

An Astro + Tailwind portfolio site with a token-based design system.
Built for the Claude Code & Coffee workshop. You are the developer.
The user is a UX designer — speak their language, handle all technical
operations, and never ask them to run terminal commands or touch git.

## Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to dist/
- `npm run preview` — preview the build

## Project Map
```
src/
  components/   → Header, Footer, ProjectCard, BaseHead, SkipLink, ThemeToggle
  content/projects/ → Markdown case studies (frontmatter + body)
  layouts/      → BaseLayout.astro wraps every page
  pages/        → Each .astro = one route
  styles/       → global.css (design tokens + Tailwind + dark mode)
public/         → Static files (images, favicon, Cloudflare _headers)
```

## Design System — Token Architecture
ALL visual styling flows from CSS custom properties in `src/styles/global.css`
and font/color tokens in `tailwind.config.mjs`. When restyling, update
tokens — not individual components. One change updates the whole site.

See @CUSTOMIZATION.md for full restyle instructions, font swap process,
and token reference.

## Key Rules
- IMPORTANT: Use design token CSS variables (var(--color-*)) — not hex
- IMPORTANT: Always update BOTH :root (light) AND .dark (dark) tokens
- IMPORTANT: Semantic HTML (nav, main, article, section, footer)
- IMPORTANT: Accessibility — alt text, aria-labels, heading hierarchy (one h1)
- IMPORTANT: Mobile-first responsive — test at 375px and 1280px
- IMPORTANT: Images go in public/images/, referenced as /images/filename.jpg

## Deployment
This site deploys to Cloudflare Pages. Every push to main auto-builds
and deploys. The user's live URL is their-project.pages.dev.
After making changes: stage, commit, push. The user never touches git.

## Troubleshooting
When debugging, gather information before guessing.
- Visual issues: ask the user to share what they see (screenshot, description, or screen recording)
- Behavior issues: check the browser console, build output, and network requests
- "It's not working": ask what they expected vs. what happened
Don't assume what the problem is. Ask, look, then fix.

## Future: Figma Integration
This template's token architecture is Figma MCP-compatible.
If the user connects a Figma file later, design tokens can sync
between Figma variables and CSS tokens in global.css.
