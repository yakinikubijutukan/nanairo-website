import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { display, body, serif } from "@/lib/fonts";
import { BRAND_LOCKUP } from "@/lib/brand";
import { locales, localeBcp47, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import { ThreadProgress } from "@/components/Thread";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  const languages = Object.fromEntries(locales.map((l) => [localeBcp47[l], `/${l}`]));

  return {
    title: {
      default: `${BRAND_LOCKUP} — ${dict.meta.home.title}`,
      template: `%s — Nanairo`,
    },
    description: dict.meta.home.description,
    metadataBase: new URL("https://www.nanairo.jp"),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: `${BRAND_LOCKUP} — ${dict.meta.home.title}`,
      description: dict.meta.ogDescription,
      type: "website",
      locale: localeBcp47[locale],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <html lang={localeBcp47[locale]} className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body className="bg-washi font-body text-sumi">
        <ThreadProgress />
        <GrainOverlay />
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
