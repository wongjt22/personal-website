import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black100: '#000b0d',
      darkgreen100: '#084b39',
      offwhite100: '#d8ddd9',
      beige100: '#b9ad85',
      neonyellow100: '#feff6e',
    },
    extend: {
      borderRadius: {
        none: '0rem',    // none (0px)
        small: '0.25rem', // small (4px)
        medium: '0.5rem', // medium (8px)
        large: '1rem',    // large (16px)
        xLarge: '1.5rem', // x-large (24px)
        full: '12.5rem',  // full (200px)
      },
      spacing: {
        none: '0rem',    // none (0px)
        small: '1rem',   // small (16px)
        medium: '1.5rem', // medium (24px)
        large: '2rem',   // large (32px)
        xLarge: '3rem',  // x-large (48px)
        xxLarge: '4rem', // xx-large (64px)
        xxxLarge: '5.5rem', // xxx-large (88px)
      },
      boxShadow: {
        small: '0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.1)', // small shadow
        medium: '0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.2)',    // medium shadow
        large: '0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3)',     // large shadow
      },
      fontFamily: {
         hongKong: 'var(--font-geist-mono)'
      },
    },
  },
  plugins: [],
};
export default config;
