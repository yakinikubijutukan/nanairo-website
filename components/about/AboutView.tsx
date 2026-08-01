"use client";

import { Reveal } from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { ThreadDivider } from "@/components/Thread";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function AboutView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.about;
  const values = [t.values.craftsmanship, t.values.trust, t.values.longTermThinking, t.values.culturalFluency];

  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col justify-center bg-washi px-6 pt-32 md:px-12">
        <Reveal className="max-w-3xl">
          <p className="font-body text-xs uppercase tracking-widest2 text-stone">{t.heroEyebrow}</p>
          <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-sumi sm:text-6xl md:text-7xl">
            {t.heroHeadline}
          </h1>
        </Reveal>
      </section>

      {/* Long-form narrative */}
      <section className="bg-washi px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-serif text-2xl italic leading-relaxed text-sumi md:text-3xl">
              {t.narrative.quote}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 space-y-6 font-body text-lg leading-relaxed text-stone">
            {t.narrative.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <ThreadDivider className="mx-auto max-w-4xl" />

      {/* Values */}
      <section className="bg-washi px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-widest2 text-stone">{t.valuesLabel}</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <span className="font-body text-xs uppercase tracking-widest2 text-stone/50">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium text-sumi md:text-3xl">
                  {v.title}
                </h3>
                <p className="mt-4 max-w-md font-body text-base leading-relaxed text-stone">
                  {v.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team statement */}
      <section className="bg-sumi px-6 py-24 text-center md:px-12 md:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-balance font-serif text-2xl italic leading-relaxed text-washi md:text-4xl">
            {t.team.quote}
          </p>
          <p className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-washi/55">
            {t.team.body}
          </p>
        </Reveal>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-platinum bg-washi py-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal>
            <p className="text-center font-body text-xs uppercase tracking-widest2 text-stone/60">
              {t.platformsLabel}
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
            {t.platforms.map((p) => (
              <span key={p} className="font-display text-lg text-sumi/40 md:text-xl">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-washi px-6 text-center">
        <Reveal className="max-w-xl">
          <p className="text-balance font-display text-2xl font-medium leading-tight text-sumi md:text-4xl">
            {t.closing.headline}
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={`/${locale}/contact`}>{t.closing.cta}</MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
