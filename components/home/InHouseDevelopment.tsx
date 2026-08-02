"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ThreadMark } from "@/components/Thread";
import type { Dictionary } from "@/lib/i18n/types";

/**
 * "Developed In-House" / 自社開発・知的財産 — proof-of-capability section for
 * Home. Establishes Nanairo as an original product developer (not just a
 * trading/agency intermediary): the Fire Starter Stove is an in-house
 * product, protected by a registered Japanese Utility Model, and already
 * selling on Amazon Japan. Links out to the real registration record and
 * live Amazon listing so the claim is independently verifiable.
 */

const UTILITY_MODEL_URL = "https://www.j-platpat.inpit.go.jp/c1801/PU/JP-3246287/25/ja";
const AMAZON_PRODUCT_URL = "https://www.amazon.co.jp/dp/B0CP11TGQD";

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

function DocumentIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M11 6h13l6 6v22a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.2"
      />
      <path d="M24 6v6h6" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
      <path
        d="M13 20h14M13 25h14M13 30h9"
        stroke="#B08D4F"
        strokeOpacity="0.75"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function InHouseDevelopment({ dict }: { dict: Dictionary }) {
  const t = dict.home.inHouseDevelopment;

  return (
    <section className="relative overflow-hidden bg-sumi py-32 text-washi md:py-48">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-12">
        <Reveal>
          <ThreadMark index={2} />
          <h2 className="mt-6 max-w-lg text-balance font-display text-4xl font-medium leading-tight md:text-6xl">
            {t.headline}
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-washi/60">
            {t.body}
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {t.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-body text-sm text-washi/85">
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={UTILITY_MODEL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-washi/30 px-6 py-3 font-body text-[13px] uppercase tracking-widest2 text-washi transition-colors duration-300 hover:bg-washi hover:text-sumi"
            >
              {t.utilityModelButton}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={AMAZON_PRODUCT_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-washi/30 px-6 py-3 font-body text-[13px] uppercase tracking-widest2 text-washi transition-colors duration-300 hover:bg-washi hover:text-sumi"
            >
              {t.amazonButton}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-washi/15">
            <Image
              src="/hidane-konro-product.jpg"
              alt="火種コンロ — Fire Starter Stove, developed and manufactured by Nanairo LLC"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-sm border border-washi/15">
              <Image
                src="/hidane-konro-parts.jpg"
                alt="火種コンロ — product components"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-sm border border-washi/15">
              <Image
                src="/hidane-konro-detail.jpg"
                alt="火種コンロ — air vent detail"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-sm border border-washi/15 bg-washi/[0.04] p-5">
            <DocumentIcon />
            <div>
              <p className="font-body text-[11px] uppercase tracking-widest2 text-washi/50">
                {t.certificateLabel}
              </p>
              <p className="mt-1 font-display text-lg text-washi">{t.certificateNumber}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
