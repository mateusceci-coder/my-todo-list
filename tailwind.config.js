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
      'main-dark': '#000',
      'secondary-dark': 'bg-stone-500',
      'main-text-dark': '#fff',
    },
  },
  plugins: [],
}

