"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

/**
 * "Meet the Founder" — proof-of-experience section for Home, placed right
 * after Developed In-House. Puts a real person behind the "Market Entry
 * Partner" positioning: Shinji Nakai, Founder & CEO. Portrait on the left
 * (image-first on mobile), name/title/headline/body/achievements on the
 * right. Light (washi) section, breaking up the two neighboring dark
 * (sumi) sections for visual rhythm.
 */

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="#B08D4F" strokeOpacity="0.7" strokeWidth="1.2" />
      <path
        d="M6 10.2l2.6 2.6L14 7.4"
        stroke="#B08D4F"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Founder({ dict }: { dict: Dictionary }) {
  const t = dict.home.founder;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fdf9f1_0%,#f5ebdd_100%)] py-32 md:py-48">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(176,141,79,0.14),_transparent_42%)]" />
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-[0.95,1.05] md:px-12">
        <Reveal className="order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-3 rounded-[2rem] border border-[#b08d4f]/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#d8c2a0]/60 bg-[#efe3cc] shadow-[0_30px_100px_rgba(26,24,21,0.12)]">
              <Image
                src="/images/founder.jpg"
                alt="Shinji Nakai — Founder & CEO, Nanairo LLC"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-md text-center md:text-left">
            <p className="font-display text-xl font-medium text-sumi">{t.name}</p>
            <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-stone">
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-2">
          <div className="rounded-[2rem] border border-[#b08d4f]/15 bg-white/70 p-8 shadow-[0_20px_70px_rgba(26,24,21,0.06)] backdrop-blur-sm sm:p-10">
            <p className="font-body text-xs uppercase tracking-widest2 text-stone/60">
              {t.eyebrow}
            </p>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight text-sumi md:text-6xl">
              {t.headline}
            </h2>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-stone">
              {t.body}
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.achievements.map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-sumi/85">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
