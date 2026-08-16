# Build sequence

Ordered view of what has shipped and what is queued. Completed milestones are
reconstructed from the commit history (`git log`, read-only); pending
milestones come from the owner's "Future Additions" list in
[`../../CLAUDE.md`](../../CLAUDE.md) and are unscheduled unless marked otherwise.

## Milestones

### Shipped

| # | Milestone | Landed | Validation |
|---|---|---|---|
| M1 | Repository initialized; teaser page committed | 2026-04-04 | Page loads from disk |
| M2 | Waitlist wired to a third-party form endpoint | 2026-04-04 | Test submission reaches the provider |
| M3 | Published on GitHub Pages with a custom domain | 2026-04-04 → 2026-04-10 | Site reachable over HTTPS |
| M4 | Media asset guide written for placeholder replacement | 2026-04-08 | `docs/MyBodyPrism_Media_Asset_Guide.docx` |
| M5 | Canonical domain switched to `mybodyprism.com` | 2026-05-10 | `CNAME` pins the apex host |
| M6 | Full cinematic narrative rebuilt with real MyBodyPrism imagery; all six media slots filled | 2026-05-10 | Every section renders a real capture |
| M7 | Copy tightened; "How It Works" section removed with its CSS | 2026-05-10 | No orphaned rules; narrative still reads |
| M8 | Narrative reordered — "Introducing" moved directly below the hero | 2026-05-17 | Product named before the problem story |
| M9 | Premium redesign; prism-mark hero logo; fixed top-bar logo removed | 2026-06-21 | Hero carries the brand; no header chrome |
| M10 | Portfolio status card added | 2026-07-18 | `STATUS.md` |
| M11 | Absolute paths corrected after the portfolio move | 2026-08-03 | Archived spec matches the new root |
| M12 | Durable project context documented | 2026-08-05 | This documentation set |

The site has been feature-complete for its teaser purpose since M9.

### Queued

| # | Milestone | Depends on | Gate | Status |
|---|---|---|---|---|
| N1 | Replace the six `Picture*.png` captures with higher-resolution exports of the same views | Exports available from MyBodyPrism | Renders crisp at ≥2560px and clean at 375px | **Next** |
| N2 | Optionally replace one still with slow-rotation motion in "The reveal" or "See every detail" | N1 | Owner picks the section; autoplay-muted works on mobile; reduced-motion path intact | Optional |
| N3 | Privacy-respecting analytics (Plausible, Fathom, or Cloudflare Web Analytics) | Owner decision that measurement is wanted | Cookieless; trust-strip claims stay true | Optional |
| N4 | Embedded WebGL 3D viewer on the page | New decision record | Mid-tier mobile renders it; still-image fallback survives | Speculative |
| N5 | Post-launch information architecture — a second page, or a converted teaser | Product launch; owner relaxing the single-page rule | Narrative still reads end-to-end | Launch-gated |

N2 through N5 are recorded ideas, not commitments. N4 and N5 each break a
current architectural property (zero external JavaScript; no navigation), so
neither should start without a record in [`../decisions/`](../decisions).

## Next action

**Swap in higher-resolution exports for the six root-level `Picture*.png`
files, keeping the existing filenames.** The owner recorded the current captures
as low native resolution and prone to softening on large screens; this is the
only known deficiency in the shipped page. It touches no markup, no CSS, and no
JavaScript.

Verification: load the page on a large high-density display and confirm each
capture is crisp, then narrow to 375px and confirm nothing overflows.

## Blockers and unknowns

- **N1** is blocked only on the assets themselves; whether better exports
  already exist is unknown from this repository.
- **N3 and N5** depend on owner intent that is not recorded anywhere in the
  tree — no launch date, no measurement decision.
- Live external state (DNS, form provider account, Pages settings) cannot be
  verified from here, so no milestone above is gated on it.

Unknowns are carried with their reasons in
[`../architecture/EVIDENCE.md`](../architecture/EVIDENCE.md); current state is
in [`../../PROJECT_STATE.md`](../../PROJECT_STATE.md).
