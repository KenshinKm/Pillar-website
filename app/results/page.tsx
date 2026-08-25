import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/type/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Results",
  description:
    "How PILLAR measures success: the metrics we track, why each one matters, and how we report on them. No vanity metrics, no guesswork.",
};

const METRICS = [
  {
    name: "Google Impressions",
    detail:
      "How often your business shows up in search results. The first signal that visibility is actually growing.",
  },
  {
    name: "Search Rankings",
    detail:
      "Where you rank for the terms your customers actually type into Google, tracked week over week.",
  },
  {
    name: "Website Traffic",
    detail: "How many people are visiting your site, and where they are coming from.",
  },
  {
    name: "Leads Generated",
    detail: "Quote requests, calls, and form submissions. The number that actually pays the bills.",
  },
  {
    name: "Conversion Rate",
    detail:
      "The percentage of visitors who take action. Proof the site itself is working, not just the traffic.",
  },
  {
    name: "Maps Visibility",
    detail:
      "Your position in Google's local map results, where nearby customers find you first.",
  },
];

const REPORTING = [
  {
    title: "Monthly Reports",
    detail: "A plain-language summary of what moved, what did not, and what we are doing about it.",
  },
  {
    title: "Direct Access",
    detail:
      "Search Console, Analytics, and your Business Profile stay in accounts you own. Nothing locked behind an agency login.",
  },
  {
    title: "No Vanity Metrics",
    detail: "We report on rankings, traffic, and leads. Not follower counts or impressions that do not convert.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="Results" title="How We Measure Success">
          No vanity metrics. No guessing. Just the numbers that tell you
          whether your website is actually working.
        </PageHeader>

        <section className="border-b border-line bg-bg py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
            <Eyebrow>What We Track</Eyebrow>
            <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {METRICS.map((metric, i) => (
                <Reveal key={metric.name} delay={i * 0.05} className="bg-bg p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                    {metric.name}
                  </p>
                  <p className="mt-4 text-sm text-muted">{metric.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
            <Eyebrow>How We Report</Eyebrow>
            <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
              {REPORTING.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <p className="text-xl font-bold uppercase tracking-tight text-ink">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-muted">{item.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
