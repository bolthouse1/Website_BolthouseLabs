# 0002 — `mybodyprism.com` is the canonical domain

- **Status:** Accepted (2026-05-10), superseding the original 2026-04 plan.
  **Still in force** — see the 2026-09-12 correction below.
- **Date recorded:** 2026-08-05
- **Reconstructed from:** the `CNAME` file, the governing instructions, the
  portfolio status card, and the archived deploy plan

> **Correction 2026-09-12 — the decision stands; the file moved.** The `CNAME` file
> is no longer at the repository root. The 2026-08-26 Astro migration (`0e3cd9d`,
> recorded in [0004](0004-astro-site-with-actions-deploy.md)) moved it to
> **`public/CNAME`**, so Astro copies it into `dist/` on every build; the
> `../../CNAME` link below now points at nothing. Two consequences changed with the
> move: removing it no longer silently falls back to the `github.io` path, because
> the deploy workflow now **fails the build** if `dist/CNAME` is missing; and the
> "one product's teaser" framing below predates the site becoming the full product
> site. The canonical host is unchanged — apex `mybodyprism.com`, `www` 301s to it.

## Context

The original plan shipped this site at the **corporate** domain. The archived
2026-04-04 plan and design spec both target `www.bolthouselabs.com`, down to the
DNS table and the Pages custom-domain call
([`../superpowers/plans/2026-04-04-deploy-bolthouselabs.md`](../superpowers/plans/2026-04-04-deploy-bolthouselabs.md)).
The generator for the media asset guide still carries that domain on its title
page.

The site, however, is not about the company. It is one product's teaser, and the
copy names the product everywhere and the company once, in the footer. Marketing
a product from a corporate host buries the brand the page is trying to build.

## Decision

Serve this repository at **`mybodyprism.com`** (apex), pinned by the
[`../../CNAME`](../../CNAME) file at the repository root. The product domain,
not the corporate domain, is canonical for this site.

The corporate domain is handled separately, outside this repository. Per the
portfolio status card in [`../../STATUS.md`](../../STATUS.md), the GoDaddy 301
forwarding described in the governing instructions was abandoned on 2026-05-17,
and `bolthouselabs.com` is now served by GitHub Pages from a separate
`bolthouselabs-com` repository. That arrangement is not observable from here and
is carried as an unknown in
[`../architecture/EVIDENCE.md`](../architecture/EVIDENCE.md).

## Consequences

- The `CNAME` file is load-bearing configuration. Removing it unpins the domain
  and the site falls back to the `github.io` path.
- This repository owns exactly one host. Anything about the corporate domain
  belongs to the other repository.
- The DNS zone for the product domain is shared with backend email records for
  the same domain, so nameserver-level changes are out of bounds from this
  repository's side — the governing instructions and the status card both flag
  it.
- Documentation elsewhere in the tree still references the old corporate domain:
  the archived deploy plan and spec (historical, intentionally left as written)
  and the asset-guide generator's title page. Treat `CNAME` as the source of
  truth for what host serves this page.

## Alternatives considered

- **Keep `www.bolthouselabs.com` as canonical.** Rejected: the page markets a
  product, not the company, and the company name is deliberately near-invisible
  in the copy.
- **Serve both domains from this repository.** Not possible — GitHub Pages pins
  one custom domain per site, which is what makes `CNAME` a single-value file.
- **Apex versus `www`.** The apex was chosen; the `CNAME` file contains the bare
  domain.
