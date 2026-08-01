/**
 * Nav link paths are locale-relative suffixes (home = ""). Callers prefix
 * with `/${locale}` to build the full href. `key` maps to Dictionary["nav"]
 * so labels come from the active language's dictionary, never hardcoded.
 */
export const NAV_LINKS = [
  { key: "home", href: "" },
  { key: "whyJapan", href: "/why-japan" },
  { key: "services", href: "/services" },
  { key: "process", href: "/process" },
  { key: "about", href: "/about" },
] as const;

export const CONTACT_PATH = "/contact";
