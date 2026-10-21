import type { CaseStudy } from "./types";

const template = (): CaseStudy["sections"] =>
  [
    "TL;DR",
    "Context",
    "Constraints",
    "The decision",
    "My part vs. the team's",
    "What I set up so others could deliver",
    "Outcome",
    "What I'd do differently",
  ].map((heading) => ({ heading, body: ["Draft in progress."] }));

export const caseStudies: CaseStudy[] = [
  {
    slug: "shutterstock-migration-licensing",
    order: 1,
    title: "Zero-downtime migration for 2M users",
    company: "Shutterstock",
    role: "TBD",
    outcome: "A proxy layer moved 2M users without downtime; the licensing flow became a reusable pattern.",
    shows: "Where the platform instinct took shape. Correctness and auditability.",
    figure: "2M users, zero downtime",
    sections: template(),
    draft: true,
  },
  {
    slug: "giphy-unified-ads-api",
    order: 2,
    title: "One Ads API for every format",
    company: "GIPHY",
    role: "TBD",
    outcome: "New ad formats went from ~4 months to 6 weeks.",
    shows: "The instinct at full scale. Cross-team buy-in without formal authority.",
    figure: "~4 mo → 6 wk",
    sections: template(),
    draft: true,
  },
  {
    slug: "cuttlenet-platform",
    order: 3,
    title: "A self-run platform and an AI agent fleet",
    company: "Cuttlenet",
    role: "Builder and operator",
    outcome: "A homelab Kubernetes platform running a fleet of task agents, live and linkable.",
    shows: "Hands-on now. Judgment about using AI.",
    figure: "Live",
    sections: [
      ...template(),
      { heading: "What I delegate, what I override, how I check", body: ["Draft in progress."] },
    ],
    draft: true,
  },
];
