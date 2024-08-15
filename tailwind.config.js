/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "'url(/images/hero.jpeg)'",
        'hero-mobile': "'url(/images/Ryan-RGL.jpeg)'"
      }
    },
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
    }
  },
  plugins: [],
}

