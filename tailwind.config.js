module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#c98e4a',
        'darkgold' : '#ba7923',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'abhaya-libre': ['Abhaya Libre'],
        'alegraya-sans': ['Alegreya Sans'],
        'montaga': ['Montaga serif'],
      },
    }
  },
  plugins: [],
}