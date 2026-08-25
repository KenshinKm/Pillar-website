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
      className={`inline-flex items-center gap-2.5 border border-line px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-muted ${className}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
      {children}
    </span>
  );
}
