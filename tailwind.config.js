/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-dark': '#000',
      'secondary-dark': 'bg-stone-500',
      'main-text-dark': '#fff',
    },
  },
  plugins: [],
}

