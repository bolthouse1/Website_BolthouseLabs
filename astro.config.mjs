// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// MyBodyPrism marketing + portal site config.
// Site URL is the canonical apex; www is 301-redirected to apex by the
// CloudFront Function defined in infra/stacks/marketing.py (Task 17).
export default defineConfig({
  site: "https://mybodyprism.com",
  trailingSlash: "ignore",
  build: {
    format: "file",
    assets: "_assets",
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
