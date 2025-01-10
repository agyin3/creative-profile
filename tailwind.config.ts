import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent1: "var(--accent1)",
        accent2: "var(--accent2)",
        highlightersGreen: 'var(--highlighters-green)',
        highlightersRed: 'var(--highlighters-red)',
        highlightersYellow: 'var(--highlighters-yellow)',
        highlightersOrange: 'var(--highlighters-orange)',
      },
      fontFamily: {
        'shrikhand': ['Shrikhand', 'cursive'],
      },
      backgroundImage: {
        'bg-texture-1': "url('/bg-texture-1.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
