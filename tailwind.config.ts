import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070807",
          900: "#0d0f0d",
          850: "#131613",
          800: "#1a1d1a",
          700: "#292d29",
        },
        signal: {
          300: "#ff9b75",
          400: "#ff6a32",
          500: "#ff5317",
        },
        steel: {
          100: "#f1f3ed",
          300: "#aeb5aa",
          500: "#687066",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Arial Narrow", "Roboto Condensed", "Inter", "sans-serif"],
      },
      letterSpacing: {
        industrial: "0.16em",
      },
      boxShadow: {
        glow: "0 0 48px rgba(255, 90, 31, 0.18)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
