import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 border border-line px-3.5 py-2 text-sm font-medium uppercase tracking-[0.1em] text-muted md:px-3 md:py-1.5 md:text-xs ${className}`}
    >
      <span className="h-2 w-2 shrink-0 bg-accent md:h-1.5 md:w-1.5" />
      {children}
    </span>
  );
}
