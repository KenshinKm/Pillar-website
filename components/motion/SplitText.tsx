"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Word-by-word reveal for major display headlines. Masks each word inside
 * an overflow-hidden clip and slides it up into view on scroll.
 *
 * The space between words is a real text node rendered as a sibling of the
 * mask spans (not inside one) — collapsing an inline-block's own trailing
 * whitespace is standard browser behavior, so a space living inside the
 * mask disappears visually. Keeping it outside preserves both the visible
 * gap and a real space character for screen readers / copy-paste / SEO.
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.07,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -15% 0px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={`inline ${className}`}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <motion.span
              className="inline-block"
              initial={{ y: "140%" }}
              animate={inView ? { y: "0%" } : { y: "140%" }}
              transition={{
                duration: 0.9,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
