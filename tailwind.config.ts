import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      zero: "0px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1366px",
      xxl: "1920px",
    },
    colors: {
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },

      orange: "#FF812B",

      grey: "#DDDDDD",
      greyish: "#F4F4F4",
      primary: "#48C43C",
      secondary: "#000000",
      white: "#fff",
      black: "#000",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",

      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      pp: "#B83CC4",
      blueblack: "#192935",
      tailwindblue: "#0F172A",
      abcdd: "#E1FFDE",
    },
    fontFamily: {
      fira: ["var(--font-fira-sans)"],
      bungee: ["var(--font-bungee)"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
