# CLAUDE.md — MyBodyPrism Website

> New session? Read [`START_HERE.md`](START_HERE.md) for the cold-start reading
> order, [`PROJECT_STATE.md`](PROJECT_STATE.md) for where things stand, and
> [`docs/architecture/ARCHITECTURE.md`](docs/architecture/ARCHITECTURE.md) for
> how the page is built. This file holds the rules; those hold the context.

## Project Overview
The public website for **MyBodyPrism**, a product of **Bolthouse Labs, Inc.** — dark,
cinematic, and built around the founder's personal story (cardiac sarcoidosis diagnosed in
2013), told through a visual "before/after" narrative arc on the homepage.

**This repo was a single-page "coming soon" teaser until 2026-08-26**, when owner decision
moved v1.1 launch-site ownership here and the Astro marketing/portal site was migrated in
from `AWS-HIPPA/web/`. It is now the full product site: homepage, download flow, support,
system requirements, account portal, and eight legal pages. Prose elsewhere that still
calls this "the teaser" predates that migration.

## Tech Stack
- **Astro 6 static site** (`npm ci && npm run build` → `dist/`). Migrated 2026-08-26 from
  the single-file `index.html` teaser; the site source moved here from `AWS-HIPPA/web/`,
  which is now retired as a web root. `npm run dev` for local work.
- **Fonts**: Google Fonts — Playfair Display (display/headings), Outfit (body/UI)
- **Hosting**: GitHub Pages. Repo: **`bolthouse1/Website_BolthouseLabs`** (public) —
  only the *local folder* was renamed to `mybodyprism-com` in the 2026-08-03 sweep; the
  GitHub repo never was. `bolthouse1/mybodyprism-com` is a 404 (verified 2026-08-26), and
  the `origin` remote correctly points at the old name. Do not "fix" the remote.
- **Canonical domain**: `https://mybodyprism.com` (apex), pinned by the `CNAME` file, which
  now lives at **`public/CNAME`** so Astro copies it into `dist/`. If it ever stops landing
  in the build output, GitHub Pages unbinds the custom domain on deploy and the site goes
  dark — the deploy workflow fails the build on that condition rather than shipping it. DNS on **Amazon Route 53**, and **since 2026-08-26 it lives in the PROD account's zone `Z051879839JNW03XWQBFO`** — the nameservers were deliberately moved off the old dev zone (`Z0545962NVEE3GCX2GT4`, account `mbp-dev`, now inert) for the v1.1 launch; do NOT "fix" that back. Apex A records → GitHub Pages IPs and `www` CNAME → `bolthouse1.github.io` were restored into the prod zone the same day (the move briefly took this site dark). The old dev-zone SES records (SPF/DMARC/DKIM) are gone; the launch deploy recreates prod ones. **There is no DNS change at launch.** The 2026-08-24 plan to repoint apex/www to Netlify was overridden by owner decision on 2026-08-26: the launch site is served from *this* repo on the same GitHub Pages host, so W4.3 is a Pages-source switch, not a DNS cutover. Coordinate via `C:\Projects_MedViz\Launch-Manager`.
- **`www` → apex 301 is load-bearing.** GitHub Pages issues it automatically because `CNAME`
  holds the apex (verified live 2026-08-26: `301` → `https://mybodyprism.com/`). The download
  form's API is CORS-restricted; `ALLOWED_ORIGINS_PROD` in `AWS-HIPPA/infra/stacks/license_api.py`
  lists both apex and `www` as defence in depth, but the redirect is what keeps visitors on the
  canonical origin. Any hosting move, `CNAME` change, or `www`-specific record could break the
  download button for `www` visitors with **no server-side trace** — the browser blocks the
  fetch before it leaves. Re-test the redirect after any such change.
- **Corporate domain**: `bolthouselabs.com` is **not** served from this repo. The GoDaddy 301-forwarding arrangement was abandoned 2026-05-17; the domain is now served by GitHub Pages from the separate `bolthouselabs-com` repo. (Recorded in `STATUS.md`; not verifiable from inside this repo.)
- **SSL**: Auto-provisioned by GitHub Pages.
- **Email capture**: the download form posts to the licence API (`PUBLIC_API_BASE`), not to
  Formspree. The old teaser waitlist (Formspree `xykbbnql`) is no longer wired to any page.

## Brand Identity
- **Company**: Bolthouse Labs, Inc.
- **Product**: MyBodyPrism — "See Yourself Like Never Before"
- **Color palette**: Dark backgrounds (#050508, #08080d), cyan accent (#00d4ff), warm accent (#ff6b4a for highlights), muted text (#8a8790, #4a4850)
- **Tone**: Premium, clinical, cinematic. Not playful, not corporate. Think medical technology meets movie trailer.
- **Logo / brand mark**: `logo-mark-t.png` (the BodyPrism prism-mark) renders large in the
  homepage hero and small in the sticky site header next to the "MyBodyPrism" wordmark.
  (The 2026-06-21 redesign had removed the fixed top bar; the 2026-08-26 migration brought a
  header back, because a multi-page site needs navigation. The *hero* still has no chrome
  above it on mobile, where the header is not sticky.) Bolthouse Labs appears ONLY in the
  footer copyright line; nowhere else in the site copy.

## Product Model (Critical Context — updated 2026-08-26, owner-directed)
MyBodyPrism is NOT a concierge/mail-in service. It is self-service, and **v1.1
(launching 2026-10-01) ships the desktop app ONLY**:
1. **Desktop app** — User installs locally, loads their own DICOM files (from their own CD, downloaded files, etc.). All imaging data stays on the user's machine — no uploads, no cloud. **Free BETA licence, one per machine, ending July 1, 2027** (owner decision 2026-09-02; canonical terms in the desktop repo's `legal/eula.md` §3.1 and `legal/terms-of-service.md` §4.1).

   **The licence is free, but it is NOT non-expiring.** This section said "Free,
   non-expiring license" until 2026-09-02, and the site said "no time limit" — both
   were made false by the beta decision and both are now corrected. Do not describe
   the licence as unlimited, perpetual, forever, or without a time limit. Say
   *free beta*, and give the date.
2. **Cloud streaming viewer + VR streaming** — ROADMAP (v1.2+, gated on AWS GPU quota + CloudFront verification), NOT shipped. The page copy must NOT claim streaming, browser viewing, VR, HIPAA-compliant cloud, or end-to-end encryption until those services actually exist. (Overselling copy corrected 2026-08-26 by the Launch-Manager session at the owner's direction.)

If/when streaming copy returns: do NOT mention which cloud provider (AWS/Azure) and do NOT mention that the user pays for streaming costs. Until then the trust strip sells the local-first story: "Runs entirely on your computer · No uploads, no cloud · Your data stays yours."

## Site Structure
Astro pages under `src/pages/`, all wrapped by `src/layouts/Default.astro` (header, nav,
footer, global palette). `astro.config.mjs` sets `build.format: "file"`, so routes emit as
`pricing.html` and GitHub Pages serves them at `/pricing`.

| Route | Source | Purpose |
|---|---|---|
| `/` | `index.astro` | Launch homepage — the teaser's narrative arc + download CTA |
| `/pricing` | `pricing.astro` | **The real download flow.** Email → `POST {PUBLIC_API_BASE}/downloads/trial-installer` → redirect to a 5-minute presigned S3 URL |
| `/support` | `support.astro` | Contact + FAQ |
| `/system-requirements` | `system-requirements.astro` | Hardware/OS table |
| `/account` | `account.astro` | Licence portal; reads `?token=` or `localStorage` |
| `/legal/*` | `legal/*.md` (8 files) | EULA, ToS, privacy, disclaimer, HIPAA, cookies, refunds, open-source notices |
| `/404`, `/500` | `404.astro`, `500.astro` | Error pages (Pages serves `404.html` automatically) |

`thank-you.astro` was **deleted** in the 2026-08-26 migration: nothing linked to it, and it
told users to "check your email for your download link" when the free flow never sends one
(the download is a direct presigned redirect; the lead notification is SNS, internal-only).

### The launch switch: `PUBLIC_DOWNLOADS_LIVE`
Defined once in `src/site-config.ts`. **Defaults to `false`.** While false, the whole site
publishes but the download flow is replaced by waitlist capture:

| | `false` (now) | `true` (at launch) |
|---|---|---|
| `/pricing` form | Waitlist → Formspree | Download → `POST {API_BASE}/downloads/trial-installer` |
| Homepage CTAs | "Join the waitlist" | "Download free" |
| Homepage "How it works" | Owner-directed copy **unchanged**, plus an additive "Not available to download yet" notice | Owner-directed copy, no notice |

**To go live:** set repository variable `PUBLIC_DOWNLOADS_LIVE` to `true`
(Settings → Secrets and variables → Actions → Variables) and re-run the deploy workflow.
It is a *build-time* flag baked into the static output, so it needs the rebuild — no code
change.

**Do not flip it before tracker step W4.1 completes.** Two separate failures wait behind it:
before W2.3 `api.mybodyprism.com` is NXDOMAIN, and between W2.3 and W4.1 the download
endpoint returns `404 NO_RELEASE` *and silently drops the lead* — the `release_pointers`
lookup runs before `_record_lead`, and prod's table starts empty. So an early flip loses
signups with no trace. Pre-launch capture must stay client-side (Formspree) until W4.1.

Interest capture deliberately uses Formspree rather than the team-controlled
`trial_leads`/SNS path, because that path sits behind the same missing API host. Retire the
Formspree endpoint once the flag is `true`; it should not outlive the launch.

### The `legal/*.md` pages are MIRRORS — not the source of truth
Canonical legal text lives in the **desktop repo** at
`C:\Projects_MedViz\SomaViz_Desktop_Volume_Viewer\legal\` (canonical since 2026-07-08):
`eula.md`, `terms-of-service.md`, `privacy-policy.md`, `disclaimer.md`. Whoever owns this
site inherits the **re-sync duty**: when canonical text changes, update the mirror here.
The mirrors are not byte-identical — each wraps the canonical body in Astro frontmatter,
a `<div class="container narrow">`, a "Pre-launch draft pending lawyer review" banner, and
a `<style>` block, so re-sync means porting the *body*, not copying the file. Note only 4
of the 8 have a canonical upstream; `cookies`, `hipaa`, `refunds`, and `copyright`
originate here.

## Homepage Narrative Arc
Single vertical scroll on `/`, in this document order. Verify against `src/pages/index.astro`
before trusting any prose about structure — this section has fallen out of date before.

1. **HERO** — Full viewport. Particle canvas. `logo-mark-t.png`, "What if you could truly see inside your own body?" + download/requirements CTAs + scroll cue.
2. **INTRODUCING MYBODYPRISM** — Product intro directly under the hero. Desktop app in one sentence, local-first ("on your own machine, where your data stays") — no streaming/VR claims. Picture2 in app-window chrome.
3. **THE DIAGNOSIS** — "2013" eyebrow, "I was diagnosed with cardiac sarcoidosis." Picture1 (traditional DICOM 4-pane viewer).
4. **EMOTIONAL PIVOT** — Italic quote: *"I couldn't understand my own disease."* Cyan accent line.
5. **WHY THIS EXISTS** — Founder prose, carried across verbatim from the pre-migration marketing homepage. **Do not paraphrase**: the medical specifics are the owner's own history.
6. **THE REVEAL** — "So I built something better." Picture4 (heart with PET + scar heatmap) in app-window chrome.
7. **MULTI-YEAR PROGRESSION** — "2013 → 2025" eyebrow. Picture3 (2013/2018/2023/2025 PET-CT comparison).
8. **SEE EVERY DETAIL** — Picture5 (CT bone-window revealing ICD, lead, sternal wires) in app-window chrome.
9. **HIGHLIGHT YOUR DATA** — Custom markup tools. Picture6 (ICD lead traced).
10. **HOW IT WORKS** — Two numbered steps. Step 1's wording is owner-directed (2026-08-26) and legally-adjacent — **do not "correct" it**.
11. **TRUST STRIP** — Three badges: Runs entirely on your computer · No uploads, no cloud · Your data stays yours.
12. **FINAL CTA** — "See yourself like never before." Download + support buttons.

Footer (in the layout, on every page): `© <year> Bolthouse Labs, Inc.` — the only Bolthouse
mention in the site copy — plus the medical disclaimer and the legal-page nav.

The pre-launch **waitlist form (Formspree `xykbbnql`) was removed** from the homepage in the
2026-08-26 migration; the CTA now points at the download flow on `/pricing`. Submissions
already collected live in the Formspree dashboard, not in the page, so removing the form
does not destroy them.

## Content Inventory
All six slots are filled with real PNG assets, which now live in **`public/`** (Astro copies
`public/` verbatim into `dist/`, so they are referenced with a leading slash: `/Picture1.png`).
The homepage pulls ~7 MB of PNG, and they are `loading="lazy"` below the fold.

**The long-standing "low native resolution (~258–600px wide)" claim is false** — measured from
the PNG headers on 2026-08-30: Picture1 4106×2149, Picture5 1604×978, Picture6 1006×555,
Picture3 985×433, Picture2 949×539, Picture4 918×476. The problem is **compression, not
resolution**: Picture5 is 2.4 MB for 1604×978, Picture1 1.9 MB. So the fix is to re-encode
(WebP, or PNG quantisation) — re-exporting at *higher* resolution would make page weight worse.
Do not re-open this as a "get better exports" task; it is an encoding task, and it needs no new
source material.

| File | Section | What it shows |
|---|---|---|
| `Picture1.png` | THE DIAGNOSIS | Traditional 4-pane DICOM viewer; one panel literally labeled "No 3D" |
| `Picture2.png` | INTRODUCING MYBODYPRISM | Founder's CT-PET data across multiple synchronized views inside MyBodyPrism |
| `Picture3.png` | MULTI-YEAR PROGRESSION | Cardiac PET-CT comparison across 2013 / 2018 / 2023 / 2025 |
| `Picture4.png` | THE REVEAL | Isolated 3D heart with PET volume overlay and scar-tissue heatmap |
| `Picture5.png` | SEE EVERY DETAIL | Volumetric CT tuned to bone/metal density — ICD pulse generator, lead, sternal wires |
| `Picture6.png` | HIGHLIGHT YOUR DATA | Annotation/markup tool tracing ICD lead through three views |

Other images in `public/`: `logo-mark-t.png` (hero + header brand mark), `logo.png` (the
Open Graph preview image), `logo-t.png` and `Icon/Body Prism.png` (source art, not referenced
by any page — they are published but unused, ~880 KB).

When replacing or swapping media, keep dark/black backgrounds to blend with the site, and use `<img>` (or `<video autoplay muted loop playsinline>` for motion).

## CSS Architecture
- **The palette lives in one place**: the `:root` block of `src/layouts/Default.astro`, as
  `--c-*` custom properties. Every page inherits it. **Do not hardcode colours in a page** —
  add or reuse a token instead, or the page will break the next time the theme moves.
- Page-level `<style>` blocks are Astro-scoped (a `data-astro-cid-*` attribute is added to
  each selector). To reach an element outside the component — e.g. a class on `<html>` —
  wrap it in `:global(...)`, or the scoping will silently make the rule never match.
- Scroll-reveal via `.reveal` + IntersectionObserver, staggered by `.reveal-delay-1..3`.
  The `opacity: 0` start state is gated behind `:global(.js-reveal)`, a class an inline
  script adds to `<html>`. **Keep that gate**: without it, the whole page renders blank when
  JS is unavailable.
- Responsive breakpoint at 768px (mobile). Respects `prefers-reduced-motion`.
- Markdown legal pages have no page component, so their prose is styled by the `main …`
  rules in the layout's global block.

## JavaScript
No framework and no client bundle — plain `<script is:inline>` IIFEs (no globals):
- **Particle canvas** (homepage): animated network/node effect on hero; returns early when
  reduced-motion is set.
- **Scroll reveal** (homepage): IntersectionObserver adds `.visible`; falls back to revealing
  everything if IntersectionObserver is missing.
- **Scroll cue fade** (homepage): adds `.faded` after ~80px of scroll.
- **Download form** (`/pricing`): POSTs the email to `{PUBLIC_API_BASE}/downloads/trial-installer`,
  then sets `location.href` to the returned presigned URL. Failure shows the `#mbp-trial-error`
  message. Note this is the *only* visible failure path — a DNS/CORS failure looks identical
  to a bad email address.
- **Cookie banner** (`CookieBanner.astro`): default-decline consent stored in `localStorage`;
  analytics must check `window.__mbpConsent === "accepted"` before firing.

## Design Rules
- Header nav is Pricing / Support / Requirements / Account. Footer carries the legal links
  and the medical disclaimer. (The old "no nav, no footer links" teaser rules ended with the
  2026-08-26 migration — this is a full site now.)
- Minimal text. Let visuals do the heavy lifting.
- All media should have dark/black backgrounds to blend with the site.
- Animations should be smooth and subtle — cinematic, not flashy.
- Mobile-first responsive. Everything must work on phones.

## Deployment Notes
- **Build + deploy runs in GitHub Actions** (`.github/workflows/deploy.yml`): `npm ci`,
  `npm run build` with `PUBLIC_API_BASE` and `PUBLIC_DOWNLOADS_LIVE`, a `dist/CNAME` guard,
  then `actions/deploy-pages`. Both env values come from repo variables of the same name, so
  neither the API host nor the launch switch needs a code change — see **The launch switch**.
- **The Pages source must be set to "GitHub Actions"** (Settings → Pages → Build and
  deployment → Source) for that workflow to publish. Until it is, the repo still serves the
  old "deploy from `master` branch root" way. These two must change together: deleting the
  root `index.html` while the source is still "branch" takes the site down, and switching the
  source before a successful Actions run leaves nothing to serve.
- There is no staging environment. `npm run build` locally is the only pre-flight.
- GitHub repo: `https://github.com/bolthouse1/Website_BolthouseLabs`
- Smoke test URL: `https://bolthouse1.github.io/Website_BolthouseLabs/` (301s to the apex)
- **Live URL**: `https://mybodyprism.com`
- DNS for mybodyprism.com (Route 53, **prod-account zone `Z051879839JNW03XWQBFO`** since the 2026-08-26 NS move): apex `A` records → 185.199.108.153, .109.153, .110.153, .111.153; `www` `CNAME` → `bolthouse1.github.io` (both restored 2026-08-26, TTL 300). SES email records will be created in this zone by the prod deploy — leave whatever it creates intact. The old dev zone `Z0545962NVEE3GCX2GT4` no longer serves this domain.
- Email capture: Formspree form ID `xykbbnql` (50 submissions/month free tier). No longer
  referenced by the site after the 2026-08-26 migration; the dashboard still holds every
  submission the teaser collected.
- Rollback is `git revert` plus a push, then wait for the Actions run (~1-2 min).

## Future Additions (Not Yet)
- Re-encode the six photos to cut page weight (~7 MB of PNG). They are **not** low-resolution
  — see Content Inventory — so this is WebP/quantisation work on the files already here, not a
  request for new exports.
- Possible motion: replace a still with a slow-rotation video on THE REVEAL or SEE EVERY DETAIL section
- Possible WebGL 3D viewer embedded directly on the page
- Possible second page for more detailed product info post-launch
- Analytics (privacy-respecting — Plausible, Fathom, or Cloudflare Web Analytics)

## Repo Conventions
- `docs/superpowers/` holds the archived 2026-04 deploy plan and design spec. They target the old `www.bolthouselabs.com` domain and are kept as historical records — do not "fix" them.
- `STATUS.md` is machine-written by the portfolio review; edits here can be overwritten.
- `.claude/` and `.superpowers/` are gitignored local session state and are never published.
- Durable context lives in `docs/` — architecture, product, roadmap, decisions, engineering handbook, and the evidence ledger behind them. **Written before the 2026-08-26 Astro migration**, so anything in there describing a single-file `index.html` is history, not current design.
- `node_modules/`, `dist/`, and `.astro/` are gitignored build artifacts — never commit them.
- `public/` is copied verbatim into `dist/`. Anything dropped there is published, including
  `public/CNAME`, which is what pins the custom domain.
