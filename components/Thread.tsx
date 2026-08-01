"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * The Thread — Nanairo's single ownable visual signature. A gradient line
 * built from the brand's seven tones (indigo, plum, ochre, moss, teal,
 * rust, graphite) that runs through the entire site. See proposal §2.1.
 */

/** Fixed top-of-viewport scroll-progress reading of the Thread. */
export function ThreadProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-thread"
      style={{ scaleX }}
    />
  );
}

/**
 * A decorative Thread rule that draws itself in once scrolled into view.
 * Use as a section divider between major beats.
 */
export function ThreadDivider({
  className = "",
  fractured = false,
}: {
  className?: string;
  fractured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={`relative h-px w-full overflow-hidden ${className}`}>
      <motion.div
        className={fractured ? "h-full w-full bg-thread" : "h-full w-full bg-sumi/70"}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

/** Small tabular-numeral "0X" marker with a Thread-colored tick, used across
 * Services and Process for the engineered/precise numeral system. */
export function ThreadMark({ index }: { index: number }) {
  return (
    <span className="flex items-center gap-3 font-body text-xs tracking-widest2 text-stone">
      <span className="h-px w-6 bg-thread" />
      {String(index).padStart(2, "0")}
    </span>
  );
}
