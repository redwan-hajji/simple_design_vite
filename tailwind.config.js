/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        menuRight:"menuRight 0.3s ease-in-out forwards",

      },
    
    keyframes: {

        menuRight:{
      "0%":{
       transform: "translateX(100%)"
      },
      "100%":{
       transform: "translateX(0)"
      }
    },},

  },},
  plugins: [],
}

