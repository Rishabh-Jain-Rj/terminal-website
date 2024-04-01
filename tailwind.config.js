/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4ade80",
        secondary:"#fb923c"
      }
    },
  },
  plugins: [],
}