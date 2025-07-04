/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables dark mode via "class"
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'zoom-in': 'zoom-in 0.8s ease-out',
      },
    },
  },
  plugins: [],
}