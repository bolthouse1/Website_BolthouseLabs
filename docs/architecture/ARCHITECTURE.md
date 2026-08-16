# Architecture

Current, evidence-backed description of how this repository is put together.
Every factual statement is traceable through
[`EVIDENCE.md`](EVIDENCE.md); citations use `path:line` against the working tree
at commit `9f6e1ba`.

## Purpose and scope

The system is a **single static web page** that markets MyBodyPrism before
launch and captures interested email addresses. It has no server component, no
persistence of its own, no authentication, and no dynamic rendering.

Runtime context: a visitor's browser, loading one HTML document plus eight PNG
assets from GitHub Pages over HTTPS.

Delivery context: `git push` to `master`, which GitHub Pages builds and
publishes to the host named in [`../../CNAME`](../../CNAME).

Out of scope for this repository: the MyBodyPrism desktop application, the
HIPAA cloud backend, the VR streaming path, and the separate repository that
serves the corporate domain. The page *describes* those products
([`../../index.html`](../../index.html):383); it does not implement or link to
them.

## Components and flows

### The one artifact

`index.html` (20,127 bytes) is the entry point and contains three layers that
would normally be separate files:

| Layer | Location | Contents |
|---|---|---|
| Document head | `index.html:3-15` | Title, description, `theme-color`, Open Graph tags, Google Fonts preconnect and stylesheet link |
| Presentation | `index.html:16-363` | One `<style>` block: `:root` custom properties, section primitives, component styles, reveal animation, reduced-motion and 768px responsive blocks |
| Markup | `index.html:365-500` | Ten `<section>` elements and a `<footer>` |
| Behavior | `index.html:502-605` | Three IIFEs plus the form handler; no global symbols |

### Page structure, in document order

1. **Hero** (`index.html:368-376`) — full-viewport, particle `<canvas>`, hero
   logo image `logo-mark-t.png`, headline, "Coming soon" tagline, scroll cue.
   There is no fixed top bar and no wordmark element; the hero image carries the
   brand.
2. **Introducing** (`index.html:379-394`) — product name, the one-sentence
   product statement, and `Picture2.png` framed in an app-window chrome.
3. **The diagnosis** (`index.html:397-407`) — 2013 eyebrow, `Picture1.png`
   showing a traditional four-pane DICOM viewer.
4. **Pivot quote** (`index.html:410-415`) — a single italic line and an accent rule.
5. **The reveal** (`index.html:418-432`) — `Picture4.png`, volumetric heart with
   PET overlay, in app-window chrome.
6. **Multi-year progression** (`index.html:435-444`) — `Picture3.png`, the
   2013→2025 comparison.
7. **See every detail** (`index.html:447-461`) — `Picture5.png`, CT tuned to
   bone and metal.
8. **Highlight your data** (`index.html:464-472`) — `Picture6.png`, annotation
   tooling.
9. **Trust strip** (`index.html:475-483`) — three badges: HIPAA compliant,
   end-to-end encrypted, your data stays yours.
10. **Waitlist** (`index.html:486-496`) — email input, submit button, hidden
    success message.
11. **Footer** (`index.html:498-500`) — the only occurrence of "Bolthouse Labs"
    on the page.

### Control flow

Four independent behaviors, each self-contained:

- **Particle field** (`index.html:504-560`) — 60 nodes drawn on the hero canvas
  with distance-based links, animated by `requestAnimationFrame`. The entire
  block is skipped when `prefers-reduced-motion: reduce` matches
  (`index.html:554`).
- **Scroll reveal** (`index.html:563-574`) — one `IntersectionObserver` at
  threshold 0.15 adds `.visible` to every `.reveal` element and unobserves it.
  Stagger comes from CSS transition delays (`index.html:345-347`).
- **Scroll cue fade** (`index.html:577-582`) — a passive scroll listener fades
  the cue past 80px.
- **Waitlist submit** (`index.html:585-604`) — intercepts submit, POSTs
  `FormData` to the form's own `action` with `Accept: application/json`, and on
  a 2xx hides the form and shows the success line. A rejected fetch is logged to
  the console; a non-2xx response leaves the form as it is.

### Data flow

The only data leaving the page is a visitor-supplied email address, sent
directly from the browser to Formspree (`index.html:490`). Nothing is stored in
this repository, in `localStorage`, or in a cookie. No analytics or tracking
script is present.

## Boundaries and risks

### Ownership boundaries

- **This repository owns** the page markup, styling, behavior, and the image
  assets it renders, plus the custom-domain pin in `CNAME`.
- **GitHub Pages owns** hosting, TLS provisioning, and the build-and-publish
  step. There is no workflow file; publication is the platform default for the
  `master` branch.
- **Formspree owns** submission storage, spam handling, and notification.
- **Google Fonts owns** the two typefaces fetched at load time.
- **DNS is external.** The hosted zone, its records, and the email records that
  share it are administered outside this repository.

### External dependencies

| Dependency | Where | Failure mode if unavailable |
|---|---|---|
| `fonts.googleapis.com` / `fonts.gstatic.com` | `index.html:13-15` | Page falls back to `system-ui`/serif; layout survives |
| Formspree endpoint | `index.html:490` | Submit produces no success state; the form stays visible |
| GitHub Pages | Platform | Site is unreachable |

The social preview image is referenced by absolute URL (`index.html:12`); every
other asset is referenced by bare filename relative to the page.

### Security and privacy boundaries

- No secrets, tokens, or credentials exist in the tracked tree. The only
  externally meaningful identifier is the public Formspree form endpoint, which
  is necessarily visible in client HTML.
- No personal health information is handled by this page. The screenshots are
  the founder's own imaging, published deliberately.
- Email addresses transit to a third party; the page states no privacy policy
  and links to none.
- Local-only directories `.claude/` and `.superpowers/` are gitignored
  (`../../.gitignore`:1-5) and never published.

### Test and delivery architecture

There is none, by design. The deterministic inventory found no package
manifest, no lockfile, no test file, and no CI configuration. Verification is a
manual browser pass, described in
[`../ENGINEERING_HANDBOOK.md`](../ENGINEERING_HANDBOOK.md). Delivery is a push
to `master`; rollback is `git revert` plus another push.

### Risks carried

- **Single point of edit.** Markup, CSS, and JS share one file, so every change
  touches the same blob and merge conflicts are file-wide.
- **No preview environment.** The first place a change renders publicly is the
  live domain.
- **Documentation drift is the historical failure mode.** The page structure
  changed on 2026-05-10, 2026-05-17, and 2026-06-21, while the owner-authored
  notes went unrevised from 2026-05-10 until the 2026-08-05 documentation pass —
  falling behind on section order, the removed "How It Works" section, and the
  removed top-bar wordmark. They have been corrected, but the lesson holds:
  prose about this page should be re-derived from `index.html` rather than
  copied forward.
- **External state is unverifiable from here.** DNS, the Formspree account, and
  GitHub Pages settings cannot be inspected from the working tree; see the
  unknowns in [`EVIDENCE.md`](EVIDENCE.md).

## Related documents

- [`TARGET_ARCHITECTURE.md`](TARGET_ARCHITECTURE.md) — intended future shape
- [`../decisions/0001-static-single-file-site-on-github-pages.md`](../decisions/0001-static-single-file-site-on-github-pages.md)
- [`../decisions/0002-canonical-domain-mybodyprism-com.md`](../decisions/0002-canonical-domain-mybodyprism-com.md)
- [`../decisions/0003-formspree-waitlist-without-backend.md`](../decisions/0003-formspree-waitlist-without-backend.md)
- [`../product/PRD.md`](../product/PRD.md) and [`../product/USER_WORKFLOWS.md`](../product/USER_WORKFLOWS.md)
