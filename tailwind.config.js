/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./assets/Scripts/**/*.js",
    "./content/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(purple|blue|green|red)-(50|100|200|600|700|800)/,
    },
    {
      pattern: /text-(purple|blue|green|red)-(600|700|800)/,
    },
    {
      pattern: /ring-(purple|blue|green|red)-(400)/,
    },
  ],
};
