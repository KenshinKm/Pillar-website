import Link from "next/link";

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="PILLAR home page"
      className={`inline-flex items-center font-black uppercase tracking-tight leading-none ${className}`}
    >
      PILLAR
    </Link>
  );
}
