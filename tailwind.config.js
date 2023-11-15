import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'main': '#000',
        'secondary': 'rgb(23, 23, 23)',
        'main-text': '#fff',
        'urgent': '#DC2626',
        "important": 'rgb(30, 64, 175)',
        "normal": colors.green[600],
        "finished": "rgb(202, 138, 4)",
        'white': '#fff',
        "yellow": "rgb(234, 179, 8)",
      },
      fontFamily: {
        'agbalumo': ['"Agbalumo"', 'cursive']
      },
    },
  },
  plugins: [],
}

