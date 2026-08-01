"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThreadMark } from "@/components/Thread";
import { getServices } from "@/lib/services";
import type { Dictionary } from "@/lib/i18n/types";

/**
 * The eight named pillars (lib/services.ts is the single source of truth,
 * shared with the Services page) as a horizontal-scroll "capability reel" —
 * see design proposal v4, §4.1 step 5.
 */
export default function CapabilityReel({ dict }: { dict: Dictionary }) {
  const services = getServices(dict);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(services.length - 1) * 100}%`]
  );

  return (
    <div ref={wrapperRef} style={{ height: `${services.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-sumi">
        <motion.div className="flex h-full" style={{ x }}>
          {services.map((pillar, i) => (
            <div
              key={pillar.id}
              className="relative flex h-full w-screen shrink-0 flex-col justify-end px-6 pb-24 pt-40 md:px-16 md:pb-32"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background: `radial-gradient(ellipse at ${
                    20 + i * 8
                  }% 30%, rgba(255,255,255,0.06), transparent 60%)`,
                }}
              />
              <ThreadMark index={i + 1} />
              <h3 className="mt-6 max-w-xl font-display text-4xl font-medium text-washi md:text-6xl">
                {pillar.title}
              </h3>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-washi/60 md:text-lg">
                {pillar.tagline}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
          <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
            {dict.home.expertise.scrollLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
