const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  important: true,
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "apple-blue": colors.blue[600],
      },
    },
  },
  variants: {
    textDecoration: ["group-hover"],

    extend: {},
  },
  plugins: [plugin(({ addComponents }) => {})],
};
