const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
    },
    colors: {
      "dark-green": "#686845",
      green: "#73733D",
      "light-green": "#8F934D",
      gray: "#F0EFEA",
    },
  },
  plugins: [],
};
