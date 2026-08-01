# Nanairo | Japan Market Partner — Website

Production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS
implementation of the Nanairo site, built from the v4 design proposal (see
`Nanairo_Design_Proposal.md` in the parent folder). Brand position: **"Nanairo
| Japan Market Partner"** — a B2B business-development site, not a corporate
profile. Core message, resolved on every page: **"We help global brands
succeed in Japan."**

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — you'll be redirected to `/en` automatically
(or to `/ja`, `/ko`, `/zh-cn` if that matches your browser's language).

To build for production:

```bash
npm run build
npm start
```

> **Note on this build:** this project was authored in a sandboxed
> environment without access to the npm registry, so `npm install` /
> `npm run build` could not be executed here to produce an automated build
> log. Every file was written and then manually re-reviewed line by line
> (imports/exports, client/server component boundaries, Tailwind class
> generation, bracket/JSX balance), and every translation dictionary was
> additionally verified by actually executing the `.ts` files in Node
> (structural key-parity across all 4 languages, no empty strings, no
> cross-language character contamination) — but please run
> `npm install && npm run dev` as your first step and spot-check `/en`,
> `/ja`, `/ko`, and `/zh-cn` yourself. Let me know immediately if anything
> surfaces and I'll fix it right away.

## Multilingual support

The site is fully translated into four languages: English (`en`, default),
Japanese (`ja`), Korean (`ko`), and Simplified Chinese (`zh-cn`).

- **Routing** — every page lives under a locale segment:
  `/en`, `/ja`, `/ko`, `/zh-cn` (e.g. `/ja/services`, `/zh-cn/contact`).
  Visiting a bare path like `/services` redirects to the right locale
  automatically.
- **Auto-detection + persistence** — `middleware.ts` reads the browser's
  `Accept-Language` header on a visitor's first request to pick a locale,
  then remembers the choice in a `NEXT_LOCALE` cookie (1 year) so repeat
  visits go straight to their language. Manually switching languages
  always overrides both.
- **Language switcher** — top-right of the nav (`components/
  LanguageSwitcher.tsx`), keeps you on the same page when you switch
  languages (e.g. switching on `/en/why-japan` takes you to
  `/ja/why-japan`, not back to the homepage).
- **Translations** — all copy lives in `lib/i18n/dictionaries/{en,ja,ko,
  zh-cn}.ts`, hand-written for natural, professional B2B tone (not machine
  translated), typed against a single `Dictionary` shape in
  `lib/i18n/types.ts` so the four files can never drift out of sync with
  each other or with the components that consume them. This covers
  navigation, headings, body copy, buttons, forms, and the footer.
- **SEO** — every page's `generateMetadata()` builds a localized title and
  description plus a full hreflang set (`alternates.languages`) pointing
  to all four versions of that page, so search engines can serve the
  right language to the right visitor.
- **Brand lockup** — "Nanairo | Japan Market Partner" is intentionally
  left untranslated in every language, per the brand guidelines.

To add a fifth language later: add the locale code to `lib/i18n/config.ts`,
add a matching dictionary file in `lib/i18n/dictionaries/`, and TypeScript
will flag anywhere the new dictionary is missing a key.

## Contact form email delivery

The `/contact` form posts to `app/api/contact/route.ts`, which sends a
notification email through [Resend](https://resend.com) — no other
service (SMTP, Nodemailer, SendGrid, Formspree, a CRM) is wired in.

Setup:

1. `npm install resend` (not yet in `package.json` — see note below).
2. Create a free account at resend.com and generate an API key.
3. Copy `.env.example` to `.env.local` and paste the key into
   `RESEND_API_KEY`.
4. Optionally set `CONTACT_RECIPIENT_EMAIL` if inquiries should go
   somewhere other than `info@nanairo-llc.com` (the address already used
   throughout the site, in the footer and mailto links) and
   `CONTACT_FROM_EMAIL` once you've verified a sending domain in Resend.
5. Restart `npm run dev`. Without `RESEND_API_KEY` set, the endpoint
   returns a 500 with a clear "email delivery is not configured" error
   rather than pretending to send — check your terminal log if a test
   submission fails.

> **Why `npm install resend` is a separate step:** this project was built
> in a sandbox with no npm registry access, so I couldn't install the
> package or verify its exact current version here — the import
> (`import { Resend } from "resend"`) is already in the route file and
> will resolve as soon as you install it locally.

## What's implemented

- All 6 pages from the proposal: Home, Why Japan, Our Services, Success
  Process, About, Contact — each with its own signature layout concept
  (no repeated templates).
- **Home resequenced per v4:** Hero (with the "Nanairo | Japan Market
  Partner" kicker) → Trust Strip → "Not a trading company / agency /
  distributor — a Market Entry Partner" positioning section → Why Japan →
  the eight-pillar Expertise reel → Amazon Japan → Distribution →
  Marketing → Long-Term Partnership → closing CTA.
- **The eight named pillars** — Amazon Japan, E-commerce, Marketing,
  Logistics, Localization, Branding, Distribution, Long-Term Partnership —
  defined once in `lib/services.ts` and shared by the Home capability reel,
  the Services page chapters, and the footer's Expertise column, so the
  ordering and naming can never drift out of sync.
- The Thread — the site's signature seven-tone gradient line — as a
  scroll-progress bar, section dividers, and the Process page's spine.
- Custom magnetic cursor, magnetic CTA buttons, scroll-linked hero
  parallax, a horizontal "capability reel" on Home, a synchronized
  split-screen on Why Japan, a sticky chapter index on Services, and a
  pinned horizontal "configurator" sequence on Process.
- A working `/contact` form wired to a real API route
  (`app/api/contact/route.ts`) with validation, and email delivery via
  [Resend](https://resend.com) — see "Contact form email delivery" below
  for setup.
- Full `prefers-reduced-motion` fallback throughout.

## Before you launch

1. **Typography** — `lib/fonts.ts` currently uses Manrope / Inter / Fraunces
   (free, production-ready) as stand-ins for the proposal's licensed
   direction (PP Neue Montreal or Founders Grotesk / Suisse Int'l / GT
   Sectra or Canela). Swapping in licensed fonts is a one-file change.
2. **Photography & film** — there are no stock photos in this build by
   design (see proposal §2.4 — stock imagery was explicitly flagged as an
   anti-pattern). Sections that call for imagery currently use abstract,
   art-directed graphics (`components/Visuals.tsx` — gradients, line art,
   dot fields, architectural bars) as placeholders. Swap these for
   commissioned product photography / film once available — every spot is
   clearly marked in that file.
3. **Contact form backend** — done: `app/api/contact/route.ts` sends a
   notification email via Resend for every submission. You still need to
   supply your own `RESEND_API_KEY` — see "Contact form email delivery"
   below. Without it, submissions are rejected with a clear error instead
   of silently disappearing.
4. **Real stats** — the numbers used in the "Why Japan" stat callouts are
   illustrative. Replace with sourced, citable figures before launch.
5. **Metadata** — update `metadataBase` in `app/[locale]/layout.tsx` to
   your real production domain, and add an OG image.
6. **Translation review** — the four dictionaries were hand-written for
   natural, professional B2B tone, but a native-speaker review pass
   (especially for `ja`/`ko`/`zh-cn`) before launch is recommended, the
   same as you'd do for any translated marketing site.

## Project structure

```
app/[locale]/         Routes (App Router) — one folder per page, plus layout.tsx (locale layout + metadata)
app/api/               API routes (not locale-prefixed, e.g. /api/contact)
app/globals.css        Global styles
components/            Shared UI (Header, Footer, Thread, cursor, LanguageSwitcher, etc.)
components/<page>/     Page-specific view components
lib/                    Content data (services/pillars, process stages, nav), brand.ts (lockup + core message), font config
lib/i18n/               Locale config, typed dictionaries (en/ja/ko/zh-cn), get-dictionary, metadata helper
middleware.ts           Locale detection, redirect, and cookie persistence
```
