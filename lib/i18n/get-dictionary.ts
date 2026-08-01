import type { Locale } from "./config";
import type { Dictionary } from "./types";
import en from "./dictionaries/en";
import ja from "./dictionaries/ja";
import ko from "./dictionaries/ko";
import zhCN from "./dictionaries/zh-cn";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ja,
  ko,
  "zh-cn": zhCN,
};

/** Server-only dictionary loader — call from async server components (page.tsx / layout.tsx). */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
