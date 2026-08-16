# Project state

Snapshot written 2026-08-05 from a read-only inspection of the working tree at
commit `9f6e1ba` on branch `master`, with a clean `git status`.

## Status

**Live and stable.** The site is feature-complete for its purpose as a
pre-launch teaser. There is no work in progress, no branch other than `master`,
and no stash. The tree was clean at inspection; the documentation set this
snapshot belongs to is the only uncommitted change, and committing it is a
housekeeping step rather than a product change.

[`STATUS.md`](STATUS.md) records the portfolio classification: tier T1 (ships),
status active, canonical of the two web repositories, last substantive commit
2026-06-21.

## What exists today

- One page, ten sections plus a footer, in [`index.html`](index.html)
- Six product screenshots and three logo files at the repository root
- A Formspree waitlist form as the single interactive element
- A custom domain pinned by [`CNAME`](CNAME)
- No build tooling, no dependency manifest, no tests, no CI workflow

## Recent movement (from `git log`, read-only)

| Date | Change |
|---|---|
| 2026-08-03 | Absolute paths in the archived deploy spec updated after the portfolio move to `C:\Projects_MedViz` |
| 2026-07-18 | `STATUS.md` added by the portfolio review |
| 2026-06-21 | Premium redesign; prism-mark hero logo; fixed top-bar logo removed |
| 2026-05-17 | "Introducing" section moved directly below the hero; longitudinal heading shortened |
| 2026-05-10 | Full cinematic rebuild with real imagery; "How It Works" section removed; custom domain switched to `mybodyprism.com` |
| 2026-04-04 | Initial commit, Formspree wiring, first custom domain |

## Next action

**Replace the six root-level `Picture*.png` screenshots with higher-resolution
exports of the same views from MyBodyPrism.** This is the only item the owner
recorded as a known deficiency: the current captures have low native resolution
and soften when scaled on large displays ([`CLAUDE.md`](CLAUDE.md), Content
Inventory and Future Additions). It requires no code change — the filenames and
`<img>` references stay as they are.

Everything else on [`docs/roadmap/BUILD_SEQUENCE.md`](docs/roadmap/BUILD_SEQUENCE.md)
is optional or launch-gated.

## Open questions

These cannot be answered from inside this repository and are carried as unknowns
in [`docs/architecture/EVIDENCE.md`](docs/architecture/EVIDENCE.md):

1. **Live DNS and redirect state.** `STATUS.md` records that the GoDaddy 301
   forwarding for `bolthouselabs.com` was abandoned on 2026-05-17 and that the
   domain is now served by GitHub Pages from a separate `bolthouselabs-com`
   repository. `CLAUDE.md` has been corrected to match, but neither DNS nor the
   other repository is observable from here, so the live state is unverified.
2. **Formspree quota headroom.** The free-tier submission cap and current usage
   are external service state.
3. **Launch date.** Nothing in the repository says when "Coming soon" becomes a
   shipping product, or what the page becomes at that point.
4. **Higher-resolution asset availability.** Whether better exports already
   exist in the MyBodyPrism application or must be re-captured.

## Guardrails for the next change

- `index.html` is the only executable artifact. Keep it self-contained.
- Do not add a navigation menu, footer links, or a second page without an
  explicit owner decision — the single-page teaser shape is a stated rule.
- Do not rename this repository folder or the `Picture*.png` files.
- Deploy is a push to `master`; there is no staging environment.
