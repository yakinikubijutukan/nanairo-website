"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { getServices } from "@/lib/services";
import {
  AmazonJapanVisual,
  EcommerceVisual,
  MarketingVisual,
  LogisticsVisual,
  LocalizationVisual,
  BrandingVisual,
  DistributionVisual,
  PartnershipVisual,
} from "@/components/services/PillarVisuals";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

/** Each pillar has its own bespoke illustration — see PillarVisuals.tsx. */
function VisualFor({ id }: { id: string }) {
  switch (id) {
    case "amazon-japan":
      return <AmazonJapanVisual className="text-sumi" />;
    case "ecommerce":
      return <EcommerceVisual className="text-sumi" />;
    case "marketing":
      return <MarketingVisual className="text-sumi" />;
    case "logistics":
      return <LogisticsVisual className="text-sumi" />;
    case "localization":
      return <LocalizationVisual className="text-sumi" />;
    case "branding":
      return <BrandingVisual className="text-sumi" />;
    case "distribution":
      return <DistributionVisual className="text-sumi" />;
    case "long-term-partnership":
      return <PartnershipVisual className="text-sumi" />;
    default:
      return null;
  }
}

export default function ServicesView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const services = getServices(dict);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative flex min-h-[60vh] flex-col justify-end bg-washi px-6 pb-20 pt-40 md:px-12">
        <Reveal className="max-w-3xl">
          <p className="font-body text-xs uppercase tracking-widest2 text-stone">{dict.services.heroEyebrow}</p>
          <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-sumi sm:text-6xl md:text-7xl">
            {dict.services.heroHeadline}
          </h1>
        </Reveal>
      </section>

      <section className="relative border-t border-platinum bg-washi">
        <div className="mx-auto flex max-w-[1600px] flex-col md:flex-row">
          {/* Sticky index */}
          <aside className="hidden w-64 shrink-0 border-r border-platinum py-24 pl-12 md:block">
            <div className="sticky top-32 space-y-6">
              {services.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-start gap-4 font-body text-sm transition-colors duration-300"
                >
                  <span
                    className={`mt-1 tabular-nums text-xs transition-colors duration-300 ${
                      active === i ? "text-sumi" : "text-stone/50"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span
                    className={`leading-snug transition-colors duration-300 ${
                      active === i ? "text-sumi" : "text-stone/50"
                    }`}
                  >
                    {s.title}
                  </span>
                </a>
              ))}
            </div>
          </aside>

          {/* Chapters */}
          <div className="flex-1">
            {services.map((service, i) => (
              <section
                key={service.id}
                id={service.id}
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                className="flex min-h-screen flex-col justify-center gap-12 border-b border-platinum px-6 py-24 md:flex-row md:items-center md:gap-16 md:px-16"
              >
                <div className="md:w-1/2">
                  <Reveal>
                    <p className="font-body text-xs uppercase tracking-widest2 text-stone md:hidden">
                      {service.index}
                    </p>
                    <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-sumi md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-6 max-w-md font-body text-base leading-relaxed text-stone">
                      {service.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {service.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 font-body text-sm text-sumi/80">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-thread-ochre" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-platinum bg-washi md:w-1/2">
                  <VisualFor id={service.id} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-sumi px-6 text-center">
        <Reveal className="max-w-2xl">
          <p className="text-balance font-serif text-3xl italic leading-snug text-washi md:text-5xl">
            {dict.services.closing.quote}
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={`/${locale}/contact`} variant="light">
              {dict.services.closing.cta}
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
