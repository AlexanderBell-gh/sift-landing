# AGENTS.md

## Session rules

- **On startup skills**: `@caveman` at `full` intensity, all session, until told otherwise.
- **Prefix every shell command with:** `rtk` — e.g. `rtk git log -5`.
- **Prioritise implementation quality over code volume:** More code ≠ better code.
- **Only use read-only git commands**: `status`, `log`, `diff`, `diff --cached`, `show`, `blame`. **Never use**: `commit`, `push`, `reset`, `rebase` or `amend`.

## Commands

```
pnpm install   # Install dependencies
pnpm dev       # Start development server
pnpm build     # Create production build
pnpm lint      # Run OXLint style checks
```

## Code style & conventions

- **Lint Enforcement**: Style checks are mandatory using `oxlint`. All findings must be addressed before any code change is considered complete.
- **TypeScript Discipline**: Code in `src/` must adhere to strict TypeScript rules. Prefer explicit typing and avoid `any` usage.
- **Naming and Clarity**: Use descriptive, unambiguous names for all variables, functions, and components to maintain readability.
- **Structural Integrity**: Respect the established component and hook patterns. Do not refactor major architectural patterns unless explicitly directed.

## Architecture snapshot

React 19 + TypeScript 7 + Vite 8 + Tailwind v4; Cloudflare Pages; GitHub Actions → Pages.

`src/` React SPA (`components/{pages,features,ui}, contexts, hooks)`.
- **Routes:** `Sign In` links to https://siftsearch.pages.dev/auth.

## Docs (user-triggered)

- On **"finish up and update docs"** update `RECENT.md`, `ARCHITECTURE.md` (fix anything stale, ~175 lines), `README.md` only for new features / `.env` keys / commands, and `AGENTS.md` keep lean & for sweeping changes only. If implementing anything front-end see and update `DESIGN.md`
- Location: `RECENT.md`, `ARCHITECTURE.md` + `DESIGN.md` in `/home/wsl/Repositories/markdowns/sift-markdowns/landing/`; `README.md` in the repo root.
- **Stop after here.** Never commit; report the change and suggest a commit message (`feat:`, `fix:`, `chore:`, `polish:`).