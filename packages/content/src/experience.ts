import type { Role } from "./types";

// Dates intentionally blank until the GIPHY date conflict between resume and timeline is fixed.
export const experience: Role[] = [
  {
    company: "Cuttlenet (independent)",
    title: "Builder",
    start: "TBD",
    end: null,
    summary: ["Self-run Kubernetes platform and AI agent fleet."],
    tags: ["Kubernetes", "TypeScript", "Temporal"],
    related: { label: "Case study", href: "/work/cuttlenet-platform" },
  },
  {
    company: "GIPHY",
    title: "TBD",
    start: "TBD",
    end: "TBD",
    summary: ["Unified Ads API."],
    tags: [],
    related: { label: "Case study", href: "/work/giphy-unified-ads-api" },
  },
  {
    company: "Shutterstock",
    title: "TBD",
    start: "TBD",
    end: "TBD",
    summary: ["Zero-downtime migration proxy and reusable licensing flow."],
    tags: [],
    related: { label: "Case study", href: "/work/shutterstock-migration-licensing" },
  },
];
