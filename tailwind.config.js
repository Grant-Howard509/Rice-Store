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
      },
      keyframes: {
        slideUp: {
          '0%, 10%': {transform: 'translateY(70%)', opacity: '0'},
          '30%, 100%': {transform: 'translateY(0)', opacity: '1'},
        },
      },
      animation: {
        slideUp: 'slideUp 4s ease-in forwards',
      },
    },
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
      rock_salt: ["Rock Salt", "cursive"],
    }
  },
  plugins: [],
}

