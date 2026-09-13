export type Project = {
  title: string;
  category: string;
  year: string;
  image?: string;
  href?: string;
  summary?: string;
  testimonial?: {
    quote: string;
    author: string;
  };
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
    testimonial: {
      quote:
        "PILLAR took GradingView from an idea to a fully functional platform from scratch. They handled everything from the design and user experience to the backend systems and deployment. The final product was built around exactly what we envisioned and gave us everything we needed to launch.",
      author: "GradingView",
    },
  },
];
