# Project state

## Start here

The public website for **MyBodyPrism** (Bolthouse Labs, Inc.), an Astro 6 static site served
by GitHub Pages. **This repo changed shape on 2026-08-26**: it was a single-file
`index.html` teaser for most of its life, so most of [`docs/`](docs) predates the
migration. The rules — brand, copy, product model, structure, the launch switch and
deployment — are in [`AGENTS.md`](AGENTS.md) (which `CLAUDE.md` imports). `src/` is the
only executable artifact and wins over any prose; open the file before making a
structural claim. [`STATUS.md`](STATUS.md) is the portfolio review's machine-written card.

| If your task is… | Read |
|---|---|
| Understanding the launch switch or go-live | `AGENTS.md` → "The launch switch", "Deployment Notes"; then W4.4 below |
| Changing what the product claims | [`docs/product/PRD.md`](docs/product/PRD.md) — pre-migration, verify against `src/` |
| Asking "why is it built this way?" | [`docs/decisions/`](docs/decisions) — pre-migration; ADR 0001 (single-file site) is superseded |

## Current state

Snapshot written 2026-10-05. Branch `master` at `7b16552` before this record, tree clean,
in sync with `origin`. The site is live and gated.

**v1.1 is free, with no fixed end date, one licence per computer on each computer the user
owns or controls** (owner decision 2026-09-26/27). The word *beta* is gone from legal, the
app, this site and email, and a switch to a paid subscription is **reserved only in the
EULA**. Never write "forever" (avoid-list, owner 2026-09-26).

**Three products ship on Fri 2027-01-01** (owner decision 2026-10-05): the viewer, **Vault
Local bundled in the viewer's installer**, and **PrismEducate standalone** — all free.
Launch-Manager `DISPATCH-2026-10-05-three-products.md` §4 carries this repo's share; §4a (the
free-viewer pass) shipped 2026-10-05, §4b (the three-product site) is open item 9. Calendar:
freeze Fri 4 Dec; final build 14–18 Dec; W5.1 and W4.1 21–23 Dec; **W4.4 flip on 1 Jan 2027**,
now covering all three downloads.

Start from [`docs/handoffs/HANDOFF_2026-09-21.md`](docs/handoffs/HANDOFF_2026-09-21.md) for the
last full handoff, and `docs/handoffs/2026-09-29-rules-review.md` for the rules move into
`AGENTS.md`; both predate the free-viewer pass.

## Status

**Live and gated.** Verified 2026-10-05, live and in local builds of both flag states:

- **18 routes** — `/`, `/pricing`, **`/vault`**, **`/educate`**, `/support`,
  `/system-requirements`, `/account`, `/404`, `/500` and all **nine** `/legal/*`
  (including **`/legal/vault-eula`**).
  `http://` `301`s to `https://`; `www` to apex.
- **Free, with no end date anywhere and no "beta" anywhere.** Since the free-viewer pass, the
  built output in **both** flag states has **0** hits for "beta", "2028", "2125", "valid until"
  and "forever" — the mirrors carry "no fixed end date" instead of a date. Zero "no time
  limit" or "free trial" too. Re-grep the **built** output after any copy change.
- **Homepage imagery 0.59 MB**, down from 7.62 MB — all seven WebP verified live and
  byte-valid. `logo.png` remains PNG for Open Graph. Old PNGs and the moved brand art
  correctly `404`.
- **FDA intended-use wording applied** (2026-09-12, owner-approved rows W1—W12): the owner-set
  standard disclaimer appears verbatim in the footer of all 15 pages, and none of "Multi-Year
  Progression", "scar tissue", "See Every Detail", "tracking changes across scans" or
  "wellness" survives anywhere on the rendered site.
- **Each legal page has its own title and description** since `ba23072` ("Medical Disclaimer —
  MyBodyPrism", and so on). From 2026-08-26 until then, all eight shared the site default.
- **Legal mirrors current, from TWO canonical repos.** `eula`, `tos`, `privacy` and
  `disclaimer` are content-identical to desktop canonical **`9a395e2c`** (`release/v1.1`), verified 2026-10-05. That is the legal
  commit pinned by Launch-Manager's `OCTOBER-SITTING.md`; `origin/release/v1.1` was `8a42bc10`,
  with no `legal/` commit after `9a395e2c`. **`vault-eula` is content-identical to PrismVault
  canonical `385f4b9`** (`legal/eula.md`, on its `main` and on `origin/main`), verified
  2026-10-06. It is a **separate contract** from the viewer's EULA, with its own effective
  date of January 1, 2027 — canonical's own, not the viewer's August 7, 2026.
- **No "pending lawyer review" banner on any legal page** since `35accb4` (owner decision
  2026-09-13). Verified live on all seven pages that carried it.
- **Downloads still gated.** `PUBLIC_DOWNLOADS_LIVE` is false; `/pricing` reads
  "MyBodyPrism — coming soon" and takes waitlist signups via Formspree.

## What changed

| | |
|---|---|
| **Prepared 2026-10-06, not yet pushed** | `/legal/vault-eula` — Vault Local's own EULA mirrored from PrismVault canonical `385f4b9`, body-only and by hash, the same contract as the viewer's mirrors (its text carries no relative `.md` links, so nothing needed rewriting; the rewrite map is kept in the port script for a future one). Owner-approved as written on 2026-10-05 with no counsel, so **its wording is his own** — treat a change as making it DRAFT again. Fixes a real error: `/vault` had pointed at the **viewer's** EULA for the Vault's licence terms. Also on `/vault`, from Launch-Manager's 2026-10-06 relay, each item verified at the source: the lede now reuses the installer's approved component wording ("your scans and records, kept on this computer", `packaging/installer.iss` at `origin/release/v1.1` `7a7555b7`) so installer and site speak with one voice; the component is `Types: full` with **no `fixed` flag**, i.e. ticked by default and **declinable**, so the page now says it is chosen in the installer and tells someone who skipped it to run the installer again; and two facts read in PrismVault's source — records live under `LOCALAPPDATA`, never inside the install tree (`config.py:67–71`), and the tray icon's Exit stops it. Footer gained a Vault EULA link; `AGENTS.md` records the second canonical repo. Built gated: 18 pages, `dist/CNAME` correct, 0 "beta"/"2028"/"2125"/"forever", `/pricing` still one `mbp-waitlist-form` with 0 "Download free" |
| **Prepared 2026-10-05, not yet pushed** | the three-product site — `DISPATCH-2026-10-05-three-products.md` §4b. **`/vault`**: Vault Local, carrying the owner's approved privacy sentence verbatim ("Your scans and records never leave your computer. The only thing that ever goes out is a one-time licence check, which carries no health data."), with the licence check attributed to the **viewer** because the Vault makes no outbound call — every other claim read in PrismVault's source (binds `127.0.0.1` only, `app_runtime.py:81`; SQLCipher store; recovery key shown once, `crypto.py:12`; no HTTP client in `src/prismvault`). No download form: the Vault ships inside the viewer's installer. **`/educate`**: PrismEducate, standalone, with its **own** switch `PUBLIC_EDUCATE_DOWNLOADS_LIVE` (owner decision 2026-10-05) because the cloud serves one installer only. Organs with scrollable scans are **named, never counted** — Bowel, Kidneys, Liver, Lungs, Pancreas, Prostate, Spine, Thyroid — from that repo's generated `docs/evidence/2026-10-05-public-build-contents.md` (8 of 11 after the owner accepted share-alike for the abdominal collections); Brain, Breast and Heart are described as showing published figures without scrollable scans. `verse` is still held back, so the spine loses its CT vertebra pages — Launch-Manager relayed that it kept them, and the generated report says otherwise. `system-requirements` now covers three products; nav gained Vault and PrismEducate. Built in three flag states, 17 pages each, `dist/CNAME` correct, 0 hits for "beta"/"2028"/"2125"/"valid until"/"forever", and `/pricing` still renders one `mbp-waitlist-form` with 0 "Download free" |
| **Deployed 2026-10-05** | the free-viewer pass — Launch-Manager `DISPATCH-2026-09-27-free-viewer.md` §3, owner-approved 2026-09-27 and unapplied here until now, with exact rows in `FREE-VIEWER-CHANGE.md` §4. EULA and ToS mirrors re-synced from desktop canonical **`9a395e2c`** (pinned by `OCTOBER-SITTING.md`; identical to the branch tip `8a42bc10` for both files): free, **no fixed end date**, one licence per computer on **each computer you own or control**, no "beta". "free beta" → "free" on index, pricing, support and account; homepage step 2 now says to open the folder from a CD, USB stick or unzipped portal download, because the viewer opens folders only (`QFileDialog.getExistingDirectory`) and has no drop or zip handling; mailto subject → "MyBodyPrism feedback" and "Send feedback"; support heading → "It's early"; `beta-notice`/`beta-asks` renamed `feedback-*` so the built output greps clean. `refunds.md`: "Free access is not guaranteed to continue." deleted (a paid-switch statement belongs only in the EULA). `hipaa.md`: retitled **"HIPAA and MyBodyPrism"** (URL unchanged), "never leaves your device" → "in this version your imaging stays on your device", "activation/trial details" → "activation details", "payment metadata" dropped, and the plain line "HIPAA does not apply to MyBodyPrism v1.1, and we do not claim HIPAA compliance or certification." added. Effective dates unchanged — they move at the 4 Dec freeze. `AGENTS.md`'s Product Model rewritten on the owner's approval. Built in both flag states: 15 pages, `dist/CNAME` correct, 0 hits for "beta"/"2028"/"2125"/"valid until"/"forever", and the gate holds (`mbp-waitlist-form` + 0 "Download free" gated; `mbp-trial-form` + 1 flipped) |
| **Deployed 2026-09-21** | `2aae7b5` — EULA and ToS mirrors re-synced to desktop canonical `ce58724e` (the date move, owner-approved in the desktop's window): the beta ends **January 1, 2028** (EULA §1, §3.1, §10.1, §10.3; ToS §2, §4.1, §20), and both after-beta lists read "which may include a free license for some or all features, a paid license, a new version, or a combination". Effective dates unchanged (August 7, 2026; set at the 4 Dec freeze). Body only, from `git show ce58724e:legal/…`. Pushed on the owner's go. Built in both flag states: only `legal/eula.html` and `legal/tos.html` changed. Verified live: 4 and 3 "January 1, 2028", 0 "July 1, 2027", all 15 routes byte-identical to the verified build, `/pricing` still gated |
| **Docs 2026-09-21** | `3fd5c56` — the date move (ship 2027-01-01, beta end 2028-01-01) and the 09-16 copy pass recorded in CLAUDE.md (owner-approved text), this file, START_HERE and AGENTS. Pushed on the owner's go |
| **Deployed 2026-09-16** | `669b5cd` — founder prose, dictated by the owner: "the irony was unmissable." became "I knew there had to be a better way to visualize medical data.", and the paragraph beginning "MyBodyPrism is what I wanted on the day I came home from the hospital" was deleted. Committed and pushed by a **BodyAtlas-rooted session** on his instruction, not from this repo's window. Verified live 2026-09-21 from here |
| **Deployed 2026-09-16** | `bd238f0` — the owner's copy pass from his phone, prepared as a patch on Launch-Manager branch `claude/website-copy-updates-23g5qo` (rows and his four scoping decisions in that branch's `DISPATCH-2026-09-16-website-copy.md`; merged into Launch-Manager `main` on 2026-09-21 as `8218092`). Scan wording in plain language (DICOM explained once, on the homepage and in a new support FAQ); the founder career line corrected to "nearly thirty years building advanced 3D visualization software for engineering"; **every payment, subscription and beta-expiry mention removed** — decision 1: the licence end date appears only in `/legal/eula` and `/legal/tos`. The support "Is it really free? How long does the beta last?" FAQ was deleted and "Does it cost anything?" rewritten; `/account`'s hidden "Billing & receipts" link removed and its Stripe portal call unwired. Applied and pushed by the same BodyAtlas session on his instruction. Verified 2026-09-21 from here: live, and in both flag states "July 1, 2027" renders 0 times outside `/legal`, with the W4.4 proof-of-flip counts unchanged |
| **Deployed 2026-09-13** | `0ad99f1` — `/pricing` download script: a repeat submit of the same email re-uses the still-valid signed link instead of calling the API again, so a second click no longer mints another link, bumps `download_count` or sends a duplicate SNS lead email (open item 6). No markup or copy change; inert while gated. Verified live: `/pricing` differs from the previous deploy only inside the download script and equals the verified build, the other 14 routes are byte-identical, the page is still gated, and the deployed script passes the 18-check harness |
| **Deployed 2026-09-13** | `35accb4` — the "Pre-launch draft pending lawyer review" banner removed from the seven legal pages that carried it (eula, tos, privacy, disclaimer, hipaa, cookies, refunds; copyright never had it). Owner decision 2026-09-13, recorded in Launch-Manager DECISIONS, pushed on his go in this repo's window. It contradicted the locked 2026-08-24 decision to launch without formal counsel review, and CC.12. No terms change; canonical desktop legal and the in-app EULA never carried it. CLAUDE.md's mirror-structure paragraph updated in the same commit. Verified live: each page equals its pre-deploy fetch minus the banner, with the same title; the other eight routes are byte-identical; `/pricing` still gated |
| **Deployed 2026-09-13** | `f618ab2` — EULA mirror re-synced to desktop canonical `6bdaf2ef` (`release/v1.1`), porting `2c1c8d3a`: two activation-code sentences in §3.2 and §4, owner-approved 2026-09-12. Body only, taken from `git show 6bdaf2ef:legal/eula.md`. Built in both flag states; the live page is byte-identical to the verified build; ToS, privacy and disclaimer were unchanged and remain identical to canonical |
| **Deployed 2026-09-12** | `d506116` — URLs with a trailing slash (`/pricing/`, and every other route) now redirect to the slashless page instead of dead-ending on 404. Logic tested 10/10, live-verified, and click-verified by the owner |
| **Deployed 2026-09-12** | `ba23072` — the layout now renders each legal page's own front-matter title and description; all eight had shown the site default since 2026-08-26, which also hid W10. Privacy and HIPAA descriptions no longer name Bolthouse Labs (owner decision). Verified live: 15/15 routes identical to the verified build |
| **Deployed 2026-09-12** | `22d3ecc` — FDA intended-use wording, rows W1—W12 from Launch-Manager `CLAIMS-CLEANUP.md`, owner-approved: standard disclaimer in every footer, homepage headings that no longer read as disease-tracking, a new "diagnose or monitor?" support FAQ, and legal mirrors re-synced to canonical `69c190cc` (removing "tracking changes across scans over time" from the intended-use statement). Verified live |
| **Docs 2026-09-12** | `78644cb` — ADR 0004 written for the Astro migration; 0001 superseded, 0003 partly superseded, 0002 corrected for the `CNAME` move |
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
2. ~~**Stale ADRs.**~~ **DONE 2026-09-12.** `docs/decisions/0001` marked superseded,
   `0003` marked partly superseded (what's now false is listed in it), `0002`
   corrected for the `CNAME` move, and **`0004` written** — the record of the
   2026-08-26 Astro migration that 0001's own boundary clause required and that had
   never existed. The rest of `docs/` is still pre-migration, which `README.md`,
   `AGENTS.md` and this file all say explicitly.
3. ~~**Formspree recipient switch → `leads@mybodyprism.com`.**~~ **DONE 2026-09-02,
   owner-reported.** Recorded as reported, not verified: it lives behind the owner's
   Formspree login and is **not observable from this repo or from the desktop repo**,
   so no session here can confirm it — do not restate it as a verified fact. Nothing
   changed in code either way: the form `action` in `src/site-config.ts` is unchanged
   and only Formspree's delivery target moved. The first real confirmation will be a
   waitlist signup arriving at `leads@`.
4. **Owner-approved, waiting on a number: `pricing.astro` quotes the download as "~2.5 GB".**
   It is 404 MB today and heading to ~1.5 GB with the walkthrough videos. The owner approved
   correcting it on 2026-09-12, **but only to the rebuild's measured installer size**.
   Launch-Manager will send that figure, and it goes in before `PUBLIC_DOWNLOADS_LIVE` flips.
   **Do not estimate it.** The text renders only once the flag flips, so it is not live today.
   Since the 2026-09-21 date move, that measured figure comes from the final build, 14–18 Dec.
5. ~~**Known: routes with a trailing slash return 404.**~~ **FIXED 2026-09-12 (`d506116`).** The 404
   page now bounces any slash-ended URL to its slashless form, keeping the query string and
   anchor, and it cannot loop. Verified: the redirect logic passes 10/10 in both flag states
   against the built page; the live 404 page carries it; all 15 routes are byte-identical to
   the verified build; **and the owner click-tested `mybodyprism.com/pricing/` → `/pricing`
   in a real browser.** Chosen over switching `build.format` to `directory`, which would have
   touched every route, the canonical logic and the sitemap 19 days before launch.
   Note: `/pricing/` still returns **HTTP 404**, because the hop happens in the browser, so a
   status-code monitor or crawler will still see a 404 there. **If `build.format` ever
   changes, re-check this** — the redirect assumes the slashless path is the real page.

6. ~~**Found 2026-09-13: the download button can create duplicate leads.**~~ **FIXED 2026-09-13
   (`0ad99f1`, on the owner's go).** After a successful request the button re-enabled 8 s later,
   and a second click signed a new link, bumped that person's `download_count` and sent a second
   SNS lead email (Launch-Manager tracker, "Cloud (data quality, before W4.4)", 2026-09-09). The
   script now re-uses the link it was given for the same email until a minute before
   `expires_in` (300 s if absent). A different email, or the same one after that, calls the API
   as before, so a mistyped address can still be corrected; failures are never cached. No markup
   or copy change, and inert while gated. **Tested only in a harness** — the built script run
   against a fake DOM, fetch and clock, 18/18, with the old script failing the 7 re-use checks.
   Its first run in a real browser against the real API will be W4.4's download check.
7. **Found 2026-09-13; deferred to W4.4 by the owner on 2026-09-16** (Launch-Manager tracker,
   W4.4 row: docs-only, no visitor sees them). **Do not fix these before the W4.4 session.**
   The early-flip rationale here is stale. `AGENTS.md` (its "Deployment is gated" rule and
   "The launch switch", the latter moved from CLAUDE.md on 2026-09-29),
   this file's W4.4 precondition 1 and a `src/site-config.ts` comment say
   `api.mybodyprism.com` is NXDOMAIN and that W2.3→W4.1 silently drops the lead. The host
   resolves (W2.3 done 2026-09-01), and cloud `2fe90e6` (2026-08-26) calls `_capture_lead` on
   the `NO_RELEASE` path. Not re-read in prod from here. **The gate itself is unchanged:** a flip
   before W4.1 still shows every visitor "Couldn't start the download." **Also stale since
   2026-09-13:** the route table (now in `AGENTS.md`, "Site Structure") says `/pricing` redirects to "a 5-minute presigned
   S3 URL"; links have been one hour since the TTL deploy. Same fix, same go.
8. ~~**Waiting on the desktop: re-sync the EULA and ToS mirrors for the beta's new end date.**~~
   **DONE 2026-09-21 (`2aae7b5`, on the owner's go).** Synced from canonical `ce58724e`; see
   What changed. Canonical's ToS wraps dates across lines ("January 1,⏎2028"), so match
   whitespace-tolerantly when checking. **Next legal re-sync: after the 4 Dec freeze**, when
   the owner sets every changed legal doc's effective date to the freeze date.

9. **The three-product site — mostly built 2026-10-05, two pieces open.**
   `/vault` and `/educate` exist, `system-requirements` covers three products, nav links both,
   and PrismEducate has its own download switch. Still open:
   - **The attributions page is not written yet.** It waits only on `prismeducate-ab`'s commit,
     which will send the rendered text; the crash that blocked it is fixed and the screen now
     renders **eight works**. Take the **rendered strings** from their `credit_text()` —
     never a paraphrase, and never a hand-written citation.
     **Design constraint, settled before the page exists (their PE-LIC-21): one work's licence
     is a sentence, not a token.** BodyParts3D renders as "CC BY 4.0, as version 4.0's own
     README states; share-alike accepted under the earlier CC BY-SA 2.1 Japan statement",
     because the source carries two licence statements and neither may be read alone (their
     D133). **Render each licence string whole and do not parse a licence name out of it** — a
     page built around a short licence token per work breaks on that block. The five distinct
     licence strings are CC BY 3.0, CC BY 4.0, CC BY-SA 4.0, CC BY (the case-report articles)
     and that compound sentence.
     **Eight blocks, not the six Launch-Manager counted**, which covered scan collections only:
     `other_credits()` adds **BodyParts3D** (the organ models the 3D pane draws) and the
     **open-access case reports** via Europe PMC and PubMed Central. Both appear on nearly
     every page and are owed credit the same way.
     The six scan works are LIDC-IDRI (CC BY 3.0), Colorectal-Liver-Metastases (CC BY 4.0 —
     the **`NO_PAPER`** case: no author citation is recorded, and the screen says so rather
     than inventing one), SPIDER, TotalSegmentator v2.0.1, the Medical Segmentation Decathlon
     and VerSe 2019/2020 (both CC BY-SA 4.0; VerSe's record requires **three** citations).
     Their new slow-tier test (PE-LIC-22) renders the screen against the real catalog with a
     mutation check, so a future ruling that adds a collection fails there instead of arriving
     here as a crash.
     The footer link and `/educate`'s link stay **held back** until the page exists.
   - **PrismEducate's installer has no backend.** See W4.4 below. Someone must add a release
     pointer and an endpoint before `PUBLIC_EDUCATE_DOWNLOADS_LIVE` can flip; no section of
     the 2026-10-05 dispatch assigns it.
   Constraints that still bind: **"free", never "forever"**; the approved privacy sentence
   verbatim and unwidened; name organs rather than counts, so a change in what ships cannot
   falsify the page.

   **The share-alike rulings, as that repo records them** (four of them on 2026-10-05;
   Launch-Manager's account differed twice along the way, and the generated artifact was right
   each time): share-alike was first excluded; then **D245** took `msd-colon` and
   `msd-pancreas` in and deliberately left `verse` and `verse-normal` out; then **D246**
   accepted share-alike **project-wide**, so all four share-alike collections ship, and
   **D247** accepted it on the BodyParts3D organ models too — against that repo's own
   recommendation that v4.0's CC BY 4.0 governs. Both were given **directly in that session's
   window**, not relayed, and their Q18 is closed. **The share-alike obligation on the public
   build is therefore the owner's own word**, which is what this site's licence claims rest on.
   **None of it changed `/educate`:** `verse` added a *condition* to the spine (Compressed
   vertebra, CT, beside its two MRI ones), not an organ to the atlas, so the eight names held
   through all four rulings. That is why the page carries no counts and does not enumerate
   conditions per organ — it survived two rulings in one evening without an edit.

10. **W6.5 must not email PrismEducate's registrants about the viewer** (raised here
    2026-10-06; **no Launch-Manager session was live to receive it**, so it is recorded here
    for whoever runs W6.5 or opens the next Launch-Manager seat).

    `/educate` promises, in its own words: "We'll email you once when PrismEducate is ready to
    download." Those signups go to the **same Formspree form** as the viewer's waitlist,
    distinguished only by a hidden `product` field with the value `PrismEducate`. On
    2027-01-01 the viewer's launch email goes out — and PrismEducate's download will still be
    off unless its installer has gained a release pointer and an endpoint by then (Amendment B;
    open item 9). **So the two lists must be sent separately**, or people who asked about the
    atlas receive an email telling them their product is ready when it is not.

    The page copy is accurate as written and needs no change: the fix belongs in the comms
    step. Note also that the Formspree free tier is 50 submissions a month and now serves
    **two** products through one form (open item 1).

## W4.4 — the launch flip, stated exactly

This is the one remaining action on this site, and it is **not** a code change or a
merge. Recorded here in full so nobody reconstructs it under time pressure.

**Timing, as of 2026-09-09 (Launch-Manager tracker `5f8f7b0`): further out than it
was.** The signed 2026-09-02 artifacts are superseded — a twelve-item fix list changes
the shipped binary — so the order is now: one more rebuild-and-signing session → W4.1 →
W4.4. **Nothing on this site changes until then**, and `PUBLIC_DOWNLOADS_LIVE` was
re-verified false on the live site the same day.

**Update 2026-09-13, at the park (Launch-Manager tracker, read from this repo):** the
remaining path is the theme merge on the owner's go → the unsigned test build → the four
walkthrough videos and the manual click-through → rebuild → sign → W5.1 clean-machine test →
W4.1 → W4.4. **W4.1's download-TTL gate is met:** one-hour download links went live in prod at
2026-09-13T13:43:24Z (Launch-Manager read `3600` in both download functions' deployed code;
not re-read from here). The measured installer size for `/pricing` comes out of that
rebuild. `PUBLIC_DOWNLOADS_LIVE` re-verified false on the live site at the park.

**Update 2026-09-21 (Launch-Manager tracker, read from this repo): the ship date is Fri
2027-01-01.** Freeze Fri 4 Dec (legal text and UI final) → a fresh unsigned test build and the
four videos 7–11 Dec → final build and one signing session 14–18 Dec → W5.1 and W4.1, with the
55-minute resume check, 21–23 Dec → **W4.4 and the W6.5 email on 1 Jan 2027**. W4.1 is still
blocked on that final build's hash. The owner added on 2026-09-16 that a failed resume check
blocks W4.4.

**Procedure:** set the repository variable `PUBLIC_DOWNLOADS_LIVE` to `true`
(Settings → Secrets and variables → Actions → Variables), then re-run the deploy
workflow. That is all. No merge, no commit, no branch.

**W4.4 covers the viewer's download only, and that is deliberate** (owner decision
2026-10-05). PrismEducate has its own switch, `PUBLIC_EDUCATE_DOWNLOADS_LIVE`, because the
cloud's download Lambda is hardwired to one installer — it reads `release_pointers` PK
`latest` and returns that single `installer_s3_key`, with no product parameter
(`AWS-HIPPA infra/lambdas/trial_installer_download/index.py`, read 2026-10-05). Vault Local
needs nothing: it ships **inside** the viewer's installer. **Do not flip
`PUBLIC_EDUCATE_DOWNLOADS_LIVE` until PrismEducate's installer has a release pointer and an
endpoint behind `EDUCATE_INSTALLER_PATH`** (`/downloads/educate-installer`, which does not
exist yet) — an early flip shows every visitor "Couldn't start the download", the very
failure this gate exists to prevent. No cloud section of the 2026-10-05 dispatch adds it;
Launch-Manager has been told.

**Preconditions — both required:**

1. **Launch-Manager has recorded W4.1 evidence** — the release-pointer row plus an
   actual download-and-verify. Before W2.3 `api.mybodyprism.com` is NXDOMAIN; between
   W2.3 and W4.1 the endpoint returns `404 NO_RELEASE` **and silently drops the lead**
   (the `release_pointers` lookup runs before `_record_lead`, and prod's table starts
   empty). An early flip loses signups with no trace.
2. **The owner's in-the-moment word, given to whoever performs the flip.** Never on a
   relay, and never inferred from an earlier approval. Authority for one-way actions is
   per-action.

**The check that proves the flip took.** Measured in both build states and against the
live gated site, 2026-09-09.

> ### ⚠ Do not check this with a bare string grep
>
> `curl https://mybodyprism.com/pricing | grep mbp-trial-form` returns **3 hits on a
> correctly-gated page** and 4 on a flipped one. It is not merely a false positive — it
> is nonzero in *both* states and differs by one, so it cannot distinguish them at all.
> Launch-Manager lost time to this on 2026-09-09.
>
> Two things ship the id unconditionally, regardless of the flag:
> 1. Astro emits the scoped CSS rule `#mbp-trial-form[data-astro-cid-…]{display:flex…}`
>    into every build of the page.
> 2. The inline download-form script ships in both states too — it early-returns via
>    `if (!form) return;` when gated, but the literal `getElementById("mbp-trial-form")`
>    is still in the source.

Use any of these instead. All four were measured, not assumed:

| Check (all **on `/pricing`** unless it says otherwise) | `false` (gated — current) | `true` (flipped) |
|---|---|---|
| Rendered `<form id="…">` element | `mbp-waitlist-form` | `mbp-trial-form` |
| `"Download free"` count **on `/pricing`** | **0** | **1** |
| `"Join the waitlist"` count | **4** | **0** |
| Waitlist-promise strings, all pages | **6** — `index` 2, `pricing` 2, `support` 1, `educate` 1 | **1** — `educate`, until its own flag flips |
| ~~bare `grep mbp-trial-form`~~ | ~~3~~ | ~~4~~ — **useless, do not use** |
| ~~`"Download free"` site-wide~~ | ~~1~~ | ~~4~~ — **scope it to `/pricing`**, see below |

**Re-measured 2026-10-05**, in three flag states, after the three-product pages landed. Two
rows changed meaning and a third is a new trap:

- **`"Download free"` must be counted on `/pricing`, not site-wide.** The homepage's
  owner-directed "How it works" step 1 begins "**Download free.**" in **both** states, so
  site-wide the count is 1 gated and 4 flipped — nonzero either way, exactly like the
  `mbp-trial-form` trap below it. On `/pricing` it is still a clean 0/1.
- **Promise strings are 6 gated, not 5**, because `/educate` promises an email of its own while
  `EDUCATE_DOWNLOADS_LIVE` is false. After the viewer's flip **one remains** — `/educate`'s —
  and it is correct: PrismEducate registrants are still waiting. So W6.5's "they all vanish
  together" no longer holds across the whole site; it holds per product.
- `/educate` renders `mbp-edu-waitlist-form` while its flag is false and `mbp-edu-form` when it
  is true, and the download endpoint string appears in the page **only** in the latter state.

`"Download free"` is the cleanest single check: a true 0/1 binary with no CSS or script
noise behind it. For the structural check, match the rendered tag —
`<form[^>]*id="…"` — not the bare id.

Live in the gated state, re-verified 2026-09-12: exactly one
`<form id="mbp-waitlist-form" action="https://formspree.io/f/xykbbnql" method="POST" …>`,
zero `"Download free"`.

The five promise strings go together, because they are all gated on the same flag. Their
disappearance **is** the W6.5 email-commitment window closing — after the flip the
site no longer promises anyone a launch email, because there is nothing left to wait
for. Confirm both rows live before calling W4.4 done.

**W6.5 while the flag is still `false`:** those five strings are a live, site-stated
commitment to email registered users at launch. If W6.5 is ever dropped, all five
must change together. (Re-counted 2026-09-21 after the 09-16 copy pass: still 5 gated, 0
flipped.) The separate `/pricing` and `/account` promise to tell registered users what
happens before the beta ends was **removed by the 2026-09-16 copy pass** with the rest of the
expiry wording; that commitment now lives only in canonical ToS §4.1, via its mirror.

## Guardrails for the next change

- **`src/pages/legal/*.md` are MIRRORS.** Canonical is
  `C:\Projects_MedViz\SomaViz_Desktop_Volume_Viewer\legal\` — `eula.md`,
  `terms-of-service.md`, `privacy-policy.md`, `disclaimer.md`. The other four
  (`cookies`, `hipaa`, `refunds`, `copyright`) originate here. Fix upstream, then
  re-sync. The mirror rewrites relative `.md` links to `/legal/*` routes; that
  difference is correct and is **not** drift. All four verified in sync 2026-09-21
  against canonical `ce58724e` (desktop `release/v1.1`). **Re-sync with
  `git show <commit>:legal/<file>` on `release/v1.1` — never from the desktop working
  tree or `main`**, both of which carried stale legal text on 2026-09-12. The mirror's
  front-matter (title, description) is website-owned, not mirrored, and since `ba23072`
  it **renders**: editing it changes live search snippets.
- **No "pending lawyer review" banner on the legal pages.** Removed 2026-09-13 (`35accb4`,
  owner decision): v1.1 launches without formal counsel review. Canonical never carried it,
  so a body-only re-sync will not bring it back; do not add it by hand.
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
- Owner-directed copy — the `/pricing` lede, the homepage "How it works" steps, the
  founder prose, and the support "Does it cost anything?" answer — must not be reworded on a
  session's own judgement. Add alongside it, as the gated notices do. **They were rewritten
  on 2026-09-02**, because the beta decision made their central claim false, and **again by
  the owner's own copy pass on 2026-09-16**; both times only on his approval. That is the bar
  for touching them again.
- **v1.1 is FREE, with no fixed end date** (owner decision 2026-09-26/27; a beta ending
  January 1, 2028 until then, and July 1, 2027 before that). One licence per computer, on each
  computer the user owns or controls. No payment details and no subscription — and **never**
  "free forever", "permanently free", "stays free", unlimited or perpetual. The paid-subscription
  switch is reserved **only in the EULA**, on 30 days' notice; it appears in no page copy.
  Canonical terms: the desktop repo's `legal/eula.md` §3.1 and `legal/terms-of-service.md` §4.1.
- **Copy must stay consistent with the free positioning.** No
  subscription or renewal wording.
- Do not "fix" the `origin` remote to `mybodyprism-com`. The GitHub repo is
  **`Website_BolthouseLabs`**; only the local folder was renamed.
- When touching anything gated, build in **both** `PUBLIC_DOWNLOADS_LIVE` states.
  `npm run build` is the only pre-flight; there is no staging environment.
- **Verify the rendered `<head>`, not the source front-matter.** A layout bug hid every legal
  page's title and description from 2026-08-26 to 2026-09-12, and nobody noticed, because
  the source looked right. The layout's `frontmatter` prop is what carries Markdown pages'
  titles and descriptions; remove it and all eight legal pages silently share one title again.
- **FDA intended-use wording is not a session's to reword.** The footer disclaimer, the
  "diagnose or monitor?" FAQ and homepage sections 6—8 were set by the owner on 2026-09-12
  (see `AGENTS.md`, Homepage Narrative Arc). After any copy change, re-run a residual sweep of
  the rendered site for the old phrasing.
