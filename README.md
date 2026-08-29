# mybodyprism-com — MyBodyPrism website

The public website for **MyBodyPrism**, a product of Bolthouse Labs, Inc. An
[Astro 6](https://astro.build) static site, served on GitHub Pages at the domain
pinned by [`public/CNAME`](public/CNAME) (`mybodyprism.com`).

> **Repo name:** the GitHub repository is `bolthouse1/Website_BolthouseLabs`.
> Only the local working folder was renamed to `mybodyprism-com`.

## What the site does

A dark, scroll-driven homepage that moves from the founder's 2013 cardiac
sarcoidosis diagnosis to what MyBodyPrism renders from the same scan data, and
ends in a call to action. Around it sit the download flow, support, system
requirements, an account portal, and eight legal pages.

The download flow is gated by a build-time flag, `PUBLIC_DOWNLOADS_LIVE`. While
it is false — the current state — the site publishes in full but `/pricing` takes
waitlist signups instead of offering a download.

## Repository layout

| Path | Role |
|---|---|
| `src/pages/` | One file per route (`index`, `pricing`, `support`, `system-requirements`, `account`, `404`, `500`, `legal/*.md`) |
| `src/layouts/Default.astro` | Shared head, header, footer, and the `--c-*` colour tokens every page inherits |
| `src/components/` | `CookieBanner.astro` |
| `src/site-config.ts` | Build-time flags: `DOWNLOADS_LIVE`, `API_BASE`, waitlist endpoint |
| `public/` | Copied verbatim into `dist/` — images, `robots.txt`, `favicon.svg`, and `CNAME` |
| `.github/workflows/deploy.yml` | Build + publish to GitHub Pages, with a `dist/CNAME` guard |
| [`CLAUDE.md`](CLAUDE.md) | Owner-authored brand, copy, and deployment rules — governing instructions |
| [`STATUS.md`](STATUS.md) | Machine-written portfolio status card |
| [`docs/`](docs) | Durable project context, written before the 2026-08-26 migration |

## Working on it

```bash
npm ci
npm run dev      # local dev server
npm run build    # static output into dist/
```

1. Read [`START_HERE.md`](START_HERE.md) — the cold-start reading order.
2. Check [`PROJECT_STATE.md`](PROJECT_STATE.md) — **the site is mid-cutover**, and
   merging without switching the Pages source takes the live domain down.
3. Follow the copy, brand, and structural rules in [`CLAUDE.md`](CLAUDE.md). They
   are constraints, not suggestions.
4. When touching anything gated, build in **both** flag states:
   `npm run build` and `PUBLIC_DOWNLOADS_LIVE=true npm run build`.

Deployment is a GitHub Actions run, not a bare push — the repository's Pages
source must be set to "GitHub Actions". There is no staging environment and no
test suite.

## Durable context

- [`PROJECT_STATE.md`](PROJECT_STATE.md) — where the project stands and the next action
- [`AGENTS.md`](AGENTS.md) — operating rules for autonomous agents
- [`docs/product/PRD.md`](docs/product/PRD.md) — product statement and scope
- [`docs/decisions/`](docs/decisions) — architecture decision records
- [`docs/ENGINEERING_HANDBOOK.md`](docs/ENGINEERING_HANDBOOK.md) — how to change this repository safely

Everything under `docs/` predates the 2026-08-26 Astro migration and describes the
earlier single-file site. Verify any claim there against `src/` before relying on it.

## External services the site depends on at runtime

- **Google Fonts** (`fonts.googleapis.com`, `fonts.gstatic.com`) — Playfair Display and Outfit
- **Formspree** — pre-launch waitlist submissions, while `PUBLIC_DOWNLOADS_LIVE` is false
- **The MyBodyPrism licence API** (`PUBLIC_API_BASE`) — the download and account flows, once live
- **GitHub Pages** — hosting and TLS

No analytics and no tracking scripts. The cookie banner defaults to declining
non-essential cookies; nothing may fire before `window.__mbpConsent === "accepted"`.
