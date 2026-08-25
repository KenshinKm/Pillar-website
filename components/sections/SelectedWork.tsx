import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Eyebrow from "@/components/type/Eyebrow";
import WorkPlaceholderFrame from "@/components/WorkPlaceholderFrame";
import { PROJECTS } from "@/lib/projects";

export default function SelectedWork() {
  const hasProjects = PROJECTS.length > 0;

  return (
    <section id="work" className="border-t border-line bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="border-b border-line pb-6">
          <Eyebrow>Our Work</Eyebrow>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            <SplitText text="Selected Work" />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm text-muted">
              Real projects and case studies, presented full scale, not as
              thumbnails.
            </p>
          </Reveal>
        </div>

        {hasProjects ? (
          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-x-10">
            {PROJECTS.slice(0, 2).map((project, i) => (
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
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Reveal>
              <WorkPlaceholderFrame index="01" />
            </Reveal>
            <Reveal delay={0.1}>
              <WorkPlaceholderFrame index="02" />
            </Reveal>
          </div>
        )}

        <Reveal delay={0.2} className="mt-12">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            View All Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
