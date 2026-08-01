"use client";

import { Reveal } from "@/components/Reveal";

/**
 * A quiet, single-line credibility signal directly beneath the hero — the
 * kind of reassurance a business-development page needs in the first three
 * seconds. Deliberately understated: no icons, no logos required, no
 * animation flourish. See design proposal v4, §2.1.1.
 */
export default function TrustStrip({ text }: { text: string }) {
  return (
    <section className="border-y border-platinum bg-washi py-7">
      <Reveal>
        <p className="text-center font-body text-xs uppercase tracking-widest2 text-stone">
          {text}
        </p>
      </Reveal>
    </section>
  );
}
