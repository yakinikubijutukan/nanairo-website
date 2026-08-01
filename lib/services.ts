import type { Dictionary } from "./i18n/types";

export type ServiceChapter = {
  id: string;
  index: string;
  title: string;
  /** One short line, used in compact contexts like the Home capability reel. */
  tagline: string;
  description: string;
  outcomes: string[];
};

/**
 * Static metadata for the eight named, ownable pillars of Nanairo's
 * expertise — stated in this exact order everywhere the site lists what
 * Nanairo does (Home, Services index, footer). See design proposal v4,
 * §1.3. `pillarKey` maps each entry to its translated copy in
 * Dictionary["services"]["pillars"] — ids/order stay fixed across locales,
 * only the words change. Each `id` has its own bespoke illustration in
 * components/services/PillarVisuals.tsx (ServicesView switches on `id`
 * directly — no shared abstract "visual kind" system anymore).
 */
const PILLAR_META = [
  { id: "amazon-japan", index: "01", pillarKey: "amazonJapan" },
  { id: "ecommerce", index: "02", pillarKey: "ecommerce" },
  { id: "marketing", index: "03", pillarKey: "marketing" },
  { id: "logistics", index: "04", pillarKey: "logistics" },
  { id: "localization", index: "05", pillarKey: "localization" },
  { id: "branding", index: "06", pillarKey: "branding" },
  { id: "distribution", index: "07", pillarKey: "distribution" },
  { id: "long-term-partnership", index: "08", pillarKey: "longTermPartnership" },
] as const;

/** Builds the localized, ordered pillar list for the active language. */
export function getServices(dict: Dictionary): ServiceChapter[] {
  return PILLAR_META.map((meta) => {
    const copy = dict.services.pillars[meta.pillarKey];
    return {
      id: meta.id,
      index: meta.index,
      title: copy.title,
      tagline: copy.tagline,
      description: copy.description,
      outcomes: [...copy.outcomes],
    };
  });
}
