"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/results", label: "Results" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Wordmark className="text-xl md:text-2xl" />

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.1em] text-muted transition-colors duration-300 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/#contact"
            className="group hidden items-center gap-2 border border-line px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:border-ink md:inline-flex"
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-6 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-mono text-sm uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 border border-line py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-ink"
            >
              Start a Project →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
