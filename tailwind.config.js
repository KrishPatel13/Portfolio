/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}', // Combined patterns for JS, JSX, TS, TSX, and Vue files
    './public/index.html',
  ],
};
