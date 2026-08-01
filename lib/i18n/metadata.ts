import type { Metadata } from "next";
import { locales, localeBcp47, type Locale } from "./config";
import type { PageMeta } from "./types";

/**
 * Builds a page's <title>/<description> plus hreflang alternates for all
 * four locales. `path` is the locale-relative path (e.g. "/why-japan", or
 * "" for the homepage).
 */
export function buildPageMetadata(locale: Locale, meta: PageMeta, path: string): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [localeBcp47[l], `/${l}${path}`]));

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: localeBcp47[locale],
    },
  };
}
