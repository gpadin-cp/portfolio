import type { Site } from "./types";

// Headline, positioning, and About copy are drafts until the career-narrative work lands.
export const site: Site = {
  name: "Greg Padin",
  domain: "gregpadin.com",
  headline: "I build the reusable system instead of the one-off feature.",
  positioning:
    "Staff-track full-stack engineer with 13+ years of experience. Back to hands-on work on purpose after four years as an engineering manager.",
  email: "hire@gregpadin.com",
  links: [
    { label: "GitHub", href: "https://github.com/gpadin-cp" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  resumePdf: "/greg-padin-resume.pdf",
  about: [
    "I started in support, taught myself SQL and macros to fix the problems I kept seeing, and grew from there into a tech lead.",
    "I spent four years as an engineering manager. I went back to individual-contributor work by choice, because the part I like most is designing the system other people build on.",
    "These days I run a self-hosted Kubernetes platform with a fleet of AI agents, and I write about what I hand to them and how I check their work.",
  ],
};
