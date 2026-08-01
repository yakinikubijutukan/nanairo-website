"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, CONTACT_PATH } from "@/lib/nav";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen;
  const inkClass = solid ? "text-sumi" : "text-washi";
  const mutedClass = solid ? "text-stone hover:text-sumi" : "text-washi/70 hover:text-washi";

  const homeHref = `/${locale}`;
  const contactHref = `/${locale}${CONTACT_PATH}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ease-premium ${
        solid ? "border-b border-platinum bg-washi/95 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <Link href={homeHref} aria-label="Nanairo — home" className="flex items-center">
          <Image
            src="/nanairo-logo.png"
            alt="Nanairo"
            width={320}
            height={54}
            priority
            className={`h-[38px] w-auto transition-[filter] duration-500 ease-premium ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const href = `/${locale}${link.href}`;
            const active = pathname === href;
            return (
              <Link
                key={link.key}
                href={href}
                className={`group relative font-body text-[13px] uppercase tracking-widest2 transition-colors duration-300 ${
                  active ? inkClass : mutedClass
                }`}
              >
                {dict.nav[link.key]}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-thread transition-transform duration-300 ease-premium group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-8 md:flex">
          <LanguageSwitcher locale={locale} label={dict.languageSwitcher.label} solid={solid} />
          <Link
            href={contactHref}
            className={`rounded-full border px-6 py-2.5 font-body text-[13px] uppercase tracking-widest2 transition-colors duration-300 ${
              solid
                ? "border-sumi/25 text-sumi hover:bg-sumi hover:text-washi"
                : "border-washi/40 text-washi hover:bg-washi hover:text-sumi"
            }`}
          >
            {dict.nav.startConversation}
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher locale={locale} label={dict.languageSwitcher.label} solid={solid} />
          <button
            type="button"
            aria-label={dict.nav.toggleMenu}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 transition-all duration-300 ease-premium ${inkClass.replace("text-", "bg-")} ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 transition-all duration-300 ease-premium ${inkClass.replace("text-", "bg-")} ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-platinum bg-washi md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={`/${locale}${link.href}`}
                  className="py-3 font-display text-2xl text-sumi"
                >
                  {dict.nav[link.key]}
                </Link>
              ))}
              <Link
                href={contactHref}
                className="mt-4 rounded-full bg-sumi px-6 py-3 text-center font-body text-sm uppercase tracking-widest2 text-washi"
              >
                {dict.nav.startConversation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
