/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F8F6F0",
          50: "#FCFBF8",
          100: "#F8F6F0",
          200: "#EFECE1",
          300: "#E5E1D0",
        },
        forest: {
          DEFAULT: "#173F35",
          light: "#215347",
          dark: "#0F2B24",
          800: "#173F35",
          900: "#0F2B24",
        },
        sage: {
          DEFAULT: "#E5EBDD",
          light: "#F0F4EA",
          dark: "#D2DCBF",
          muted: "#96A48F",
        },
        coral: {
          DEFAULT: "#D97962",
          light: "#E3927F",
          dark: "#BF614B",
          50: "#FDF5F3",
        },
        charcoal: {
          DEFAULT: "#252923",
          light: "#3B4038",
          muted: "#5B6457",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
