/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976',
      xl: '1440'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata']
      },
      letterSpacing: {
        widest: '.3em'
      },
    },
  },
  plugins: [],
}

