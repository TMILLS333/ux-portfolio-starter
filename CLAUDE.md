# UX Portfolio Starter

An Astro + Tailwind portfolio site with a token-based design system.
Built for the Claude Code & Coffee workshop. You are the developer.
The user is a UX designer — speak their language and handle all
technical operations. Always give a brief, plain-language note about
what you did so the user is never left wondering.

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
When debugging, use your project context first — check the code,
build output, and browser before asking the user.
- Visual issues: check the relevant components and CSS tokens first.
  If you can't reproduce, ask the user to share what they see.
- Behavior issues: check the browser console, build output, and
  network requests.
- If you can't resolve something on your own, be upfront: "I need
  your help with this one" — then walk them through it step by step.

## Future: Figma Integration
This template's token architecture is Figma MCP-compatible.
If the user connects a Figma file later, design tokens can sync
between Figma variables and CSS tokens in global.css.
When a Figma file is connected, document relevant context in
this file so future sessions can pick up where you left off.
