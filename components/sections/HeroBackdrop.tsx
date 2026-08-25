"use client";

import { motion } from "framer-motion";

export default function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-12 flex h-60 w-[85%] max-w-[17rem] -translate-x-1/2 items-center justify-center opacity-[0.16] md:inset-y-0 md:left-auto md:right-0 md:w-[55%] md:max-w-none md:translate-x-0 md:opacity-100 lg:w-[42%] md:[mask-image:linear-gradient(to_left,black_45%,transparent_96%)] md:[-webkit-mask-image:linear-gradient(to_left,black_45%,transparent_96%)]"
    >
      <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden border border-line-strong bg-surface shadow-2xl">
        {/* Browser chrome */}
        <div className="relative z-10 flex items-center gap-1.5 border-b border-line bg-surface-2 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="ml-3 h-2 w-28 bg-line-strong" />
        </div>

        {/* Auto-scrolling mock website content */}
        <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
          <motion.div
            className="space-y-5 p-6"
            animate={{ y: ["0%", "-42%"] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="h-36 w-full bg-line-strong/70" />
            <div className="space-y-2">
              <div className="h-3 w-3/4 bg-line-strong" />
              <div className="h-3 w-1/2 bg-line-strong" />
            </div>
            <div className="h-8 w-32 bg-accent/70" />

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="h-24 bg-line" />
              <div className="h-24 bg-line" />
            </div>

            <div className="space-y-2 pt-2">
              <div className="h-3 w-2/3 bg-line-strong" />
              <div className="h-3 w-1/3 bg-line-strong" />
            </div>

            <div className="h-44 w-full bg-line-strong/70" />

            <div className="space-y-2">
              <div className="h-3 w-3/4 bg-line-strong" />
              <div className="h-3 w-1/2 bg-line-strong" />
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="h-16 bg-line" />
              <div className="h-16 bg-line" />
              <div className="h-16 bg-line" />
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-10 h-10 bg-gradient-to-b from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface to-transparent" />
      </div>
    </div>
  );
}
