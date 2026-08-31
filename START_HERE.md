# Start here

Cold-start reading order for a session with no memory of this repository.

> **This repo changed shape on 2026-08-26.** It was a single-file `index.html`
> teaser for most of its life; it is now an Astro 6 multi-page site. Any document
> here that describes "one page, no build tooling" predates that migration —
> that includes most of [`docs/`](docs). See
> [`PROJECT_STATE.md`](PROJECT_STATE.md) first.

## 1. Know what this is (1 minute)

The public website for **MyBodyPrism** (Bolthouse Labs, Inc.), served by GitHub
Pages at the domain in [`public/CNAME`](public/CNAME). An Astro 6 static site:
pages in [`src/pages/`](src/pages), one shared layout in
[`src/layouts/Default.astro`](src/layouts/Default.astro), built with
`npm ci && npm run build` into `dist/`. No client framework — interactivity is a
few inline vanilla-JS IIFEs. No tests.

## 2. Learn the current state (2 minutes)

- [`PROJECT_STATE.md`](PROJECT_STATE.md) — **read this before doing anything.**
  The site is live and healthy, but `master` carries unpushed commits that change
  the homepage imagery and are waiting on a human to look at them. That file opens
  with a *Resume here* section saying exactly what to do.
- [`STATUS.md`](STATUS.md) — the portfolio review's machine-written card

## 3. Read the rules before touching copy (3 minutes)

[`CLAUDE.md`](CLAUDE.md) is owner-authored and governing. It fixes the brand
palette, the tone, the product model the copy may describe, and what the copy must
never say. Treat Brand Identity, Product Model, and Design Rules as constraints.

Two things there that are easy to trip over:

- **Some copy is owner-directed and must not be reworded** — the `/pricing` lede,
  the homepage "How it works" steps, the support "Is it really free?" answer. If
  they read wrong in a given state, add alongside them rather than editing them.
- **`src/pages/legal/*.md` are mirrors.** Canonical text lives in the desktop repo
  at `SomaViz_Desktop_Volume_Viewer/legal/`. Fix upstream, then re-sync here.

## 4. Go deeper only if the task needs it

| If your task is… | Read |
|---|---|
| Understanding the launch switch or go-live | [`CLAUDE.md`](CLAUDE.md) → "The launch switch", "Deployment Notes" |
| Changing what the product claims | [`docs/product/PRD.md`](docs/product/PRD.md) — pre-migration, verify against `src/` |
| Asking "why is it built this way?" | [`docs/decisions/`](docs/decisions) — pre-migration; ADR 0001 (single-file site) is superseded |
| Running as an autonomous agent | [`AGENTS.md`](AGENTS.md) |

## 5. Ground truth beats documentation

`src/` is the only executable artifact and wins over any prose, including these
documents. Before making a structural claim, open the file and check — the page has
been restructured more than once and prose has lagged behind every time.

## The five facts most often needed

1. **Deploy is a GitHub Actions run**, not a bare push — see
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The Pages source
   must be set to "GitHub Actions" for it to publish.
2. **The GitHub repo is `bolthouse1/Website_BolthouseLabs`**, not `mybodyprism-com`
   (which 404s). Only the local folder was renamed. The `origin` remote is correct.
3. **The custom domain is pinned by [`public/CNAME`](public/CNAME)** — it must land in
   `dist/` or the domain unbinds and the site goes dark. The workflow fails the build
   if it doesn't.
4. **`PUBLIC_DOWNLOADS_LIVE` gates the download flow.** While false, `/pricing` takes
   waitlist signups instead. Do not flip it before tracker step W4.1.
5. **The palette is defined once** as `--c-*` tokens in the layout. Never hardcode a
   colour in a page.
