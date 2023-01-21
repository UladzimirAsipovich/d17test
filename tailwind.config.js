// import defaultTheme from 'tailwindcss/defaultTheme';
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dm-bg-clr": "#F5F4F6",
        "dm-bg-btn-clr": "#4F37AF",
        "dm-bg-help-clr": "#FFF7F7",
      },
      textColor: {
        "dm-header-txt-clr": "#484A6A",
        "dm-textarea-help-txt-clr": "#9598B1",
        "dm-table-txt-clr": "#595B83",
        "dm-help-txt-clr": "#484A6A",
      },
      borderColor: {
        "dm-brdr-help-crl": "#FFD0D0",
      },
      fontFamily: {
        oswald: ["Oswald", ...defaultTheme.fontFamily.sans],
        bangers: ["Bangers", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
