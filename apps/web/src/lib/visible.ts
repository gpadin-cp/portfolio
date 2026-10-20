import type { Draft } from "@portfolio/content";

/** Drafts show in `astro dev` and are dropped from production builds. */
export const visible = <T extends Draft>(items: T[]): T[] =>
  import.meta.env.DEV ? items : items.filter((i) => !i.draft);
