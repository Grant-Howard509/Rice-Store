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
        slowEase: {
          // '0%, 10%': {transform: 'translateY(150%)', opacity: '1'},
          // '25%, 100%': {transform: 'translateY(0)', opacity: '1'},

          '0%, 10%': {opacity: '0'},
          '25%, 100%': {opacity: '1'},
        },
      },
      animation: {
        slowEase: 'slowEase 3.5s ease-in forwards',
      },
      width: {
        560: '35rem',
      },
    },
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
      rock_salt: ["Rock Salt", "cursive"],
    }
  },
  plugins: [],
}

