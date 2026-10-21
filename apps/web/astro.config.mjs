import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Fully static output, served as Cloudflare Workers static assets (see wrangler.jsonc).
export default defineConfig({
  site: "https://gregpadin.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
  // Listen on all interfaces so the dev server is reachable from other machines on the LAN.
  server: { host: "0.0.0.0" },
  vite: {
    server: {
      // Extra hostnames the dev server answers to, e.g. DEV_ALLOWED_HOSTS=box.lan,.example.internal
      allowedHosts: process.env.DEV_ALLOWED_HOSTS?.split(",").filter(Boolean) ?? [],
    },
  },
});
