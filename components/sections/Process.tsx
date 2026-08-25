import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Eyebrow from "@/components/type/Eyebrow";

const STEPS = [
  { n: "01", title: "Discover", desc: "We learn your business, customers, and where you stand today." },
  { n: "02", title: "Strategy", desc: "A clear plan for the site and the search terms that matter most." },
  { n: "03", title: "Build", desc: "A premium website, built for speed, clarity, and conversion." },
  { n: "04", title: "Launch", desc: "Deployed, tracked, and connected to Search, Maps, and Analytics." },
  { n: "05", title: "Optimize", desc: "We refine rankings, pages, and performance against real data." },
  { n: "06", title: "Grow", desc: "Ongoing management that compounds your visibility over time." },
];

export default function Process() {
  return (
    <section id="process" className="bg-surface py-28 md:border-t md:border-line md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pb-6 md:border-b md:border-line">
          <Eyebrow>How We Work</Eyebrow>
        </div>

        <h2 className="mt-10 max-w-3xl text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-ink">
          <SplitText text="Process" />
        </h2>

        <div className="mt-16 grid gap-x-6 gap-y-16 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} y={16}>
              <div className="relative">
                <div className="flex items-center gap-3 lg:block">
                  <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center border border-line-strong bg-surface-2 font-mono text-[10px] text-muted lg:mb-6">
                    {step.n}
                  </span>
                  <p className="text-lg font-bold uppercase tracking-tight text-ink lg:hidden">
                    {step.title}
                  </p>
                </div>
                <p className="mt-3 hidden text-lg font-bold uppercase tracking-tight text-ink lg:block">
                  {step.title}
                </p>
                <p className="mt-2 hidden text-sm text-muted md:block">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            See the Full Process
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
