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
