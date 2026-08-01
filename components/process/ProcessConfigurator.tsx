"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { getProcessStages } from "@/lib/process";
import type { Dictionary } from "@/lib/i18n/types";

export default function ProcessConfigurator({ dict }: { dict: Dictionary }) {
  const stages = getProcessStages(dict);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const count = stages.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(count - 1) * 100}%`]);
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(count - 1, Math.floor(v * count));
    setActive(idx);
  });

  return (
    <div ref={wrapperRef} style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-sumi text-washi">
        {/* Spine */}
        <div className="relative mx-auto mt-28 w-full max-w-3xl px-6 md:mt-32">
          <div className="relative h-px w-full bg-washi/15">
            <motion.div
              className="absolute inset-y-0 left-0 h-px bg-thread"
              style={{ scaleX: spineScale, transformOrigin: "left" }}
            />
          </div>
          <div className="mt-4 flex justify-between">
            {stages.map((s, i) => (
              <div key={s.index} className="flex flex-col items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    i <= active ? "bg-thread-ochre" : "bg-washi/20"
                  }`}
                />
                <span
                  className={`hidden font-body text-[10px] uppercase tracking-widest2 transition-colors duration-300 sm:block ${
                    i === active ? "text-washi" : "text-washi/30"
                  }`}
                >
                  {s.index}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stage track */}
        <motion.div className="flex flex-1" style={{ x }}>
          {stages.map((stage) => (
            <div
              key={stage.index}
              className="flex w-screen shrink-0 items-center px-6 md:px-16"
            >
              <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
                    {stage.index} — {stage.duration}
                  </p>
                  <h3 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-washi md:text-5xl">
                    {stage.title}
                  </h3>
                  <p className="mt-6 max-w-md font-body text-base leading-relaxed text-washi/60">
                    {stage.happens}
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-8">
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
                      {dict.process.deliversLabel}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {stage.deliver.map((d) => (
                        <li key={d} className="flex items-start gap-3 font-body text-sm text-washi/80">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-thread-teal" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
                      {dict.process.expectedLabel}
                    </p>
                    <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-washi/60">
                      {stage.expected}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="pb-10 text-center">
          <p className="font-body text-xs uppercase tracking-widest2 text-washi/30">
            {dict.process.scrollHint}
          </p>
        </div>
      </div>
    </div>
  );
}
