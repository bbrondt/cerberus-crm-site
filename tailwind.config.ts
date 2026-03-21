import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cerberus: {
          red: "#bd1e00",
          "red-light": "#d42a0a",
          "red-dark": "#9a1800",
          steel: "#adb5b5",
          "steel-light": "#c4cbcb",
          "steel-dark": "#8a9494",
        },
        dark: {
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2a2a2a",
          400: "#333333",
        },
      },
      fontFamily: {
        display: ['"Outfit"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
