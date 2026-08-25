import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development and Google SEO services from PILLAR: premium custom websites, local SEO, Google Business management, and ongoing monthly optimization.",
};

const GROUPS = [
  {
    index: "01",
    kicker: "Build",
    title: "Web Development",
    description:
      "We design and build premium, custom websites engineered for speed, clarity, and conversion. Every site is built around your business, not assembled from a template, and works just as well on a phone as it does on a desktop.",
    includes: [
      "Custom design & development",
      "Website redesigns",
      "Mobile optimization",
      "Landing & service pages",
      "Lead & contact systems",
      "Hosting, maintenance & updates",
    ],
  },
  {
    index: "02",
    kicker: "Get Found",
    title: "Google & SEO",
    description:
      "We put your business in front of people actively searching for what you offer, on Google Search and Google Maps. That means your Business Profile, your rankings, and the technical groundwork search engines actually reward.",
    includes: [
      "Google Business Profile setup & optimization",
      "Local SEO",
      "On-page & technical SEO",
      "Service & location pages",
      "Search Console & Analytics",
    ],
  },
  {
    index: "03",
    kicker: "Grow",
    title: "Monthly Management",
    description:
      "A website is not a one-time project. After launch, we keep improving your site and search presence every month, on purpose, so the results compound instead of stalling out.",
    includes: [
      "Ongoing SEO",
      "Google Business management",
      "New pages & content",
      "Technical maintenance",
      "Analytics & reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="Services" title="What We Build">
          Two disciplines, done properly: a website worth visiting, and the
          search visibility that gets people there.
        </PageHeader>

        <section className="bg-bg">
          <div className="mx-auto max-w-[900px] px-6 md:px-10 lg:px-16">
            {GROUPS.map((group) => (
              <div key={group.index} className="border-b border-line py-16 md:py-20">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-faint">{group.index}</span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                      {group.kicker}
                    </p>
                    <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                      {group.title}
                    </h2>
                  </div>
                </div>

                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-xl text-lg text-muted">{group.description}</p>
                </Reveal>

                <Reveal delay={0.15} className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-faint">
                    Includes
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.includes.map((item) => (
                      <span
                        key={item}
                        className="border border-line px-3 py-1.5 text-sm text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
