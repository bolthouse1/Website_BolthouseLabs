# CLAUDE.md history, moved out 2026-09-29

Moved verbatim from `CLAUDE.md` on 2026-09-29 by a PrismPlatform session under D042,
applying the owner's rulebook review, round 2 (PrismPlatform D052, change 9: session
history leaves `CLAUDE.md`). The rules and current facts these passages sat beside are
now in `AGENTS.md`. Each passage is headed by the section it came from.

## From "Tech Stack", the email-capture bullet

(This line said the waitlist was "no longer wired to any page" until 2026-09-12 — false
since the 2026-08-26 gate put it on `/pricing`.)

## From "Brand Identity", the logo bullet

(The 2026-06-21 redesign had removed the fixed top bar; the 2026-08-26 migration brought a
header back, because a multi-page site needs navigation. The *hero* still has no chrome
above it on mobile, where the header is not sticky.)

## From "Product Model", item 1

This section said "Free, non-expiring license" until 2026-09-02, and the site said "no
time limit" — both were made false by the beta decision and both are now corrected.

(This paragraph said "give the date" until 2026-09-21.)

## From "Product Model", item 2

(Overselling copy corrected 2026-08-26 by the Launch-Manager session at the owner's
direction.)

## From "Site Structure"

`thank-you.astro` was **deleted** in the 2026-08-26 migration: nothing linked to it, and it
told users to "check your email for your download link" when the free flow never sends one
(the download is a direct presigned redirect; the lead notification is SNS, internal-only).

## From "Homepage Narrative Arc"

The pre-launch **waitlist form (Formspree `xykbbnql`) was removed** from the homepage in the
2026-08-26 migration; the CTA now points at the download flow on `/pricing`. Submissions
already collected live in the Formspree dashboard, not in the page, so removing the form
does not destroy them.

## From "Content Inventory"

**Re-encoded 2026-09-02 from PNG (7.62 MB) to WebP q90 (0.59 MB)**, after the owner compared the
originals and the WebP side by side on every image and saw no difference. The old "low native
resolution (~258–600px)" claim was false — they are 918–4106 px wide; the weight was compression,
not resolution. The original PNGs are recoverable from git history at `bd82b64~1`.

## From "Design Rules"

(The old "no nav, no footer links" teaser rules ended with the 2026-08-26 migration — this
is a full site now.)

## From "Future Additions (Not Yet)"

- ~~Re-encode the six photos~~ — **done 2026-09-02**: WebP q90, 7.62 MB → 0.59 MB, owner-reviewed
  side by side. See Content Inventory.
