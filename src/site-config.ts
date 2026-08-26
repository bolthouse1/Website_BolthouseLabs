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

/** Label + destination for the primary call to action, in both states. */
export const PRIMARY_CTA = DOWNLOADS_LIVE
  ? { label: "Download free", href: "/pricing" }
  : { label: "Join the waitlist", href: "/pricing" };
