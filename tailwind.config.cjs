/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: { fontFamily: {
      'montserrat' : ['Montserrat', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      }},
  },
  plugins: [],
}
