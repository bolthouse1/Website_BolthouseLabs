# 0003 — Waitlist capture through a third-party form endpoint, no backend

- **Status:** Accepted (2026-04-04)
- **Date recorded:** 2026-08-05
- **Reconstructed from:** the shipped form and handler, the governing
  instructions, and the archived deploy plan

## Context

The page needs exactly one piece of server behavior: accept an email address and
keep it somewhere the owner can read. Standing up a backend for that would mean
a server, a datastore, TLS, spam handling, and an operational burden wildly out
of proportion to a pre-launch teaser — and it would break the static-hosting
decision in
[`0001-static-single-file-site-on-github-pages.md`](0001-static-single-file-site-on-github-pages.md).

The archived deploy plan settled this at the outset: Formspree handles email
capture with no backend.

## Decision

Post the waitlist form directly from the browser to a **hosted form endpoint**
(Formspree), with the endpoint URL as the form's `action`
(`../../index.html:490`). A submit handler intercepts the event, POSTs
`FormData` with `Accept: application/json`, and swaps the form for an in-page
success line on a 2xx response (`../../index.html:585-604`). The plain `action`
attribute means the form still submits if JavaScript fails to run.

## Consequences

**Good.** Zero infrastructure, zero secrets in the repository, and no personal
data at rest under our control. The success path is instant and stays on the
page. The whole mechanism is fourteen lines of JavaScript and one attribute.

**Costs and boundaries.**

- The endpoint identifier is public in the client HTML. That is inherent to the
  approach, not an oversight; it is not a credential.
- Submitted addresses live with a third party, under that provider's terms. The
  page states no privacy policy — a consequence of the no-footer-links rule in
  the governing instructions.
- The free tier caps monthly submissions. Current headroom is external service
  state and is not observable from this repository.
- Failure is silent by design: a rejected fetch is logged to the console and the
  form remains on screen. There is no visible error message.
- Changing the endpoint changes where every future submission goes, with no
  in-repository signal that it happened. Treat the `action` value as
  configuration.

## Alternatives considered

- **A serverless function plus a datastore.** Rejected: infrastructure,
  credentials, and operational surface for one text field.
- **`mailto:` link.** Rejected: no capture, terrible conversion, exposes an
  address to scrapers.
- **A hosted email-marketing embed.** Rejected: third-party script on a page
  that ships zero external JavaScript, and it would undercut the trust strip's
  claims.
