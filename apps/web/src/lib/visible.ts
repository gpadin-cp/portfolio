import type { Draft } from "@portfolio/content";

const showDrafts = import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_DRAFTS === "true";

/** Drafts show in `astro dev` (or with PUBLIC_SHOW_DRAFTS=true) and are dropped otherwise. */
export const visible = <T extends Draft>(items: T[]): T[] =>
  showDrafts ? items : items.filter((i) => !i.draft);
