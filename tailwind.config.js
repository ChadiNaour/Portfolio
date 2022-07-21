module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'graye': 'rgba(255,255,255,.4);',
        'dark' : '#0a0c11',
      },
      fontFamily: {
        'reloadNormal': ['reload1'],
        'reloadBold': ['reload2'],
        'reloadLight': ['reload3,arial narrow,Arial,Helvetica,sans-serif'],
        'cinetype' : ['cinetype'],
        'uni-sans' : ['uni-sans'],
        'timmons' : ['TIMMONS NY']
      },
    }
  },
  plugins: [],
}