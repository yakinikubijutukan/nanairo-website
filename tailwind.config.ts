import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sumi: "#0B0B0C",
        washi: "#FAFAF7",
        stone: "#8A8782",
        platinum: "#D8D6D0",
        thread: {
          indigo: "#3B4A6B",
          plum: "#5C3A4E",
          ochre: "#B08D4F",
          moss: "#5A6B4E",
          teal: "#3E6B66",
          rust: "#8A4B3B",
          graphite: "#4A4A4A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      fontSize: {
        "hero-sm": ["3.25rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "hero-lg": ["8.5rem", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["5.5rem", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        thread:
          "linear-gradient(90deg, #3B4A6B 0%, #5C3A4E 17%, #B08D4F 33%, #5A6B4E 50%, #3E6B66 67%, #8A4B3B 83%, #4A4A4A 100%)",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -2%)" },
          "20%": { transform: "translate(-3%, 1%)" },
          "30%": { transform: "translate(2%, -3%)" },
          "40%": { transform: "translate(-2%, 2%)" },
          "50%": { transform: "translate(1%, 3%)" },
          "60%": { transform: "translate(3%, -1%)" },
          "70%": { transform: "translate(-1%, 1%)" },
          "80%": { transform: "translate(2%, 2%)" },
          "90%": { transform: "translate(-3%, -2%)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" },
        },
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        breathe: "breathe 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
