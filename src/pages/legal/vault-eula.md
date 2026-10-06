---
layout: ../../layouts/Default.astro
title: Vault Local End-User License Agreement — MyBodyPrism
description: End-User License Agreement for MyBodyPrism Vault, the local vault installed with the MyBodyPrism Desktop Viewer.
---

<div class="container narrow">

# End-User License Agreement — MyBodyPrism Vault

**Approved by the owner on 2026-10-05**, as written, with no attorney reading
it — the only approval this document gets (PrismVault `DECISIONS.md` PV-D005;
dispatch 2026-10-05 decision 6: no counsel for v1.1). He was told plainly that
nobody else would read it before he answered.

Any change to the wording makes this DRAFT again until he approves it afresh.
`tests/test_legal.py` pins the claims that must not drift: the privacy
sentence as he verified it, the reserved switch to a paid subscription, and
the medical disclaimer.

**Effective date:** January 1, 2027
**Applies to:** MyBodyPrism Vault v1.1.0, installed with MyBodyPrism v1.1.0
**Owner:** Bolthouse Labs, Inc.

This End-User License Agreement ("EULA") is a binding legal contract between
you ("you," "your") and Bolthouse Labs, Inc., a Delaware corporation
("Bolthouse Labs," "we," "us"), governing your installation and use of the
**MyBodyPrism Vault** software (the "Software"), which keeps your medical
records on your own computer.

**BY CLICKING "I AGREE" DURING INSTALLATION, OR BY INSTALLING, COPYING, OR
OTHERWISE USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THIS EULA. IF YOU DO
NOT AGREE, DO NOT INSTALL OR USE THE SOFTWARE.**

The Software is installed together with the MyBodyPrism Desktop Viewer, which
has its own End-User License Agreement. Each agreement governs its own
software. This EULA is in addition to and incorporates the Terms of Service,
the Privacy Policy, and the Medical Disclaimer published at
[https://mybodyprism.com/legal](https://mybodyprism.com/legal). In the event of
a conflict between this EULA and the Terms of Service, this EULA controls with
respect to the Software.

## 1. License grant

Subject to your compliance with this EULA, Bolthouse Labs grants you a
limited, non-exclusive, non-transferable, non-sublicensable, revocable,
royalty-free license to:

- Install and use the Software on a computer that you own or control — under
  the free license, on **each computer you own or control** (§2),
- Use the Software solely for your **personal, non-commercial purpose** of
  keeping and reading your own medical records,
- Use the Software **free of charge**. The free license has **no fixed end
  date**; it continues until it ends under §9, including after a change to a
  paid subscription made with notice under §3.

This is a license, not a sale. We retain all right, title, and interest in and
to the Software, including all intellectual property rights.

## 2. One free license per computer

The Software is licensed per machine, not per user: one (1) free license per
computer, and you may use it on each computer you own or control, for your
personal use.

**Nothing is checked, entered, or sent.** The Software has no activation step,
no account, no activation code, and no license server. It does not contact us
to confirm your license, and it does not report anything about your computer.
The limit in this section is a term of this agreement, not something the
Software enforces.

## 3. Changes to the free license

This version of the Software is provided **free of charge** and has **no fixed
end date**.

**We may in the future offer the Software, or some of its features, only under
a paid subscription**, including for continued use of a version you have
already installed. If we do, we will give registered users at least **30 days'
notice** by email and post the change at
[mybodyprism.com](https://mybodyprism.com) before it takes effect, and we will
present the price and terms before you are asked to pay. If you do not
subscribe, your free license ends on the date the change takes effect (§9.3).

**Early release.** This is an early release of new software. It may contain
defects and may change or be discontinued. The warranty disclaimers and
limitations in §§11 and 12 apply in full.

**Feedback.** We invite feedback on the Software
([support@mybodyprism.com](mailto:support@mybodyprism.com)). By sending
feedback you grant Bolthouse Labs a perpetual, irrevocable, royalty-free right
to use it to improve the Software and our services, without obligation or
attribution to you. Please do not include medical images or personal health
information in feedback.

## 4. Restrictions on use

You **may not**:

- Distribute, sell, lease, sublicense, rent, lend, give, or otherwise transfer
  the Software to any third party.
- Reverse-engineer, decompile, or disassemble the Software, or attempt to
  derive the source code of the Software, except to the extent expressly
  permitted by applicable law that cannot be waived.
- Modify, adapt, translate, or create derivative works of the Software.
- Remove, alter, or obscure any proprietary notices, labels, or marks on or in
  the Software.
- Use the Software for any purpose other than personal and self-education use
  of your own medical records.
- Use the Software to keep or read another person's medical records without
  that person's authorization, or in a manner that violates applicable law,
  including without limitation laws governing the practice of medicine,
  patient privacy, and data protection.
- Use the Software to make clinical decisions or provide diagnostic services
  to others. See §5 below.

## 5. Medical disclaimer (incorporated)

MYBODYPRISM IS FOR PERSONAL REVIEW. IT IS NOT A MEDICAL DEVICE, IS NOT
INTENDED TO DIAGNOSE, TREAT, CURE, PREVENT OR MONITOR ANY DISEASE OR
CONDITION, AND HAS NOT BEEN CLEARED OR APPROVED BY THE FDA. ALWAYS CONSULT A
LICENSED PHYSICIAN ABOUT YOUR MEDICAL IMAGES AND CARE. SEE THE MEDICAL
DISCLAIMER PUBLISHED AT
[https://mybodyprism.com/legal](https://mybodyprism.com/legal) AND INSTALLED
WITH MYBODYPRISM, INCORPORATED BY REFERENCE.

YOU AGREE NOT TO USE THE SOFTWARE AS A SUBSTITUTE FOR PROFESSIONAL MEDICAL
ADVICE, DIAGNOSIS, OR TREATMENT. YOU AGREE TO CONSULT A QUALIFIED HEALTHCARE
PROFESSIONAL FOR ANY CLINICAL CONCERNS.

The Software shows you what your own records say and labels where it came
from. It does not measure anything, does not interpret your records, and makes
no judgement about them.

## 6. Privacy and your records

**Your scans and records never leave your computer. The only thing that ever
goes out is a one-time licence check, which carries no health data.**

In detail, so that the sentence above can be relied on:

- The Software stores your records in a database on your own computer,
  encrypted as a whole, in a folder belonging to your Windows user account.
  Only your passphrase opens it.
- **The Software itself makes no outbound network connection at all.** It
  serves its own pages to your browser on your own computer (the loopback
  address, `127.0.0.1`), and nothing else listens.
- The one-time licence check referred to above is made by the **MyBodyPrism
  Desktop Viewer** installed alongside the Software, which activates its own
  free license once. It carries a hash of a machine identifier and no health
  data of any kind. The Viewer's own EULA describes it.
- The Software sends no telemetry, no analytics, no crash reports and no usage
  statistics, and it contains no code for doing so.
- No feature of the Software uploads, shares, syncs or publishes your records.
  Nothing in it sends your records to an artificial-intelligence service; the
  Software ships with no such service configured and no means of reaching one.
- Your passphrase is never transmitted and never stored by us. **If you lose
  both your passphrase and your recovery key, your records cannot be
  recovered — not by you and not by us.** That is a consequence of the
  encryption, not a policy we can make an exception to.
- You may delete your records at any time by deleting the Software's data
  folder, which the Software shows you in its settings.

## 7. Updates

Bolthouse Labs may from time to time release updates to the Software,
including bug fixes, security patches, and new features. Updates are delivered
by manual download, with the MyBodyPrism installer. The Software does not
check for updates by itself, which follows from §6.

If you install an update, that update becomes part of the "Software" under
this EULA. We are not obligated to provide updates to any specific user or
version.

## 8. Open-source components

The Software includes open-source software components governed by their own
license terms. A complete list, with the full text of each license, is
installed as **`COPYRIGHT.txt`** in the Software's installation directory.

All of those components are under permissive licenses. The Software includes
no component under the GPL, the AGPL, or any other copyleft license, and its
build refuses one.

## 9. Term and termination

### 9.1 Term

This EULA takes effect when you first install or use the Software and
continues until terminated as described below. The free license has **no fixed
end date** (§3) and ends only as described in §9.3.

### 9.2 Termination by you

You may terminate this EULA at any time by uninstalling the Software and
ceasing all use. The Software is free in this version, so no fees or refunds
are involved. Uninstalling the Software does not delete your records; they
remain in your data folder until you delete it.

### 9.3 Termination by Bolthouse Labs

This EULA automatically terminates if:

- We change the Software to a paid subscription under §3, the notice period
  has passed, and you have not subscribed.
- You materially breach any provision of this EULA, the Terms of Service, or
  applicable law, and do not cure the breach within 14 days of written notice
  (where cure is reasonable).
- We are required by law to stop making the Software available to you.

We may terminate immediately without notice in cases of (a) security
violations or (b) circumstances where notice is prohibited or impractical by
law.

### 9.4 Effect of termination

Upon termination your license to use the Software ends, and you must cease all
use of it and uninstall it. **Your records are yours and remain on your
computer**; nothing in this EULA requires you to delete them, and we have no
means of reaching them. Sections that by their nature survive termination
(including §§4, 5, 6, 10, 11, 12, 13, 14, and 15) survive.

## 10. Government-end-user rights

If the Software is acquired by or on behalf of the U.S. Government or a
Government contractor, the Software is "commercial computer software" as
defined in FAR 2.101 and is provided to the Government only under the
commercial-license rights and restrictions described in this EULA.
Manufacturer: Bolthouse Labs, Inc., c/o Legalinc Corporate Services Inc.,
131 Continental Dr, Suite 305, Newark, DE 19713.

## 11. Disclaimer of warranties

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY
KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BOLTHOUSE LABS
DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE,
INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE, ACCURACY, RELIABILITY, NON-INFRINGEMENT, OR QUIET
ENJOYMENT.

WITHOUT LIMITING THE FOREGOING, BOLTHOUSE LABS DOES NOT WARRANT THAT:

- THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
- THE SOFTWARE WILL OPERATE ON ALL HARDWARE OR OPERATING SYSTEM
  CONFIGURATIONS, INCLUDING ALL VERSIONS OF MICROSOFT WINDOWS.
- THE SOFTWARE'S OUTPUT OR DISPLAY IS ACCURATE, COMPLETE, OR FIT FOR ANY
  MEDICAL OR CLINICAL PURPOSE.
- YOUR RECORDS WILL NOT BE LOST. **THE SOFTWARE IS NOT A BACKUP SERVICE.**
  KEEPING A COPY OF YOUR RECORDS, AND OF YOUR RECOVERY KEY, IS YOUR
  RESPONSIBILITY.

Some jurisdictions do not allow exclusion of implied warranties, so some of
the above exclusions may not apply to you. In such cases, implied warranties
are limited to the maximum extent permitted by applicable law.

## 12. Limitation of liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:

- IN NO EVENT WILL BOLTHOUSE LABS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
  SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR
  RELATING TO THE SOFTWARE OR THIS EULA, INCLUDING WITHOUT LIMITATION LOST
  PROFITS, LOST DATA, LOST OR UNRECOVERABLE MEDICAL RECORDS, LOSS OF
  GOODWILL, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF
  SUCH DAMAGES.
- OUR TOTAL CUMULATIVE LIABILITY UNDER OR IN CONNECTION WITH THIS EULA WILL
  NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID FOR THE SOFTWARE IN THE
  12 MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B)
  ONE HUNDRED U.S. DOLLARS ($100).
- WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM CLINICAL DECISIONS OR
  HEALTH OUTCOMES BASED ON ANYTHING SHOWN BY THE SOFTWARE.

Some jurisdictions do not allow exclusion or limitation of certain damages. To
the extent prohibited, these limitations apply to the maximum extent permitted
by applicable law.

## 13. Indemnification

You agree to defend, indemnify, and hold harmless Bolthouse Labs from any
claim, demand, or damages (including reasonable attorneys' fees) arising from
your use of the Software in violation of this EULA, applicable law, or any
third party's rights.

## 14. Export compliance

You may not use, export, re-export, or transfer the Software except in
compliance with all applicable U.S. and international laws, including U.S.
Export Administration Regulations and the sanctions programs administered by
the U.S. Office of Foreign Assets Control (OFAC).

You represent and warrant that you are not:

- Located in any country that is the subject of a comprehensive U.S. embargo
  (e.g., Cuba, Iran, North Korea, Syria, the Crimea region of Ukraine, the
  so-called Donetsk and Luhansk regions),
- Listed on any U.S. government denied-party list (including the OFAC
  Specially Designated Nationals List).

## 15. Governing law and dispute resolution

This EULA is governed by the laws of the State of Delaware, without regard to
its conflict-of-laws principles. Disputes are resolved in accordance with the
dispute-resolution section of the
[Terms of Service](https://mybodyprism.com/legal), which includes a binding
arbitration provision and a class-action waiver. Please read those provisions
carefully.

## 16. General provisions

### 16.1 Entire agreement

This EULA, together with the Terms of Service, the Privacy Policy, and the
Medical Disclaimer, constitutes the entire agreement between you and Bolthouse
Labs regarding the Software and supersedes any prior agreements or
understandings.

### 16.2 Severability

If any provision of this EULA is held to be unenforceable or invalid, that
provision will be enforced to the maximum extent possible, and the remaining
provisions will remain in full force.

### 16.3 Waiver

No waiver of any provision of this EULA is effective unless in writing and
signed by Bolthouse Labs.

### 16.4 Assignment

You may not assign this EULA without our prior written consent. We may assign
this EULA in connection with a merger, acquisition, sale of substantially all
our assets, or other corporate transaction.

### 16.5 Notices

Legal notices to Bolthouse Labs must be sent to
[support@mybodyprism.com](mailto:support@mybodyprism.com) and, for formal
legal notices, also by mail to:

Bolthouse Labs, Inc.
c/o Legalinc Corporate Services Inc.
131 Continental Dr, Suite 305
Newark, DE 19713
United States

### 16.6 Changes to this EULA

We may update this EULA from time to time. Material changes will be
communicated by email to registered users (users who have provided an email
address) and posted at
[https://mybodyprism.com/legal](https://mybodyprism.com/legal) at least 30
days before they take effect. Your continued use of the Software after the new
EULA takes effect constitutes acceptance.

If you do not agree to a revised EULA, you may stop using the Software before
the effective date.

---

**Acknowledgment**

By installing or using the Software, you acknowledge that:

- You have read and understood this EULA.
- You agree to be bound by this EULA.
- You are at least 18 years old.
- You have read and understood the Medical Disclaimer and acknowledge that the
  Software is not a medical device and is not intended for clinical use.
- You understand that your records are kept on your own computer, that only
  your passphrase opens them, and that **if you lose both your passphrase and
  your recovery key, nobody can recover them.**
</div>

<style>
  .container.narrow { max-width: 760px; padding: 2rem 1.25rem 4rem; }
  .container.narrow h1 { margin-top: 1rem; }
  .container.narrow blockquote {
    border-left: 3px solid var(--c-warm);
    background: rgba(255, 107, 74, 0.07);
    padding: 0.75rem 1rem;
    color: var(--c-warn);
    border-radius: 0.25rem;
  }
</style>
