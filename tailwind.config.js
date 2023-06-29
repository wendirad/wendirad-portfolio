/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        'primary':['Gayathri'],
        'hero':['Monomaniac One'],
        'title': ['Roboto Mono'],
        'hero-title': ['Pacifico'],
        'testimonials':['Barlow Semi Condensed'],
        'experience-title':['Ysabeau Infant', 'sans-serif'],
        'credit':['Ysabeau Infant'],
      },
      colors:{
        'primary-light':'#FFFDFD',
        'secondary-light':'#11151C',
        'primary-dark':"#11151C",
        'secondary-dark':'#2E394C',
      },
      fontSize:{
        '4xl': '2.25rem',  
        '5xl': '3rem',    
        '6xl': '4rem',
      },
      screens: {
        'phone': {'max': '639px'},
        'tablet': {'min': '640px', 'max': '1023px'},
        'desktop': { 'min': '1024px' },
      },
    },   
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

