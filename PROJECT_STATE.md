# Project state

Snapshot written 2026-09-02. Branch `master`, tree clean, **fully pushed — nothing
pending**. The site is live and everything this project was holding has shipped.

## Status

**Live, current, and clean.** Verified 2026-09-02 after both deploys:

- All routes `200` — `/`, `/pricing`, `/support`, `/system-requirements`,
  `/account`, all eight `/legal/*`. `http://` `301`s to `https://`; `www` to apex.
- **Free BETA ending July 1, 2027** stated across the site and in the EULA and ToS.
  Zero occurrences of "no time limit" or "free trial" survive anywhere.
- **Homepage imagery 0.59 MB**, down from 7.62 MB — all seven WebP verified live and
  byte-valid. `logo.png` remains PNG for Open Graph. Old PNGs and the moved brand art
  correctly `404`.
- **Downloads still gated.** `PUBLIC_DOWNLOADS_LIVE` is false; `/pricing` reads
  "MyBodyPrism — coming soon" and takes waitlist signups via Formspree.

## What changed

| | |
|---|---|
| **Deployed 2026-09-02** | `e97c3eb` + `fcd841f` — free-beta copy across index/pricing/support/account, and the `eula` + `tos` mirrors re-synced with canonical `0f85a9f0`. Verified live: no false claims anywhere; beta terms on five pages |
| **Deployed 2026-09-02** | Beta feedback ask (mailto to `support@mybodyprism.com`, matching the viewer's own mechanism — deliberately not the Formspree waitlist) |
| **Deployed** | `db819c3` — legal privacy mirror re-synced with canonical. The live page had been serving text the desktop team corrected on 2026-08-28 |
| **Deployed** | GitHub Pages **Enforce HTTPS turned on** (was off; the site served plaintext with no upgrade and no HSTS while carrying an email form). Verified propagated |
| **Deployed 2026-09-02** | WebP re-encode + brand-art move. Owner reviewed the originals against the WebP side by side on every image and saw no difference; homepage imagery 7.62 MB → 0.59 MB, whole deploy 8.8 MB → 1.1 MB |
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
3. ~~**Formspree recipient switch → `leads@mybodyprism.com`.**~~ **DONE 2026-09-02,
   owner-reported.** Recorded as reported, not verified: it lives behind the owner's
   Formspree login and is **not observable from this repo or from the desktop repo**,
   so no session here can confirm it — do not restate it as a verified fact. Nothing
   changed in code either way: the form `action` in `src/site-config.ts` is unchanged
   and only Formspree's delivery target moved. The first real confirmation will be a
   waitlist signup arriving at `leads@`.

## W4.4 — the launch flip, stated exactly

This is the one remaining action on this site, and it is **not** a code change or a
merge. Recorded here in full so nobody reconstructs it under time pressure.

**Procedure:** set the repository variable `PUBLIC_DOWNLOADS_LIVE` to `true`
(Settings → Secrets and variables → Actions → Variables), then re-run the deploy
workflow. That is all. No merge, no commit, no branch.

**Preconditions — both required:**

1. **Launch-Manager has recorded W4.1 evidence** — the release-pointer row plus an
   actual download-and-verify. Before W2.3 `api.mybodyprism.com` is NXDOMAIN; between
   W2.3 and W4.1 the endpoint returns `404 NO_RELEASE` **and silently drops the lead**
   (the `release_pointers` lookup runs before `_record_lead`, and prod's table starts
   empty). An early flip loses signups with no trace.
2. **The owner's in-the-moment word, given to whoever performs the flip.** Never on a
   relay, and never inferred from an earlier approval. Authority for one-way actions is
   per-action.

**The check that proves the flip took** (verified in both states 2026-09-02):

| | `false` (now) | `true` (after the flip) |
|---|---|---|
| `/pricing` form element | `mbp-waitlist-form` | `mbp-trial-form` |
| Waitlist-promise strings | **5** — `index` 2, `pricing` 2, `support` 1 | **0** |

The five strings go together, because they are all gated on the same flag. Their
disappearance **is** the W6.5 email-commitment window closing — after the flip the
site no longer promises anyone a launch email, because there is nothing left to wait
for. Confirm both rows live before calling W4.4 done.

**W6.5 while the flag is still `false`:** those five strings are a live, site-stated
commitment to email registered users at launch. If W6.5 is ever dropped, all five
must change together. Separately, `/pricing` and `/account` promise to tell
registered users what happens before the beta ends on 2027-07-01 — that one mirrors
canonical ToS §4.1, so it moves only when the upstream terms move.

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
