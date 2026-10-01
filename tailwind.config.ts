import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: { 50: "#FFFFFF", 100: "#F3F5F7", 200: "#D5DBE0" },
        ink: {
          950: "#1E2A36",
          900: "#2B3640",
          850: "#34424E",
          800: "#41505E",
          700: "#506170",
        },
        fg: "#1E2A36",
        muted: "#5F6C78",
        warning: "#FFC21A",
        signal: {
          50: "#FDE9DD",
          100: "#F9CFAF",
          300: "#FF9A5C",
          400: "#FF7A33",
          500: "#F25C05",
          600: "#D94F00",
          700: "#B24200",
        },
        steel: {
          100: "#F3F5F7",
          300: "#5F6C78",
          500: "#5F6C78",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-space-grotesk)",
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        industrial: "0.02em",
      },
      boxShadow: {
        glow: "0 16px 38px -18px rgba(242, 92, 5, 0.3)",
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
