# Product requirements

Requirements for **this website**, not for the MyBodyPrism application it
advertises. Statements about the application itself are recorded as documented
owner intent, sourced from the governing instructions in
[`../../CLAUDE.md`](../../CLAUDE.md), and are not verifiable from this
repository.

## Product statement

**The problem.** Someone handed a CD of their own medical scans cannot read
them. Traditional DICOM viewers show grayscale cross-sections and no volumetric
view — the page opens by showing exactly that, then shows the same data rendered
in MyBodyPrism.

**The user.** A prospective MyBodyPrism customer: a patient, or the family of
one, who has their own imaging and wants to understand it. The founder's own
cardiac sarcoidosis diagnosis is the narrative spine, which sets the tone as
personal rather than corporate.

**What this site must do.** Convince that visitor, in one scroll, that seeing
their own body in 3D is possible — and capture their email so they can be told
when it ships. It is a pre-launch teaser: the hero says "Coming soon" and the
page offers nothing to buy or download.

**Product model the copy is allowed to describe.** MyBodyPrism is self-service,
in three modalities: a desktop application the user installs and loads their own
DICOM files into; a secure cloud upload with a streaming web viewer; and VR
streaming to a headset over the internet. The page states this in one sentence
in the "Introducing" section.

## Scope and success

### Functional requirements

| # | Requirement | Where it is satisfied |
|---|---|---|
| F1 | One page, one vertical scroll, no navigation | `index.html:365-500` |
| F2 | Open on a full-viewport hero with the brand mark and the "Coming soon" tagline | `index.html:368-376` |
| F3 | State the product and its three modalities once, near the top | `index.html:383` |
| F4 | Carry the diagnosis → pivot → reveal narrative with real MyBodyPrism imagery | `index.html:397-432` |
| F5 | Show longitudinal comparison, detail rendering, and annotation capability | `index.html:435-472` |
| F6 | Assert HIPAA compliance, end-to-end encryption, and data ownership as a trust strip | `index.html:475-483` |
| F7 | Capture an email address with immediate in-page success feedback | `index.html:486-496`, `index.html:585-604` |
| F8 | Name Bolthouse Labs, Inc. exactly once, in the footer copyright | `index.html:498-500` |
| F9 | Work on phones — mobile-first responsive with a 768px breakpoint | `index.html:355-362` |
| F10 | Respect `prefers-reduced-motion` for both the particle field and the reveals | `index.html:349-352`, `index.html:554` |

### Content and brand requirements

| # | Requirement |
|---|---|
| B1 | Dark, cinematic, clinical tone. Premium, not playful, not corporate. |
| B2 | Palette fixed by CSS custom properties: near-black backgrounds, cyan accent, warm accent, muted greys (`index.html:17-30`). |
| B3 | Playfair Display for display type, Outfit for body and UI (`index.html:15`). |
| B4 | Minimal text; imagery carries the argument. |
| B5 | All media sits on dark or black backgrounds so it blends into the page. |
| B6 | Animations subtle and cinematic, never flashy. |

### Safety, privacy, and claim requirements

| # | Requirement |
|---|---|
| S1 | Never name the cloud provider behind the hosted product. |
| S2 | Never state that the user pays streaming costs. |
| S3 | Never present MyBodyPrism as a concierge or mail-in service — it is self-service. |
| S4 | HIPAA compliance is stated in the product copy and in the trust strip. |
| S5 | No tracking scripts, no cookies, no analytics are present today. |
| S6 | The only visitor data leaving the page is the submitted email address, which goes directly to a third-party form service. |
| S7 | No credentials or secrets in the tracked tree; the form endpoint is public by necessity. |

### Success criteria

1. The page loads and renders correctly on desktop and phone with no console
   errors and no layout shift.
2. A submitted email reaches the form provider and the visitor sees the success
   line without leaving the page.
3. The custom domain resolves over HTTPS with a valid certificate.
4. The narrative reads end-to-end without a scroll dead-spot: every section
   reveals on entry.
5. Nothing on the page violates a claim constraint in S1–S4.

### Explicitly out of scope

- Any product functionality: no viewer, no upload, no account, no purchase.
- Navigation, hamburger menus, footer links, and additional pages.
- A backend, database, or server-side form handling.
- Analytics, A/B testing, and personalization.
- Real-time or live data of any kind.
- The corporate domain, which a separate repository serves.

## Traceability

Structure and behavior claims resolve through
[`../architecture/ARCHITECTURE.md`](../architecture/ARCHITECTURE.md) to
`index.html`. Brand, tone, and claim constraints come from the owner-authored
[`../../CLAUDE.md`](../../CLAUDE.md). Visitor-facing journeys are detailed in
[`USER_WORKFLOWS.md`](USER_WORKFLOWS.md). Every citation is listed in
[`../architecture/EVIDENCE.md`](../architecture/EVIDENCE.md).
