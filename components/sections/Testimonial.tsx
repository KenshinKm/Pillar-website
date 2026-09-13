import Eyebrow from "@/components/type/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export default function Testimonial() {
  return (
    <section className="bg-bg py-28 md:border-t md:border-line md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pb-6 md:border-b md:border-line">
          <Eyebrow>What Clients Say</Eyebrow>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <blockquote className="max-w-3xl">
            <p className="text-2xl font-medium leading-snug text-ink md:text-4xl">
              &ldquo;PILLAR took GradingView from an idea to a fully
              functional platform from scratch. They handled everything from
              the design and user experience to the backend systems and
              deployment. The final product was built around exactly what we
              envisioned and gave us everything we needed to launch.&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <cite className="font-mono text-sm not-italic uppercase tracking-[0.1em] text-muted">
                GradingView
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
