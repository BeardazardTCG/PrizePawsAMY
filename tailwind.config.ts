import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#222D66",
        pink: "#FF6B8A",
        cream: "#FFFDF8",
        lightgrey: "#F3F4F6",
        charcoal: "#333333",
        biscuit: "#FFE7C2",
        terracotta: "#FF6B8A",
        cocoa: "#222D66",
        sage: "#8FAE8A",
        skysoft: "#DDEFFE"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(34, 45, 102, 0.12)"
      }
    }
  },
  plugins: []
};
export default config;
