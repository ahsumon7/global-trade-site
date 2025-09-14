/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'sky-blue': '#88c0d0',
        'accent-orange': '#d08770',
        'light-slate': '#ccd6f6',
        'slate': '#8892b0',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};