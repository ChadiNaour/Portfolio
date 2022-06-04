module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'graye': 'rgba(255,255,255,.4);',
        'darkgold' : '#ba7923',
      },
      fontFamily: {
        'reloadNormal': ['reload1'],
        'reloadBold': ['reload2'],
        'reloadLight': ['reload1,arial narrow,Arial,Helvetica,sans-serif'],
      },
    }
  },
  plugins: [],
}