/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        paper: "#FFFFFF",
        sky: "#0284C7",
        "sky-deep": "#075985",
        "sky-pale": "#E0F2FE",
        good: "#15803D",
        warn: "#B91C1C",
        "warn-pale": "#FEE2E2",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
