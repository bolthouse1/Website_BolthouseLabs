# Evidence

The citation ledger behind this documentation set. Every claim below is labeled
with an evidence class — **observation** (read directly from a repository path
and line range, or from a deterministic inventory field), **inference**
(reasoned from observations), or **unknown** (material question that the
repository cannot answer). There are no owner-confirmed claims in this run.

## Run metadata

| Field | Value |
|---|---|
| Run | `medviz-20260805-01` |
| Date | 2026-08-05 |
| Depth preset | `standard` — structure inventory plus bounded reads of selected safe source |
| Authorization | Autonomous documentation; source and Git state read-only, no Git mutation |
| Tree state | Branch `master`, commit `9f6e1ba`, clean working tree |
| Inventory | 18 files, 18 directories, 46 entries walked; no hard traversal limit reached |
| Languages seen | HTML (4 files), Markdown (4), Python (1), JSON (1) |
| Package manifests | none |

Files read in full as evidence: `index.html`, `CLAUDE.md`, `STATUS.md`,
`CNAME`, `.gitignore`, `.claude/settings.json`,
`docs/superpowers/plans/2026-04-04-deploy-bolthouselabs.md`,
`docs/superpowers/specs/2026-04-04-deploy-bolthouselabs-design.md`, and the
header of `docs/create_asset_guide.py`. Git history was read read-only via
`git status --porcelain` and `git log`.

## Claims and citations

### Structure and delivery

| ID | Claim | Class | Citation |
|---|---|---|---|
| C01 | `index.html` is the single entry point and carries head metadata, the Open Graph card, and the Google Fonts link | observation | `index.html:1-15` |
| C02 | All styling lives in one `<style>` block driven by `:root` custom properties | observation | `index.html:16-30` |
| C03 | Scroll reveal, staggered delays, reduced-motion opt-out, and a 768px breakpoint are CSS-level | observation | `index.html:339-362` |
| C04 | The body contains ten `<section>` elements and one `<footer>` | observation | `index.html:365-500` |
| C05 | The hero is full-viewport with a particle canvas and the `logo-mark-t.png` brand image; there is no top bar or wordmark element | observation | `index.html:368-376` |
| C06 | "Introducing" is the second section and states the three product modalities in one sentence | observation | `index.html:379-394` |
| C07 | Five narrative sections carry `Picture1`, `Picture4`, `Picture3`, `Picture5`, and `Picture6` in that document order | observation | `index.html:397-472` |
| C08 | The trust strip asserts HIPAA compliance, end-to-end encryption, and data ownership | observation | `index.html:475-483` |
| C09 | The waitlist form posts to a hosted third-party endpoint declared in its `action` | observation | `index.html:486-496` |
| C10 | "Bolthouse Labs, Inc." appears once, in the footer copyright | observation | `index.html:498-500` |
| C11 | Behavior is four self-contained IIFEs — particles, scroll reveal, cue fade, and submit handler — with no globals | observation | `index.html:502-605` |
| C12 | The particle field is skipped entirely under `prefers-reduced-motion: reduce` | observation | `index.html:554` |
| C13 | A failed submission logs to the console and leaves the form visible with no error message | observation | `index.html:585-604` |
| C14 | The custom domain is pinned to the apex host by the repository-root `CNAME` | observation | `CNAME:1` |
| C15 | `.claude/` and `.superpowers/` are gitignored and never published | observation | `.gitignore:1-5` |
| C16 | A local Claude Code permission file exists but is untracked | observation | `.claude/settings.json:1-13` |
| C17 | The repository has no package manifest, no lockfile, no test file, and no CI workflow; the page loads no local script or stylesheet | inference from the deterministic inventory | `index.html:13-15` |
| C18 | Deployment is a push to `master` published by GitHub Pages, with the `CNAME` file pinning the domain, no staging and no CI check | observation (documented) | `CLAUDE.md:93-101` |

### Product, brand, and constraints

| ID | Claim | Class | Citation |
|---|---|---|---|
| C19 | Stack, hosting, canonical domain, and form provider are recorded in the governing instructions | observation | `CLAUDE.md:11-19` |
| C20 | Brand identity, palette, tone, and the product model the copy may describe are owner-fixed | observation | `CLAUDE.md:20-34` |
| C21 | Copy must not name the cloud provider or mention who pays streaming costs; HIPAA compliance is stated | observation | `CLAUDE.md:27-34` |
| C22 | Design rules forbid navigation, footer links beyond copyright, and non-dark media | observation | `CLAUDE.md:85-92` |
| C23 | The six root PNGs are the real narrative assets, and the owner records them as low native resolution | observation | `CLAUDE.md:53-68` |
| C24 | Recorded future additions: higher-resolution exports, optional motion, a possible WebGL viewer, a possible second page, privacy-respecting analytics | observation | `CLAUDE.md:102-108` |
| C25 | The portfolio classifies this repository as tier T1, active, canonical of the two web repositories, last substantive commit 2026-06-21 | observation | `STATUS.md:1-13` |

### Reconciliation — where documents disagreed

| ID | Finding | Class | Citation | Resolution |
|---|---|---|---|---|
| C26 | The page really has ten sections, with "Introducing" second and no "How It Works" section | observation | `index.html:365-500` | The pre-run governing instructions described an eleven-section arc with "How It Works" and "Introducing" eighth. The artifact won; `CLAUDE.md:35-52` now matches it. The superseded text is recoverable with `git show 9f6e1ba:CLAUDE.md` |
| C27 | The hero carries an image brand mark; the page has no top bar and no wordmark element | observation | `index.html:368-376` | The pre-run governing instructions described a top-bar "MyBodyPrism" wordmark, removed in the 2026-06-21 redesign. `CLAUDE.md:20-26` now matches the artifact |
| C28 | The corporate domain is served from a separate repository; GoDaddy 301 forwarding was abandoned on 2026-05-17 | observation | `STATUS.md:25-29` | The pre-run governing instructions still described the forwarding arrangement. The status card is the later, more specific authority and won; `CLAUDE.md:11-19` now records the correction and flags it as unverifiable from here |
| C29 | The status card also records that the DNS zone is shared with backend email records | observation | `STATUS.md:25-29` | Accepted as a constraint; not verifiable from this repository |
| C30 | The archived 2026-04 plan and design spec target `www.bolthouselabs.com`, and the asset-guide generator still prints that domain | observation | `docs/superpowers/plans/2026-04-04-deploy-bolthouselabs.md:183-215`, `docs/create_asset_guide.py:53` | Superseded by `CNAME` (C14). The archived documents are historical records and were intentionally left as written |
| C31 | The archived design spec confirms the original constraints: one `index.html`, no frameworks, no build tools | observation | `docs/superpowers/specs/2026-04-04-deploy-bolthouselabs-design.md:11-16` | Consistent with the artifact; used as context for decision record 0001 |
| C32 | The archived plan records that a hosted form service was chosen so that no backend would be required | observation | `docs/superpowers/plans/2026-04-04-deploy-bolthouselabs.md:5-9` | Consistent with the artifact (C09); used as context for decision record 0003 |

### Unknowns

| ID | Question | Why it is unresolved |
|---|---|---|
| U01 | What currently serves `bolthouselabs.com`, and whether any redirect is live | DNS and the separate repository are outside this working tree; two in-repository sources disagree and only the later one can be preferred, not verified |
| U02 | Form-provider quota headroom and submission volume | External service account state |
| U03 | The MyBodyPrism launch date, and what the page becomes at launch | No evidence anywhere in the tree; owner intent |
| U04 | Whether higher-resolution exports of the six views already exist | The source application is outside this repository |
| U05 | The live DNS zone contents, including the shared email records | External infrastructure, not observable from the tree |
| U06 | Whether any analytics is wanted before launch | Recorded as a possibility only; no decision in the tree |

## Coverage

**What was excluded, and why.**

- Binary content — 10 files (the PNG assets) — counted but not read; image
  bytes are not documentation evidence.
- Version-control metadata — the `.git` directory — excluded at its boundary.
- Unsupported content — 8 entries, including the `.docx` asset guide and stale
  `.pid`/state files under the untracked `.superpowers/` directory — counted
  without content reading. The asset guide's intent is covered by its generator
  script instead.

**What could not be checked.**

- Every external dependency: DNS, the GitHub Pages configuration, the form
  provider account, and Google Fonts availability. Nothing outside the working
  tree was contacted; the workflow is local-only and read-only.
- The live rendered page. No browser was driven and no network request was made,
  so visual and runtime behavior are described from source, not from
  observation of the running site.
- Owner intent. The owner was unavailable during this run, so no question was
  asked and every owner-intent gap is recorded above as an unknown rather than
  resolved.

**What this run wrote.** Fourteen documents were created — `README.md`,
`START_HERE.md`, `PROJECT_STATE.md`, `AGENTS.md`, the five documents under
`docs/architecture/` and `docs/product/`, `docs/roadmap/BUILD_SEQUENCE.md`,
`docs/ENGINEERING_HANDBOOK.md`, and three records under `docs/decisions/` — and
one was updated: `CLAUDE.md`, to correct the page-structure, brand-mark, and
corporate-domain statements listed under C26–C28. No source file, asset, or Git
object was touched.

**What was verified after writing.** Deterministic validation confirmed that
every citation path and line range in this run resolves inside the target, that
each written document's hash matches its planned preview, that only documentation
paths changed, and that source files and Git state are byte-identical to the
pre-write baseline.

## How to re-derive this

Nothing here requires special tooling. Open `index.html` and count the sections;
read `CLAUDE.md` for the rules; run `git log --oneline` for the history; read
`CNAME` for the host. If this ledger and the file disagree, the file is right.
