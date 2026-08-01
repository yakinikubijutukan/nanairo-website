"use client";

import { motion } from "framer-motion";

/**
 * Eight bespoke, literal-but-minimal line-art illustrations — one per
 * service pillar, replacing the old shared abstract motifs (rings, bars,
 * dot grids, generic curves). Thin strokes, a gold (#B08D4F) accent used
 * sparingly for the "hero" element in each scene, graphite/currentColor
 * for structural line work, quiet glow + one-time scroll draw-in to match
 * the site's existing motion language.
 */

const GOLD = "#B08D4F";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function drawTransition(delay = 0, duration = 1.1) {
  return { duration, delay, ease: EASE };
}

function Frame({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* 01 — Amazon Japan: storefront + fulfillment boxes + delivery flow       */
/* ---------------------------------------------------------------------- */
export function AmazonJapanVisual({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      {/* storefront */}
      <motion.rect
        x="66" y="132" width="122" height="10" rx="2"
        stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0)}
      />
      {[86, 116, 146, 176].map((x, i) => (
        <motion.line
          key={x}
          x1={x} y1="142" x2={x} y2="152"
          stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={drawTransition(0.1 + i * 0.03, 0.4)}
        />
      ))}
      <motion.rect
        x="76" y="152" width="112" height="88" rx="3"
        stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.15)}
      />
      <motion.rect
        x="152" y="176" width="24" height="24" rx="2"
        stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />
      <motion.rect
        x="100" y="200" width="30" height="40"
        stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
      />

      {/* fulfillment boxes */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
      >
        <rect x="236" y="176" width="52" height="52" rx="2" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M236 202 H288 M262 176 V228" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      </motion.g>
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.62, duration: 0.6, ease: EASE }}
      >
        <rect x="272" y="142" width="40" height="40" rx="2" stroke={GOLD} strokeOpacity="0.85" strokeWidth="1.2" />
        <path d="M272 162 H312 M292 142 V182" stroke={GOLD} strokeOpacity="0.6" strokeWidth="1" />
      </motion.g>

      {/* delivery flow */}
      <motion.path
        d="M300 190 C 340 176, 368 150, 400 130"
        stroke="url(#pv-amazon-gradient)"
        strokeWidth="1.2"
        strokeDasharray="1 7"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.8, 1)}
      />
      <defs>
        <linearGradient id="pv-amazon-gradient" x1="300" y1="190" x2="400" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A4A4A" stopOpacity="0.5" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
      >
        <circle cx="400" cy="130" r="14" fill={GOLD} fillOpacity="0.12" className="animate-breathe" />
        <circle cx="400" cy="130" r="4" fill={GOLD} />
      </motion.g>
    </Frame>
  );
}

/* ---------------------------------------------------------------------- */
/* 02 — E-commerce: laptop, shopping flow, payment, analytics              */
/* ---------------------------------------------------------------------- */
export function EcommerceVisual({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <motion.rect
        x="104" y="104" width="168" height="106" rx="6"
        stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0)}
      />
      <motion.path
        d="M78 224 L296 224 L312 240 L62 240 Z"
        stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.15)}
      />

      <motion.rect
        x="122" y="124" width="52" height="42" rx="3"
        stroke={GOLD} strokeOpacity="0.85" strokeWidth="1.2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
      />
      <circle cx="148" cy="142" r="7" stroke={GOLD} strokeOpacity="0.6" strokeWidth="1" />
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <line x1="186" y1="132" x2="238" y2="132" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
        <line x1="186" y1="146" x2="222" y2="146" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.1" />
        <line x1="186" y1="160" x2="212" y2="160" stroke={GOLD} strokeOpacity="0.7" strokeWidth="1.1" />
      </motion.g>

      {/* flow to payment */}
      <motion.path
        d="M276 150 C 310 150, 320 148, 342 148"
        stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.1" strokeDasharray="1 6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.6, 0.8)}
      />

      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.55, ease: EASE }}
      >
        <rect x="342" y="122" width="72" height="46" rx="6" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
        <line x1="342" y1="138" x2="414" y2="138" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
        <rect x="352" y="150" width="14" height="9" rx="1.5" fill={GOLD} fillOpacity="0.7" />
      </motion.g>

      {/* analytics widget */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.95, duration: 0.5 }}
      >
        {[0.4, 0.7, 0.55].map((h, i) => (
          <motion.rect
            key={i}
            x={356 + i * 16}
            y={228 - h * 32}
            width="9"
            height={h * 32}
            fill="currentColor"
            fillOpacity={i === 1 ? 0.85 : 0.25}
            style={i === 1 ? { fill: GOLD } : undefined}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.08, duration: 0.5, ease: EASE }}
          />
        ))}
        <line x1="352" y1="228" x2="400" y2="228" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      </motion.g>
    </Frame>
  );
}

/* ---------------------------------------------------------------------- */
/* 03 — Marketing: growth chart, campaign dashboard, audience              */
/* ---------------------------------------------------------------------- */
export function MarketingVisual({ className = "" }: { className?: string }) {
  const points = [
    [110, 214],
    [172, 190],
    [226, 202],
    [286, 150],
    [340, 128],
    [386, 100],
  ] as const;
  const linePath = `M${points.map(([x, y]) => `${x} ${y}`).join(" L")}`;

  return (
    <Frame className={className}>
      <motion.rect
        x="90" y="86" width="304" height="176" rx="10"
        stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0)}
      />

      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <line x1="112" y1="112" x2="188" y2="112" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <rect x="322" y="102" width="52" height="18" rx="9" stroke={GOLD} strokeOpacity="0.6" strokeWidth="1" />
      </motion.g>

      <motion.path
        d={linePath}
        stroke="url(#pv-marketing-gradient)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.35, 1.3)}
      />
      <defs>
        <linearGradient id="pv-marketing-gradient" x1="110" y1="0" x2="386" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A4A4A" stopOpacity="0.5" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {points.map(([x, y], i) => (
        <motion.circle
          key={x}
          cx={x}
          cy={y}
          r={i === points.length - 1 ? 4 : 2.4}
          fill={i === points.length - 1 ? GOLD : "currentColor"}
          fillOpacity={i === points.length - 1 ? 1 : 0.4}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.12, duration: 0.4, ease: EASE }}
        />
      ))}
      <motion.circle
        cx={386}
        cy={100}
        r="12"
        fill={GOLD}
        fillOpacity="0.15"
        className="animate-breathe"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
      />

      {/* audience row */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
      >
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={116 + i * 16} cy={236} r="7" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
        ))}
        <line x1="168" y1="236" x2="230" y2="236" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      </motion.g>
    </Frame>
  );
}

/* ---------------------------------------------------------------------- */
/* 04 — Logistics: warehouse, containers, route, delivery                  */
/* ---------------------------------------------------------------------- */
export function LogisticsVisual({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <motion.path
        d="M56 140 L130 100 L206 140"
        stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0)}
      />
      <motion.rect
        x="62" y="140" width="138" height="90" rx="2"
        stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.12)}
      />
      <motion.rect
        x="92" y="178" width="52" height="52"
        stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
      />

      {/* containers */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.55, ease: EASE }}
      >
        <rect x="222" y="168" width="64" height="34" rx="2" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.1" />
        <line x1="254" y1="168" x2="254" y2="202" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="222" y="204" width="64" height="34" rx="2" stroke={GOLD} strokeOpacity="0.75" strokeWidth="1.1" />
        <line x1="254" y1="204" x2="254" y2="238" stroke={GOLD} strokeOpacity="0.5" strokeWidth="1" />
      </motion.g>

      {/* truck */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.68, duration: 0.55, ease: EASE }}
      >
        <rect x="306" y="176" width="66" height="42" rx="2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
        <path d="M372 190 H400 L412 206 V218 H372 Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
        <circle cx="330" cy="222" r="8" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.1" />
        <circle cx="392" cy="222" r="8" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.1" />
      </motion.g>

      {/* route */}
      <motion.path
        d="M200 226 C 240 232, 268 214, 306 202"
        stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="1 6" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.9, 0.7)}
      />
      <motion.path
        d="M412 210 C 428 198, 434 168, 424 140"
        stroke="url(#pv-logistics-gradient)"
        strokeWidth="1.2" strokeDasharray="1 7" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(1.05, 0.8)}
      />
      <defs>
        <linearGradient id="pv-logistics-gradient" x1="412" y1="210" x2="424" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A4A4A" stopOpacity="0.4" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.3, duration: 0.5, ease: EASE }}
      >
        <circle cx="424" cy="138" r="13" fill={GOLD} fillOpacity="0.14" className="animate-breathe" />
        <circle cx="424" cy="138" r="4" fill={GOLD} />
      </motion.g>
    </Frame>
  );
}

/* ---------------------------------------------------------------------- */
/* 05 — Localization: translation, packaging, Japan adaptation             */
/* ---------------------------------------------------------------------- */
export function LocalizationVisual({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <motion.rect
        x="86" y="98" width="120" height="76" rx="8"
        stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0)}
      />
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <line x1="104" y1="122" x2="188" y2="122" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
        <line x1="104" y1="138" x2="172" y2="138" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.1" />
        <line x1="104" y1="154" x2="152" y2="154" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.1" />
      </motion.g>

      <motion.path
        d="M218 136 C 240 136, 250 136, 268 136"
        stroke={GOLD} strokeWidth="1.3" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.45, 0.6)}
      />
      <motion.path
        d="M262 128 L272 136 L262 144"
        stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.9, 0.35)}
      />

      <motion.rect
        x="284" y="94" width="120" height="76" rx="8"
        stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.55)}
      />
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.5 }}
      >
        <line x1="302" y1="118" x2="386" y2="118" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
        <line x1="302" y1="134" x2="370" y2="134" stroke={GOLD} strokeOpacity="0.75" strokeWidth="1.2" />
        <line x1="302" y1="150" x2="350" y2="150" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.1" />
      </motion.g>
      <motion.circle
        cx="392"
        cy="106"
        r="6"
        stroke={GOLD}
        strokeWidth="1.2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.05, duration: 0.4, ease: EASE }}
      />

      {/* localized package */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.55, ease: EASE }}
      >
        <rect x="168" y="208" width="144" height="56" rx="6" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M270 208 L312 208 L312 232 Z" stroke={GOLD} strokeOpacity="0.75" strokeWidth="1.1" />
        <line x1="184" y1="236" x2="252" y2="236" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      </motion.g>
    </Frame>
  );
}

/* ---------------------------------------------------------------------- */
/* 06 — Branding: identity mark, premium packaging, retail shelf           */
/* ---------------------------------------------------------------------- */
export function BrandingVisual({ className = "" }: { className?: string }) {
  const products = [
    { x: 104, w: 30, h: 58, gold: false },
    { x: 154, w: 34, h: 92, gold: true },
    { x: 210, w: 28, h: 50, gold: false },
    { x: 262, w: 32, h: 70, gold: false },
    { x: 316, w: 26, h: 46, gold: false },
  ];

  return (
    <Frame className={className}>
      <motion.line
        x1="70" y1="216" x2="410" y2="216"
        stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0)}
      />
      <motion.path
        d="M70 216 L58 230 M410 216 L422 230"
        stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.2, 0.5)}
      />

      {products.map((p, i) => (
        <motion.rect
          key={p.x}
          x={p.x}
          y={216 - p.h}
          width={p.w}
          height={p.h}
          rx="4"
          stroke={p.gold ? GOLD : "currentColor"}
          strokeOpacity={p.gold ? 0.9 : 0.4}
          strokeWidth={p.gold ? 1.3 : 1.1}
          initial={{ opacity: 0, y: 10, scaleY: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.55, ease: EASE }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}

      {/* brand mark above hero product */}
      <motion.line
        x1="171" y1="118" x2="171" y2="94"
        stroke={GOLD} strokeOpacity="0.5" strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.95, 0.4)}
      />
      <motion.path
        d="M171 66 L191 80 L183 102 L159 102 L151 80 Z"
        stroke={GOLD} strokeWidth="1.3" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
        whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition(1.1, 0.7), delay: 1.1 }}
        style={{ transformOrigin: "171px 84px" }}
      />
    </Frame>
  );
}

/* ---------------------------------------------------------------------- */
/* 07 — Distribution: Japan map connected to channels & consumers          */
/* ---------------------------------------------------------------------- */
export function DistributionVisual({ className = "" }: { className?: string }) {
  const nodes: Record<
    string,
    { x: number; y: number; label: string; align: "left" | "center" | "right"; side: "top" | "bottom"; hub?: boolean }
  > = {
    origin: { x: 34, y: 160, label: "Overseas Manufacturer", align: "left", side: "bottom" },
    hub: { x: 168, y: 160, label: "Nanairo", align: "center", side: "top", hub: true },
    amazon: { x: 300, y: 82, label: "Amazon Japan", align: "center", side: "top" },
    retail: { x: 300, y: 160, label: "Retail Chains", align: "center", side: "bottom" },
    distribution: { x: 300, y: 238, label: "Distributors", align: "center", side: "bottom" },
    consumer: { x: 430, y: 160, label: "Japanese Consumers", align: "right", side: "bottom" },
  };

  const links = [
    { d: "M34 160 C 90 160, 112 160, 168 160", delay: 0 },
    { d: "M168 160 C 215 160, 250 100, 300 82", delay: 0.18 },
    { d: "M168 160 L 300 160", delay: 0.3 },
    { d: "M168 160 C 215 160, 250 220, 300 238", delay: 0.42 },
    { d: "M300 82 C 355 82, 392 110, 430 160", delay: 0.6 },
    { d: "M300 160 L 430 160", delay: 0.7 },
    { d: "M300 238 C 355 238, 392 200, 430 160", delay: 0.8 },
  ];

  return (
    <div className={`relative h-full w-full ${className}`}>
      <Frame>
        <defs>
          <linearGradient id="pv-distribution-gradient" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A4A4A" stopOpacity="0.5" />
            <stop offset="55%" stopColor={GOLD} stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4A4A4A" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="pv-distribution-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.45" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.path
          d="M392 62 C 407 74, 402 94, 415 108 C 429 122, 419 140, 431 156 C 442 172, 424 188, 433 206 C 442 224, 417 236, 424 254 C 428 266, 408 263, 400 248 C 391 232, 399 214, 387 198 C 376 182, 391 168, 380 152 C 370 136, 386 122, 377 106 C 370 92, 383 76, 392 62 Z"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={drawTransition(0, 1.4)}
        />

        {links.map((link) => (
          <motion.path
            key={link.d}
            d={link.d}
            stroke="url(#pv-distribution-gradient)"
            strokeWidth="1.1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={drawTransition(link.delay, 1)}
          />
        ))}

        {Object.entries(nodes).map(([key, node], i) => (
          <g key={key}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.hub ? 22 : 13}
              fill="url(#pv-distribution-glow)"
              className="animate-breathe"
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.hub ? 4.5 : 3}
              fill={node.hub ? GOLD : "currentColor"}
              fillOpacity={node.hub ? 1 : 0.85}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            />
          </g>
        ))}
      </Frame>

      {Object.entries(nodes).map(([key, node]) => (
        <span
          key={key}
          style={{
            left: `${(node.x / 480) * 100}%`,
            top: `${(node.y / 320) * 100}%`,
            width: "108px",
            transform:
              node.align === "left"
                ? `translate(4px, ${node.side === "top" ? "-28px" : "12px"})`
                : node.align === "right"
                ? `translate(calc(-100% - 4px), ${node.side === "top" ? "-28px" : "12px"})`
                : `translate(-50%, ${node.side === "top" ? "-32px" : "12px"})`,
          }}
          className={`pointer-events-none absolute font-body text-[9px] leading-tight ${
            node.align === "left" ? "text-left" : node.align === "right" ? "text-right" : "text-center"
          } ${node.hub ? "font-medium text-sumi" : "text-stone"}`}
        >
          {node.label}
        </span>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* 08 — Long-Term Partnership: link, performance dashboard, continuity     */
/* ---------------------------------------------------------------------- */
export function PartnershipVisual({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <motion.rect
        x="86" y="128" width="76" height="44" rx="22"
        stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0)}
      />
      <motion.rect
        x="138" y="148" width="76" height="44" rx="22"
        stroke={GOLD} strokeOpacity="0.85" strokeWidth="1.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.25)}
      />

      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 0.55, ease: EASE }}
      >
        <rect x="270" y="98" width="140" height="116" rx="8" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
        <line x1="288" y1="118" x2="346" y2="118" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
      </motion.g>

      <motion.path
        d="M288 190 L316 168 L340 182 L392 132"
        stroke="url(#pv-partnership-gradient)"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(0.9, 1)}
      />
      <defs>
        <linearGradient id="pv-partnership-gradient" x1="288" y1="190" x2="392" y2="132" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A4A4A" stopOpacity="0.5" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="392" cy="132" r="3.5" fill={GOLD}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.7, duration: 0.4, ease: EASE }}
      />

      {/* continuity / cycle glyph */}
      <motion.path
        d="M300 200 A 14 14 0 1 1 296 212"
        stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(1.2, 0.7)}
      />
      <motion.path
        d="M291 208 L296 212 L293 205"
        stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={drawTransition(1.7, 0.3)}
      />
    </Frame>
  );
}
