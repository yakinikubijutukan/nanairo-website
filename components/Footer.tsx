import Link from "next/link";
import { NAV_LINKS, CONTACT_PATH } from "@/lib/nav";
import { getServices } from "@/lib/services";
import { BRAND_LOCKUP } from "@/lib/brand";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const services = getServices(dict);
  const homeHref = `/${locale}`;

  return (
    <footer className="border-t border-platinum bg-washi">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href={homeHref}
              className="group flex items-center gap-3 font-display text-base tracking-widest2 text-sumi"
            >
              <span className="relative h-4 w-4 overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-thread transition-transform duration-700 ease-premium group-hover:scale-125" />
              </span>
              NANAIRO
            </Link>
            <p className="mt-3 font-body text-xs uppercase tracking-widest2 text-stone">
              {BRAND_LOCKUP}
            </p>
            <p className="mt-6 max-w-sm font-body text-[15px] leading-relaxed text-stone">
              {dict.footer.description}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-body text-xs uppercase tracking-widest2 text-stone">
              {dict.footer.navigate}
            </p>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="font-body text-[15px] text-sumi/80 transition-colors duration-300 hover:text-sumi"
                  >
                    {dict.nav[link.key]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${locale}${CONTACT_PATH}`}
                  className="font-body text-[15px] text-sumi/80 transition-colors duration-300 hover:text-sumi"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-body text-xs uppercase tracking-widest2 text-stone">
              {dict.footer.expertise}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3">
              {services.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    href={`/${locale}/services#${pillar.id}`}
                    className="font-body text-[15px] text-sumi/80 transition-colors duration-300 hover:text-sumi"
                  >
                    {pillar.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-body text-xs uppercase tracking-widest2 text-stone">
              {dict.footer.contact}
            </p>
            <div className="mt-6 space-y-3 font-body text-[15px] text-sumi/80">
              <p>
                <a
                  href="mailto:info@nanairo-llc.com"
                  className="transition-colors duration-300 hover:text-sumi"
                >
                  info@nanairo-llc.com
                </a>
              </p>
              <p className="text-sumi">Nanairo LLC</p>
              <p>{dict.footer.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-thread opacity-60" />

        <div className="mt-8 flex flex-col gap-4 font-body text-xs text-stone md:flex-row md:items-center md:justify-between">
          <p>© {year} Nanairo LLC. {dict.footer.rights}</p>
          <div className="flex gap-6">
            <span className="cursor-default">{dict.footer.privacyPolicy}</span>
            <span className="cursor-default">{dict.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
