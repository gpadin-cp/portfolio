/**
 * Content model shared by every client (web today; a native app can import the
 * same package later). Keep it plain data: no framework types, no HTML.
 */

export type Draft = { draft?: boolean };

export interface Site {
  name: string;
  domain: string;
  /** Short role line shown beside the name in the header. */
  role: string;
  /** One-sentence thesis used as the home headline. */
  headline: string;
  positioning: string;
  email: string;
  links: { label: string; href: string }[];
  resumePdf: string;
  /** About section paragraphs, plain text. */
  about: string[];
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
  /** The result in its own units, e.g. "~4 mo → 6 wk". Only figures already on the resume. */
  figure: string;
  /** Interactive demo and its source, when one exists. */
  demo?: string;
  source?: string;
  sections: CaseStudySection[];
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
