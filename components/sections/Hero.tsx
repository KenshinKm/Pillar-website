import Link from "next/link";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/type/Eyebrow";
import HeroBackdrop from "@/components/sections/HeroBackdrop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-10 md:px-10 lg:px-16 lg:pb-28">
        <Reveal delay={0.1} className="mb-8 flex flex-wrap items-center gap-4">
          <Eyebrow>Web Development &amp; SEO</Eyebrow>
          <span className="hidden font-mono text-xs uppercase tracking-[0.1em] text-faint md:inline-block">
            Build. Get Found. Grow.
          </span>
        </Reveal>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-6xl">
          <SplitText text="Your customers are already searching." />
          <br />
          <span className="text-muted">
            <SplitText text="We make sure they find you." delay={0.35} />
          </span>
        </h1>

        <div className="mt-16 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between md:border-t md:border-line md:pt-10">
          <Reveal delay={0.5} className="max-w-md">
            <p className="text-lg text-muted md:text-xl">
              We build premium websites and get them ranking on Google, so
              the customers already searching for what you do find you
              first.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-accent px-7 py-4 text-base font-medium uppercase tracking-[0.08em] text-bg transition-colors duration-300 hover:bg-accent-soft md:py-3.5 md:text-sm"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 border border-line px-7 py-4 text-base font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:border-ink md:py-3.5 md:text-sm"
              >
                See Our Process
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <HeroBackdrop />
    </section>
  );
}
