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
export const PROJECTS: Project[] = [
  {
    title: "GradingView",
    category: "Software & SaaS",
    year: "2026",
    image: "/work/gradingview.png",
    href: "https://grading-view.com",
    summary:
      "An AI-powered education platform designed and developed from scratch by PILLAR, from product design and user experience to backend infrastructure and launch.",
  },
];
