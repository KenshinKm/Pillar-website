"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Eyebrow from "@/components/type/Eyebrow";

const STAGES = [
  { key: "search", label: "Google Search", index: "01" },
  { key: "business", label: "Business", index: "02" },
  { key: "website", label: "Website", index: "03" },
  { key: "lead", label: "Lead", index: "04" },
] as const;

const QUERY = "[your service] near me";
const AUTOPLAY_MS = 5200;

function TypedQuery() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(QUERY.slice(0, i));
      if (i >= QUERY.length) clearInterval(id);
    }, 42);
    return () => clearInterval(id);
  }, []);

  return (
    <span>
      {text}
      <span className="animate-caret text-accent">|</span>
    </span>
  );
}

function Stars({ rating = 4.8 }: { rating?: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="flex gap-[2px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" className="h-3 w-3 fill-ink">
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2L4.6 17.8l1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
          </svg>
        ))}
      </span>
      <span className="font-mono text-[11px] text-muted">{rating.toFixed(1)}</span>
    </span>
  );
}

function StagePanel({ stage }: { stage: number }) {
  if (stage === 0) {
    const results = [
      { n: 1, name: "Business A", you: false },
      { n: 2, name: "Business B", you: false },
      { n: 3, name: "Business C", you: false },
    ];

    return (
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-3 rounded-full border border-line-strong bg-surface px-5 py-3.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-muted">
            <path
              fill="currentColor"
              d="M21.53 20.47l-4.62-4.62a7.5 7.5 0 10-1.06 1.06l4.62 4.62a.75.75 0 001.06-1.06zM4.5 10.5a6 6 0 1112 0 6 6 0 01-12 0z"
            />
          </svg>
          <span className="font-mono text-sm text-ink">
            <TypedQuery />
          </span>
        </div>

        {/* Sponsored — your business, showing up before anyone even scrolls */}
        <div className="mt-5 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Sponsored</p>
          <span className="font-mono text-[10px] uppercase tracking-wide text-accent">You</span>
        </div>
        <div className="mt-2 border border-accent/40 bg-accent/[0.08] p-4">
          <p className="text-sm font-medium text-ink">Your Business Name</p>
          <div className="mt-1.5 flex items-center gap-2">
            <Stars rating={4.9} />
            <span className="font-mono text-[10px] text-faint">(214)</span>
          </div>
          <p className="mt-1.5 text-xs text-muted">
            6+ years in business &middot; Serves your area
          </p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-accent">
            Open now
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {["Get Quote", "Call"].map((label) => (
              <div
                key={label}
                className="border border-line bg-surface-2 py-2 text-center font-mono text-[10px] uppercase tracking-wide text-muted"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Local pack — free, and where organic SEO wins */}
        <p className="mb-2 mt-5 font-mono text-[10px] uppercase tracking-wide text-faint">
          Local Results
        </p>
        <div className="space-y-2">
          {results.map((biz) => (
            <div
              key={biz.n}
              className={`flex items-center gap-3 border px-4 py-3 ${
                biz.you ? "border-accent/40 bg-accent/[0.08]" : "border-line bg-surface opacity-70"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-xs ${
                  biz.you ? "border-accent text-accent" : "border-line-strong text-muted"
                }`}
              >
                {biz.n}
              </span>
              <div className="flex-1">
                <p className={`text-sm ${biz.you ? "font-medium text-ink" : "text-muted"}`}>
                  {biz.name}
                </p>
                {biz.you && (
                  <p className="font-mono text-[10px] uppercase tracking-wide text-accent">
                    Google Maps &middot; Local Pack
                  </p>
                )}
              </div>
              {biz.you && (
                <span className="font-mono text-[10px] uppercase tracking-wide text-accent">
                  You
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (stage === 1) {
    return (
      <div className="w-full max-w-lg border border-line-strong bg-surface p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-lg font-semibold text-ink">Your Business Name</p>
            <p className="mt-1 text-sm text-muted">Local Service Business</p>
            <div className="mt-2">
              <Stars />
            </div>
          </div>
          <span className="border border-accent/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-accent">
            Open Now
          </span>
        </div>
        <div className="mt-5 h-px bg-line" />
        <div className="mt-5 grid grid-cols-3 gap-2">
          {["Directions", "Website", "Call"].map((label) => (
            <div
              key={label}
              className="border border-line bg-surface-2 py-2.5 text-center font-mono text-[10px] uppercase tracking-wide text-muted"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (stage === 2) {
    return (
      <div className="w-full max-w-lg border border-line-strong bg-surface">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="ml-3 font-mono text-[10px] text-faint">yourbusiness.com</span>
        </div>

        {/* Mini site nav */}
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="h-2.5 w-16 bg-line-strong" />
          <div className="flex gap-4">
            <div className="h-2 w-8 bg-line" />
            <div className="h-2 w-8 bg-line" />
            <div className="h-2 w-8 bg-line" />
          </div>
        </div>

        {/* Hero block */}
        <div className="space-y-3 p-6">
          <div className="h-2.5 w-3/4 bg-line-strong" />
          <div className="h-2.5 w-1/2 bg-line-strong" />
          <div className="mt-3 h-24 bg-line" />
          <div className="mt-4 inline-flex items-center gap-2 bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-wide text-bg">
            Get a Free Quote →
          </div>
        </div>

        {/* Services strip */}
        <div className="grid grid-cols-3 gap-px border-y border-line bg-line">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2 bg-surface p-4">
              <div className="h-5 w-5 border border-line-strong" />
              <div className="h-1.5 w-full bg-line-strong" />
              <div className="h-1.5 w-2/3 bg-line" />
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="h-1.5 w-20 bg-line" />
          <div className="h-1.5 w-10 bg-line" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg border border-line-strong bg-surface p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wide text-accent">
          New Quote Request
        </span>
        <svg viewBox="0 0 20 20" className="h-4 w-4 text-accent">
          <path
            fill="currentColor"
            d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
          />
        </svg>
      </div>
      <div className="mt-4 space-y-3 font-mono text-xs">
        <div className="flex justify-between border-b border-line pb-2">
          <span className="text-faint">Service</span>
          <span className="text-ink">Your Service</span>
        </div>
        <div className="flex justify-between border-b border-line pb-2">
          <span className="text-faint">Source</span>
          <span className="text-ink">Google Business Profile</span>
        </div>
        <div className="flex justify-between">
          <span className="text-faint">Status</span>
          <span className="text-accent">Lead Captured</span>
        </div>
      </div>
    </div>
  );
}

export default function SearchJourney() {
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (!inView || paused) return;
    const id = setTimeout(() => setStage((s) => (s + 1) % STAGES.length), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [stage, inView, paused]);

  return (
    <section id="journey" ref={ref} className="bg-bg py-28 md:border-t md:border-line md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pb-6 md:border-b md:border-line">
          <Eyebrow>The Path to a Customer</Eyebrow>
        </div>

        <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl">
          From your website to Google Search and Maps, we build the site
          and the visibility that turns searches into customers.
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <SplitText text="We don’t create the demand." />
          <br />
          <SplitText text="We put you where it already is." delay={0.15} />
        </h2>

        <div
          className="mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Progress rail */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-2 md:gap-4">
            {STAGES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setStage(i)}
                className="group flex flex-col items-start gap-3 text-left"
              >
                <span className="relative block h-[2px] w-full bg-line">
                  <span
                    className="absolute inset-y-0 left-0 bg-accent transition-all duration-500 ease-out"
                    style={{ width: i <= stage ? "100%" : "0%" }}
                  />
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[11px] transition-colors duration-300 ${
                      i === stage ? "text-accent" : "text-faint group-hover:text-muted"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-[0.08em] transition-colors duration-300 sm:text-sm ${
                      i === stage ? "text-ink" : "text-muted group-hover:text-ink"
                    }`}
                  >
                    {s.label}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Stage viewport */}
          <div className="relative mt-14 flex min-h-[560px] items-center justify-center border border-line bg-[radial-gradient(circle_at_center,var(--color-surface)_0%,var(--color-bg)_75%)] px-6 py-12 md:min-h-[600px] md:py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full justify-center"
              >
                <StagePanel stage={stage} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <p className="max-w-xl text-sm text-muted">
            A sponsored result gets you seen today, but it disappears the
            moment you stop paying for it. That is why we also build the
            organic search and Maps presence that keeps sending customers
            your way long after the ad budget runs out.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
