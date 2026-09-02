# Project state

Snapshot written 2026-09-02. Branch `master`, tree clean, **2 commits unpushed** —
the WebP image review, which is the only thing still open.

## Resume here — one decision is waiting

The beta copy and the legal mirrors **shipped 2026-09-02 and are live**. What
remains on `master` is the image re-encode, held since 2026-08-30 because no
session here can display an image and it is the owner's own medical imaging.

```
bd82b64  perf: re-encode homepage imagery to WebP q90 (7.62 MB -> 0.59 MB)  <- needs your eye
d17c597  chore: move unreferenced brand art out of public/
```

Anything stacked above them is documentation and is safe to push either way.

**To finish it:**

```powershell
npm ci && npm run build && npm run preview   # scroll the homepage
```

Look hardest at **THE REVEAL** (`Picture4`, heart + PET scar heatmap, 738 KB ->
53 KB) and **SEE EVERY DETAIL** (`Picture5`, CT bone/metal with the ICD and
leads, 2434 KB -> 181 KB) — smooth gradients are where WebP artifacts show first.
Then either:

- **Happy:** `git push origin master` — Actions deploys in 1-2 min.
- **Not happy:** originals are intact at `bd82b64~1`. Recover one with
  `git show bd82b64~1:public/Picture5.png > public\Picture5.png`, or re-encode
  higher — q95 measured 0.90 MB total, lossless 3.03 MB, vs 0.62 MB at q90 and
  7.62 MB for the originals.
- **Changed your mind:** `git reset --hard origin/master` discards both.

## Status

**Live and healthy.** Verified 2026-09-02 after the beta-copy deploy: apex `200`;
`http://` `301`s to `https://`; `www` `301`s to apex; `/pricing`, `/support`,
`/system-requirements`, `/account` and all eight `/legal/*` pages `200`.

**The site now describes a free BETA ending July 1, 2027.** Zero occurrences of
"no time limit" or "free trial" survive anywhere. `/pricing`, `/support`,
`/account`, `/legal/eula` and `/legal/tos` all state the end date.

**Downloads remain gated.** `PUBLIC_DOWNLOADS_LIVE` is false in production, so
`/pricing` reads "MyBodyPrism — coming soon" and takes waitlist signups via
Formspree. Correct and deliberate — the flag flip waits on tracker step W4.1.

## What changed

| | |
|---|---|
| **Deployed 2026-09-02** | `e97c3eb` + `fcd841f` — free-beta copy across index/pricing/support/account, and the `eula` + `tos` mirrors re-synced with canonical `0f85a9f0`. Verified live: no false claims anywhere; beta terms on five pages |
| **Deployed 2026-09-02** | Beta feedback ask (mailto to `support@mybodyprism.com`, matching the viewer's own mechanism — deliberately not the Formspree waitlist) |
| **Deployed** | `db819c3` — legal privacy mirror re-synced with canonical. The live page had been serving text the desktop team corrected on 2026-08-28 |
| **Deployed** | GitHub Pages **Enforce HTTPS turned on** (was off; the site served plaintext with no upgrade and no HSTS while carrying an email form). Verified propagated |
| **Committed, not pushed** | WebP re-encode + brand-art move — see *Resume here* |
| **Audited** | Data audit: **no missing data**. Recorded in `Projects_MedViz_Folders.xlsx` |

## Data dependencies: none

Audited 2026-08-30 by resolving paths on disk, not by reading docs:

- **Zero `D:\` paths anywhere in the repo.** Nothing here touches the recovered
  drive, `Test-Data-Organized`, the patient CDs, `catalog.db` or `Demo_Data`.
- Six absolute paths exist, all `C:\Projects_MedViz\…`; five resolve. The one that
  does not is `…\mybodyprism-com\index.html`, cited in the archived 2026-04 deploy
  plan — deleted by the migration, and `docs/superpowers/` is a historical record
  CLAUDE.md says not to "fix".
- `MISSING-DATA-TRACKER.xlsx` names this project in **none** of its three sheets.
  Correct. `M-28` (GitHub credentials), which the Project_Briefings briefing cites
  as blocking pushes, is already `Recovered` — the briefing was stale, not the
  tracker, and it now carries a dated correction block.
- **No test suite exists.** Dependencies are `astro` + `@astrojs/sitemap`, dev
  `@astrojs/check` + `typescript`. `npm run build` is the only automated check.

The one real external dependency is the **canonical legal text in the desktop
repo** — see Guardrails.

## Open items — none blocking

1. **Formspree quota.** Free tier is 50 submissions/month and it is the only
   interest-capture path while downloads are gated. Check form `xykbbnql` on
   formspree.io; upgrade only if the count is near the ceiling. Retires entirely
   at the W4.1 flag flip.
2. **`docs/decisions/0003-formspree-waitlist-without-backend.md`** describes the
   waitlist as the site's only interactive element with no backend. Half-true now.
   Cosmetic; a two-line superseded note would settle it. The rest of `docs/` is
   pre-migration, which `README.md`, `AGENTS.md` and this file all say explicitly.
3. **W4.1 → then flip `PUBLIC_DOWNLOADS_LIVE` to `true`** (repo variable) and
   re-run the deploy workflow. **Not before:** until W2.3 `api.mybodyprism.com` is
   NXDOMAIN, and between W2.3 and W4.1 the download endpoint returns
   `404 NO_RELEASE` *and silently drops the lead*. Coordinate via
   `C:\Projects_MedViz\Launch-Manager` (W4.3/W4.4).
4. **W6.5 is a site-stated commitment.** The gated site promises a launch email in
   five places, one of which sits under the email field as the collection notice.
   If W6.5 is ever dropped, all five must change together.

## Guardrails for the next change

- **`src/pages/legal/*.md` are MIRRORS.** Canonical is
  `C:\Projects_MedViz\SomaViz_Desktop_Volume_Viewer\legal\` — `eula.md`,
  `terms-of-service.md`, `privacy-policy.md`, `disclaimer.md`. The other four
  (`cookies`, `hipaa`, `refunds`, `copyright`) originate here. Fix upstream, then
  re-sync. The mirror rewrites relative `.md` links to `/legal/*` routes; that
  difference is correct and is **not** drift. All four verified in sync 2026-09-02
  against canonical `0f85a9f0`.
- **`public/` is deployed verbatim.** Anything dropped there goes live. Source art
  belongs in `brand/`, which is not published.
- **`public/CNAME` is load-bearing.** If it stops reaching `dist/`, the custom
  domain unbinds and the site goes dark. The workflow guards this; keep the guard.
- **The `www` → apex 301 is load-bearing** for API CORS. Re-test after any hosting
  or DNS change.
- **The palette lives in one place** — `--c-*` tokens in `src/layouts/Default.astro`.
  Never hardcode a colour in a page.
- **`logo.png` stays PNG.** It is the Open Graph image and social scrapers handle
  WebP inconsistently. Everything else on the homepage is WebP.
- Owner-directed copy — the `/pricing` lede, the homepage "How it works" steps, and
  the support free/beta answer — must not be reworded on a session's own judgement.
  Add alongside it, as the gated notices do. **They were rewritten on 2026-09-02**,
  but only because the beta decision made their central claim false, and only after
  the owner approved the diff; that is the bar for touching them again.
- **v1.1 is a FREE BETA ending July 1, 2027** (owner decision 2026-09-02). Free, with
  no payment details and no subscription — but **not** unlimited, perpetual, forever,
  or "no time limit". Those phrasings were live and false until 2026-09-02; do not
  reintroduce them. Canonical terms: the desktop repo's `legal/eula.md` §3.1 and
  `legal/terms-of-service.md` §4.1.
- **Copy must stay consistent with the free-beta positioning.** No
  subscription or renewal wording.
- Do not "fix" the `origin` remote to `mybodyprism-com`. The GitHub repo is
  **`Website_BolthouseLabs`**; only the local folder was renamed.
- When touching anything gated, build in **both** `PUBLIC_DOWNLOADS_LIVE` states.
  `npm run build` is the only pre-flight; there is no staging environment.
