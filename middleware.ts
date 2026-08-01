import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, cookieName, isLocale, type Locale } from "@/lib/i18n/config";

/**
 * Picks the best-matching supported locale from an Accept-Language header,
 * e.g. "ja,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7" -> "ja". Written by hand (no
 * negotiator/intl-localematcher dependency) to keep the dependency graph
 * unchanged. Falls back to English — the required default — when nothing
 * matches.
 */
function detectLocaleFromHeader(header: string | null): Locale {
  if (!header) return defaultLocale;

  const candidates = header
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      const quality = qPart ? parseFloat(qPart) : 1;
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 1 : quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of candidates) {
    if (tag.startsWith("zh")) return "zh-cn";
    if (tag.startsWith("ja")) return "ja";
    if (tag.startsWith("ko")) return "ko";
    if (tag.startsWith("en")) return "en";
  }

  return defaultLocale;
}

function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathLocale = getLocaleFromPathname(pathname);

  // Path already carries a supported locale segment (e.g. /ja/services).
  if (pathLocale) {
    const cookieLocale = request.cookies.get(cookieName)?.value;
    if (cookieLocale === pathLocale) {
      return NextResponse.next();
    }
    // A manual navigation to a different locale is the strongest signal —
    // persist it so future visits (including bare "/") land here again.
    const response = NextResponse.next();
    response.cookies.set(cookieName, pathLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // No locale segment: decide where to send the visitor.
  const cookieLocale = request.cookies.get(cookieName)?.value;
  const locale: Locale = isLocale(cookieLocale)
    ? cookieLocale
    : detectLocaleFromHeader(request.headers.get("accept-language"));

  const search = request.nextUrl.search;
  const targetPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const redirectUrl = new URL(targetPath + search, request.url);

  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set(cookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  // Skip API routes, Next.js internals, and any request for a file with an
  // extension (images, favicon, etc.) — everything else gets locale-routed.
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
