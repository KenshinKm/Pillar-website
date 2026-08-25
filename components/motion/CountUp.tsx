"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({
  value,
  suffix = "",
  decimals = 1,
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;

    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
