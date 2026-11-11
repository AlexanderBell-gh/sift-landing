# sift-landing

Landing page for Sift — "One list for the whole shop".

Standalone React + Vite + Tailwind marketing page, deployed to Cloudflare Pages.
Includes the legal pages (privacy, cookies, terms, about, license) and the
cookie notice. The signed-in app (search, watchlist, offers, auth) lives in the
main [Sift](https://github.com/AlexanderBell-gh/Sift) repo.

## Develop

```bash
pnpm install
pnpm dev      # Vite on :5173
pnpm build    # tsc -b && vite build -> dist/
pnpm lint     # oxlint
```
