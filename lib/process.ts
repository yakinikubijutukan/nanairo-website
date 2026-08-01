import type { Dictionary } from "./i18n/types";

export type ProcessStage = {
  index: string;
  title: string;
  duration: string;
  happens: string;
  deliver: string[];
  expected: string;
};

const STAGE_META = [
  { index: "01", stageKey: "discovery" },
  { index: "02", stageKey: "strategy" },
  { index: "03", stageKey: "launchPrep" },
  { index: "04", stageKey: "goToMarket" },
  { index: "05", stageKey: "growth" },
  { index: "06", stageKey: "partnership" },
] as const;

/** Builds the localized, ordered six-stage process for the active language. */
export function getProcessStages(dict: Dictionary): ProcessStage[] {
  return STAGE_META.map((meta) => {
    const copy = dict.process.stages[meta.stageKey];
    return {
      index: meta.index,
      title: copy.title,
      duration: copy.duration,
      happens: copy.happens,
      deliver: [...copy.deliver],
      expected: copy.expected,
    };
  });
}
