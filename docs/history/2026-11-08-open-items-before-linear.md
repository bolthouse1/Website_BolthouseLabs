# PROJECT_STATE open items, before the Linear queue (moved 2026-11-08)

This is the "Open items" section of `PROJECT_STATE.md` as it stood at `9dddc9b`, moved here
unchanged when this repository adopted the Linear queue on 2026-11-08. Open work now lives in
the queue (`pl issue list --repo mybodyprism-com`); the evidence below stays in git.

Where each open item went:

| Item | Now carried by |
|---|---|
| 1. Formspree allowance, the 2026-10-06 test row | BOLT-847 (owner-side) |
| 1. Waitlist button stays on screen after a signup | BOLT-848 |
| 4. The installer size on `/pricing` | BOLT-835 |
| 6. The double-submit check against the real API | BOLT-17 (W4.4), recorded in PROJECT_STATE's W4.4 section |
| 7. The stale early-flip wording and the "5-minute" URL | BOLT-17 (its description) |
| 8. The post-freeze legal re-sync | BOLT-808 (viewer mirrors), BOLT-836 (this site's own pages) |
| 9. The `/attributions` page | BOLT-845 |
| 9. PrismEducate's missing installer backend | BOLT-846 |
| 10. W6.5 must not email PrismEducate's registrants | BOLT-18 (Launch-Manager; its 2026-10-23 comment) |

Items 2, 3 and 5 were already done.

---

## Open items — none blocking

1. **Formspree: on the Personal plan since 2026-10-06** (owner-reported; his billing is not
   observable from this repo, so recorded as reported). The free tier's **50** submissions a
   month no longer applies. Formspree's published pricing puts **Personal at 200 a month**,
   with Professional at 2,000 — read from `formspree.io/plans` on 2026-10-06, so it is
   published pricing rather than a figure confirmed on his account. **The ceiling moved up,
   it did not disappear.** His plan: upgrade to a larger plan once traffic justifies it.

   **The month containing 2027-01-01 is the one to watch**, and the reason is easy to miss:
   the viewer's waitlist retires at the W4.4 flip, when `/pricing` becomes a real download —
   but **`/educate` keeps posting to this same form afterwards**, because PrismEducate's own
   switch stays false until its installer has a backend (open items 9 and 10). So launch-day
   interest in the atlas lands here, in the same month as the launch email. Form `xykbbnql`,
   on formspree.io.

   **Read in the dashboard 2026-10-06** (owner signed in to the `chrome-devtools` profile;
   these were previously unverifiable from here):

   - **Submissions in the last 30 days: 0.** Storage 0 GB. **All-time inbox: 5**, one page —
     Sep 2 2026 (the owner's own address), May 29, Apr 23, Apr 16, Apr 11. Spam folder: 2.
   - **So the quota is not the risk.** Usage is zero against a 200-a-month allowance. The
     Personal plan buys headroom, not relief.
   - **No submissions since the Astro site went live, and that is expected**: the owner has
     done **zero advertising** (his words, 2026-10-06). The waitlist has been on `/pricing`
     since 2026-08-26 and the only entry after that date is his own Sep 2 test; the rest
     predate the migration. Silence here measures promotion, not breakage.
   - **The waitlist path is PROVEN end to end, 2026-10-06.** Submitted a real address through
     the live gated `/pricing` form in a browser, on the owner's word: `POST
     https://formspree.io/f/xykbbnql` returned **200**, the page showed "You're on the list —
     we'll be in touch the moment it's ready.", and the row appeared in the dashboard at
     12:41 as `darin.bolthouse+sitetest-20261006@gmail.com`. **That test row is evidence, not
     a lead** — delete it whenever convenient. Because the path is proven, a future silence
     can be read as low traffic rather than a suspected fault; re-test only after a change to
     the form, the endpoint or the host.
   - **Cosmetic, found during that test:** after a successful waitlist submit the button stays
     disabled reading "ADDING YOU…" rather than settling to a finished state. The email field
     is hidden and the success line is shown, so nothing is broken and nobody is misled —
     worth tidying with the next `/pricing` change, not on its own.
   - **No `product: PrismEducate` submission yet**, as expected: the field went live on
     2026-10-05 and nothing has been submitted since. The submissions table shows only an
     `email` column today, so that tag will appear as a new column when the first one lands.
   - Form state: **Enabled**, Submission Archive **on**, Formshield **on**, CAPTCHA
     **disabled**, HTTP API unavailable on this plan.
2. ~~**Stale ADRs.**~~ **DONE 2026-09-12.** `docs/decisions/0001` marked superseded,
   `0003` marked partly superseded (what's now false is listed in it), `0002`
   corrected for the `CNAME` move, and **`0004` written** — the record of the
   2026-08-26 Astro migration that 0001's own boundary clause required and that had
   never existed. The rest of `docs/` is still pre-migration, which `README.md`,
   `AGENTS.md` and this file all say explicitly.
3. ~~**Formspree recipient switch → `leads@mybodyprism.com`.**~~ **DONE 2026-09-02 and now
   VERIFIED, 2026-10-06.** No longer "recorded as reported": read in the dashboard from this
   repo's session, after the owner signed in to the `chrome-devtools` browser profile. The
   form's Workflow tab shows one action, "Email leads@mybodyprism.com — Send an email for
   each form submission". Nothing changed in code either way: the form `action` in
   `src/site-config.ts` is unchanged and only Formspree's delivery target moved.
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
    step. Note also that one form now serves **two** products, on a plan whose published
    allowance is 200 submissions a month (open item 1).
