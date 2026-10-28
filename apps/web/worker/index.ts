// Fronts the static assets so every hostname but the apex redirects to it,
// keeping gregpadin.com the single canonical origin. Preview URLs pass through.
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const CANONICAL_HOST = "gregpadin.com";

export default {
  fetch(request: Request, env: Env): Promise<Response> | Response {
    const url = new URL(request.url);
    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
