import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
        "4xl": "2000px",
        "5xl": "2500px",
        "6xl": "3000px",
      }
    }
  },

  plugins: [],
};
export default config;
