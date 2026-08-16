# Start here

Cold-start reading order for a session with no memory of this repository. Total
read time is a few minutes; the repository is small on purpose.

## 1. Know what this is (1 minute)

A one-file static teaser site for **MyBodyPrism** (Bolthouse Labs, Inc.), served
by GitHub Pages at the domain in [`CNAME`](CNAME). Everything the browser runs
lives in [`index.html`](index.html): markup, a single `<style>` block, and three
vanilla-JS IIFEs. No framework, no build, no package manifest, no tests.

## 2. Read the rules before touching copy (3 minutes)

[`CLAUDE.md`](CLAUDE.md) is owner-authored and governing. It fixes the brand
palette, the tone, the product model that the copy is allowed to describe, and
the things the copy must never say. Treat its Brand Identity, Product Model, and
Design Rules sections as constraints.

## 3. Learn the current state (2 minutes)

- [`PROJECT_STATE.md`](PROJECT_STATE.md) — status, recent movement, next action, open questions
- [`STATUS.md`](STATUS.md) — the portfolio review's machine-written card for this repo

## 4. Go deeper only if the task needs it

| If your task is… | Read |
|---|---|
| Changing structure, CSS, or JS | [`docs/architecture/ARCHITECTURE.md`](docs/architecture/ARCHITECTURE.md) |
| Changing what the product claims | [`docs/product/PRD.md`](docs/product/PRD.md) |
| Changing the visitor journey or form | [`docs/product/USER_WORKFLOWS.md`](docs/product/USER_WORKFLOWS.md) |
| Planning the next chunk of work | [`docs/roadmap/BUILD_SEQUENCE.md`](docs/roadmap/BUILD_SEQUENCE.md) |
| Asking "why is it built this way?" | [`docs/decisions/`](docs/decisions) |
| Setting up, previewing, or deploying | [`docs/ENGINEERING_HANDBOOK.md`](docs/ENGINEERING_HANDBOOK.md) |
| Checking whether a claim is grounded | [`docs/architecture/EVIDENCE.md`](docs/architecture/EVIDENCE.md) |
| Running as an autonomous agent | [`AGENTS.md`](AGENTS.md) |

## 5. Ground truth beats documentation

`index.html` is the only executable artifact and it wins over any prose,
including these documents. Before making a structural claim, open it and count
the `<section>` elements yourself — the page has been restructured more than
once and prose has lagged behind before.

## The four facts most often needed

1. Deploy = push to `master`. GitHub Pages rebuilds in one to two minutes.
2. The custom domain is pinned by the `CNAME` file at the repository root.
   Deleting it unpins the domain.
3. The waitlist posts to a Formspree endpoint hard-coded in the form's `action`
   (`index.html:490`). There is no server of our own.
4. Every image the page renders sits at the repository root and is referenced by
   bare filename.
