# Website_BolthouseLabs — MyBodyPrism teaser site

Single-page, dependency-free marketing site for **MyBodyPrism**, a product of
Bolthouse Labs, Inc. The whole site is one file — [`index.html`](index.html) —
served as a static page on GitHub Pages at the domain pinned by
[`CNAME`](CNAME) (`mybodyprism.com`).

There is no build step, no package manifest, no test suite, and no CI
configuration in this repository. Editing `index.html` and pushing `master` is
the entire delivery pipeline.

## What the page does

A dark, scroll-driven narrative that moves from the founder's 2013 cardiac
sarcoidosis diagnosis to what MyBodyPrism renders from the same scan data, and
ends in an email waitlist capture. The page carries ten `<section>` blocks plus
a footer (`index.html:368-500`), a hero particle canvas, IntersectionObserver
scroll reveals, and a Formspree-backed waitlist form (`index.html:490`).

## Repository layout

| Path | Role |
|---|---|
| `index.html` | The entire site: markup, `<style>` block, and three vanilla-JS IIFEs |
| `CNAME` | Custom-domain pin consumed by GitHub Pages |
| `Picture1.png` … `Picture6.png` | The six narrative screenshots, referenced in section order |
| `logo.png`, `logo-t.png`, `logo-mark-t.png` | Brand marks; `logo-mark-t.png` is the hero image (`index.html:371`) |
| `Icon/Body Prism.png` | Source icon art, not referenced by the page |
| [`CLAUDE.md`](CLAUDE.md) | Owner-authored brand, copy, and deployment rules — governing instructions |
| [`STATUS.md`](STATUS.md) | Machine-written portfolio status card (tier, activity, caveats) |
| [`docs/`](docs) | Durable project context plus the original 2026-04 deploy plan and media asset guide |

## Working on it

1. Read [`START_HERE.md`](START_HERE.md) first — it is the cold-start reading
   order for a fresh session.
2. Follow the copy, brand, and structural rules in [`CLAUDE.md`](CLAUDE.md).
   They are constraints, not suggestions.
3. Preview by opening `index.html` directly in a browser. Nothing needs to be
   installed or compiled.
4. Push to `master` to deploy. GitHub Pages rebuilds automatically.

## Durable context

- [`PROJECT_STATE.md`](PROJECT_STATE.md) — where the project stands and the next action
- [`docs/architecture/ARCHITECTURE.md`](docs/architecture/ARCHITECTURE.md) — current structure, flows, and boundaries
- [`docs/architecture/TARGET_ARCHITECTURE.md`](docs/architecture/TARGET_ARCHITECTURE.md) — where it is headed
- [`docs/product/PRD.md`](docs/product/PRD.md) — product statement and scope
- [`docs/product/USER_WORKFLOWS.md`](docs/product/USER_WORKFLOWS.md) — visitor and maintainer journeys
- [`docs/roadmap/BUILD_SEQUENCE.md`](docs/roadmap/BUILD_SEQUENCE.md) — ordered milestones
- [`docs/decisions/`](docs/decisions) — architecture decision records
- [`docs/ENGINEERING_HANDBOOK.md`](docs/ENGINEERING_HANDBOOK.md) — how to change this repository safely
- [`docs/architecture/EVIDENCE.md`](docs/architecture/EVIDENCE.md) — the citations behind every claim above

## External services this page depends on at runtime

- Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) for Playfair Display and Outfit (`index.html:13-15`)
- Formspree for waitlist submissions (`index.html:490`)
- GitHub Pages for hosting and TLS

No analytics, no cookies, no tracking scripts, and no backend of our own are
present in `index.html`.
