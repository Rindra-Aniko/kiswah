import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#291F15",
        secondary: "#BD8A15",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
        poppins: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
        hero: ["var(--font-nova-square)", "cursive"],
        secondary: ["var(--font-freehand)", "cursive"],
        "nova-square": ["var(--font-nova-square)", "cursive"],
        freehand: ["var(--font-freehand)", "cursive"],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-border-gold': {
          '-webkit-text-stroke': '1px #B48421',
        },
        '.text-border-dark': {
          '-webkit-text-stroke': '1px #291F15',
        },
      })
    })
  ],
} satisfies Config;
