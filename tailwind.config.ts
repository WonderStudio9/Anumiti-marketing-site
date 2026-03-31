import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0F2C",
          50: "#E8E9F0",
          100: "#C5C7D8",
          200: "#9A9DBF",
          300: "#6F73A6",
          400: "#4A4F8D",
          500: "#2A3074",
          600: "#1E2360",
          700: "#15194D",
          800: "#0E1139",
          900: "#0A0F2C",
          950: "#050718",
        },
        teal: {
          DEFAULT: "#00D4AA",
          50: "#E6FFF8",
          100: "#B3FFE9",
          200: "#80FFD9",
          300: "#4DFFC9",
          400: "#1AFFBA",
          500: "#00D4AA",
          600: "#00AA88",
          700: "#008066",
          800: "#005544",
          900: "#002B22",
          950: "#001511",
        },
        indigo: {
          DEFAULT: "#1A1A6C",
          50: "#EDEDF7",
          100: "#D2D2EC",
          200: "#A5A5D9",
          300: "#7878C6",
          400: "#4B4BB3",
          500: "#2E2E8F",
          600: "#24247E",
          700: "#1A1A6C",
          800: "#131354",
          900: "#0D0D3C",
          950: "#070724",
        },
        saffron: {
          DEFAULT: "#E8820C",
          50: "#FEF3E6",
          100: "#FDDEBB",
          200: "#FBC88F",
          300: "#F9B264",
          400: "#F29C38",
          500: "#E8820C",
          600: "#C06B0A",
          700: "#985508",
          800: "#703E06",
          900: "#482803",
          950: "#241402",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
