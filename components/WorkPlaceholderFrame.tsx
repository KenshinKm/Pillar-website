"use client";

import { motion } from "framer-motion";

export default function WorkPlaceholderFrame({ index }: { index: string }) {
  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden border border-line bg-surface">
      <div className="flex items-center gap-1.5 border-b border-line px-5 py-3.5">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-2 select-none font-black leading-none text-line-strong/[0.18]"
        style={{ fontSize: "clamp(6rem, 16vw, 10rem)" }}
      >
        {index}
      </span>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(185,151,95,0.10) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-faint">
          Case Study {index}
        </span>
        <span className="text-sm text-muted">Launching soon</span>
      </div>
    </div>
  );
}
