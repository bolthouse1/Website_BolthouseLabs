# Project state

Snapshot written 2026-08-30 from the working tree on branch `master` at commit
`c6724ce`, after a data audit that resolved every path against disk and probed
the live site.

## Status

**Live.** The v1.1 launch site is published and serving. The 2026-08-26 migration
(Astro 6 site brought in from `AWS-HIPPA/web/`, teaser folded into the homepage)
was merged and the Pages source switched to "GitHub Actions" — that cutover is
done, and `master` is the live branch.

Verified live 2026-08-30: apex `200`; `www` `301` → apex; `/pricing`, `/support`,
`/system-requirements`, `/account`, `/legal/eula` all `200`.

**Downloads are still gated.** `PUBLIC_DOWNLOADS_LIVE` is false in production —
`/pricing` reads "MyBodyPrism — coming soon" and takes waitlist signups through
Formspree. That is correct and deliberate; see **Next action**.

## What exists today

- Astro 6 static site: `src/pages/` (15 routes), `src/layouts/Default.astro`,
  `src/components/`, built with `npm ci && npm run build` → `dist/`
- `public/` holding every served asset **including `public/CNAME`**, which pins
  the custom domain
- `.github/workflows/deploy.yml` — builds and publishes via `actions/deploy-pages`,
  and hard-fails if `dist/CNAME` is ever missing
- `PUBLIC_DOWNLOADS_LIVE`, the launch switch (see `CLAUDE.md`)
- **No test suite.** Dependencies are `astro` + `@astrojs/sitemap`, dev
  `@astrojs/check` + `typescript`. No pytest/vitest/playwright/jest config and no
  test directory. `npm run build` is the only automated check that exists.

## Data dependencies: none

Audited 2026-08-30 by resolving paths on disk, not by reading docs:

- **Zero `D:\` paths anywhere in the repo.** Nothing here touches the recovered
  drive, `Test-Data-Organized`, the patient CDs, `catalog.db`, or any demo data.
- Six absolute paths exist, all `C:\Projects_MedViz\…`; five resolve. The one that
  does not is `…\mybodyprism-com\index.html`, cited in the archived 2026-04 deploy
  plan — that file was deleted in the migration, and `docs/superpowers/` is a
  historical record that CLAUDE.md says not to "fix".
- All nine assets referenced by `src/` are present in `public/`.
- `MISSING-DATA-TRACKER.xlsx` has **no row naming this project**, across all three
  sheets. Correct — there is nothing to track.

The only genuine external dependency is the **canonical legal text in the desktop
repo**, and it is a live one — see below.

## Recent movement

| Date | Change |
|---|---|
| 2026-08-30 | Data audit; legal mirror re-synced; false image-resolution claim corrected |
| 2026-08-29 | Launch site published — cutover to GitHub Actions completed (`c6724ce`) |
| 2026-08-26 | Astro site migrated in; teaser folded into homepage; downloads gated behind `PUBLIC_DOWNLOADS_LIVE`; site retheme to the dark brand |
| 2026-06-21 | Premium redesign; prism-mark hero logo |
| 2026-04-04 | Initial commit, Formspree wiring, first custom domain |

## Next action

**Deploy the privacy-policy re-sync.** The mirror was corrected in the working tree
on 2026-08-30 but the *live* page still serves the superseded text (confirmed by
fetching `https://mybodyprism.com/legal/privacy`). It ships on the next push to
`master`.

Then, at tracker step **W4.1**: set repository variable `PUBLIC_DOWNLOADS_LIVE` to
`true` and re-run the deploy workflow. Not before — until W2.3
`api.mybodyprism.com` is NXDOMAIN, and between W2.3 and W4.1 the download endpoint
returns `404 NO_RELEASE` *and silently drops the lead*. Coordinate via
`C:\Projects_MedViz\Launch-Manager` (W4.4).

## Open questions

1. **Page weight — an encoding task, not an export task.** The homepage pulls ~7 MB
   of PNG. The long-standing "low native resolution (~258–600px)" claim is **false**:
   measured 2026-08-30, the six images are 918–4106 px wide (Picture1 is 4106×2149).
   The fix is re-encoding (WebP/quantisation) of the files already here. Re-exporting
   at higher resolution would make it worse. Needs no new source material.
2. **`logo-t.png` (366 KB) and `Icon/Body Prism.png` (494 KB)** are published but
   referenced by nothing — 0.8 MB of dead weight in every deploy. Keep or drop?
3. **Formspree quota headroom.** Free tier is 50 submissions/month and it is the only
   pre-launch interest-capture path. External service state, unobservable from here.
   Watch it while the site is gated.
4. **GitHub Pages "Enforce HTTPS"** — worth confirming it is on for this repo. The
   sibling `bolthouselabs-com` audit found it OFF there on 2026-08-30.

## Guardrails for the next change

- **`src/pages/legal/*.md` are MIRRORS.** Canonical is
  `C:\Projects_MedViz\SomaViz_Desktop_Volume_Viewer\legal\` — `eula.md`,
  `terms-of-service.md`, `privacy-policy.md`, `disclaimer.md`. Four of the eight
  (`cookies`, `hipaa`, `refunds`, `copyright`) originate here. Fix upstream, then
  re-sync. The mirror rewrites relative `.md` links to `/legal/*` routes; that
  difference is correct and is not drift.
- **The palette lives in one place** — `--c-*` tokens in `src/layouts/Default.astro`.
  Do not hardcode colours in a page.
- **`public/CNAME` is load-bearing.** If it stops reaching `dist/`, the custom domain
  unbinds and the site goes dark. The workflow guards this; do not remove the guard.
- **The `www` → apex 301 is load-bearing** for API CORS. Re-test after any hosting or
  DNS change.
- Owner-directed copy — the `/pricing` lede, the homepage "How it works" steps, and
  the support "Is it really free?" answer — must not be reworded. Add alongside it,
  as the gated notices do.
- **Copy must stay consistent with the totally-free v1 positioning.** No subscription
  or renewal wording.
- Do not "fix" the `origin` remote to `mybodyprism-com`. The GitHub repo is
  `Website_BolthouseLabs`; only the local folder was renamed.
- When touching anything gated, build in **both** flag states. `npm run build` locally
  is the only pre-flight; there is no staging environment.
