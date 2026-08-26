import Link from "next/link";
import Wordmark from "./Wordmark";

const COLUMNS = [
  {
    title: "Sitemap",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Process", href: "/process" },
      { label: "Results", href: "/results" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "Google & SEO", href: "/services" },
      { label: "Monthly Management", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark className="text-3xl" />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Web Development &amp; SEO. We build exceptional websites and
              position businesses where customers are already looking.
            </p>
            <a
              href="mailto:kenshin@pillarwebagency.com"
              className="mt-6 inline-block border-b border-line pb-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              kenshin@pillarwebagency.com
            </a>
            <a
              href="https://www.instagram.com/pillarwebagency"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm text-muted transition-colors hover:text-ink"
            >
              Instagram
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {col.title}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-mono text-xs uppercase tracking-[0.08em] text-faint sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} PILLAR. All rights reserved.</span>
          <span>Build. Get Found. Grow.</span>
        </div>
      </div>
    </footer>
  );
}
