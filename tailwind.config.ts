import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         hongKong: "var(--font-hongkong)",
      },
      colors: {
        black100: '#171e19',
        darkgreen100: '#117946',
        emerald100: '#49b476',
        offwhite100: '#d8ddd9',
        beige100: '#b9ad85',
        neonyellow100: '#f4f7b0',
      },
    },
  },
  plugins: [],
};
export default config;
