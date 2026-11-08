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
