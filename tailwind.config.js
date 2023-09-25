/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "checked-pattern": "url('/images/checked-pattern.png')",
      },
      colors: {
        "quadrant-1-number-text": "#E56363",
        "quadrant-1-number-bg": "#FFA1A1",
        "quadrant-2-number-text": "#B352D6",
        "quadrant-2-number-bg": "#E6BCFF",
        "quadrant-3-number-text": "#EB8F3B",
        "quadrant-3-number-bg": "#FFD0A5",
        "quadrant-4-number-text": "#848484",
        "quadrant-4-number-bg": "#D0D0D0",
        "quadrant-1-title-color": "#8C1B1B",
        "quadrant-2-title-color": "#8B28AD",
        "quadrant-3-title-color": "#C56825",
        "quadrant-4-title-color": "#505050",
      },
    },
  },
  plugins: [],
};
