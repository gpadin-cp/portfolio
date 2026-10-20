/**
 * Content model shared by every client (web today; a native app can import the
 * same package later). Keep it plain data: no framework types, no HTML.
 */

export type Draft = { draft?: boolean };

export interface Site {
  name: string;
  domain: string;
  positioning: string;
  throughline: string;
  links: { label: string; href: string }[];
  resumePdf: string;
}

export interface CaseStudySection {
  heading: string;
  /** Paragraphs of plain text. Rendering decides the markup. */
  body: string[];
}

export interface CaseStudy extends Draft {
  slug: string;
  order: number;
  title: string;
  company: string;
  role: string;
  outcome: string;
  shows: string;
  /** Lab entry embedded in the write-up, if any. */
  applet?: string;
  sections: CaseStudySection[];
}

export interface LabEntry extends Draft {
  slug: string;
  title: string;
  date: string;
  summary: string;
  demo?: string;
  source?: string;
  writeUp?: string;
}

export interface Role {
  company: string;
  companyUrl?: string;
  title: string;
  start: string;
  end: string | null;
  summary: string[];
  tags: string[];
  related?: { label: string; href: string };
}

export interface Post extends Draft {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export interface Now {
  updated: string;
  focus: string[];
  lookingFor: string[];
}
