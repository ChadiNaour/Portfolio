module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'graye': 'rgba(255,255,255,.4);',
        'dark' : '#0a0c11',
      },
      fontFamily: {
        'reloadNormal': ['reload1'],
        'reloadBold': ['reload2'],
        'reloadLight': ['reload3,arial narrow,Arial,Helvetica,sans-serif'],
      },
    }
  },
  plugins: [],
}