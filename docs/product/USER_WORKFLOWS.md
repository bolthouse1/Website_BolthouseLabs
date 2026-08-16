# User workflows

Who interacts with this repository and its output, what they are trying to
achieve, and the exact path each one takes. Behavior claims cite
`index.html`; see [`../architecture/EVIDENCE.md`](../architecture/EVIDENCE.md).

## Users and outcomes

| User | Goal | Evidence for this understanding |
|---|---|---|
| **Prospective customer** | Understand what MyBodyPrism does and be told when it launches | The page's entire structure: narrative sections ending in a waitlist form (`index.html:365-496`) |
| **Owner / maintainer** | Change copy or imagery and publish it | Governing instructions describe push-to-`master` deployment; no other pipeline exists |
| **Future coding agent** | Make a safe change without prior context | This documentation set, entered through [`../../START_HERE.md`](../../START_HERE.md) |

## Primary workflows

### W1 — Visitor reads the story and joins the waitlist

**Trigger:** The visitor opens the custom domain, or follows a shared link whose
preview card is built from the Open Graph tags (`index.html:9-12`).

**Path:**

1. The hero fills the viewport: particle canvas, brand mark, the headline "What
   if you could truly see inside your own body?", and a "Coming soon" tagline
   with a scroll cue.
2. Scrolling past ~80px fades the cue (`index.html:577-582`).
3. Each section fades and rises into place as it crosses the viewport threshold,
   with staggered delays inside a section (`index.html:563-574`).
4. The visitor passes "Introducing" (what it is), "The diagnosis" (the problem,
   in a traditional viewer), the pivot quote, "The reveal" (the same heart, in
   3D), multi-year progression, detail rendering, and annotation.
5. The trust strip asserts HIPAA compliance, end-to-end encryption, and data
   ownership.
6. The waitlist section presents one email field and one button.

**Completion:** The visitor submits an address. The page intercepts the submit,
POSTs the form data to the third-party endpoint, hides the form, and reveals
"Thanks — you're on the list." without a navigation (`index.html:585-604`).

**Failure and recovery:**

- *Network or service failure:* the fetch rejects, the error is logged to the
  console, and the form stays on screen with the address still in it. The
  visitor can press the button again. No error message is shown.
- *Non-2xx response:* the success state is not shown and the form remains
  visible; again, no explicit error message.
- *Invalid address:* the browser's native `required` and `type="email"`
  validation blocks submission before any JavaScript runs (`index.html:491`).
- *Reduced-motion preference:* the particle field never starts and every
  revealed element is visible immediately (`index.html:349-352`, `index.html:554`).
- *Fonts blocked:* the page falls back to system typefaces; layout and reading
  order survive.

### W2 — Visitor on a phone

Same journey. Below 768px, section padding tightens, the trust badges stack
vertically, and the hero logo scales to 60% of viewport width
(`index.html:355-362`, `index.html:112-117`). Images are fluid with
`max-width: 100%`. There is no separate mobile page and no menu to open.

### W3 — Maintainer changes copy or swaps an image

**Trigger:** New copy, or better exports of the product screenshots.

**Path:**

1. Read the Brand Identity, Product Model, and Design Rules sections of
   [`../../CLAUDE.md`](../../CLAUDE.md) before writing any visible text.
2. Edit `index.html` directly, or drop a replacement PNG at the repository root
   using the existing filename.
3. Open `index.html` in a browser from disk. Scroll the whole page, check the
   reveals, narrow the window to ~375px, and confirm the fonts load.
4. Commit and push to `master`.
5. GitHub Pages rebuilds and the change is live in one to two minutes.

**Completion:** The live domain shows the change.

**Failure and recovery:** There is no staging environment and no automated
check, so a mistake is publicly visible until reverted. Recovery is
`git revert` plus a push — the same one-to-two-minute path.

### W4 — Agent picks up the repository cold

**Trigger:** A session with no memory is asked to change something here.

**Path:** [`../../START_HERE.md`](../../START_HERE.md) →
[`../../CLAUDE.md`](../../CLAUDE.md) for the rules →
[`../../PROJECT_STATE.md`](../../PROJECT_STATE.md) for the current state → the
specific document named for the task. [`../../AGENTS.md`](../../AGENTS.md)
carries the condensed operating rules.

**Completion:** The agent can state what the page is, what it must never say,
and what the next action is, without reading the whole source.

## Gaps and unknowns

- **No confirmation email.** The visitor sees an in-page success line; whether
  the form provider sends anything back is external configuration.
- **Silent failure surface.** The submit path has no visible error state; a
  failed submission looks like an unresponsive button.
- **No privacy policy or terms.** The page collects an email address and links
  to no policy — a consequence of the no-footer-links rule.
- **No post-launch journey.** Nothing in the repository describes what the
  visitor does after MyBodyPrism ships; see
  [`../architecture/TARGET_ARCHITECTURE.md`](../architecture/TARGET_ARCHITECTURE.md).
- **Unmeasurable outcomes.** With no analytics, the funnel from arrival to
  submission cannot be observed.

Requirements behind these journeys are in [`PRD.md`](PRD.md); the mechanics are
in [`../architecture/ARCHITECTURE.md`](../architecture/ARCHITECTURE.md).
