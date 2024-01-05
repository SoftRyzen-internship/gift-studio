import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "30px",
        lg: "32px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1280px",
      },
    },
    extend: {
      fontSize: {
        "7xl": ["64px", "80.64px"],
        "6xl": ["60px", "75.6px"],
        "5xl": ["56px", "70.56px"],
        "4xl": ["48px", "60.48px"],
        "3xl": ["24px", "29.26px"],
        "2xl": ["22px", "29.7px"],
        xl: ["20px", "24.38px"],
        lg: ["18px", "24.3px"],
        base: ["16px", "19.5px"],
        sm: ["14px", "17.07px"],
      },
      lineHeight: {
        "64": "80.64px",
        "60": "75.6px",
        "56": "70.56px",
        "48": "60.48px",
        "34": "32.4px",
        "32": "32.16px",
        "27": "27px",
        "26": "26.8px",
        "25": "26.2px",
        "16": "21.6px",
      },
      fontFamily: {
        display: ["var(--font-caveat)"],
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        accent: "#E42C2C",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1280px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
