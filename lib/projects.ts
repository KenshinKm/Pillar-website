export type Project = {
  title: string;
  category: string;
  year: string;
  image?: string;
  href?: string;
  summary?: string;
};

// Populate this array as real client projects launch.
// The work sections ship empty rather than with placeholder clients.
export const PROJECTS: Project[] = [];
