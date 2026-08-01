"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { locales, localeLabels, localeShort, type Locale } from "@/lib/i18n/config";

/**
 * Elegant language switcher for the header. Swaps only the leading locale
 * segment of the current path, so switching language keeps you on the same
 * page (e.g. /ja/services -> /ko/services). The chosen locale is persisted
 * by middleware.ts via a cookie once the new URL is requested.
 */
export default function LanguageSwitcher({
  locale,
  label,
  solid,
}: {
  locale: Locale;
  label: string;
  solid: boolean;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const restOfPath = pathname.replace(new RegExp(`^/${locale}`), "") || "";

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const inkClass = solid ? "text-sumi" : "text-washi";
  const mutedClass = solid ? "text-stone hover:text-sumi" : "text-washi/70 hover:text-washi";
  const borderClass = solid ? "border-sumi/15" : "border-washi/25";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 font-body text-[13px] uppercase tracking-widest2 transition-colors duration-300 ${inkClass}`}
      >
        {localeShort[locale]}
        <svg
          viewBox="0 0 10 6"
          fill="none"
          className={`h-1.5 w-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute right-0 top-full mt-3 min-w-[9rem] overflow-hidden rounded-sm border bg-washi/95 backdrop-blur ${borderClass}`}
          >
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}${restOfPath}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 font-body text-sm transition-colors duration-200 ${
                  l === locale ? "bg-sumi/5 text-sumi" : "text-stone hover:bg-sumi/5 hover:text-sumi"
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
