/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    fontFamily:{
      monstserrat: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      primary: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#ff9fc4',
        // 'primary': '#FFB6C1',
        'background': "#141A1A",
      },
    },
  },
  plugins: [],
}

