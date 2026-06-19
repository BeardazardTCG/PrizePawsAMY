import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7EC",
        biscuit: "#F6D7A8",
        terracotta: "#D96C4A",
        cocoa: "#3E2B23",
        sage: "#8FAE8A",
        skysoft: "#DDEFFE"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(62, 43, 35, 0.12)"
      }
    }
  },
  plugins: []
};
export default config;
