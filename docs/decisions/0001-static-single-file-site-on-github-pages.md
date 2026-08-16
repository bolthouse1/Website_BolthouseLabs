# 0001 — One static file, published by GitHub Pages

- **Status:** Accepted (in force since the initial commit, 2026-04-04)
- **Date recorded:** 2026-08-05
- **Reconstructed from:** the shipped artifact, the governing instructions, and
  the archived 2026-04 design spec

## Context

The site had to exist quickly, look expensive, and cost nothing to run. It has
one interactive element (an email field) and no dynamic content. The team is one
person. The archived design spec for the original deploy recorded the starting
position plainly: an existing single `index.html`, no frameworks, no build
tools, pure static HTML/CSS/JS
([`../superpowers/specs/2026-04-04-deploy-bolthouselabs-design.md`](../superpowers/specs/2026-04-04-deploy-bolthouselabs-design.md)).

## Decision

Ship the entire site as **one HTML file** — markup, a single `<style>` block,
and vanilla-JS IIFEs — and publish it with **GitHub Pages from the `master`
branch**, using the platform default rather than a workflow file.

Consequences accepted with it:

- No package manifest, no lockfile, no bundler, no transpiler, no CSS
  framework, no external JavaScript.
- No CI configuration; the deterministic inventory of this repository confirms
  none exists.
- Deployment is `git push`. There is no staging environment.
- Assets are plain files at the repository root, referenced by bare filename.

## Consequences

**Good.** Nothing to install, nothing to keep current, nothing that can break
from a dependency update. A change is visible in the browser instantly by
opening the file from disk, and live one to two minutes after a push. Hosting
and TLS cost nothing and require no administration.

**Costs.** Every edit touches the same file, so concurrent work conflicts
file-wide. There is no automated verification, so a regression reaches the live
domain before anyone sees it — mitigated only by the manual checklist in
[`../ENGINEERING_HANDBOOK.md`](../ENGINEERING_HANDBOOK.md). And the page cannot
grow past what one file can carry without revisiting this decision.

**Boundary this sets.** Adding a build step, a framework, or an external script
is not a routine change; it reverses part of this decision and needs its own
record. The embedded WebGL viewer sketched in
[`../architecture/TARGET_ARCHITECTURE.md`](../architecture/TARGET_ARCHITECTURE.md)
is the clearest example.

## Alternatives considered

- **A static-site generator** (Astro, Eleventy, Hugo). Rejected implicitly: for
  a single page with no content collection, the toolchain is larger than the
  product.
- **A GitHub Actions publish workflow.** Unnecessary when the platform already
  serves the branch as-is.
- **Split CSS and JS files.** Would improve editability but adds requests and
  breaks the "open the file and it works" property the page currently has.
