"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/type/Eyebrow";

const SERVICES = [
  {
    index: "01",
    kicker: "Build",
    title: "Web Development",
    description:
      "Premium, custom-built websites engineered for speed, clarity, and conversion. Not templates.",
    items: [
      "Premium custom websites",
      "Website redesigns",
      "Mobile optimization",
      "Landing & service pages",
      "Conversion optimization",
      "Performance & speed",
      "Lead & contact systems",
      "Hosting, maintenance & updates",
    ],
  },
  {
    index: "02",
    kicker: "Get Found",
    title: "Google & SEO",
    description:
      "We put your business in front of people actively searching for what you offer, on Search and on Maps.",
    items: [
      "Google Business Profile setup & optimization",
      "Local SEO",
      "Google Search visibility",
      "Google Maps visibility",
      "On-page & technical SEO",
      "Service & location pages",
      "Search Console & Analytics",
      "Ongoing search optimization",
    ],
  },
  {
    index: "03",
    kicker: "Grow",
    title: "Monthly Management",
    description:
      "After launch, we keep improving your site and search presence. Every month, on purpose.",
    items: [
      "Ongoing SEO",
      "Google Business management",
      "New pages & content",
      "Technical maintenance",
      "Analytics & reporting",
      "Conversion optimization",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-bg py-28 md:border-t md:border-line md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pb-6 md:border-b md:border-line">
          <Eyebrow>What We Do</Eyebrow>
        </div>

        <p className="mt-8 max-w-2xl text-base text-muted md:text-xl">
          Three things, done properly: a website worth visiting, the
          search visibility that gets people there, and the ongoing work
          that keeps it that way.
        </p>

        <div className="mt-4">
          {SERVICES.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={s.index} delay={i * 0.08}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group relative flex w-full cursor-default items-baseline gap-6 overflow-hidden border-b border-line py-10 text-left md:cursor-pointer md:gap-10 md:py-12"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 top-1/2 -z-10 -translate-y-1/2 select-none font-black leading-none text-line-strong/[0.15]"
                    style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
                  >
                    {s.index}
                  </span>

                  <span className="relative font-mono text-sm text-faint md:text-base">
                    {s.index}
                  </span>

                  <span className="flex-1">
                    <span className="block font-mono text-xs uppercase tracking-[0.12em] text-accent">
                      {s.kicker}
                    </span>
                    <span className="mt-2 block text-3xl font-bold uppercase leading-tight tracking-tight text-ink transition-colors duration-300 lg:text-4xl">
                      {s.title}
                    </span>
                  </span>

                  <span
                    className={`hidden shrink-0 font-mono text-2xl text-muted transition-transform duration-500 sm:block ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="hidden overflow-hidden border-b border-line md:block"
                    >
                      <div className="grid gap-8 py-8 pl-0 md:grid-cols-[1fr_2fr] md:gap-10 md:py-10 md:pl-[4.5rem]">
                        <p className="max-w-sm text-muted">{s.description}</p>
                        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                          {s.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-ink"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 bg-muted" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            View All Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
