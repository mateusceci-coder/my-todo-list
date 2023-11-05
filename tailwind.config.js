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
      'secondary': 'rgb(23 23 23)',
      'main-text': '#fff',
      'urgent': 'rgb(220 38 38)',
      'white': '#fff',
      'blue': 'rgb(30 64 175)'
    },
  },
  plugins: [],
}

