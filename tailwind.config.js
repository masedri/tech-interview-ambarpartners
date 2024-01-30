/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFAE00',
      },
      fontFamily: {
        nothing: ['Nothing You Could Do'],
      },
    },
  },
  plugins: [],
}
