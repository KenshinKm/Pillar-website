import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/type/Eyebrow";
import CountUp from "@/components/motion/CountUp";

const STATS = [
  {
    value: 27.6,
    label: "Average click-through rate for the #1 organic Google result.",
    source: "Backlinko, Google CTR Study (analysis of 4M search results)",
    href: "https://backlinko.com/google-ctr-stats",
  },
  {
    value: 54.4,
    label: "Of all organic clicks go to the top three Google results.",
    source: "Backlinko, Google CTR Study (analysis of 4M search results)",
    href: "https://backlinko.com/google-ctr-stats",
  },
];

export default function Stats() {
  return (
    <section className="bg-bg py-28 md:border-t md:border-line md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pb-6 md:border-b md:border-line">
          <Eyebrow>Why Position Matters</Eyebrow>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {STATS.map((stat) => (
            <Reveal
              key={stat.value}
              className="relative overflow-hidden bg-bg px-8 py-14 md:px-12 md:py-20"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64"
                style={{
                  background:
                    "radial-gradient(circle, rgba(185,151,95,0.08) 0%, transparent 70%)",
                }}
              />
              <p className="relative text-[clamp(2.75rem,8vw,5.5rem)] font-black leading-none tracking-tight text-ink">
                <CountUp value={stat.value} suffix="%" />
              </p>
              <p className="relative mt-6 max-w-sm text-base text-muted md:text-lg">
                {stat.label}
              </p>
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-block border-b border-line font-mono text-xs uppercase tracking-[0.08em] text-faint transition-colors hover:border-accent hover:text-accent"
              >
                Source: {stat.source}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
