/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: { fontFamily: {
      'montserrat' : ['Montserrat', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      }},
    backgroundImage: {
      'hero-pattern':
          "linear-gradient(to bottom, rgba(255, 251, 235, 0) 30%, rgba(255, 251, 235, 1)), url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
    },
  },
  plugins: [],
}
