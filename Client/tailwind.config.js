/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#368F92",
        "deep-dark-cyan": "#0d5053",
        "blondi-blue": "#2B90B0",
        "blondi-deep-blue": "#0a3b4a",
        "pacific-cyan": "#29A9D0",
        "pacific-deep-cyan": "#126a85",
        avocado: "#6F7D2A",
        "tiffany-blue": "#ADDAD1",
        "field-drab": "#7D6B1B",
        "fern-green": "#57764C",
        "lavenda-soft": "#9C77A0",
        "Mikado-yellow": "#FDC621",
        Lion: "#CD9F61",
      },
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
        merry: ["Merriweather", "serif"],
        slab: ["Roboto Slab", "serif"],
        mono: ["Chivo Mono", "monospace"],
        negative: ["Signika Negative", " sans - serif"],
      },
    },
    plugins: [],
  },
};
