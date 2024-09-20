/** @type {import('tailwindcss').Config} */
module.exports = {
  ccontent: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        none: rem(0), // none (0px)
        small: rem(4), // small (4px)
        medium: rem(8), // medium (8px)
        large: rem(16), // large (16px)
        xLarge: rem(24), // x-large (24px)
        full: rem(200), // full (200px)
      },
      spacing: {
        none: rem(0), // none (0px)
        small: rem(16), // small (16px)
        medium: rem(24), // medium (24px)
        large: rem(32), // large (32px)
        xLarge: rem(48), // x-large (48px)
        xxLarge: rem(64), // xx-large (64px)
        xxxLarge: rem(88), // xxx-large (88px)
      },
      boxShadow: {
        small: `${rem(2)} ${rem(2)} ${rem(4)} rgba(0, 0, 0, 0.1)`,
        medium: `${rem(4)} ${rem(4)} ${rem(16)} rgba(0, 0, 0, 0.2)`,
        large: `${rem(4)} ${rem(4)} ${rem(32)} rgba(0, 0, 0, 0.3)`,
      },
      fontFamily: {
        hongkong: ['HongKong'],
      },
    },
  },
  plugins: [],
};
