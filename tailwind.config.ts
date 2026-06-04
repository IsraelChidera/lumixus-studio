import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        primary: "#3600ff",
        secondary: "#2400b8",
        blue: "#4452FE",
        dark: "#0f0e1a",
        deep: "#16152a",
        accent: "#5b5fff",
        text: "#0b0d17",
        surface: "#f5f5fa",
        muted: "#6b7080",
        border: "#e4e4f0"
      },
      fontFamily: {
        sans: ["var(--font-graphik)", "Graphik", "Inter", "sans-serif"],
        display: ["var(--font-graphik)", "Graphik", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};
export default config;
