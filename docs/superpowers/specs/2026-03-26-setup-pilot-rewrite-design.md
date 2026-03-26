# Skills Rewrite Design — setup-pilot + portfolio-maintainer

## Context
Two skills ship with the UX portfolio starter template for non-developer workshop participants. Both have stale content and need frontmatter fixes per the writing-skills spec. Additionally, the portfolio-maintainer needs new behavioral requirements: session start/end rituals, security awareness, and a teaching-mode tone.

---

## Skill 1: setup-pilot

### Approach
Minimal fix — keep the 7-check structure and tone, update frontmatter, fix stale content, add self-destruct. Target ~200 words.

### Frontmatter
- `name: setup-pilot`
- `description: "Use when the user says /setup, asks about setup, wants to check their environment, is getting started for the first time, or hits errors related to missing tools (Node, Git, npm) or failed builds."`

### Content updates
- Remove references to media-query dark mode (now class-based via `.dark`)
- Remove any Vanta.js / Three.js references
- Update placeholder content checks:
  - `hello@example.com` still present
  - "Portfolio" placeholder branding (header, footer)
  - Social links pointing to `#`
  - Favicon still default Astro
- Keep 7-step check order: Node → Git → npm → deps → build → site URL → placeholders
- Tighten each check to essentials — no over-explaining downloads
- Trim "after setup" suggestions to 2 prompts max

### Self-destruct behavior
After the user has:
1. Successfully run the dev server or build
2. Made at least one change
3. Pushed to GitHub

Offer to remove itself:
> "Your setup is complete and your first change is live! This setup skill has done its job. Want me to remove it to keep your project clean?"

If user agrees, delete `.claude/skills/setup-pilot/` and commit.

### File
- `.claude/skills/setup-pilot/SKILL.md` — rewrite

---

## Skill 2: portfolio-maintainer

### Approach
Trim + update — keep best parts (tone, common tasks, what NOT to do), add new behavioral requirements, fix stale refs. Target ~300 words.

### Frontmatter
- `name: portfolio-maintainer`
- `description: "Use when working on any task involving the portfolio site: adding projects, changing styles, updating content, fixing issues, deploying, or answering questions. Triggers on any prompt related to the portfolio, website, design, content, or deployment."`

### New: Session start ritual
On every new session, Claude should:
1. Run `git status` + `git log --oneline -3` — check for uncommitted changes, untracked files
2. Compare local vs remote (`git fetch && git status`) — if they're out of sync, **explain why** before doing anything:
   - "Your local copy is 2 commits behind what's on GitHub. This can happen if you made changes from another device or merged a PR on GitHub. I'll pull those changes down so we're in sync."
   - "You have local changes that haven't been pushed yet from last session. Want me to commit and push those first?"
   - **Never silently force-pull or reset** — always explain the situation and let the user confirm
3. Scan for leftover artifacts — build output, duplicate configs, orphaned files
   - **Never delete without explaining what it is and why it's safe to remove**
   - Example: "I found a `dist/` build folder from a previous session. This gets regenerated every time you build, so it's safe to delete. Want me to clean it up?"
4. Report status: "Clean start — you're in sync with GitHub" or explain what needs attention

### New: Session end ritual
When the user wraps up:
1. Update memory files with changes made this session
2. Summarize what changed in 2-3 bullets
3. **Handle all git/deployment for the user** — commit, push, create PR, and merge. The user should never have to learn git commands, PR workflows, or Cloudflare deployment steps. Claude does all of this automatically:
   - Stage and commit with a clear message
   - Push to remote
   - Create PR if on a branch
   - Merge the PR
   - Confirm deployment is live (Cloudflare auto-deploys on push to main)
   - Report: "Your changes are live! Here's what went out: [summary]"
4. Suggest a natural next step for next session

**Critical: The user never touches git, PRs, or Cloudflare.** Claude handles the entire publish flow end-to-end. If something goes wrong (merge conflict, failed deploy), Claude fixes it and explains what happened in plain language — the user doesn't need to intervene.

### New: Security awareness
- Flag any hardcoded secrets, API keys, or credentials before committing
- Warn if `.env` files or credentials are about to be staged
- Check for exposed tokens in content or config files
- Never commit sensitive data without explicit confirmation

### New: Teaching mode tone
- Shift from "do it for them" to "do it WITH them"
- Explain the *why* behind changes — not just what changed, but why it matters
- Use analogies non-devs understand ("Design tokens are like brand guidelines — change one value and it updates everywhere")
- When fixing errors, explain what went wrong so they learn to recognize patterns
- Celebrate progress and build confidence

### Content updates
- Remove stale dark mode references (now class-based)
- Remove Vanta.js references
- Update color references to cyan accent (`#0891B2` light / `#22D3EE` dark)
- Update background references to warm cream (`#F5F0EB`)
- Keep: common tasks list, "what NOT to do" section, tone examples
- Trim tone examples from 6 to 3 (keep the best)
- Cut redundancy with CLAUDE.md — skill is for *behavior*, CLAUDE.md is for *facts*

### File
- `.claude/skills/portfolio-maintainer/SKILL.md` — rewrite

---

## Verification
- Both skills: frontmatter has `name` and `description`
- Both skills: no stale references to media-query dark mode, Vanta, or pink accent
- setup-pilot: word count < 250, self-destruct section present
- portfolio-maintainer: word count < 350, session start/end/security/teaching sections present
- Both skills: description starts with "Use when..." and does NOT summarize workflow
