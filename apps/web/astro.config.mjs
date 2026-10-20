import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Fully static output, served as Cloudflare Workers static assets (see wrangler.jsonc).
export default defineConfig({
  site: "https://gregpadin.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
});
