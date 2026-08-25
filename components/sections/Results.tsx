"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Eyebrow from "@/components/type/Eyebrow";

const METRICS = [
  "Google Impressions",
  "Search Rankings",
  "Website Traffic",
  "Leads Generated",
  "Conversion Rate",
  "Maps Visibility",
];

const BAR_HEIGHTS = [30, 45, 25, 60, 40, 70, 35, 55, 45, 65, 30, 50];

function MiniBars({ delay = 0 }: { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} className="mt-6 flex h-10 items-end gap-1">
      {BAR_HEIGHTS.map((h, j) => (
        <motion.span
          key={j}
          className="flex-1 origin-bottom bg-line"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.5, delay: delay + j * 0.03, ease: "easeOut" }}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export default function Results() {
  return (
    <section id="results" className="border-t border-line bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pb-6 md:border-b md:border-line">
          <Eyebrow>Performance</Eyebrow>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            <SplitText text="Results" />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm text-muted">
              Real performance data, reported here as client campaigns go
              live: Google impressions, rankings, traffic, leads, conversion
              rate, and Maps visibility.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric, i) => (
            <Reveal key={metric} delay={i * 0.06} className="bg-bg px-8 py-12">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {metric}
              </p>
              <p className="mt-6 text-5xl font-black tracking-tight text-line-strong">
                —
              </p>
              <MiniBars delay={i * 0.06} />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wide text-faint">
                Reporting begins at launch
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/results"
            className="group inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            See How We Report
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
