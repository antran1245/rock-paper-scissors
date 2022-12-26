/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts}"],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#3B4262',
      circle: '#BABFD4',
      white: '#FFFFFF',
      gold: '#EB9F0E',
      darkGold: '#C76C1B',
      red: '#DB2E4D',
      darkRed: '#9D1634',
      blue: '#4664F4',
      darkBlue: '#2A45C2',
    },
    screens: {
      "xl": { 'max': '1280px' },
      "lg": { 'max': "1024px" },
      "md": { 'max': "986px" },
    },
    extend: {},
  },
  plugins: [],
}
