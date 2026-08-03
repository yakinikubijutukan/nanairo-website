"use client";

import { Reveal } from "@/components/Reveal";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

/**
 * /contact — company info only, no form. The form + its /api/contact
 * backend (Resend) were retired; this page now just states how to reach
 * Nanairo directly. Email/company name match Footer.tsx exactly; location
 * is pulled from dict.footer.location so it stays in sync with the footer
 * across all four locales.
 */
export default function ContactView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  void locale;
  const t = dict.contact;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-washi px-6 py-40 md:px-12">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-px w-2/3 max-w-3xl -translate-x-1/2 bg-thread opacity-40 animate-breathe" />

      <Reveal className="text-center">
        <p className="font-body text-xs uppercase tracking-widest2 text-stone">{t.heroEyebrow}</p>

        <div className="mt-10 space-y-4">
          <p>
            <a
              href="mailto:info@nanairo-llc.com"
              className="font-display text-3xl font-medium text-sumi transition-colors duration-300 hover:text-stone md:text-4xl"
            >
              info@nanairo-llc.com
            </a>
          </p>
          <p className="font-body text-lg text-sumi">Nanairo LLC</p>
          <p className="font-body text-base text-stone">{dict.footer.location}</p>
        </div>
      </Reveal>
    </section>
  );
}
