import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";
import WorkPlaceholderFrame from "@/components/WorkPlaceholderFrame";
import FinalCta from "@/components/sections/FinalCta";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from PILLAR: real websites and search campaigns, presented full scale. Case studies launch here as client projects go live.",
};

export default function WorkPage() {
  const hasProjects = PROJECTS.length > 0;
  const placeholders = ["01", "02", "03", "04"];

  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="Our Work" title="Selected Work">
          Real projects, presented full scale rather than as thumbnails.
          Case studies appear here as client sites launch: what we built, the
          strategy behind it, and how it performs in search.
        </PageHeader>

        <section className="bg-bg py-20 md:border-b md:border-line md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
            {hasProjects ? (
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-10">
                {PROJECTS.map((project, i) => (
                  <Reveal key={project.title} delay={i * 0.1}>
                    <a href={project.href ?? "#"} className="group block">
                      <div className="aspect-[16/10] w-full overflow-hidden border border-line bg-surface" />
                      <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
                        <div>
                          <p className="text-lg font-semibold text-ink">{project.title}</p>
                          <p className="mt-1 text-sm text-muted">{project.category}</p>
                        </div>
                        <span className="font-mono text-xs text-faint">{project.year}</span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {placeholders.map((index, i) => (
                  <Reveal key={index} delay={i * 0.08}>
                    <WorkPlaceholderFrame index={index} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
