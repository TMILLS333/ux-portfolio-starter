---
description: Rules for editing project content markdown files
globs: ["src/content/**/*.md"]
---

# Content Rules

## Project Frontmatter Schema
```yaml
title: "Project Name"           # Required — shown on card + page
description: "Short description" # Required — card text + meta tags
image: "/images/project-name.jpg" # Required — must exist in public/images/
tags: ["UX Design", "Mobile"]   # Optional, defaults to []
date: 2024-01-15                # Required — YYYY-MM-DD format
```

- Images must exist in `public/images/` before referencing
- Date determines sort order (newest first on homepage)
- Tags appear as chips on project cards and detail pages
- Case study body content uses standard markdown (h2, h3, p, ul, ol, img, blockquote)
