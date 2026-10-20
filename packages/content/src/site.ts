import type { Now, Site } from "./types";

// Positioning and throughline are placeholders until the career-narrative work lands.
export const site: Site = {
  name: "Greg Padin",
  domain: "gregpadin.com",
  positioning:
    "Staff-track full-stack engineer, 13+ years. I build the reusable system instead of the one-off feature.",
  throughline: "Back to IC on purpose after four years as an engineering manager.",
  links: [
    { label: "Email", href: "mailto:hire@gregpadin.com" },
    { label: "GitHub", href: "https://github.com/gpadin-cp" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  resumePdf: "/greg-padin-resume.pdf",
};

export const now: Now = {
  updated: "2026-10-20",
  focus: ["Building this site in the open", "React Native / Expo fundamentals"],
  lookingFor: ["Staff or senior full-stack roles", "Remote or NYC hybrid"],
};
