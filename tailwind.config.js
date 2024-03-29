/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xl': {'min': '1850px'},
      '2xl': {'max': '1536px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
      '2sm': {'max': '430px'},
      'h2xl': {'raw': '(max-height: 1000px)'},
      'hxl': {'raw': '(max-height: 800px)'},
      'hsm': {'raw': '(max-height: 640px)'},
    },
    extend: {
      animation: {
        fromtoptotop:'fromtoptotop 500ms ease-out forwards',
      },
      keyframes: {
        rotation: {
          '0%':{ borderRadius: "0%", transform: "rotate(0deg)"},
          '100%': { borderRadius: "50%", transform: "rotate(720deg)"},
        },
        fromtoptotop: {
          '0%':{ top: "0%", opacity:1 },
          '25%':{ opacity:0 },
          '50%':{ top: "100%" },
          '75%':{ opacity:0 },
          '100%':{ top: "0%", opacity:1 },
        },
      },
      spacing: {
      },
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
        'Barlow':['Barlow', ...defaultTheme.fontFamily.sans],
        'Comorant': ['Cormorant Infant'],
        'Caslon': ['Caslon'],
      },
      colors: {
        "primary": "#6a97f9",
      },
      fontSize: {
        h1: ['44px', '58px'],
        h2: ['36px', '40px'],
        h3: ['30px', '36px'],
      },
      width: {
      },
      inset: {
      },
      boxShadow: {
        'base': '0 3px 6px rgba(0, 0, 0, 0.16)',
      },
      height: {
        'fullwithHeader' : 'calc(100vh - 112px)',
        'fullwithHeader2' : 'calc(100vh - 80px)',
        'fullwithHeader2Resp' : 'calc(100vh - 96px)',
        'heightforCard' : 'calc(50% + 50px)',
      },
      minHeight: {
        'fullwithHeader' : 'calc(100vh - 112px)',
      },
      maxHeight: {
        'fullwithHeader' : 'calc(100vh - 112px)',
      },
    },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
}