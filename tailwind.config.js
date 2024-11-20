/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    fontFamily: {
      monstserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      primary: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ff9fc4",
        secondary: "#7e5767",
        background: "#141A1A",
        background2: "#22181b",
      },
    },
  },
  plugins: [],
};
