/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'agbalumo': ['"Agbalumo"', 'cursive']
      }
    },
    colors: {
      'main': '#000',
      'secondary': 'rgb(23, 23, 23)',
      'main-text': '#fff',
      "urgent": 'rgb(220, 38, 38)',
      "important": 'rgb(30, 64, 175)',
      "normal": 'rgb(22, 101, 52)',
      "finished": "rgb(202, 138, 4)",
      'white': '#fff',
      "yellow": "rgb(234 179 8)"
    },
  },
  plugins: [],
}

