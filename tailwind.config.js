/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors:{
        newcolor_orange: '#f74c3c',
        new_gray: '#222222'
      },
      fontFamily: {
        arvo: ['arvo']
      },
      fontFamily: {
        helvetica: ['helvetica']
      }
    },
  },
  plugins: [],
}

