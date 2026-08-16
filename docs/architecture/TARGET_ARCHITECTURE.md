# Target architecture

Where this site is intended to go, separated cleanly from what exists today
(see [`ARCHITECTURE.md`](ARCHITECTURE.md)). Nothing here is scheduled work; the
roadmap in [`../roadmap/BUILD_SEQUENCE.md`](../roadmap/BUILD_SEQUENCE.md)
governs sequencing.

## Intended outcomes

1. **Stay dependency-free for as long as the content allows.** The current shape
   — one file, zero build, platform-default publish — is the property that makes
   this repository cheap to own. Every target below is judged against whether it
   preserves that.
2. **Look right on large, high-density displays.** The narrative rests entirely
   on imagery, and the current captures have low native resolution.
3. **Survive the transition from teaser to product site.** The page today says
   "Coming soon". At launch it must be able to carry download, sign-up, or
   documentation entry points without a rewrite.
4. **Measure interest without surveilling visitors.** Any analytics must be
   privacy-respecting; the owner named Plausible, Fathom, and Cloudflare Web
   Analytics as acceptable candidates.

## Target components and flows

### Accepted direction

- **Higher-resolution media, same slots.** Replace the six root-level
  `Picture*.png` files with better exports of the same MyBodyPrism views. No
  markup change, no new component, no new dependency. This is the only target
  item the owner recorded as a defect in the current state.

### Recommendations, not decisions

- **Motion in one or two slots.** A slow-rotation clip could replace a still in
  "The reveal" or "See every detail" using
  `<video autoplay muted loop playsinline>`, which the owner already named as
  the sanctioned element. Cost: page weight and a second asset pipeline.
  Constraint: dark background, no controls, honor `prefers-reduced-motion`
  alongside the existing particle and reveal opt-outs.
- **An embedded WebGL viewer.** The most ambitious idea on record — a live 3D
  volume on the page instead of a screenshot. This is the one change that would
  break the no-dependency property, because it implies a renderer, an asset
  format, and a loading strategy. It should not be attempted without an ADR
  covering bundle strategy, mobile fallback, and how a viewer coexists with a
  page that currently ships zero external JavaScript.
- **A second page after launch.** If detailed product information outgrows the
  scroll, the shape becomes multi-page — which collides with the current
  no-navigation rule. That rule is owner-set, so relaxing it is an owner
  decision, and it should arrive with a decision record rather than a nav bar.
- **Analytics.** A privacy-respecting, cookieless snippet is the intended
  approach if measurement is ever needed. It adds a third external runtime
  dependency alongside Google Fonts and Formspree, so it belongs in the trust
  story the page already tells.

### Boundaries that must not move

- The desktop application, the HIPAA cloud backend, and the VR streaming path
  stay outside this repository. The site describes them; it never implements
  them.
- The corporate domain is served by a separate repository. This repository owns
  exactly one host, pinned by its `CNAME` file.
- No backend of our own. Form handling stays with a third-party endpoint unless
  a decision record says otherwise
  ([`../decisions/0003-formspree-waitlist-without-backend.md`](../decisions/0003-formspree-waitlist-without-backend.md)).
- Copy constraints from the governing instructions hold in every future state:
  no cloud provider named, no mention of who pays streaming costs, HIPAA
  compliance stated, Bolthouse Labs only in the footer.

## Migration and validation

| Transition | Gate before starting | How it is validated |
|---|---|---|
| Higher-resolution stills | None; it is an asset swap | Load the page at ≥2560px wide and at 375px; confirm no softening and no layout shift |
| Still → video in a section | Owner sign-off on which section | Autoplay works muted on iOS Safari and Android Chrome; reduced-motion users still get a usable frame; page weight stays acceptable on mobile data |
| Embedded WebGL viewer | A new ADR under [`../decisions/`](../decisions) | Renders on mid-tier mobile; degrades to the existing still; no regression in first paint |
| Second page / navigation | Owner decision relaxing the single-page rule | The teaser narrative still reads end-to-end without the nav |
| Analytics | Owner choice of vendor | No cookies set; no personal data collected; the trust strip's claims remain true |

Validation for this site is a manual browser pass — there is no test harness and
adding one is not a target. See
[`../ENGINEERING_HANDBOOK.md`](../ENGINEERING_HANDBOOK.md) for the checklist.

## Unknowns that shape the target

- The launch date, and therefore when the teaser framing has to change.
- Whether higher-resolution exports of the six views already exist.
- Whether any measurement is wanted at all before launch.

These are recorded with their reasons in [`EVIDENCE.md`](EVIDENCE.md).
