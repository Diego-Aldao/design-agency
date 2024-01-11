/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "main-font":  ['Montserrat Variable', "sans-serif"],
        "secondary-font":  ['Raleway Variable', "sans-serif"],
      },
      colors:{
        "main-black": "#161e22",
        "main-white": "#f9f9f9",
      }
    },
  },
  plugins: [],
}