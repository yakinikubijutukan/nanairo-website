"use client";

import { Reveal } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function ContactView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.contact;
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-washi px-6 py-40 md:px-12">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-px w-2/3 max-w-3xl -translate-x-1/2 bg-thread opacity-40 animate-breathe" />

      <Reveal className="text-center">
        <p className="font-body text-xs uppercase tracking-widest2 text-stone">{t.heroEyebrow}</p>
        <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-sumi sm:text-6xl md:text-7xl">
          {t.heroHeadline}
        </h1>
      </Reveal>

      <Reveal delay={0.15} className="mt-20 w-full max-w-xl">
        <ContactForm dict={dict} locale={locale} />
      </Reveal>

      <Reveal delay={0.25} className="mt-16 max-w-sm text-center">
        <p className="font-body text-xs leading-relaxed text-stone/70">{t.reassurance}</p>
      </Reveal>
    </section>
  );
}
