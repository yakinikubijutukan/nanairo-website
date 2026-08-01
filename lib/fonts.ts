import { Manrope, Inter, Fraunces } from "next/font/google";

/**
 * Typeface direction (see design proposal §2.3):
 *   Display  -> PP Neue Montreal / Founders Grotesk (licensed)
 *   Body     -> Suisse Int'l (licensed)
 *   Editorial serif -> GT Sectra / Canela (licensed)
 *
 * Those are commercial families. Manrope, Inter and Fraunces are used here
 * as production-ready, freely-licensed stand-ins with near-identical
 * character (geometric humanist grotesk / neutral text face / warm
 * editorial serif) so the site ships fully functional today. Swapping in
 * the licensed families later is a one-file change in this module.
 */

export const display = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
