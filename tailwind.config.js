module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container :{
      center: true
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'Mon': ['Montserrat'],
        'Indie' : ['"Indie Flower"']
      },
      colors: {
        'cafe-1' : '#45230f',
        'cafe-2' : '#955f31',
        'cafe-3' : '#c08267',
        'cafe-4' : '#fbefdf',
        'cafe-5' : '#a1795a',
        'cafe-6' : '#204d48',
        'cafe-7' : '#233237',
        'cafe-8' : '#3b555d'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
