"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { ThreadDivider } from "@/components/Thread";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function WhyJapanView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.whyJapan;
  const splitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: splitRef,
    offset: ["start start", "end end"],
  });
  const converge = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const leftX = useTransform(converge, [0, 1], ["0%", "25%"]);
  const rightX = useTransform(converge, [0, 1], ["0%", "-25%"]);
  const fade = useTransform(converge, [0, 1], [1, 0.15]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-washi px-6 pt-32 md:px-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 text-sumi">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <Image
              src="/images/japan-network.webp"
              alt="Technology and network infrastructure"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-widest2 text-stone">{t.heroEyebrow}</p>
            <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-sumi sm:text-6xl md:text-7xl">
              {t.heroHeadline}
            </h1>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-stone md:text-lg">
              {t.heroBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scale stats */}
      <section className="border-y border-platinum bg-washi py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <RevealGroup className="grid grid-cols-1 gap-16 sm:grid-cols-3" stagger={0.12}>
            <RevealItem>
              <StatCounter value={124} suffix="M" label={t.stats.populationLabel} />
            </RevealItem>
            <RevealItem>
              <StatCounter value={3} label={t.stats.rankLabel} prefix="#" />
            </RevealItem>
            <RevealItem>
              <StatCounter value={9} suffix=" / 10" label={t.stats.researchLabel} />
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Split-screen: Two Markets, One Thread */}
      <section ref={splitRef} className="relative" style={{ height: "260vh" }}>
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-sumi">
          <div className="flex items-center justify-center border-b border-washi/10 py-8">
            <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
              {t.split.sectionLabel}
            </p>
          </div>
          <div className="relative grid flex-1 grid-cols-1 md:grid-cols-2">
            <motion.div
              style={{ x: leftX, opacity: fade }}
              className="flex flex-col justify-center gap-10 overflow-y-auto border-b border-washi/10 px-8 py-16 md:border-b-0 md:border-r md:px-16"
            >
              <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
                {t.split.valuableLabel}
              </p>
              {t.split.valuable.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-2xl font-medium text-washi md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-washi/55">
                    {item.copy}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              style={{ x: rightX, opacity: fade }}
              className="flex flex-col justify-center gap-10 overflow-y-auto px-8 py-16 md:px-16"
            >
              <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
                {t.split.hardLabel}
              </p>
              {t.split.hard.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-2xl font-medium text-washi md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-washi/55">
                    {item.copy}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-thread opacity-50" />
        </div>
      </section>

      {/* Resolution / CTA */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-washi px-6 text-center">
        <Reveal className="max-w-2xl">
          <p className="text-balance font-serif text-3xl italic leading-snug text-sumi md:text-5xl">
            {t.resolution.quote}
          </p>
          <p className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-stone">
            {t.resolution.body}
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={`/${locale}/services`}>{t.resolution.cta}</MagneticButton>
          </div>
        </Reveal>
        <ThreadDivider className="mt-20 max-w-xs" />
      </section>
    </>
  );
}
