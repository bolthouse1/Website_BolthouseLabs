---
layout: ../../layouts/Default.astro
title: End-User License Agreement — MyBodyPrism
description: End-User License Agreement for the MyBodyPrism Desktop Viewer.
---

<div class="container narrow">

> **Pre-launch draft pending lawyer review.** Final binding text will replace
> this page before any paid customer is onboarded.

# End-User License Agreement

**Effective date:** August 7, 2026
**Applies to:** MyBodyPrism v1.1.0
**Owner:** Bolthouse Labs, Inc.

This End-User License Agreement ("EULA") is a binding legal contract
between you ("you," "your") and Bolthouse Labs, Inc., a Delaware
corporation ("Bolthouse Labs," "we," "us"), governing your
installation and use of the **MyBodyPrism Desktop Viewer** software
(the "Software").

**BY CLICKING "I AGREE" DURING INSTALLATION, OR BY INSTALLING,
COPYING, OR OTHERWISE USING THE SOFTWARE, YOU AGREE TO BE BOUND BY
THIS EULA. IF YOU DO NOT AGREE, DO NOT INSTALL OR USE THE SOFTWARE.**

This EULA is in addition to and incorporates the
[Terms of Service](/legal/tos), the
[Privacy Policy](/legal/privacy), and the
[Medical Disclaimer](/legal/disclaimer). In the event of a conflict
between this EULA and the Terms of Service, this EULA controls with
respect to the Software.

## 1. License grant

Subject to your compliance with this EULA, Bolthouse Labs grants
you a limited, non-exclusive, non-transferable, non-sublicensable,
revocable, royalty-free license to:

- Install and use **one (1) copy** of the Software on **one (1)
  computer** that you own or control (the "Authorized Machine"),
- Use the Software solely for your **personal, non-commercial
  purpose** of viewing your own medical imaging data,
- Use the Software while it is made available to you free of charge
  (or, if we introduce a paid model under the
  [Terms of Service](/legal/tos) §4, during your paid
  term).

This is a license, not a sale. We retain all right, title, and
interest in and to the Software, including all intellectual
property rights.

## 2. Per-machine binding

The Software is licensed per machine, not per user. To enforce this:

- On first launch (and at activation), the Software computes a SHA-256
  hash of a stable hardware identifier of your computer — the
  motherboard serial number, or the system's SMBIOS UUID as a fallback —
  and binds your activation to that machine-ID hash on our license
  server.
- The machine-ID hash is the **only** machine information that
  leaves your computer for license-binding purposes. We do not
  transmit your MAC address, hard drive serial number, IP address,
  username, computer name, or any other directly identifying
  information for license-binding purposes.
- Your license is **valid for one (1) Authorized Machine at a
  time.** To move your license to a new machine, contact
  [support@mybodyprism.com](mailto:support@mybodyprism.com); we
  will deactivate the old machine and issue a new activation. We
  permit up to **three (3) machine transfers per 12-month
  license period** at no additional charge.

## 3. Free license and activation

### 3.1 Free license

The Software is **provided free of charge** in this version. On
first launch:

- The Software obtains a **free license** bound to your machine
  (see §2), limited to **one (1) free license per machine.** The
  Software records issuance on our license server (indexed by
  machine-ID hash) and locally (defensive backup).
- The free license provides full Software functionality and **does
  not expire on a fixed date in this version.**
- Free access is not guaranteed to continue. If we move to a paid
  model in the future (Terms of Service §4), continued use may
  require payment after prior notice to registered users.

Attempting to circumvent the one-free-license-per-machine limit
(e.g., by deleting local files, by virtual-machine fingerprint
manipulation, or by other means) is a violation of this EULA.

### 3.2 Paid activation codes (future)

**If and when** we offer paid licenses or paid features (Terms of
Service §4), you will receive an activation code by email upon
purchase. To activate the Software:

- Open the Software on the Authorized Machine.
- Enter the activation code in the prompt at launch.
- The Software exchanges the code for a signed license file
  bound to your machine-ID hash.

Each activation code may be redeemed **once.** If you need to
activate on a new machine, contact support per §2 above.

## 4. Restrictions on use

You **may not**:

- Distribute, sell, lease, sublicense, rent, lend, give, or
  otherwise transfer the Software or your activation code to any
  third party.
- Use the Software on more than one Authorized Machine
  concurrently.
- Reverse-engineer, decompile, or disassemble the Software, or
  attempt to derive the source code of the Software, except to
  the extent expressly permitted by applicable law that cannot be
  waived (see §9 below regarding LGPL components).
- Modify, adapt, translate, or create derivative works of the
  Software.
- Remove, alter, or obscure any proprietary notices, labels, or
  marks on or in the Software.
- Use the Software for any purpose other than personal, wellness,
  and self-education use of your own medical imaging.
- Use the Software in a manner that violates applicable law,
  including without limitation laws governing the practice of
  medicine, patient privacy, and data protection.
- Use the Software to make clinical decisions or provide
  diagnostic services to others. See §6 below.

## 5. Updates

Bolthouse Labs may from time to time release updates to the
Software, including bug fixes, security patches, and new features.
Updates are delivered via manual download from the Site.

If you install an update, that update becomes part of the
"Software" under this EULA. We are not obligated to provide updates
to any specific user or version.

## 6. Medical disclaimer (incorporated)

THE SOFTWARE IS NOT A MEDICAL DEVICE AND IS NOT INTENDED FOR
CLINICAL DIAGNOSIS OR TREATMENT DECISIONS. SEE THE
[MEDICAL DISCLAIMER](/legal/disclaimer), INCORPORATED BY REFERENCE.

YOU AGREE NOT TO USE THE SOFTWARE AS A SUBSTITUTE FOR PROFESSIONAL
MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. YOU AGREE TO CONSULT A
QUALIFIED HEALTHCARE PROFESSIONAL FOR ANY CLINICAL CONCERNS.

## 7. Privacy and data handling (incorporated)

The Software's data-handling practices are described in detail in
the [Privacy Policy](/legal/privacy). Key points:

- This version of the Software stores and processes your imaging
  files locally on your device.
- The Software does not transmit your imaging to us.
- The Software's only outbound network calls are to activate and
  verify your license (machine-ID hash + activation/trial details —
  never your imaging). Crash reports stay local on your device. See
  Privacy Policy §4.
- The Software writes derived files (ROI mask sidecars, per-series
  defaults) alongside your imaging in the case folder. You may delete
  these at any time.

## 8. Crash reporting — local only

Crash reporting is local only: a PHI-scrubbed crash archive is
written on your own device at `%APPDATA%\MyBodyPrism\crashes\` and
nothing is transmitted to us automatically. You may delete that
folder at any time.

## 9. Open-source components

The Software includes open-source software components governed by
their own license terms. A complete list, including the full text
of applicable open-source licenses, is installed as `COPYRIGHT.txt`
in the Software's installation directory and is also available at
[https://mybodyprism.com/legal/copyright](https://mybodyprism.com/legal/copyright).

Notably, the Software dynamically links to LGPL-licensed
components (Qt via PySide6). In accordance with the LGPL, you may:

- Replace the LGPL components in your installation with modified
  versions, provided your modified version is compatible with the
  Software's interfaces.
- Reverse-engineer the Software for the purpose of debugging your
  modifications to LGPL components.

These rights apply only to the LGPL components themselves and do
not extend to the proprietary portions of the Software.

## 10. Term and termination

### 10.1 Term

This EULA takes effect when you first install or use the Software
and continues until terminated as described below.

The Software is **provided free of charge** in this version and your
free license does not expire on a fixed date. Free access is not
guaranteed to continue: we may change to a paid model in the future
under the [Terms of Service](/legal/tos) §4, on prior
notice to registered users.

### 10.2 Termination by you

You may terminate this EULA at any time by uninstalling the
Software and ceasing all use. The Software is free in this version,
so no fees or refunds are involved.

### 10.3 Termination by Bolthouse Labs

This EULA automatically terminates if:

- We discontinue free access or move to a paid model and you do not
  obtain a paid license after notice (Terms of Service §4).
- You materially breach any provision of this EULA, the
  [Terms of Service](/legal/tos), or applicable law, and
  do not cure the breach within 14 days of written notice (where
  cure is reasonable).

We may terminate immediately without notice in cases of (a)
security violations, (b) license-evasion or activation-code abuse,
or (c) circumstances where notice is prohibited or impractical by
law.

### 10.4 Effect of termination

Upon termination:

- Your license to use the Software ends.
- You must immediately cease all use of the Software and
  uninstall it from your machine.
- You may retain your local data (logs, crash archive, findings
  cache, ROI sidecars); the Software's data files in
  `%APPDATA%\MyBodyPrism\` and in your case folders are yours.
- Sections that by their nature survive termination (including
  §§4, 6, 7, 12, 13, 14, 15, 16, and 17) survive.

## 11. Government-end-user rights

If the Software is acquired by or on behalf of the U.S. Government
or a Government contractor, the Software is "commercial computer
software" as defined in FAR 2.101 and is provided to the
Government only under the commercial-license rights and
restrictions described in this EULA. Manufacturer: Bolthouse Labs,
Inc., c/o Legalinc Corporate Services Inc., 131 Continental Dr, Suite 305, Newark, DE 19713.

## 12. Export compliance

You may not use, export, re-export, or transfer the Software
except in compliance with all applicable U.S. and international
laws, including U.S. Export Administration Regulations and the
sanctions programs administered by the U.S. Office of Foreign
Assets Control (OFAC).

You represent and warrant that you are not:

- Located in any country that is the subject of a comprehensive
  U.S. embargo (e.g., Cuba, Iran, North Korea, Syria, the Crimea
  region of Ukraine, the so-called Donetsk and Luhansk regions),
- Listed on any U.S. government denied-party list (including the
  OFAC Specially Designated Nationals List).

## 13. Disclaimer of warranties

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY
APPLICABLE LAW, BOLTHOUSE LABS DISCLAIMS ALL WARRANTIES, WHETHER
EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT
LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE, ACCURACY, RELIABILITY, NON-INFRINGEMENT, OR
QUIET ENJOYMENT.

WITHOUT LIMITING THE FOREGOING, BOLTHOUSE LABS DOES NOT WARRANT
THAT:

- THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
- THE SOFTWARE WILL OPERATE ON ALL HARDWARE OR OPERATING SYSTEM
  CONFIGURATIONS, INCLUDING ALL VERSIONS OF MICROSOFT WINDOWS.
- THE SOFTWARE'S OUTPUT OR DISPLAY IS ACCURATE, COMPLETE, OR FIT
  FOR ANY MEDICAL OR CLINICAL PURPOSE.

Some jurisdictions do not allow exclusion of implied warranties,
so some of the above exclusions may not apply to you. In such
cases, implied warranties are limited to the maximum extent
permitted by applicable law.

## 14. Limitation of liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:

- IN NO EVENT WILL BOLTHOUSE LABS BE LIABLE FOR ANY INDIRECT,
  INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
  DAMAGES ARISING OUT OF OR RELATING TO THE SOFTWARE OR THIS
  EULA, INCLUDING WITHOUT LIMITATION LOST PROFITS, LOST DATA,
  LOSS OF GOODWILL, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF
  THE POSSIBILITY OF SUCH DAMAGES.
- OUR TOTAL CUMULATIVE LIABILITY UNDER OR IN CONNECTION WITH
  THIS EULA WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU
  PAID FOR THE SOFTWARE IN THE 12 MONTHS IMMEDIATELY PRECEDING
  THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S.
  DOLLARS ($100).
- WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM CLINICAL
  DECISIONS OR HEALTH OUTCOMES BASED ON ANYTHING SHOWN OR
  SUGGESTED BY THE SOFTWARE.

Some jurisdictions do not allow exclusion or limitation of certain
damages. To the extent prohibited, these limitations apply to the
maximum extent permitted by applicable law.

## 15. Indemnification

You agree to defend, indemnify, and hold harmless Bolthouse Labs
from any claim, demand, or damages (including reasonable
attorneys' fees) arising from your use of the Software in
violation of this EULA, applicable law, or any third party's
rights.

## 16. Governing law and dispute resolution

This EULA is governed by the laws of the State of Delaware,
without regard to its conflict-of-laws principles. Disputes are
resolved in accordance with §12 of the
[Terms of Service](/legal/tos), which includes a binding
arbitration provision and a class-action waiver. Please read
those provisions carefully.

## 17. General provisions

### 17.1 Entire agreement

This EULA, together with the
[Terms of Service](/legal/tos), the
[Privacy Policy](/legal/privacy), and the
[Medical Disclaimer](/legal/disclaimer), constitutes the entire
agreement between you and Bolthouse Labs regarding the Software
and supersedes any prior agreements or understandings.

### 17.2 Severability

If any provision of this EULA is held to be unenforceable or
invalid, that provision will be enforced to the maximum extent
possible, and the remaining provisions will remain in full force.

### 17.3 Waiver

No waiver of any provision of this EULA is effective unless in
writing and signed by Bolthouse Labs.

### 17.4 Assignment

You may not assign this EULA without our prior written consent. We
may assign this EULA in connection with a merger, acquisition,
sale of substantially all our assets, or other corporate
transaction.

### 17.5 Notices

Legal notices to Bolthouse Labs must be sent to
[support@mybodyprism.com](mailto:support@mybodyprism.com) and, for
formal legal notices, also by mail to:

Bolthouse Labs, Inc.
c/o Legalinc Corporate Services Inc.
131 Continental Dr, Suite 305
Newark, DE 19713
United States

### 17.6 Changes to this EULA

We may update this EULA from time to time. Material changes will
be communicated by email to registered users (users who have
provided an email address) and posted at
[https://mybodyprism.com/legal/eula](https://mybodyprism.com/legal/eula)
at least 30 days before they take effect. Your continued use of
the Software after the new EULA takes effect constitutes
acceptance.

If you do not agree to a revised EULA, you may stop using the
Software before the effective date.

---

**Acknowledgment**

By installing or using the Software, you acknowledge that:

- You have read and understood this EULA.
- You agree to be bound by this EULA.
- You are at least 18 years old.
- You have read and understood the
  [Medical Disclaimer](/legal/disclaimer) and acknowledge that the
  Software is not a medical device and is not intended for
  clinical use.

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
