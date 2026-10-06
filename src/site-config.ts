/**
 * Build-time site configuration.
 *
 * DOWNLOADS_LIVE is the launch switch. While it is false the site is fully
 * published but the download flow is replaced by interest capture, because
 * the licence API the download depends on does not exist yet
 * (api.mybodyprism.com is NXDOMAIN until tracker step W2.3, and the installer
 * behind it is a 0.0.0-smoke placeholder until W4.1). Publishing the real
 * download form before then would show every visitor "Couldn't start the
 * download." with no server-side trace of the failure.
 *
 * To go live: set a repository variable PUBLIC_DOWNLOADS_LIVE to "true"
 * (Settings -> Secrets and variables -> Actions -> Variables) and re-run the
 * deploy workflow. No code change required.
 *
 * Note this is a *build-time* flag baked into the static output, not a runtime
 * one — flipping it requires a rebuild, which is what the workflow re-run does.
 */
export const DOWNLOADS_LIVE =
  (import.meta.env.PUBLIC_DOWNLOADS_LIVE as string | undefined) === "true";

/**
 * Backend host for the download + account calls once DOWNLOADS_LIVE is true.
 */
export const API_BASE =
  (import.meta.env.PUBLIC_API_BASE as string | undefined) ??
  "https://api.mybodyprism.com";

/**
 * Pre-launch interest capture. Formspree is deliberate rather than the
 * team-controlled trial_leads/SNS path: that path sits behind the same
 * api.mybodyprism.com host that is missing, so it cannot take a pre-launch
 * signup. This is the endpoint the teaser has used since launch of the teaser,
 * and its dashboard already holds the existing waitlist. Free tier: 50
 * submissions/month — worth watching if pre-launch interest is heavy.
 *
 * Retire this once DOWNLOADS_LIVE is true; it should not outlive the launch.
 */
export const WAITLIST_ENDPOINT = "https://formspree.io/f/xykbbnql";

/**
 * PrismEducate's own launch switch, separate from DOWNLOADS_LIVE on purpose
 * (owner decision 2026-10-05).
 *
 * The viewer's download flow is served by one endpoint,
 * POST {API_BASE}/downloads/trial-installer, whose Lambda is hardwired to a
 * single installer: it reads release_pointers PK "latest" and returns that one
 * installer_s3_key, with no product parameter
 * (AWS-HIPPA infra/lambdas/trial_installer_download/index.py, read 2026-10-05).
 * Vault Local needs nothing extra — it is bundled inside the viewer's
 * installer — but PrismEducate is a second installer with no release pointer
 * and no endpoint of its own yet, and the 2026-10-05 dispatch carries no cloud
 * section that would add one.
 *
 * So the two downloads flip independently. W4.4 flips DOWNLOADS_LIVE for the
 * viewer on 2027-01-01; this one stays false until PrismEducate's installer has
 * a pointer and an endpoint behind EDUCATE_INSTALLER_PATH. Flipping it before
 * then would show every visitor "Couldn't start the download", which is the
 * failure the gate exists to prevent.
 *
 * To go live: repository variable PUBLIC_EDUCATE_DOWNLOADS_LIVE = "true", then
 * re-run the deploy workflow. Build-time, like DOWNLOADS_LIVE.
 */
export const EDUCATE_DOWNLOADS_LIVE =
  (import.meta.env.PUBLIC_EDUCATE_DOWNLOADS_LIVE as string | undefined) === "true";

/**
 * Where PrismEducate's download will post once EDUCATE_DOWNLOADS_LIVE is true.
 * This path does NOT exist in the API yet — see the note above. It is named
 * here so the page has one place to change when the cloud adds it.
 */
export const EDUCATE_INSTALLER_PATH = "/downloads/educate-installer";

/** Label + destination for the primary call to action, in both states. */
export const PRIMARY_CTA = DOWNLOADS_LIVE
  ? { label: "Download free", href: "/pricing" }
  : { label: "Join the waitlist", href: "/pricing" };
