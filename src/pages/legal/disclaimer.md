---
layout: ../../layouts/Default.astro
title: Medical Disclaimer — MyBodyPrism
description: MyBodyPrism is not a medical device and is not intended for clinical diagnosis or treatment decisions.
---

<div class="container narrow">

> **Pre-launch draft pending lawyer review.** Final binding text will replace
> this page before any paid customer is onboarded.

# Medical Disclaimer

**Effective date:** August 7, 2026
**Applies to:** MyBodyPrism v1.1.0 (Desktop Viewer)
**Owner:** Bolthouse Labs, Inc.

**MyBodyPrism is not a medical device, is not intended for clinical
diagnosis or treatment decisions, and has not been reviewed by the
U.S. Food and Drug Administration (FDA), the European Medicines
Agency (EMA), or any other regulatory body.**

This disclaimer governs your use of MyBodyPrism software. The
"Service" is the **MyBodyPrism Desktop Viewer**, which runs entirely
on your own computer.

By installing, accessing, or using the Service, you acknowledge that
you have read, understood, and agreed to this Disclaimer.

## 1. What MyBodyPrism is

MyBodyPrism is a **patient-facing wellness and self-education tool**
for viewing your own medical imaging data (CT, MRI, PET/CT, NIfTI,
DICOM). Patients increasingly receive their own scans — on a CD from
a hospital, as a download from an imaging center, or as part of a
longitudinal-monitoring program — and many have no good way to look
at them. MyBodyPrism is that viewer.

The Service is intended to:

- Let you see your own imaging in 2D and 3D in a way that's
  intuitive without medical training.
- Help you ask better questions of your clinician — by pointing at
  something you noticed, by tracking changes across scans over time,
  or by becoming more familiar with your own anatomy.
- Be a private viewer that keeps your imaging under your own
  control. This version of the Service runs on your own computer and
  does not transmit your scans, or anything derived from them, off
  your machine. See our [Privacy Policy](/legal/privacy).

## 2. What MyBodyPrism is not

- **Not a diagnostic tool.** Nothing the Service displays is a medical
  finding, a measurement intended as a diagnosis, or a clinical
  interpretation. It is a viewer for your own imaging.
- **Not a treatment-planning tool.** No output of the Service is
  validated or intended as input to any clinical procedure.
- **Not a substitute for professional medical advice, diagnosis, or
  treatment.** Always seek the advice of your physician or another
  qualified health provider with any questions you may have
  regarding a medical condition.
- **Not for emergency use.** In a medical emergency, call your local
  emergency services. Do not use the Service to evaluate or respond
  to a medical emergency.
- **Not a medical record system.** The Service does not store, sync,
  or back up your imaging. You are responsible for retaining and
  backing up your own source imaging files.

## 3. Regulatory classification

Our intended classification is **wellness software, not a medical
device.** This is consistent with the FDA's General Wellness Policy
guidance (FDA-2014-D-1622): products that promote a general state
of health or well-being and do not make a specific
disease-or-condition claim are not regulated as medical devices.

Specifically, MyBodyPrism:

- Does not claim diagnostic accuracy.
- Does not claim to detect, treat, cure, mitigate, or prevent any
  disease or medical condition.
- Does not claim to be equivalent to or a substitute for any device
  or service classified as a medical device.
- Does not provide clinical alerts or notifications.
- Does not generate output intended for clinical decision-making.
- Is marketed to patients (consumers), not to clinicians as a
  professional medical tool.

## 4. Comparison Mode — specific disclaimer

The slice-sync cross-correlation that aligns multiple studies is a
**rough anatomical aligner**, not a registered image fusion. You
should verify alignment visually. The Service does not warrant that
two scans displayed side by side accurately depict the same anatomy
at the same location.

## 5. Data accuracy and integrity

- The Service does not modify your source imaging files. Your
  DICOM, NIfTI, or case-bundle files on disk are read but never
  written by the Desktop Viewer.
- Derived sidecar files (such as `.somaviz_findings.json`,
  `.somaviz_roi_masks.json`, and `mybodyprism_overrides.json`) are
  written alongside your source data and can be deleted to restore
  the case to its original state.
- The viewer renders your imaging as faithfully as the loaded data
  permits. A canonical-LPS reorientation step occurs at load time
  to normalize orientation for display; this does not alter
  underlying voxel data.

## 6. International users

The Service is operated from the United States and is not
specifically marketed in the European Union, United Kingdom, or
other jurisdictions with medical-device regulatory regimes
(MDR 2017/745, UK MDR 2002, etc.). If you access the Service from
such a jurisdiction:

- You do so on your own initiative.
- The Service is not certified as a medical device in your
  jurisdiction.
- Local regulations regarding the practice of medicine and access
  to medical imaging may apply to you and not to us.

## 7. Children's data

The Service is intended for users 18 years of age and older.
Pediatric imaging may be opened by a parent or legal guardian; the
Service does not implement age-gating beyond this notice. Because the
Service transmits no imaging off your device, no imaging or derived
data about any user — adult or pediatric — is sent to us or any third
party.

## 8. No warranty

THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY
OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
WITHOUT LIMITATION THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT.

BOLTHOUSE LABS, INC. SPECIFICALLY DISCLAIMS ANY WARRANTY THAT THE
SERVICE IS APPROPRIATE FOR DIAGNOSIS, TREATMENT, OR ANY OTHER
CLINICAL USE.

See the [Terms of Service](/legal/tos) for the full
warranty disclaimer and limitation of liability.

## 9. Reporting a concern

If you have a concern about the Service's clinical posture or
behavior, please email [support@mybodyprism.com](mailto:support@mybodyprism.com).
We treat clinical-posture concerns as high-priority and aim to
acknowledge them within one business day.

## 10. Changes to this Disclaimer

We may update this Disclaimer from time to time. The effective date
above will reflect the most recent revision. Material changes will
be communicated by email to registered users (users who have
provided an email address) and posted at
[https://mybodyprism.com/legal/disclaimer](https://mybodyprism.com/legal/disclaimer).

## 11. Contact

Bolthouse Labs, Inc.
c/o Legalinc Corporate Services Inc.
131 Continental Dr, Suite 305
Newark, DE 19713
United States

Email: [support@mybodyprism.com](mailto:support@mybodyprism.com)

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
