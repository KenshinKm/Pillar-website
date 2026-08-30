import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/type/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How PILLAR works: a six-phase path from discovery to ongoing growth. What happens in each phase, what we need from you, and how long it takes.",
};

const PHASES = [
  {
    n: "01",
    title: "Discover",
    duration: "Days 1–3",
    summary:
      "We start by learning your business inside and out: who your customers are, what they search for, and where you currently stand in Google.",
    fromYou: "A call to walk through your business, access to your current site if you have one, and any existing brand materials.",
  },
  {
    n: "02",
    title: "Strategy",
    duration: "Days 4–5",
    summary:
      "That research becomes a concrete plan: site structure, the search terms that matter most to your business, and which pages to prioritize first.",
    fromYou: "Sign-off on the plan before we start building.",
  },
  {
    n: "03",
    title: "Build",
    duration: "Week 1–1.5",
    summary:
      "Design and development happen here. A premium, custom site engineered for speed, clarity, and conversion. Not a template with your logo dropped in.",
    fromYou: "Feedback at key checkpoints, plus any brand assets you already have.",
  },
  {
    n: "04",
    title: "Launch",
    duration: "Week 2–3",
    summary:
      "We deploy the site and connect it to Search Console, Analytics, and your Google Business Profile, so everything is tracked from day one.",
    fromYou: "Access to your domain and any existing Google Business Profile, Analytics, or Search Console accounts. If you do not have these or are not sure, we will walk you through it.",
  },
  {
    n: "05",
    title: "Optimize",
    duration: "Ongoing",
    summary:
      "Once live, we refine rankings, pages, and performance against real data. Not guesses about what might work.",
    fromYou: "Not much. We handle the ongoing work and reach out if we need anything from you.",
  },
  {
    n: "06",
    title: "Grow",
    duration: "Ongoing",
    summary:
      "Ongoing management that compounds your visibility over time: new pages, technical maintenance, and continuous search optimization.",
    fromYou: "Just keep us updated on any changes to your business. We will take care of the rest.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="Process" title="How We Work">
          A clear, six-phase path from first conversation to ongoing growth.
          Here is what actually happens at each stage, and what we need from
          you along the way.
        </PageHeader>

        <section className="bg-bg py-20 md:border-b md:border-line md:py-28">
          <div className="mx-auto max-w-[1000px] px-6 md:px-10 lg:px-16">
            <div className="pb-6 md:border-b md:border-line">
              <Eyebrow>Roadmap From Purchase</Eyebrow>
            </div>

            <div className="mt-10 space-y-0">
              {PHASES.map((phase, i) => (
                <Reveal key={phase.n} delay={i * 0.05}>
                  <div className="grid gap-6 border-b border-line py-10 md:grid-cols-[11rem_1fr] md:gap-10 md:py-12">
                    <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-3">
                      <span className="font-mono text-sm text-faint">{phase.n}</span>
                      <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                        {phase.duration}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                        {phase.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-muted">{phase.summary}</p>
                      <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-faint">
                        From you: <span className="text-muted">{phase.fromYou}</span>
                      </p>
                    </div>
                  </div>
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
