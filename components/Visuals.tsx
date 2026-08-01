"use client";

import { motion } from "framer-motion";

/**
 * Abstract, art-directed graphics used in place of stock photography until
 * real commissioned film/photography (per proposal §2.4) is supplied.
 * Kept intentionally minimal — line work, gradients, and grain — so the
 * site reads as designed rather than as "missing image" placeholders.
 * Swap any of these for <video>/<Image> once assets land.
 */

/** Full-bleed near-black stage gradient, the site's dark "product stage." */
export function DarkStage({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#1a1a1c_0%,#0B0B0C_55%,#000000_100%)] ${className}`}
    />
  );
}

/** Warm light stage for Washi-toned sections. */
export function LightStage({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#FFFFFF_0%,#FAFAF7_55%,#F1F0EB_100%)] ${className}`}
    />
  );
}

/** The abstract "journey" line — origin to destination, echoing the Thread. */
export function JourneyLine({ progress = 1 }: { progress?: number }) {
  return (
    <svg
      viewBox="0 0 1200 400"
      fill="none"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="journeyGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B4A6B" />
          <stop offset="17%" stopColor="#5C3A4E" />
          <stop offset="33%" stopColor="#B08D4F" />
          <stop offset="50%" stopColor="#5A6B4E" />
          <stop offset="67%" stopColor="#3E6B66" />
          <stop offset="83%" stopColor="#8A4B3B" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="320" r="4" fill="#8A8782" />
      <circle cx="1120" cy="80" r="4" fill="#8A8782" />
      <motion.path
        d="M80 320 C 320 320, 380 120, 600 200 S 900 60, 1120 80"
        stroke="url(#journeyGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: progress }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

/** Sparse dot field — evokes precision/engineering without literal iconography. */
export function DotField({ className = "" }: { className?: string }) {
  const dots = Array.from({ length: 48 });
  return (
    <svg viewBox="0 0 480 240" className={className} fill="none">
      {dots.map((_, i) => {
        const x = (i % 12) * 40 + 20;
        const y = Math.floor(i / 12) * 60 + 30;
        return <circle key={i} cx={x} cy={y} r="1.4" fill="currentColor" opacity="0.25" />;
      })}
    </svg>
  );
}

/** Architectural bars — abstracted retail-shelving / skyline motif, used on Home. */
export function ArchitecturalBars({ className = "" }: { className?: string }) {
  const bars = [0.4, 0.7, 0.5, 0.9, 0.35, 0.6, 0.8, 0.45, 0.65, 0.3];
  return (
    <div className={`flex h-full items-end gap-3 ${className}`}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: `${h * 100}%`, transformOrigin: "bottom" }}
          className="w-full origin-bottom bg-current opacity-[0.16]"
        />
      ))}
    </div>
  );
}
