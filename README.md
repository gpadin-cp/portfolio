# gregpadin.com

Source for [gregpadin.com](https://gregpadin.com): a portfolio of case studies,
small interactive lab pieces, and writing.

## Layout

```
apps/web/            Astro site, built to static HTML and served by Cloudflare
packages/content/    Typed content model (case studies, lab, experience, posts)
```

Content lives in `packages/content` as plain typed data, not in the web app, so
any future client (for example a native app) renders the same model.

## Principles

- **Static and fast.** No client framework on content pages; JavaScript ships
  only for interactive pieces, lazy-loaded. Target LCP under 2.5 s.
- **System fonts only.** No webfont requests.
- **Themeable by default.** Every color is a token in
  `apps/web/src/styles/tokens.css`. Light and dark follow the OS, and the
  visitor can override it (system → light → dark); the choice is applied
  before first paint.
- **Accessible.** Semantic landmarks, skip link, visible focus, reduced-motion
  respected, keyboard-usable interactive pieces.
- **Drafts stay local.** Anything marked `draft: true` shows in `npm run dev`
  and is left out of production builds.

## Develop

```sh
nvm use            # Node 22
npm install
npm run dev        # http://localhost:4321, drafts visible
npm run check      # astro check + content typecheck
npm run build      # static output in apps/web/dist
npm run preview    # serve dist through wrangler, as production does
```

## Deploy

The site is served as static assets on Cloudflare Workers
(`apps/web/wrangler.jsonc`). Production deploys run from Cloudflare's Git
integration on pushes to `main`, using:

- Root directory: `apps/web`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Manual deploy: `npm run deploy` (needs `wrangler login`).

## Feature flags

| Variable | Default | Effect |
|---|---|---|
| `PUBLIC_SHOW_DRAFTS` | unset | Includes `draft: true` content in a build (for preview deploys). |
| `PUBLIC_ADS_ENABLED` | unset | Renders reserved ad slots (`AdSlot.astro`). Off until consent handling ships. |

## License

Code is MIT (see `LICENSE`). Written content, case studies, and images are
© Greg Padin, all rights reserved.
