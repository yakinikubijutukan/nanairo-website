export const locales = ["en", "ja", "ko", "zh-cn"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Display names shown inside the language switcher, each written in its own language. */
export const localeLabels: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  ko: "한국어",
  "zh-cn": "简体中文",
};

/** Short codes shown in the compact switcher trigger. */
export const localeShort: Record<Locale, string> = {
  en: "EN",
  ja: "JA",
  ko: "KO",
  "zh-cn": "ZH",
};

/** BCP 47 tags used for <html lang>, hreflang, and Accept-Language matching. */
export const localeBcp47: Record<Locale, string> = {
  en: "en",
  ja: "ja",
  ko: "ko",
  "zh-cn": "zh-CN",
};

export const cookieName = "NEXT_LOCALE";

export function isLocale(value: string | undefined | null): value is Locale {
  if (!value) return false;
  return (locales as readonly string[]).includes(value);
}
