# Project state

Snapshot written 2026-08-26 from the working tree at commit `90536f2` on branch
`feature/launch-site`, tree clean.

## Status

**Mid-cutover.** On 2026-08-26 an owner decision moved v1.1 launch-site ownership
into this repository, and the Astro 6 marketing + portal site was migrated in from
`AWS-HIPPA/web/` (which was never deployed anywhere). The single-file "coming soon"
teaser is gone, folded into the new homepage.

That work is **complete and committed, but not live**:

- `master` is untouched and still serves the old teaser at https://mybodyprism.com.
- The migration sits on `feature/launch-site`, four commits, unpushed.
- Nothing about the live site has changed yet.

The branch is deliberately not merged. GitHub Pages currently serves from the
`master` branch root, so merging — which deletes the root `index.html` — takes the
site down unless the Pages source is switched to "GitHub Actions" in the same
motion. See **Next action**.

## What exists today

- Astro 6 static site: `src/pages/` (15 routes), `src/layouts/Default.astro`,
  `src/components/`, built with `npm ci && npm run build` → `dist/`
- Homepage carrying the teaser's narrative arc plus a download CTA
- A download flow on `/pricing`, eight legal pages, support, system requirements,
  and an account portal
- `public/` holding every served asset **including `public/CNAME`**, which is what
  pins the custom domain
- `.github/workflows/deploy.yml` — builds and publishes via `actions/deploy-pages`,
  and hard-fails if `dist/CNAME` is ever missing
- `PUBLIC_DOWNLOADS_LIVE`, the launch switch (see `CLAUDE.md`)
- Still no tests

## Recent movement

| Date | Change |
|---|---|
| 2026-08-26 | Astro site migrated in; teaser folded into the homepage; download gated behind `PUBLIC_DOWNLOADS_LIVE`; support FAQ corrected; site retheme to the dark brand |
| 2026-08-26 | Copy corrected: v1.1 is desktop-only, streaming/VR claims removed (`7241ec0`) |
| 2026-06-21 | Premium redesign; prism-mark hero logo |
| 2026-04-04 | Initial commit, Formspree wiring, first custom domain |

## Next action

**Go live, in two steps that must not be conflated.**

1. **Now — unblocked.** Merge `feature/launch-site` to `master` **and** switch the
   Pages source to "GitHub Actions" (Settings → Pages → Build and deployment →
   Source) in the *same* motion. Settings live under
   `bolthouse1/Website_BolthouseLabs` — **not** `mybodyprism-com`, which does not
   exist. Then confirm the Actions run is green, the apex serves the new site, and
   `curl -I https://www.mybodyprism.com/` still 301s to the apex.
2. **After tracker step W4.1 — blocked.** Set repository variable
   `PUBLIC_DOWNLOADS_LIVE` to `true` and re-run the deploy workflow. Not before:
   until W2.3 `api.mybodyprism.com` is NXDOMAIN, and between W2.3 and W4.1 the
   download endpoint returns `404 NO_RELEASE` *and silently drops the lead*.

Coordinate both with `C:\Projects_MedViz\Launch-Manager` (W4.3 and W4.4).

## Open questions

1. **Higher-resolution image exports.** The homepage pulls ~7 MB of PNG from
   sources that are large on disk despite ~258–600px native resolution. Re-exporting
   is the biggest page-weight win available, but the originals live on the
   desktop/brand side, not here. Raised as its own owner task.
2. **`logo-t.png` and `Icon/Body Prism.png`** are published but referenced by
   nothing (~880 KB). Keep or drop?
3. **Canonical privacy-policy defect (upstream).** `legal/privacy-policy.md:94-97`
   in the desktop repo tells users to delete `HKCU\Software\MyBodyPrism\`, the parent
   of the licensing QSettings store that the app now deliberately protects, and omits
   `%APPDATA%\SomaViz\` where `license.lic` actually lives. Reported to the desktop
   session; `src/pages/legal/privacy.md` here is only the mirror and must be re-synced
   when they fix it.
4. **Formspree quota headroom.** Free tier is 50 submissions/month, and it is now
   the only pre-launch interest-capture path. External service state.

## Guardrails for the next change

- **The palette lives in one place** — `--c-*` tokens in `src/layouts/Default.astro`.
  Do not hardcode colours in a page.
- **`public/CNAME` is load-bearing.** If it stops reaching `dist/`, the custom domain
  unbinds and the site goes dark. The workflow guards this; do not remove the guard.
- **The `www` → apex 301 is load-bearing** for API CORS. Re-test after any hosting or
  DNS change.
- **`legal/*.md` are mirrors**, not source. Canonical is in the desktop repo.
- Owner-directed copy — the pricing lede, the homepage "How it works" steps, and the
  support "Is it really free?" answer — must not be reworded. Add alongside it, as the
  gated notices do.
- Do not "fix" the `origin` remote to `mybodyprism-com`. The GitHub repo is
  `Website_BolthouseLabs`; only the local folder was renamed.
- `npm run build` locally is the only pre-flight. There is no staging environment.
