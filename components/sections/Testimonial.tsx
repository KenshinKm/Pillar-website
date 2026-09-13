import Eyebrow from "@/components/type/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import { PROJECTS } from "@/lib/projects";

export default function Testimonial() {
  const featured = PROJECTS.find((p) => p.testimonial)?.testimonial;
  if (!featured) return null;

  return (
    <section className="bg-bg py-28 md:border-t md:border-line md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pb-6 md:border-b md:border-line">
          <Eyebrow>What Clients Say</Eyebrow>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <blockquote className="max-w-3xl">
            <p className="text-2xl font-medium leading-snug text-ink md:text-4xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <cite className="font-mono text-sm not-italic uppercase tracking-[0.1em] text-muted">
                {featured.author}
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
