# CLAUDE.md — MyBodyPrism Teaser Website

> New session? Read [`START_HERE.md`](START_HERE.md) for the cold-start reading
> order, [`PROJECT_STATE.md`](PROJECT_STATE.md) for where things stand, and
> [`docs/architecture/ARCHITECTURE.md`](docs/architecture/ARCHITECTURE.md) for
> how the page is built. This file holds the rules; those hold the context.

## Project Overview
Single-page teaser/landing site for **MyBodyPrism**, a product of **Bolthouse Labs, Inc.** The site is a dark, cinematic, scroll-driven experience designed to build anticipation before product launch. It tells the founder's personal story (cardiac sarcoidosis diagnosed in 2013) and reveals what MyBodyPrism does through a visual "before/after" narrative arc.

## Tech Stack
- **Pure static site**: Single `index.html` file. No frameworks, no build tools, no dependencies.
- **Fonts**: Google Fonts — Playfair Display (display/headings), Outfit (body/UI)
- **Hosting**: GitHub Pages, deployed from `master` branch. Repo: `bolthouse1/mybodyprism-com` (public).
- **Canonical domain**: `https://mybodyprism.com` (apex), pinned by the `CNAME` file at the repo root. DNS on **Amazon Route 53**, and **since 2026-08-26 it lives in the PROD account's zone `Z051879839JNW03XWQBFO`** — the nameservers were deliberately moved off the old dev zone (`Z0545962NVEE3GCX2GT4`, account `mbp-dev`, now inert) for the v1.1 launch; do NOT "fix" that back. Apex A records → GitHub Pages IPs and `www` CNAME → `bolthouse1.github.io` were restored into the prod zone the same day (the move briefly took this site dark). The old dev-zone SES records (SPF/DMARC/DKIM) are gone; the launch deploy recreates prod ones. **At launch (W4.3) the apex/www records get repointed to Netlify and this teaser is superseded** — coordinate via `C:\Projects_MedViz\Launch-Manager`.
- **Corporate domain**: `bolthouselabs.com` is **not** served from this repo. The GoDaddy 301-forwarding arrangement was abandoned 2026-05-17; the domain is now served by GitHub Pages from the separate `bolthouselabs-com` repo. (Recorded in `STATUS.md`; not verifiable from inside this repo.)
- **SSL**: Auto-provisioned by GitHub Pages.
- **Email capture**: Formspree (form ID: `xykbbnql`). Free tier, 50 submissions/month.

## Brand Identity
- **Company**: Bolthouse Labs, Inc.
- **Product**: MyBodyPrism — "See Yourself Like Never Before"
- **Color palette**: Dark backgrounds (#050508, #08080d), cyan accent (#00d4ff), warm accent (#ff6b4a for highlights), muted text (#8a8790, #4a4850)
- **Tone**: Premium, clinical, cinematic. Not playful, not corporate. Think medical technology meets movie trailer.
- **Logo / brand mark**: The hero renders `logo-mark-t.png` (the BodyPrism prism-mark) as an image. There is **no fixed top bar and no wordmark element** — the fixed top-bar logo was removed in the 2026-06-21 redesign. Bolthouse Labs appears ONLY in the footer copyright line; nowhere else in the site copy.

## Product Model (Critical Context — updated 2026-08-26, owner-directed)
MyBodyPrism is NOT a concierge/mail-in service. It is self-service, and **v1.1
(launching 2026-10-01) ships the desktop app ONLY**:
1. **Desktop app** — User installs locally, loads their own DICOM files (from their own CD, downloaded files, etc.). All imaging data stays on the user's machine — no uploads, no cloud. Free, non-expiring license, one per machine.
2. **Cloud streaming viewer + VR streaming** — ROADMAP (v1.2+, gated on AWS GPU quota + CloudFront verification), NOT shipped. The page copy must NOT claim streaming, browser viewing, VR, HIPAA-compliant cloud, or end-to-end encryption until those services actually exist. (Overselling copy corrected 2026-08-26 by the Launch-Manager session at the owner's direction.)

If/when streaming copy returns: do NOT mention which cloud provider (AWS/Azure) and do NOT mention that the user pays for streaming costs. Until then the trust strip sells the local-first story: "Runs entirely on your computer · No uploads, no cloud · Your data stays yours."

## Page Structure (Narrative Arc)
Single vertical scroll, 10 sections + footer, in this document order. Verify against `index.html` before trusting any prose about structure — this section has fallen out of date before.

1. **HERO** — Full viewport. Particle canvas. `logo-mark-t.png`, "What if you could truly see inside your own body?" + "MyBodyPrism · Coming soon" + scroll cue.
2. **INTRODUCING MYBODYPRISM** — Product intro directly under the hero. Desktop app in one sentence, local-first ("on your own machine, where your data stays") — no streaming/VR claims. Picture2 in app-window chrome.
3. **THE DIAGNOSIS** — "2013" eyebrow, "I was diagnosed with cardiac sarcoidosis." Picture1 (traditional DICOM 4-pane viewer).
4. **EMOTIONAL PIVOT** — Italic quote: *"I couldn't understand my own disease."* Cyan accent line.
5. **THE REVEAL** — "So I built something better." Picture4 (heart with PET + scar heatmap) in app-window chrome.
6. **MULTI-YEAR PROGRESSION** — "2013 → 2025" eyebrow. Picture3 (2013/2018/2023/2025 PET-CT comparison).
7. **SEE EVERY DETAIL** — Picture5 (CT bone-window revealing ICD, lead, sternal wires) in app-window chrome.
8. **HIGHLIGHT YOUR DATA** — Custom markup tools. Picture6 (ICD lead traced).
9. **TRUST STRIP** — Three badges: Runs entirely on your computer · No uploads, no cloud · Your data stays yours.
10. **WAITLIST** — "Be the first to see yourself like never before." Email form (Formspree).

Footer: `© 2026 Bolthouse Labs, Inc.` (the only Bolthouse mention on the page).

There is no "HOW IT WORKS" section — it was removed 2026-05-10 along with its CSS.

## Content Inventory
All six placeholder slots are filled with real PNG assets at the repo root. Most are low native resolution (~258–600px wide); if any look soft on large screens, swap in higher-res exports of the same view from MyBodyPrism.

| File | Section | What it shows |
|---|---|---|
| `Picture1.png` | THE DIAGNOSIS | Traditional 4-pane DICOM viewer; one panel literally labeled "No 3D" |
| `Picture2.png` | INTRODUCING MYBODYPRISM | Founder's CT-PET data across multiple synchronized views inside MyBodyPrism |
| `Picture3.png` | MULTI-YEAR PROGRESSION | Cardiac PET-CT comparison across 2013 / 2018 / 2023 / 2025 |
| `Picture4.png` | THE REVEAL | Isolated 3D heart with PET volume overlay and scar-tissue heatmap |
| `Picture5.png` | SEE EVERY DETAIL | Volumetric CT tuned to bone/metal density — ICD pulse generator, lead, sternal wires |
| `Picture6.png` | HIGHLIGHT YOUR DATA | Annotation/markup tool tracing ICD lead through three views |

Other root images: `logo-mark-t.png` (hero), `logo.png` (referenced by the Open Graph preview tag), `logo-t.png` and `Icon/Body Prism.png` (source art, not referenced by the page).

When replacing or swapping media, keep dark/black backgrounds to blend with the site, and use `<img>` (or `<video autoplay muted loop playsinline>` for motion).

## CSS Architecture
- All styling is in a single `<style>` block in the HTML file
- CSS custom properties (variables) defined in `:root` for all colors
- Scroll-reveal animations via `.reveal` class + IntersectionObserver
- Staggered delays via `.reveal-delay-1` through `.reveal-delay-3`
- Responsive breakpoint at 768px (mobile)
- Hero particle effect is a `<canvas>` element with vanilla JS animation
- Respects `prefers-reduced-motion`

## JavaScript
All JS is at the bottom of `index.html` as IIFEs (no globals):
- **Particle canvas**: Animated network/node effect on hero (skipped when reduced-motion is set)
- **Scroll reveal**: IntersectionObserver adds `.visible` to `.reveal` elements as they enter viewport
- **Scroll cue fade**: Adds `.faded` to the scroll indicator after the user scrolls past ~80px
- **Waitlist form**: Posts to Formspree via `fetch`, swaps form for success message on 200. A failed request logs to the console and leaves the form visible — there is no visible error state.

## Design Rules
- NO navigation menu, hamburger, or header links. Single page, scroll only.
- NO footer links beyond copyright. This is a teaser, not a full site.
- Minimal text. Let visuals do the heavy lifting.
- All media should have dark/black backgrounds to blend with the site.
- Animations should be smooth and subtle — cinematic, not flashy.
- Mobile-first responsive. Everything must work on phones.

## Deployment Notes
- Push to `master` → GitHub Pages auto-deploys (1-2 min). The `CNAME` file at repo root pins the custom domain to `mybodyprism.com`. There is no staging environment and no CI check.
- GitHub repo: `https://github.com/bolthouse1/mybodyprism-com`
- Smoke test URL: `https://bolthouse1.github.io/mybodyprism-com/`
- **Live URL**: `https://mybodyprism.com`
- DNS for mybodyprism.com (Route 53, **prod-account zone `Z051879839JNW03XWQBFO`** since the 2026-08-26 NS move): apex `A` records → 185.199.108.153, .109.153, .110.153, .111.153; `www` `CNAME` → `bolthouse1.github.io` (both restored 2026-08-26, TTL 300). SES email records will be created in this zone by the prod deploy — leave whatever it creates intact. The old dev zone `Z0545962NVEE3GCX2GT4` no longer serves this domain.
- Email capture: Formspree form ID `xykbbnql` (50 submissions/month free tier).
- Rollback is `git revert` plus a push — same 1-2 minute path.

## Future Additions (Not Yet)
- Higher-resolution exports of the six photos (current ones are small native res; some softening when scaled up on large screens)
- Possible motion: replace a still with a slow-rotation video on THE REVEAL or SEE EVERY DETAIL section
- Possible WebGL 3D viewer embedded directly on the page
- Possible second page for more detailed product info post-launch
- Analytics (privacy-respecting — Plausible, Fathom, or Cloudflare Web Analytics)

## Repo Conventions
- `docs/superpowers/` holds the archived 2026-04 deploy plan and design spec. They target the old `www.bolthouselabs.com` domain and are kept as historical records — do not "fix" them.
- `STATUS.md` is machine-written by the portfolio review; edits here can be overwritten.
- `.claude/` and `.superpowers/` are gitignored local session state and are never published.
- Durable context lives in `docs/` — architecture, product, roadmap, decisions, engineering handbook, and the evidence ledger behind them.
