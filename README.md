<p align="center">
  <img src="./public/favicon.svg" width="96" alt="Sift logo" />
</p>

<h1 align="center">Sift (Landing)</h1>

<p align="center"><strong>UK Grocery Tracker — Marketing page only.</strong></p>

<p align="center">
  <a href="https://siftuk.pages.dev"><strong>Sift</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646464?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwind-css&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/License-MIT-16A34A" alt="MIT license" />
</p>

<!-- Screenshots (pending real captures): Hero, Offers carousel, Popular right now -->

UK supermarket grocery tracker landing page. This repo contains the public-facing marketing site: hero, search bar, offers and popular carousels, feature highlights, legal pages (privacy, cookies, terms, about, license) and the cookie notice. The signed-in app (search, watchlist, shopping list, auth) lives in the main [Sift](https://github.com/AlexanderBell-gh/Sift) repository.

## Deploy

Automatic: push to `main` → Cloudflare Pages (via GitHub Actions). Manual: run `pnpm build`, then deploy from `/dist`.

## Commands

```bash
pnpm install
pnpm dev      # start local server (Vite on :5173)
pnpm build    # tsc -b && vite build → dist/
pnpm preview  # serve dist/ locally
pnpm lint     # oxlint
```
