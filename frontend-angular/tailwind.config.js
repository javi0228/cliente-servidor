/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0000bd",
          600: "#00009d",
          700: "#00007f",
          800: "#000062",
        },
        secondary: {
          DEFAULT: "#3919d4",
          400: "#6a3be3",
          300: "#8f59f1",
          200: "#b178ff",
        },
      },
    },
    fontFamily: { body: ["Tahoma"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
