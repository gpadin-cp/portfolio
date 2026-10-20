import type { LabEntry } from "./types";

export const lab: LabEntry[] = [
  {
    slug: "traffic-shift-proxy",
    title: "Traffic-shift proxy sim",
    date: "2026-10-20",
    summary: "Slide users from the old backend to the new one and watch errors and latency.",
    writeUp: "/work/shutterstock-migration-licensing",
    draft: true,
  },
  {
    slug: "ad-format-builder",
    title: "Ad-format builder",
    date: "2026-10-20",
    summary: "Pick a format; the request and response shape assembles from shared parts.",
    writeUp: "/work/giphy-unified-ads-api",
    draft: true,
  },
  {
    slug: "agent-fleet-board",
    title: "Agent fleet board",
    date: "2026-10-20",
    summary: "Replay agents handing off a task: progress, partial failure, retry, intervene.",
    writeUp: "/work/cuttlenet-platform",
    draft: true,
  },
];
