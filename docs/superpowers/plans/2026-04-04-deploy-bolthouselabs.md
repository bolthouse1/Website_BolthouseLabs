# Deploy bolthouselabs.com Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use god-mode:subagent-driven-development (recommended) or god-mode:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy the existing MyBodyPrism teaser site to `www.bolthouselabs.com` via GitHub Pages with a working Formspree waitlist form.

**Architecture:** Static single-file site (`index.html`) deployed directly from a GitHub repo via GitHub Pages. GoDaddy DNS CNAME points `www.bolthouselabs.com` to GitHub Pages. Formspree handles email capture with no backend.

**Tech Stack:** Static HTML/CSS/JS, GitHub Pages, GoDaddy DNS, Formspree (free tier)

---

### Task 1: Initialize Git Repository

**Files:**
- Create: `C:\Projects_MedViz\mybodyprism-com\.gitignore`

- [ ] **Step 1: Create .gitignore**

```
# Brainstorm session files
.superpowers/
```

- [ ] **Step 2: Initialize git and create initial commit**

```bash
cd C:/Projects_MedViz/mybodyprism-com
git init
git add .gitignore index.html CLAUDE.md docs/
git commit -m "Initial commit: MyBodyPrism teaser site"
```

Expected: Clean commit with `index.html`, `CLAUDE.md`, `.gitignore`, and `docs/` directory.

- [ ] **Step 3: Verify repo state**

```bash
git status
git log --oneline
```

Expected: Clean working tree, one commit.

---

### Task 2: Create GitHub Repository and Push

- [ ] **Step 1: Create public GitHub repo**

```bash
gh repo create mybodyprism-com --public --source=. --push
```

Expected: Repo created at `https://github.com/bolthouse1/mybodyprism-com` and code pushed to `main`.

- [ ] **Step 2: Verify push**

```bash
gh repo view bolthouse1/mybodyprism-com --web
```

Expected: Repo page opens in browser, `index.html` visible in file list.

---

### Task 3: Enable GitHub Pages (Smoke Test)

- [ ] **Step 1: Enable GitHub Pages via API**

```bash
gh api repos/bolthouse1/mybodyprism-com/pages \
  --method POST \
  --field source='{"branch":"main","path":"/"}' \
  -H "Accept: application/vnd.github+json"
```

Expected: Pages enabled, returns JSON with `html_url`.

- [ ] **Step 2: Wait for deployment and verify**

GitHub Pages deployments take 1-3 minutes. Check status:

```bash
gh api repos/bolthouse1/mybodyprism-com/pages \
  -H "Accept: application/vnd.github+json"
```

Expected: `status: "built"`, `html_url: "https://bolthouse1.github.io/mybodyprism-com/"`

- [ ] **Step 3: Open smoke test URL in browser**

Open `https://bolthouse1.github.io/mybodyprism-com/` in your browser.

Verify:
- Page loads with dark background
- Hero particle canvas animates
- "BOLTHOUSE LABS" header visible in top-left
- Scroll down: all sections reveal with fade-in animations
- Waitlist form renders at the bottom (submission won't work yet)
- Fonts load correctly (Playfair Display for headings, Outfit for body)
- Test on mobile viewport (browser dev tools, ~375px width)

---

### Task 4: Wire Up Formspree Waitlist Form

**Files:**
- Modify: `C:\Projects_MedViz\mybodyprism-com\index.html:993-1013` (handleWaitlist function)

- [ ] **Step 1: Create Formspree form (USER ACTION)**

1. Go to https://formspree.io and sign up / log in
2. Create a new form
3. Copy the form ID (looks like `xyzabcde` from the URL `https://formspree.io/f/xyzabcde`)
4. Share the form ID in the terminal

- [ ] **Step 2: Update handleWaitlist() with Formspree endpoint**

Replace the `handleWaitlist` function in `index.html` (lines 993-1013) with:

```javascript
// ===== WAITLIST FORM =====
async function handleWaitlist() {
  const emailInput = document.getElementById('emailInput');
  const submitBtn = document.getElementById('submitBtn');
  const email = emailInput.value;

  if (!email || !email.includes('@')) {
    emailInput.style.borderColor = 'var(--accent-warm)';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch('https://formspree.io/f/FORM_ID_HERE', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    });

    if (response.ok) {
      document.getElementById('waitlistForm').style.display = 'none';
      document.querySelector('.form-note').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    } else {
      submitBtn.textContent = 'Try Again';
      submitBtn.disabled = false;
      emailInput.style.borderColor = 'var(--accent-warm)';
    }
  } catch (err) {
    submitBtn.textContent = 'Try Again';
    submitBtn.disabled = false;
    emailInput.style.borderColor = 'var(--accent-warm)';
  }
}
```

Replace `FORM_ID_HERE` with the actual Formspree form ID from Step 1.

- [ ] **Step 3: Test form submission**

1. Open the GitHub Pages URL (or local file)
2. Enter a test email address
3. Click "Join Waitlist"
4. Button should show "Sending..." then swap to success message
5. Check Formspree dashboard — email should appear in submissions

- [ ] **Step 4: Commit form integration**

```bash
git add index.html
git commit -m "feat: wire up waitlist form to Formspree"
git push
```

Expected: Push triggers GitHub Pages rebuild. Form works on live site after 1-2 minutes.

---

### Task 5: Configure Custom Domain — GoDaddy DNS

- [ ] **Step 1: Add CNAME file to repo**

Create `CNAME` file in repo root:

```
www.bolthouselabs.com
```

```bash
git add CNAME
git commit -m "feat: add CNAME for custom domain"
git push
```

- [ ] **Step 2: Configure GoDaddy DNS (USER ACTION)**

Log into GoDaddy DNS management for `bolthouselabs.com`. Delete any existing parking/default records, then add:

**For `www` subdomain (CNAME):**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | bolthouse1.github.io | 600 |

**For apex domain — bare `bolthouselabs.com` (A records):**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

- [ ] **Step 3: Set custom domain in GitHub Pages settings**

```bash
gh api repos/bolthouse1/mybodyprism-com/pages \
  --method PUT \
  --field cname='www.bolthouselabs.com' \
  --field source='{"branch":"main","path":"/"}' \
  -H "Accept: application/vnd.github+json"
```

- [ ] **Step 4: Wait for DNS propagation and verify**

DNS can take 10-60 minutes to propagate. Check progress:

```bash
nslookup www.bolthouselabs.com
```

Expected: Returns `bolthouse1.github.io` CNAME, resolving to GitHub Pages IPs.

- [ ] **Step 5: Enable HTTPS enforcement**

After DNS propagates and GitHub provisions the SSL certificate (automatic, up to 30 minutes):

```bash
gh api repos/bolthouse1/mybodyprism-com/pages \
  --method PUT \
  --field https_enforced=true \
  --field cname='www.bolthouselabs.com' \
  --field source='{"branch":"main","path":"/"}' \
  -H "Accept: application/vnd.github+json"
```

- [ ] **Step 6: Final verification**

Open in browser and verify:
- `https://www.bolthouselabs.com` — site loads with HTTPS
- `https://bolthouselabs.com` — redirects to `www.bolthouselabs.com`
- All animations, fonts, and interactions work
- Waitlist form submits successfully
- Mobile layout is correct

---

## Verification Summary

| Criteria | How to verify |
|----------|---------------|
| Site loads at `www.bolthouselabs.com` over HTTPS | Open in browser |
| All animations work (particles, scroll reveals) | Scroll through page |
| Waitlist form captures emails | Submit test email, check Formspree |
| Mobile layout correct | Browser dev tools at 375px width |
| Google Fonts load | Inspect headings (Playfair Display) and body (Outfit) |
| Apex domain redirects | Open `bolthouselabs.com`, should redirect to `www` |
