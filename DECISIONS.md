# Decisions — mybodyprism-com

The owner's answers that bind this repository, dated, with the reason. Most earlier owner
decisions about the site are recorded in Launch-Manager's launch `DECISIONS.md` and in
`PROJECT_STATE.md`'s What changed table; the architectural records are in `docs/decisions/`.
This file starts on 2026-11-08.

## D001 — 2026-11-08: the Vault EULA mirror carries the agreement only

**Decision (owner, in this repository's session, BOLT-834).** Re-sync `/legal/vault-eula`'s
body to PrismVault's `legal/eula.md` at its current commit (`bf29744`, owner-approved,
PV-D099), but leave out the two maintainers' paragraphs under its heading: the approval
record and the DRAFT-and-tests note. Do this even while PrismVault's file still has them
(BOLT-842). In his words, "My word covers that difference from the canonical."

**Why.** Those paragraphs are records, not terms (BOLT-834, as widened on 2026-11-07).
PrismVault's BOLT-842 moves them into its own `DECISIONS.md`. Leaving them out changes no
word of the agreement, so the site need not wait for that.

**Effect.** A body compare against canonical shows exactly those two paragraphs as the one
difference until PrismVault drops them. That is correct, and it is not drift (`AGENTS.md`,
the mirrors section). The text stays owner-approved and does not return to DRAFT.

## D002 — 2026-11-08: PrismEducate is listed as coming later, and the site counts no products

**Decision (owner, in this repository's session, BOLT-837).** PrismEducate stays in the
homepage's free-products block, marked as coming later, and the product count is dropped.
The wording he approved:

- Homepage eyebrow: "All free" (was "Three products, all free"). The heading "What you can
  install" is unchanged.
- PrismEducate's line: "An atlas of published scans, labelled and explained. Coming later, as
  its own download."
- `/system-requirements` lede: "All free, all Windows. MyBodyPrism Vault installs with the
  viewer. PrismEducate comes later, as its own download, and its requirements are not settled
  yet."

**Why.** He decided on 2026-10-22 (BOLT-262) that the launch is the viewer with MyBodyPrism
Vault bundled, and that PrismEducate ships later on its own, but both pages still said three
products ship. The block exists so mobile visitors, who have no sticky header, can find
PrismEducate, and `/educate` takes interest signups now. Without a count, the copy does not go
stale when a product's date moves.

**Effect.** The wording is owner-approved, not DRAFT. The header nav and `/educate` are
unchanged.

## D003 — 2026-11-08: the viewer's system requirements follow its recorded GPU test

**Decision (owner, in this repository's session, BOLT-839).** `/system-requirements` states
what the viewer measured, and says plainly what was only expected:

- **GPU floor:** from the viewer's recorded test (`release/v1.1`
  `docs/archive/2026-Q1-Q2/notes/2026-05-09-gpu-validation-results.md`). That is 2020-or-newer
  integrated graphics (a Snapdragon X laptop was tested and found acceptable) or any dedicated
  GPU. Intel Iris Xe and AMD Radeon integrated graphics are expected to work but were not
  tested. Older Intel HD graphics were too slow (HD Graphics 4400 was tested).
- **RAM:** from the viewer's `docs/system-requirements.md`: 8 GB, 16 GB for very large studies.
- **Disk:** from the signed installer's measured size, the same measurement as BOLT-835, not
  the viewer doc's 2 GB, which cannot hold a ~2.5 GB installer. Until then the row stays as it
  was.
- The RTX 2060 row and the "Intel HD, Iris not supported" sentence go. The page says nothing
  about streaming.

**Why.** The site's RTX 2060, 16 GB and 5 GB came in with `0e3cd9d` and cite no source, and
people read this page to decide whether to download. The viewer's recorded test is the only
measurement there is. The viewer's own requirements doc still offers browser streaming, which
v1.1 does not ship, so it is followed for RAM only; it gets its own request (BOLT-862).

**Effect.** BOLT-839 stays open until the disk row takes the installer's measured size.
