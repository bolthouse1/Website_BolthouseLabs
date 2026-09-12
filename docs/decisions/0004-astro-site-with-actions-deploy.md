# 0004 — An Astro static site, built and deployed by GitHub Actions

- **Status:** Accepted (2026-08-26). Supersedes
  [0001](0001-static-single-file-site-on-github-pages.md); partly supersedes
  [0003](0003-formspree-waitlist-without-backend.md).
- **Date recorded:** 2026-09-12 — seventeen days after the decision, which is the
  gap this record exists to close. 0001's boundary clause required that reversing
  it get "its own record"; until now the reasoning below lived only in commit
  messages and `PROJECT_STATE.md`.
- **Reconstructed from:** the migration and cutover commits (hashes below,
  verified from `git log`), the governing instructions, and the cross-session
  coordination recorded at the time.

## Context

Until 2026-08-26 this repository was a one-file "coming soon" teaser with a
waitlist (0001, 0003). A fuller site already existed elsewhere: an Astro 6
marketing and portal site in `AWS-HIPPA/web/`, with the download flow, support,
system requirements, an account portal and eight legal pages. It had **never been
deployed anywhere**.

The v1.1 launch plan at the time (2026-08-24) was to deploy that site to Netlify
and repoint the domain's DNS at launch. Netlify had been chosen only because the
intended CloudFront route (`AWS-HIPPA/infra/stacks/marketing.py`) was blocked,
per the coordinating sessions at the time.

That plan carried a launch-day DNS cutover in a brand-new Route 53 zone, plus
waiting on certificate issuance — all on the busiest day of the launch. Meanwhile
`mybodyprism.com` already resolved to GitHub Pages, served from this repository.

## Decision

**Owner decision, 2026-08-26:** move webpage management for the v1.1 launch into
this repository, and serve the Astro site from the GitHub Pages host the domain
already points at.

Concretely, and reversing 0001 point by point:

| 0001 said | Now |
|---|---|
| One `index.html`; no framework, no build | Astro 6 multi-page site; `npm ci && npm run build` → `dist/` |
| Publish from the `master` branch root | Build and publish through GitHub Actions (`actions/deploy-pages`) |
| No CI | `.github/workflows/deploy.yml`, including a guard that fails the build if `dist/CNAME` is missing |
| Assets at the repository root | Served assets in `public/`; unpublished source art in `brand/` |
| `CNAME` at the root | `public/CNAME` — see the correction on [0002](0002-canonical-domain-mybodyprism-com.md) |

The migration also introduced the **`PUBLIC_DOWNLOADS_LIVE` build-time flag**
(`src/site-config.ts`), so the full site could publish before downloads were
ready: while false, `/pricing` takes waitlist signups instead of offering a
download.

Commits, verified from `git log`:

| | |
|---|---|
| `0e3cd9d` (2026-08-26) | Astro site migrated in; teaser folded into the homepage |
| `6e08906` (2026-08-26) | Download flow gated behind `PUBLIC_DOWNLOADS_LIVE` |
| `c6724ce` (2026-08-29) | Published — merge and Pages-source switch done together |
| `e97c3eb` (2026-09-02) | Free-beta copy (a later decision; listed for orientation) |

## Consequences

**Good.** No DNS change at launch — the launch flip (W4.4) is a repository
variable plus a workflow re-run, with no merge and no cutover. The site gained the
pages a shipping product needs. Builds are now checked in CI rather than first
seen on the live domain.

**Costs.**

- A toolchain and a lockfile to keep current, where 0001 had none.
- **Merge and Pages-source switch are coupled.** Deleting the root `index.html`
  while Pages still served the branch root would have taken the domain down;
  switching the source before a successful Actions run would have left nothing to
  serve. They were done in one motion at `c6724ce`.
- **`public/CNAME` is load-bearing.** If it stops reaching `dist/`, GitHub Pages
  unbinds the custom domain on the next deploy. The build guard makes that fail
  loudly rather than silently.
- `docs/` was written against 0001's design and was not rewritten. The entry-point
  documents warn readers to verify it against `src/`.

**Boundary this sets.** The download flow is gated, not absent. Flipping the flag
is an owner decision taken in the moment, after the release evidence it depends on
exists — `PROJECT_STATE.md` carries the exact procedure and the check that proves
the flip took.

## Relationship to 0003 — and why the feedback `mailto:` does not contradict it

The Formspree waitlist from 0003 survives, but only in the gated state, and
retires at the flip.

Since 2026-09-02 the site also carries a `mailto:support@mybodyprism.com` link for
**beta feedback**. 0003 rejected `mailto:` — but for **capture**: "no capture,
terrible conversion, exposes an address to scrapers." None of those reasons apply
to feedback. Feedback is not a list being built, so there is nothing to capture;
conversion is not the goal, a considered report is; and `support@` is already a
public address. The feedback link also matches the viewer's own feedback
mechanism, so a user sees one address in both places. Different job, different
tool — not a reversal.

## Alternatives considered

- **Deploy the Astro site to Netlify and repoint DNS at launch** — the 2026-08-24
  plan. Rejected by the owner: it put a DNS cutover and certificate wait on launch
  day, for a domain that already pointed at a working host.
- **CloudFront, as `AWS-HIPPA/infra/stacks/marketing.py` intended.** Blocked at the
  time; Netlify had been its stand-in.
- **Keep the one-file teaser and link out to the Astro site.** Rejected: two sites
  for one product, and the teaser could not carry the download flow, legal pages
  or account portal a shipping product needs.
