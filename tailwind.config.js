/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "rgb(221, 199, 161)",
        background: "rgb(229, 231, 235)",
        border : 'rgb(169, 182, 101)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}