# Rules review applied — 2026-09-29

Made by a PrismPlatform session under D042, applying the owner's rulebook decisions
(PrismPlatform D051). Only rule text changed; no page, config, workflow or asset was
touched. Read at `e95fa0d`.

**Committed, not pushed.** Every push to `master` runs the deploy workflow and publishes
the live site, and this repository is public, so a push is an outward-facing action that
waits for the owner's word. The commit sits on local `master` for the next session here
to push when he says so.

| # | Entry | Outcome | File | Before → after |
|---|---|---|---|---|
| 1 | F-COMMIT-HERE-ONLY (legal mirrors) | Changed | `AGENTS.md`, `START_HERE.md` | "Fix upstream first, then re-sync here" → "Commit only in this repository; an upstream fix goes as a request in `docs/handoffs/` to PrismPlatform, which commits it under D042; never leave the desktop repo's tree dirty; re-sync the mirror once it lands" |
| 2 | mybodyprism-com-025 (Pages source) | Changed | `CLAUDE.md`, `AGENTS.md`, `START_HERE.md` | "The Pages source must be set to GitHub Actions; switch it and delete the root `index.html` together, never separately" → "The Pages source is GitHub Actions (switched with the merge 2026-08-29, `c6724ce`, ADR 0004); keep it so; every push to `master` runs the workflow" |
| 3 | mybodyprism-com-027 (read-only images) | Changed | `AGENTS.md` | "the six `Picture*.png` files" → "the six `public/Picture*.webp` files" (the PNGs were re-encoded to WebP on 2026-09-02) |

ADR 0004 already records the Pages switch as done, so it needed no amendment note.

## Follow-ups

1. `.github/workflows/deploy.yml`'s header comment still says the Pages source "must be
   switched" before the first run can succeed; `README.md` ("Deployment") says the same.
   Both describe a state that ended on 2026-08-29. A workflow comment is config, so it
   was left as it is.
2. The commit here is unpushed (see above).

## Round 2 (D052)

Made by a PrismPlatform session under D042, applying the owner's rulebook review, round 2
(PrismPlatform D052). Rule and state files only; no page, config, workflow or asset
touched. Read at `57413d5` (round 1's commit, local and unpushed).

**Committed, not pushed**, for the same reason as round 1: a push to `master` deploys the
public site, and that waits for the owner. Both commits sit on local `master`.

**Moved**
- **`CLAUDE.md` into `AGENTS.md`.** `CLAUDE.md` is now its title, `@AGENTS.md` and a
  pointer. Every section it held (Tech Stack through Repo Conventions) is in `AGENTS.md`
  verbatim, except as listed below; `AGENTS.md` now says it is the governing rules file.
  Its old summary bullets that restated those sections (desktop-only, no streaming
  claims, streaming provider, Bolthouse Labs in the footer only, dark media, the palette)
  were dropped in favour of the full sections, keeping the one thing only the summary
  said: the copy never claims AI processing.
- **Session history (change 9)** into `docs/history/2026-09-29-claude-md-history.md`,
  verbatim, ten passages: the waitlist-wiring correction note, the header/top-bar history,
  the "Free, non-expiring" correction, "said 'give the date' until 2026-09-21", the
  2026-08-26 overselling note, the `thank-you.astro` deletion, the homepage waitlist-form
  removal, the PNG-to-WebP re-encode story, the old teaser design rules, and the
  struck-through re-encode item. Three were replaced by one-sentence current facts,
  written here: no thank-you page (the flow sends no download email); no homepage
  waitlist form (old submissions are in the Formspree dashboard); WebP q90 since
  2026-09-02, originals at `bd82b64~1`.
- **`START_HERE.md` into `PROJECT_STATE.md`** ("## Start here": the 2026-08-26 shape
  change, where the rules are, `src/` beats prose, the go-deeper table). Its "five facts"
  and the owner-directed-copy and mirror notes were already in `AGENTS.md`.
  `START_HERE.md` is now the one-line pointer.

**Changed**
- `AGENTS.md` opens with the shared-rulebook line.
- The legal-mirror rule: round 1's "commit only in this repository; send a request to
  PrismPlatform" deleted (change 4). What stays: fix canonical text upstream first, in the
  desktop repo, whose `release/v1.1` no session commits to without the owner's word; then
  re-sync here.
- `PROJECT_STATE.md`: its three pointers into `CLAUDE.md` sections (open item 7's two, and
  the FDA-wording guardrail) now name `AGENTS.md`. Open item 7's stale early-flip wording
  was **not** fixed: the owner deferred that to the W4.4 session (2026-09-16).

**Deleted**
- "`STATUS.md` is machine-written; do not edit it" (both files) — shared.
- `CLAUDE.md`'s header note ("read `START_HERE.md`, `PROJECT_STATE.md`, `ARCHITECTURE.md`
  first; this file holds the rules").

**Left**
- The copy rules the readers flagged as consumer-copy restatements — "free beta", never
  unlimited/perpetual; the end date only in `/legal/eula` and `/legal/tos`; no streaming,
  VR, HIPAA-compliant-cloud or encryption claims; sections 6-8's FDA wording;
  owner-directed copy never reworded. Each names this site's pages and copy; the shared
  consumer line does not cover licence terms. Kept verbatim.
- "Do not 'fix' the `origin` remote" — a fact about this repository's remote name, not
  the shared never-rename rule.

**Follow-ups**
- `README.md`, `docs/ENGINEERING_HANDBOOK.md`, `docs/product/PRD.md`,
  `docs/product/USER_WORKFLOWS.md`, `docs/roadmap/BUILD_SEQUENCE.md` and a comment in
  `src/layouts/Default.astro` point at `CLAUDE.md` sections by name ("Brand Identity", …).
  They still resolve through the import, but should name `AGENTS.md`; `README.md` and
  `USER_WORKFLOWS.md` also start readers at `START_HERE.md`. Outside this round's file
  list (and one is code).
- The v1.1 free-viewer change (Launch-Manager, 2026-09-26/27: free with no fixed end
  date, "beta" gone) is dispatched but not applied here; the Product Model's "free beta"
  rules change with that website pass, not this one.
- Both round-1 and round-2 commits are unpushed.
