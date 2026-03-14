# UX Portfolio Starter

A simple Astro + Tailwind portfolio site. You are helping a UX designer customize this site.

## Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to dist/
- `npm run preview` — preview the build

## Project Structure
```
src/
  components/   → Reusable UI pieces (Header, Footer, ProjectCard, etc.)
  content/
    projects/   → Markdown files for each project (frontmatter + body)
  layouts/      → BaseLayout.astro wraps every page
  pages/        → Each .astro file = one URL route
  styles/       → global.css (Tailwind + custom styles)
public/         → Static files served as-is (images, favicon, _headers)
```

## Key Rules
- IMPORTANT: Use Tailwind CSS utility classes for all styling
- IMPORTANT: Keep all HTML semantic (nav, main, article, section, footer)
- IMPORTANT: Preserve accessibility — alt text on images, aria-labels on nav, heading hierarchy (one h1 per page)
- IMPORTANT: Keep the responsive design — mobile-first, test at 375px and 1280px
- When adding images, put them in `public/images/` and reference as `/images/filename.jpg`
- Projects live in `src/content/projects/` as markdown files with this frontmatter:
  ```yaml
  title: "Project Name"
  description: "Short description"
  image: "/images/project-name.jpg"
  tags: ["UX Design", "Mobile"]
  date: 2024-01-15
  ```

## Figma MCP
This project works with the Figma MCP server. When the user shares a Figma link:
1. Read the Figma file to understand colors, typography, spacing, and layout
2. Update `tailwind.config.mjs` colors and fonts to match the Figma design
3. Update components to match the Figma layout
4. Keep the existing page structure and content — just restyle it

## Deployment
This deploys to Cloudflare Pages. After changes:
1. `git add -A && git commit -m "description of change"`
2. `git push`
3. Cloudflare auto-builds and deploys
