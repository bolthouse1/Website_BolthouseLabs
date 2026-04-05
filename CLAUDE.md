# CLAUDE.md — MyBodyPrism Teaser Website

## Project Overview
Single-page teaser/landing site for **MyBodyPrism**, a product of **Bolthouse Labs, Inc.** The site is a dark, cinematic, scroll-driven experience designed to build anticipation before product launch. It tells the founder's personal story (cardiac sarcoidosis diagnosed in 2013) and reveals what MyBodyPrism does through a visual "before/after" narrative arc.

## Tech Stack
- **Pure static site**: Single `index.html` file. No frameworks, no build tools, no dependencies.
- **Fonts**: Google Fonts — Playfair Display (display/headings), Outfit (body/UI)
- **Hosting target**: Digital Ocean App Platform (static site), domain via GoDaddy CNAME
- **SSL**: Automatic via Digital Ocean
- **Email capture**: Will use Formspree (or similar). The `handleWaitlist()` function has a TODO placeholder for the form endpoint.

## Brand Identity
- **Company**: Bolthouse Labs, Inc.
- **Product**: MyBodyPrism — "See Yourself Like Never Before"
- **Color palette**: Dark backgrounds (#050508, #08080d), cyan accent (#00d4ff), warm accent (#ff6b4a for highlights), muted text (#8a8790, #4a4850)
- **Tone**: Premium, clinical, cinematic. Not playful, not corporate. Think medical technology meets movie trailer.
- **Logo**: "BOLTHOUSE LABS" in top bar — "Bolthouse" in cyan, "Labs" in secondary gray. All caps, letter-spaced.

## Product Model (Critical Context)
MyBodyPrism is NOT a concierge/mail-in service. It is self-service:
1. **Desktop app** — User installs locally, loads their own DICOM files (from their own CD, downloaded files, etc.)
2. **Secure cloud upload + streaming viewer** — User uploads files to HIPAA-compliant cloud, views through a premium streaming web viewer
3. **VR streaming** — User can stream immersive VR directly to their headset over the internet

Do NOT mention which cloud provider (AWS/Azure). Do NOT mention that the user pays for streaming costs. The site is fully **HIPAA compliant** — this is called out in the product copy and in a trust badge strip.

## Page Structure (Narrative Arc)
The page is a single vertical scroll with 7 sections + a trust strip:

1. **HERO** — Full viewport. Animated particle canvas background. Headline: "What if you could truly see inside your own body?" Subline: "MyBodyPrism · Coming Soon". Scroll cue at bottom.

2. **THE DIAGNOSIS** — Founder's story. "In 2013, I was diagnosed with cardiac sarcoidosis..." followed by a placeholder for a flat clinical CT-PET slice image (the "before" — should feel cold, clinical, hard to interpret). **16:9 or 4:3, PNG/JPG.**

3. **EMOTIONAL PIVOT** — Single italic line: "I couldn't understand my own disease." Cyan accent line below.

4. **THE REVEAL** — "So I built something better." Hero placeholder for a showstopper 3D volumetric render video/image (slow rotation, cinematic lighting, dark background). **16:9, MP4 or PNG/WebP, autoplaying muted looping if video.** Optional second placeholder for a cardiac detail close-up.

5. **PRODUCT TEASE** — "Introducing" badge. Headline + description of MyBodyPrism (desktop app, cloud streaming, VR streaming, HIPAA compliant). Placeholder for product UI screenshot/screen recording. **16:9, MP4/PNG/WebP.**

6. **HOW IT WORKS** — Three steps: "Load your scans" → "We transform it" → "Explore your body in 3D". Each has an SVG icon, title, and short description.

7. **TRUST STRIP** — Three badges: HIPAA Compliant, End-to-End Encrypted, Your Data Stays Yours. Subtle, between How It Works and Waitlist.

8. **WAITLIST** — "Be the first to see yourself like never before." Email input + submit button. Success state swaps form for confirmation message.

9. **FOOTER** — Bolthouse Labs, Inc. © 2026.

## Placeholder Media Spec
All placeholders are clearly labeled `<div class="placeholder-media">` blocks with grid backgrounds and descriptive labels. When replacing with real content:
- Replace the entire `<div class="placeholder-inner">...</div>` with an `<img>` or `<video>` tag
- The parent `.placeholder-media` container handles aspect ratio and border styling
- For video: use `autoplay muted loop playsinline` attributes
- Keep dark backgrounds on all media to match the site aesthetic

### Content Hit List
| # | Type | Description | Aspect Ratio |
|---|------|-------------|-------------|
| 1 | Image | Flat clinical CT-PET slice (the "before") | 16:9 or 4:3 |
| 2 | Video or Image | Hero 3D volumetric render, slow rotation, cinematic | 16:9 |
| 3 | Image (optional) | Close-up cardiac detail render | 16:9 |
| 4 | Image or Video | BodyPrism viewer UI with loaded case | 16:9 |
| 5 | SVG icons (×3) | Already have basic SVGs — can be upgraded | 80×80 |

## CSS Architecture
- All styling is in a single `<style>` block in the HTML file
- CSS custom properties (variables) defined in `:root` for all colors, fonts
- Scroll-reveal animations via `.reveal` class + IntersectionObserver
- Staggered delays via `.reveal-delay-1` through `.reveal-delay-4`
- Responsive breakpoint at 768px (mobile)
- Hero particle effect is a `<canvas>` element with vanilla JS animation

## JavaScript
All JS is in a single `<script>` block at the bottom:
- **Particle canvas**: Animated network/node particle effect on hero section
- **Scroll reveal**: IntersectionObserver adds `.visible` class to `.reveal` elements
- **Waitlist form**: `handleWaitlist()` — validates email, posts to form endpoint (TODO), shows success state
- **Scroll cue fade**: Hides the "Scroll" indicator after user begins scrolling

## Design Rules
- NO navigation menu, hamburger, or header links. Single page, scroll only.
- NO footer links beyond copyright. This is a teaser, not a full site.
- Minimal text. Let visuals do the heavy lifting.
- All media should have dark/black backgrounds to blend with the site.
- Animations should be smooth and subtle — cinematic, not flashy.
- Mobile-first responsive. Everything must work on phones.

## Deployment Notes
- Push to GitHub repo
- Connect to Digital Ocean App Platform as static site
- Point GoDaddy domain via CNAME record to DO-provided URL
- SSL is automatic
- No server, no database, no backend (until Formspree is wired up for email capture)

## Future Additions (Not Yet)
- Real media assets replacing placeholders
- Formspree integration for email capture
- Possible: WebGL 3D viewer embedded directly on the page
- Possible: Second page for more detailed product info post-launch
- Analytics (likely simple, privacy-respecting — Plausible or Fathom)
