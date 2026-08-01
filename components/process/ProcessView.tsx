"use client";

import { Reveal } from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import ProcessConfigurator from "@/components/process/ProcessConfigurator";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function ProcessView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.process;
  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col justify-center bg-washi px-6 pt-32 md:px-12">
        <Reveal className="max-w-3xl">
          <p className="font-body text-xs uppercase tracking-widest2 text-stone">{t.heroEyebrow}</p>
          <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-sumi sm:text-6xl md:text-7xl">
            {t.heroHeadline}
          </h1>
          <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-stone md:text-lg">
            {t.heroBody}
          </p>
        </Reveal>
      </section>

      <ProcessConfigurator dict={dict} />

      <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-washi px-6 text-center">
        <Reveal className="max-w-2xl">
          <p className="text-balance font-serif text-3xl italic leading-snug text-sumi md:text-5xl">
            {t.closing.quote}
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={`/${locale}/contact`}>{t.closing.cta}</MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
