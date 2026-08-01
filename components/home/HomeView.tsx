"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { ThreadDivider, ThreadMark } from "@/components/Thread";
import { DarkStage, LightStage, JourneyLine, ArchitecturalBars } from "@/components/Visuals";
import CapabilityReel from "@/components/home/CapabilityReel";
import TrustStrip from "@/components/home/TrustStrip";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function HomeView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home;
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, 120]);

  const path = (suffix: string) => `/${locale}${suffix}`;

  return (
    <>
      {/* 1 — Hero: "The Journey" */}
      <section ref={heroRef} className="relative h-[110vh] overflow-hidden bg-sumi">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <DarkStage />
          <div className="absolute inset-0 flex items-end justify-center opacity-40">
            <JourneyLine />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs uppercase tracking-widest2 text-washi/50"
          >
            {t.heroKicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-5xl text-balance font-display text-4xl font-medium leading-[1.05] text-washi sm:text-6xl md:text-8xl"
          >
            {t.heroHeadline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-8 max-w-xl text-balance font-body text-base leading-relaxed text-washi/65 md:text-lg"
          >
            {t.heroSubhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
          >
            <MagneticButton href={path("/contact")} variant="light">
              {t.closingCta.cta}
            </MagneticButton>
            <a
              href="#positioning"
              className="font-body text-sm text-washi/70 underline decoration-washi/30 underline-offset-4 transition-colors hover:text-washi"
            >
              {t.seeHowItWorks}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2 — Trust strip */}
      <TrustStrip text={t.trustStrip} />

      {/* 3 — Positioning: "Not a trading company. Not an agency. A Market Entry Partner." */}
      <section id="positioning" className="relative bg-washi">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex min-h-[70vh] flex-col justify-center border-b border-platinum px-8 py-24 md:min-h-screen md:border-b-0 md:border-r md:px-16">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-widest2 text-stone/60">
                {t.positioning.leftEyebrow}
              </p>
              <ul className="mt-8 space-y-6 font-body text-lg text-stone/70 md:text-xl">
                {t.positioning.leftItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="relative flex min-h-[70vh] flex-col justify-center bg-sumi px-8 py-24 md:min-h-screen md:px-16">
            <Reveal delay={0.1}>
              <p className="font-body text-xs uppercase tracking-widest2 text-washi/50">
                {t.positioning.rightEyebrow}
              </p>
              <ul className="mt-8 space-y-6 font-display text-lg text-washi md:text-xl">
                {t.positioning.rightItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
        <ThreadDivider fractured />
      </section>

      {/* 4 — Why Japan teaser */}
      <section className="relative bg-sumi py-32 md:py-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-widest2 text-washi/40">
              {t.whyJapanTeaser.eyebrow}
            </p>
            <h2 className="mt-5 text-balance font-serif text-3xl italic leading-tight text-washi md:text-5xl">
              {t.whyJapanTeaser.headline}
            </h2>
          </Reveal>

          <RevealGroup className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-3" stagger={0.15}>
            <RevealItem>
              <StatCounter
                tone="light"
                value={4.2}
                decimals={1}
                suffix="T"
                prefix="$"
                label={t.whyJapanTeaser.stat1Label}
              />
            </RevealItem>
            <RevealItem>
              <StatCounter tone="light" value={13} suffix="T" prefix="¥" label={t.whyJapanTeaser.stat2Label} />
            </RevealItem>
            <RevealItem>
              <StatCounter tone="light" value={92} suffix="%" label={t.whyJapanTeaser.stat3Label} />
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.2} className="mt-20">
            <Link
              href={path("/why-japan")}
              className="inline-flex items-center gap-3 font-body text-sm text-washi/70 underline decoration-washi/30 underline-offset-4 transition-colors hover:text-washi"
            >
              {t.whyJapanTeaser.linkText}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5 — Our Expertise: horizontal capability reel (8 pillars) */}
      <CapabilityReel dict={dict} />

      {/* 6 — Amazon Japan */}
      <section className="relative overflow-hidden bg-washi py-32 md:py-48">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-12">
          <Reveal>
            <ThreadMark index={1} />
            <h2 className="mt-6 max-w-lg text-balance font-display text-4xl font-medium leading-tight text-sumi md:text-6xl">
              {t.amazonJapan.headline}
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-stone">
              {t.amazonJapan.body}
            </p>
            <div className="mt-10">
              <MagneticButton href={path("/services")} variant="outline">
                {t.amazonJapan.cta}
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-platinum bg-sumi/[0.02] p-8">
              <div className="absolute inset-0">
                <LightStage />
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div className="h-3 w-24 rounded-full bg-thread opacity-70" />
                <div className="space-y-3">
                  <div className="h-3 w-3/4 bg-sumi/10" />
                  <div className="h-3 w-1/2 bg-sumi/10" />
                  <div className="h-8 w-1/3 rounded-full bg-sumi" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7 — Distribution */}
      <section className="relative overflow-hidden bg-sumi py-32 text-washi md:py-48">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-12">
          <Reveal className="order-2 h-64 md:order-1 md:h-96">
            <ArchitecturalBars className="text-washi" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 md:order-2">
            <ThreadMark index={2} />
            <h2 className="mt-6 max-w-lg text-balance font-display text-4xl font-medium leading-tight md:text-6xl">
              {t.distribution.headline}
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-washi/60">
              {t.distribution.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8 — Marketing (pull quote) */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-washi px-6 py-32">
        <Reveal className="max-w-3xl text-center">
          <p className="text-balance font-serif text-3xl italic leading-snug text-sumi md:text-5xl">
            &ldquo;{t.marketing.quote}&rdquo;
          </p>
        </Reveal>
      </section>

      {/* 9 — Long-Term Partnership (process preview) */}
      <section className="relative bg-washi pb-32 md:pb-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal className="max-w-xl">
            <p className="font-body text-xs uppercase tracking-widest2 text-stone">
              {t.longTermPartnership.eyebrow}
            </p>
            <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-sumi md:text-5xl">
              {t.longTermPartnership.headline}
            </h2>
          </Reveal>

          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-3 h-px bg-thread opacity-70" />
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
              {t.longTermPartnership.steps.map((step, i) => (
                <Reveal key={step} delay={i * 0.05}>
                  <div className="h-3 w-3 rounded-full border-2 border-sumi bg-washi" />
                  <p className="mt-4 font-body text-sm text-sumi">{step}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="mt-16">
            <Link
              href={path("/process")}
              className="inline-flex items-center gap-3 font-body text-sm text-sumi underline decoration-sumi/30 underline-offset-4 transition-colors hover:decoration-sumi"
            >
              {t.longTermPartnership.linkText}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 10 — Closing CTA */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-sumi px-6 text-center">
        <DarkStage />
        <Reveal className="relative z-10">
          <p className="text-balance font-display text-3xl font-medium leading-tight text-washi md:text-6xl">
            {t.closingCta.message}
          </p>
          <div className="mx-auto mt-8 h-px w-40 bg-thread" />
          <div className="mt-12">
            <MagneticButton href={path("/contact")} variant="light">
              {t.closingCta.cta}
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
