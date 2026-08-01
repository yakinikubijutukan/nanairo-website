"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Oversized tabular-numeral stat with a count-up animation triggered once
 * the element enters the viewport. See proposal §5 ("Numerals").
 */
export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  label,
  className = "",
  tone = "dark",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label?: string;
  className?: string;
  /** "dark" = dark numerals for light backgrounds; "light" = for dark stages */
  tone?: "dark" | "light";
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const numeralClass = tone === "light" ? "text-washi" : "text-sumi";
  const labelClass = tone === "light" ? "text-washi/50" : "text-stone";

  return (
    <div ref={ref} className={className}>
      <div className={`tabular-nums font-display text-6xl font-medium md:text-7xl ${numeralClass}`}>
        {prefix}
        {display.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </div>
      {label ? (
        <p className={`mt-4 max-w-xs font-body text-sm ${labelClass}`}>{label}</p>
      ) : null}
    </div>
  );
}
