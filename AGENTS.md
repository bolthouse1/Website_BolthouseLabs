# AGENTS.md — MyBodyPrism website (mybodyprism-com)

The portfolio's shared rulebook (C:\Projects_MedViz\CLAUDE.md, "The shared rulebook") binds this repository and is not repeated here. This file holds only what is specific to mybodyprism-com.

This is the governing rules file for the site. The owner-authored brand, copy and
deployment rules that lived in `CLAUDE.md` until 2026-09-29 are below, from "Tech Stack"
on, unchanged except that past-session history moved to
`docs/history/2026-09-29-claude-md-history.md`. `CLAUDE.md` imports this file.

## Project identity

`mybodyprism-com` is the public website for **MyBodyPrism**, a Bolthouse Labs,
Inc. product — dark, cinematic, and built around the founder's personal story (cardiac
sarcoidosis diagnosed in 2013), told through a visual "before/after" narrative arc on the
homepage. It is an **Astro 6 static site** — pages in [`src/pages/`](src/pages),
one shared layout in [`src/layouts/Default.astro`](src/layouts/Default.astro) —
built with `npm ci && npm run build` and published to GitHub Pages at the domain
pinned in [`public/CNAME`](public/CNAME).

**This repo was a single-page "coming soon" teaser until 2026-08-26**, when owner decision
moved v1.1 launch-site ownership here and the Astro marketing/portal site was migrated in
from `AWS-HIPPA/web/`. It is now the full product site: homepage, download flow, support,
system requirements, account portal, and eight legal pages. Prose elsewhere that still
calls this "the teaser", or describes "one file, no build step", predates that migration.

## Operating rules

**Copy and brand are constrained.** Before writing or editing any visible text, read
Brand Identity, Product Model and Design Rules below; treat them as constraints. The
copy also never claims AI processing: v1.1 has none.

**Some copy is owner-directed and must not be reworded.** The `/pricing` lede,
the homepage "How it works" steps, the founder prose, and the support "Does it
cost anything?" answer are legally-adjacent and were dictated. (The "Is it really
free?" FAQ was deleted by the owner's 2026-09-16 copy pass.) If they read wrong in a given state, add
a separate notice alongside them — as the gated pre-launch notices do — rather
than editing the sentence.

**The Vault page's privacy paragraph is a ceiling, not a starting point.** `/vault` carries
the owner's approved wording, verified 2026-10-05: "Your scans and records never leave your
computer. The only thing that ever goes out is a one-time licence check, which carries no
health data." Reproduce it **verbatim** and never widen it — and note the licence check
belongs to the **viewer**: Vault Local itself makes no outbound call at all. A bare "no phone
home" is explicitly **not** approved, because the viewer's activation call would contradict it.

**PrismEducate's page names organs, never counts them.** What its public build may ship is
decided by licences and by the owner's share-alike rulings, so a number goes stale and a name
does not. The source of truth is that repository's own generated report
(`docs/evidence/*-public-build-contents.md`), never a hand-kept list here, and the
`/attributions` page must mirror what its app's attributions screen reports — including its
"no author citation has been recorded" marker. Never hand-write a citation.

**`src/pages/legal/*.md` are mirrors, not source** (see "The `legal/*.md` pages are
MIRRORS" below). A fix to canonical text is made upstream first, in the desktop repo,
whose `release/v1.1` branch no session commits to without the owner's word; then the
mirror here is re-synced.

**Structure is easy to get wrong.** The site has been restructured more than once
and prose has trailed the markup every time. Read the actual file in `src/pages/`
before making any structural statement.

**Deployment is gated, in two independent ways** (Deployment Notes and "The launch
switch", below):

- The Pages source is "GitHub Actions" (switched 2026-08-29, `c6724ce`); keep it
  so. Every push to `master` runs the deploy workflow and publishes the live site.
- `PUBLIC_DOWNLOADS_LIVE` gates the download flow. Do not flip it before tracker
  step W4.1 — an early flip silently drops signups.

**Treat these as read-only unless the task is explicitly about them:**
[`public/CNAME`](public/CNAME) (if it stops reaching `dist/`, the custom domain
unbinds and the site goes dark), and the six `public/Picture*.webp` files and their
filenames.

**Verification is manual.** There is no test suite. `npm run build` is the only
automated check and it catches syntax, not sense. Build in **both** flag states
(`PUBLIC_DOWNLOADS_LIVE` unset, then `=true`) when touching anything gated, then
open `dist/` and confirm: the reveal animations fire, the layout holds at ~375px,
the fonts load, and `dist/CNAME` is present. Respect `prefers-reduced-motion`
when touching animation code — and keep the `.js-reveal` gate, without which the
page renders blank with JS disabled.

## Current work

Read [`PROJECT_STATE.md`](PROJECT_STATE.md) for the live snapshot and open
questions. **The site is live and nothing is pending** — the migration, the
free-viewer copy, the legal mirrors and the WebP imagery all shipped by 2026-09-02.

The one remaining action is **W4.4**, the `PUBLIC_DOWNLOADS_LIVE` flip, and it is
**not yours to perform**: it needs W4.1 evidence recorded by Launch-Manager *and*
the owner's in-the-moment word, never a relay. If you are verifying its state, read
the proof-of-flip table in `PROJECT_STATE.md` first — a bare `grep mbp-trial-form`
returns hits on a correctly-gated page and will tell you the flag is on when it is
off.

Deeper context: [`docs/`](docs) — but note the whole set predates the 2026-08-26
migration, so verify any claim against `src/` before relying on it.

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
- **Email capture**: two paths, switched by `PUBLIC_DOWNLOADS_LIVE`. While it is false (today),
  `/pricing` takes **waitlist** signups via Formspree form `xykbbnql` — verified live 2026-09-12.
  Once it flips, the download form posts to the licence API (`PUBLIC_API_BASE`) and Formspree
  retires. **Feedback** is a separate `mailto:support@mybodyprism.com`, never the waitlist
  form.

## Brand Identity
- **Company**: Bolthouse Labs, Inc.
- **Product**: MyBodyPrism — "See Yourself Like Never Before"
- **Color palette**: Dark backgrounds (#050508, #08080d), cyan accent (#00d4ff), warm accent (#ff6b4a for highlights), muted text (#8a8790, #4a4850)
- **Tone**: Premium, clinical, cinematic. Not playful, not corporate. Think medical technology meets movie trailer.
- **Logo / brand mark**: `logo-mark-t.webp` (the BodyPrism prism-mark) renders large in the
  homepage hero and small in the sticky site header next to the "MyBodyPrism" wordmark.
  The *hero* has no chrome above it on mobile, where the header is not sticky. Bolthouse
  Labs appears ONLY in the footer copyright line; nowhere else in the site copy.

## Product Model (Critical Context — updated 2026-09-21, owner-directed)
MyBodyPrism is NOT a concierge/mail-in service. It is self-service. **Three products ship on
2027-01-01** (owner decision 2026-10-05), all free: the **Desktop Viewer**, **Vault Local**
(PrismVault, bundled inside the viewer's installer — not a separate download, and not the
viewer's own sealed cloud-sync Vault tab), and **PrismEducate** (a standalone educational
atlas, its own installer). The launch date moved from 2026-10-01 by owner decision 2026-09-21.
1. **Desktop app** — User installs locally, loads their own DICOM files (from their own CD, downloaded files, etc.). All imaging data stays on the user's machine — no uploads, no cloud. **Free licence, one per computer, on each computer the user owns or controls — with no fixed end date** (owner decision 2026-09-26/27; it was a beta ending January 1, 2028). Canonical terms: the desktop repo's `legal/eula.md` §3.1 and `legal/terms-of-service.md` §4.1. The EULA/ToS mirrors here carry that text since the `9a395e2c` re-sync. **A switch to a paid subscription is reserved on 30 days' notice, and that reservation is stated only in the EULA** — never in page copy.

   **The licence is free, and it has no fixed end date — but never say "forever".** Do not
   write "free forever", "permanently free" or "stays free" (avoid-list, owner 2026-09-26),
   and do not call it unlimited or perpetual. Say *free*. The word *beta* is dropped
   everywhere: legal, app, website and email.

   **No payment, subscription or "paid features later" wording on any page.** Owner decision
   2026-09-16 (Launch-Manager `DISPATCH-2026-09-16-website-copy.md`, decision 1), carried
   forward by the 2026-09-27 pass, which also removed the licence end date from the legal
   mirrors: canonical now states no fixed end date.
2. **Cloud streaming viewer + VR streaming** — ROADMAP (v1.2+, gated on AWS GPU quota + CloudFront verification), NOT shipped. The page copy must NOT claim streaming, browser viewing, VR, HIPAA-compliant cloud, or end-to-end encryption until those services actually exist.

If/when streaming copy returns: do NOT mention which cloud provider (AWS/Azure) and do NOT mention that the user pays for streaming costs. Until then the trust strip sells the local-first story: "Runs entirely on your computer · No uploads, no cloud · Your data stays yours."

## Site Structure
Astro pages under `src/pages/`, all wrapped by `src/layouts/Default.astro` (header, nav,
footer, global palette). `astro.config.mjs` sets `build.format: "file"`, so routes emit as
`pricing.html` and GitHub Pages serves them at `/pricing`.

| Route | Source | Purpose |
|---|---|---|
| `/` | `index.astro` | Launch homepage — the teaser's narrative arc + download CTA |
| `/pricing` | `pricing.astro` | **The real download flow** for the viewer (Vault Local is inside its installer). Email → `POST {PUBLIC_API_BASE}/downloads/trial-installer` → redirect to a 5-minute presigned S3 URL |
| `/vault` | `vault.astro` | Vault Local. **Carries the owner's approved privacy sentence — see the rule below** |
| `/educate` | `educate.astro` | PrismEducate. Its own download, behind its own switch |
| `/support` | `support.astro` | Contact + FAQ |
| `/system-requirements` | `system-requirements.astro` | Hardware/OS table |
| `/account` | `account.astro` | Licence portal; reads `?token=` or `localStorage` |
| `/legal/*` | `legal/*.md` (9 files) | EULA, **Vault Local EULA**, ToS, privacy, disclaimer, HIPAA, cookies, refunds, open-source notices |
| `/404`, `/500` | `404.astro`, `500.astro` | Error pages (Pages serves `404.html` automatically) |

There is no thank-you page; the free flow sends no download email (the download is a
direct presigned redirect; the lead notification is SNS, internal-only).

### The launch switch: `PUBLIC_DOWNLOADS_LIVE`
Defined once in `src/site-config.ts`. **Defaults to `false`.** While false, the whole site
publishes but the download flow is replaced by waitlist capture:

| | `false` (now) | `true` (at launch) |
|---|---|---|
| `/pricing` form | Waitlist → Formspree | Download → `POST {API_BASE}/downloads/trial-installer` |
| Homepage CTAs | "Join the waitlist" | "Download free" |
| Homepage "How it works" | Owner-directed copy **unchanged**, plus an additive "Not available to download yet" notice | Owner-directed copy, no notice |

### PrismEducate's switch is separate: `PUBLIC_EDUCATE_DOWNLOADS_LIVE`
Also in `src/site-config.ts`, also build-time, also defaults to `false` — and deliberately
**not** the viewer's flag (owner decision 2026-10-05). The cloud's download Lambda is
hardwired to one installer: it reads `release_pointers` PK `latest` and returns that single
`installer_s3_key`, with no product parameter (`AWS-HIPPA
infra/lambdas/trial_installer_download/index.py`, read 2026-10-05). Vault Local needs nothing,
because it ships inside the viewer's installer; PrismEducate is a second installer with no
pointer and no endpoint yet. While the flag is false `/educate` takes interest signups through
the same Formspree form, tagged with a hidden `product` field. **Do not flip it until that
endpoint exists** behind `EDUCATE_INSTALLER_PATH` — an early flip shows every visitor
"Couldn't start the download."

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
Canonical legal text lives in **two** repos. The viewer's is in the **desktop repo** at
`C:\Projects_MedViz\SomaViz_Desktop_Volume_Viewer\legal\` (canonical since 2026-07-08):
`eula.md`, `terms-of-service.md`, `privacy-policy.md`, `disclaimer.md`. **Vault Local's own
EULA is canonical in `C:\Projects_MedViz\PrismVault\legal\eula.md`** and is mirrored here as
`/legal/vault-eula` (owner-approved 2026-10-05 as written, no counsel; ported from `385f4b9`
on 2026-10-06). It is a **separate contract from the viewer's** — do not merge the two pages,
and do not point Vault copy at the viewer's EULA. Its effective date is January 1, 2027, which
is canonical's own and not the viewer's August 7, 2026. Whoever owns this
site inherits the **re-sync duty**: when canonical text changes, update the mirror here.
The mirrors are not byte-identical — each wraps the canonical body in Astro frontmatter,
a `<div class="container narrow">` and a `<style>` block, so re-sync means porting the
*body*, not copying the file. Note only 4 of the 8 have a canonical upstream; `cookies`,
`hipaa`, `refunds`, and `copyright` originate here. The "Pre-launch draft pending lawyer
review" banner that used to open seven of these pages was **removed 2026-09-13 by owner
decision** — v1.1 launches without formal counsel review (decided 2026-08-24) — so do
not restore it.

## Homepage Narrative Arc
Single vertical scroll on `/`, in this document order. Verify against `src/pages/index.astro`
before trusting any prose about structure — this section has fallen out of date before.

1. **HERO** — Full viewport. Particle canvas. `logo-mark-t.webp`, "What if you could truly see inside your own body?" + download/requirements CTAs + scroll cue.
2. **INTRODUCING MYBODYPRISM** — Product intro directly under the hero. Desktop app in one sentence, local-first ("on your own machine, where your data stays") — no streaming/VR claims. Picture2 in app-window chrome.
3. **THE DIAGNOSIS** — "2013" eyebrow, "I was diagnosed with cardiac sarcoidosis." Picture1 (traditional DICOM 4-pane viewer).
4. **EMOTIONAL PIVOT** — Italic quote: *"I couldn't understand my own disease."* Cyan accent line.
5. **WHY THIS EXISTS** — Founder prose, in the owner's own words. It was carried across from the pre-migration homepage, then edited by the owner on 2026-09-16: the career line corrected to "nearly thirty years building advanced 3D visualization software for engineering", a new closing line, and the second paragraph removed. **Do not paraphrase**: the medical specifics are the owner's own history.
6. **THE REVEAL** — "So I built a better viewer." Picture4 (heart with a PET overlay shown as a color heatmap) in app-window chrome.
7. **YEARS OF SCANS, SIDE BY SIDE** — "2013 → 2025" eyebrow, heading "Years of scans, side by side", then "MyBodyPrism Comparison Mode." Picture3 (2013/2018/2023/2025 PET-CT comparison).
8. **EXPLORE IN DETAIL** — Picture5 (CT bone-window revealing ICD, lead, sternal wires) in app-window chrome.

**Sections 6–8 are FDA intended-use wording — do not restore the old headings.** Owner-approved
2026-09-12 (Launch-Manager `CLAIMS-CLEANUP.md`, rows W3–W7). "Multi-Year Progression", "See Every
Detail", "So I built something better" and "scar tissue rendered as a heatmap" were removed because,
sitting next to the founder's disease story, they read as *track your disease* — and FDA judges
intended use from labeling and marketing, not from a disclaimer alone. The founder's story itself
(sections 3–5) was kept verbatim by the same decision (W8), as were "What if you could truly see
inside your own body?" and the ICD captions (W9).
9. **HIGHLIGHT YOUR DATA** — Custom markup tools. Picture6 (ICD lead traced).
10. **HOW IT WORKS** — Two numbered steps. Their wording is owner-directed (2026-08-26, last revised by the owner 2026-09-16: step 1 now ends "it's free", step 2 explains DICOM once) and legally-adjacent — **do not "correct" it**.
11. **TRUST STRIP** — Three badges: Runs entirely on your computer · No uploads, no cloud · Your data stays yours.
11b. **THE THREE FREE PRODUCTS** — added 2026-10-06, owner-approved, because the header nav was
    the only route to Vault Local and PrismEducate and the header is not sticky on mobile. Three
    names, a line each, linking `/pricing`, `/vault` and `/educate`. **Additive by design:**
    it sits after the arc so sections 1–11, the founder's story and the FDA intended-use wording
    are untouched. It does **not** restate the Vault's approved privacy sentence — that lives on
    `/vault` and is not to be paraphrased — and it describes the atlas without counts.
12. **FINAL CTA** — "See yourself like never before." Download + support buttons.

Footer (in the layout, on every page): `© <year> Bolthouse Labs, Inc.` — the only Bolthouse
mention in the site copy — plus the medical disclaimer and the legal-page nav.

The homepage has no waitlist form; its CTA points at `/pricing`. Submissions the old
homepage form collected live in the Formspree dashboard.

## Content Inventory
All six slots are filled with real captures, served from **`public/`** as **WebP** (Astro copies
`public/` verbatim into `dist/`, so they are referenced with a leading slash: `/Picture1.webp`).
Homepage imagery totals **~0.59 MB**, `loading="lazy"` below the fold, and every `<img>` carries its
intrinsic `width`/`height` so nothing shifts as it loads. WebP q90 since 2026-09-02,
owner-reviewed; the original PNGs are recoverable from git history at `bd82b64~1`.

| File | Section | What it shows |
|---|---|---|
| `Picture1.webp` | THE DIAGNOSIS | Traditional 4-pane DICOM viewer; one panel literally labeled "No 3D" |
| `Picture2.webp` | INTRODUCING MYBODYPRISM | Founder's CT-PET data across multiple synchronized views inside MyBodyPrism |
| `Picture3.webp` | YEARS OF SCANS, SIDE BY SIDE | Cardiac PET-CT comparison across 2013 / 2018 / 2023 / 2025 |
| `Picture4.webp` | THE REVEAL | Isolated 3D heart with a PET volume overlay, shown as a color heatmap |
| `Picture5.webp` | EXPLORE IN DETAIL | Volumetric CT tuned to bone/metal density — ICD pulse generator, lead, sternal wires |
| `Picture6.webp` | HIGHLIGHT YOUR DATA | Annotation/markup tool tracing ICD lead through three views |

Other images in `public/`: `logo-mark-t.webp` (hero + header brand mark) and `logo.png` — the
Open Graph preview image, **kept as PNG on purpose**, because social scrapers handle WebP
inconsistently. Unpublished source art (`logo-t.png`, `Body Prism.png`) lives in `brand/`, which
is not deployed.

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
- Header nav is Download / Vault / PrismEducate / Support / Requirements / Account. "Download"
  points at `/pricing`, which publishes no prices (renamed 2026-10-05, owner-approved; the
  route is unchanged). Footer carries the legal links and the medical disclaimer.
- Minimal text. Let visuals do the heavy lifting.
- All media should have dark/black backgrounds to blend with the site.
- Animations should be smooth and subtle — cinematic, not flashy.
- Mobile-first responsive. Everything must work on phones.

## Deployment Notes
- **Build + deploy runs in GitHub Actions** (`.github/workflows/deploy.yml`): `npm ci`,
  `npm run build` with `PUBLIC_API_BASE` and `PUBLIC_DOWNLOADS_LIVE`, a `dist/CNAME` guard,
  then `actions/deploy-pages`. Both env values come from repo variables of the same name, so
  neither the API host nor the launch switch needs a code change — see **The launch switch**.
- **The Pages source is "GitHub Actions"** (Settings → Pages → Build and deployment →
  Source; switched together with the merge on 2026-08-29, `c6724ce`, ADR 0004). Keep it so:
  the workflow is the only thing that publishes, and every push to `master` runs it.
- There is no staging environment. `npm run build` locally is the only pre-flight.
- GitHub repo: `https://github.com/bolthouse1/Website_BolthouseLabs`
- Smoke test URL: `https://bolthouse1.github.io/Website_BolthouseLabs/` (301s to the apex)
- **Live URL**: `https://mybodyprism.com`
- DNS for mybodyprism.com (Route 53, **prod-account zone `Z051879839JNW03XWQBFO`** since the 2026-08-26 NS move): apex `A` records → 185.199.108.153, .109.153, .110.153, .111.153; `www` `CNAME` → `bolthouse1.github.io` (both restored 2026-08-26, TTL 300). SES email records will be created in this zone by the prod deploy — leave whatever it creates intact. The old dev zone `Z0545962NVEE3GCX2GT4` no longer serves this domain.
- Email capture: Formspree form ID `xykbbnql` (50 submissions/month free tier) — **live** as
  the `/pricing` waitlist while `PUBLIC_DOWNLOADS_LIVE` is false, retired at the flip. Its
  recipient was switched to `leads@mybodyprism.com` on 2026-09-02 (owner-reported; behind his
  login, not verifiable from this repo). The dashboard also holds every submission the teaser
  collected.
- Rollback is `git revert` plus a push, then wait for the Actions run (~1-2 min).

## Future Additions (Not Yet)
- Possible motion: replace a still with a slow-rotation video on THE REVEAL or SEE EVERY DETAIL section
- Possible WebGL 3D viewer embedded directly on the page
- Possible second page for more detailed product info post-launch
- Analytics (privacy-respecting — Plausible, Fathom, or Cloudflare Web Analytics)

## Repo Conventions
- `docs/superpowers/` holds the archived 2026-04 deploy plan and design spec. They target the old `www.bolthouselabs.com` domain and are kept as historical records — do not "fix" them.
- `.claude/` and `.superpowers/` are gitignored local session state and are never published.
- Durable context lives in `docs/` — architecture, product, roadmap, decisions, engineering handbook, and the evidence ledger behind them. **Written before the 2026-08-26 Astro migration**, so anything in there describing a single-file `index.html` is history, not current design.
- `node_modules/`, `dist/`, and `.astro/` are gitignored build artifacts — never commit them.
- `public/` is copied verbatim into `dist/`. Anything dropped there is published, including
  `public/CNAME`, which is what pins the custom domain.
