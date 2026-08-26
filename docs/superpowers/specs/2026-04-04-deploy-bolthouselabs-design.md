# Design: Ship bolthouselabs.com via GitHub Pages

**Date:** 2026-04-04
**Status:** Approved
**Execution mode:** Interactive (requires user account access for GitHub, GoDaddy, Formspree)

## Goal

Deploy the existing MyBodyPrism teaser site (`index.html`) to `www.bolthouselabs.com` using GitHub Pages, with a working email waitlist form. Media placeholders remain as-is for a future step.

## Context

- **Existing site:** Single `index.html` (1,031 lines) — dark cinematic teaser with particle hero, scroll-driven narrative, placeholder media slots, and a waitlist form stub.
- **Domain:** `www.bolthouselabs.com` owned via GoDaddy. No hosting currently — domain is parked.
- **No frameworks or build tools.** Pure static HTML/CSS/JS.

## Components

### 1. Repository Setup

- Initialize git in `C:\Projects_MedViz\mybodyprism-com`
- Add `.gitignore` to exclude `.superpowers/` and any other non-deployable content
- Create initial commit with `index.html`, `CLAUDE.md`, and this spec
- Push to a GitHub repository (public repo for free GitHub Pages)

### 2. Smoke Test Deploy

- Enable GitHub Pages on the repo: deploy from `main` branch, root (`/`)
- Verify the site loads at the GitHub Pages URL (`<username>.github.io/<repo-name>`)
- Confirm the following work correctly:
  - Hero particle canvas animation
  - Scroll reveal animations (all sections appear on scroll)
  - Responsive layout (desktop and mobile widths)
  - Waitlist form renders (submission not yet wired)
  - All fonts load (Playfair Display, Outfit via Google Fonts)

### 3. DNS Cutover — Point www.bolthouselabs.com to GitHub Pages

**GoDaddy DNS settings:**
- Add CNAME record: `www` → `<username>.github.io`
- For apex domain (`bolthouselabs.com` without www): add A records pointing to GitHub Pages IPs (185.199.108-111.153)

**GitHub repo settings:**
- Add `www.bolthouselabs.com` as custom domain in Pages settings
- This creates a `CNAME` file in the repo root
- Enable "Enforce HTTPS" once SSL certificate is provisioned (automatic, may take up to 30 minutes)

**Verification:**
- `www.bolthouselabs.com` loads the site over HTTPS
- `bolthouselabs.com` (apex) redirects to `www.bolthouselabs.com`

### 4. Waitlist Form — Formspree Integration

- Create a Formspree account and form (free tier: 50 submissions/month)
- Update `handleWaitlist()` in `index.html` to POST to the Formspree endpoint
- The existing form UI and success state are already built — only the fetch URL needs updating
- Test with a real email submission and confirm it appears in Formspree dashboard

### 5. Media Placeholders (Deferred)

Not in scope for this spec. The four placeholder media slots remain as styled placeholder divs. A separate spec will cover capturing real assets from MyBodyPrism and inserting them.

## Out of Scope

- Real media assets (renders, screenshots, videos)
- Analytics integration (Plausible, Fathom)
- Additional pages or sections
- Backend or database
- Custom domain email

## Verification Criteria

1. Site loads at `www.bolthouselabs.com` over HTTPS
2. All animations and interactions work (particles, scroll reveals, form)
3. Waitlist form captures emails to Formspree
4. Mobile layout is correct
5. Google Fonts load properly
