/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  './node_modules/flowbite/**/*.js'
  ],
  
  
  theme: {
    extend: {
      colors: {
        primary: '#D6BB62',
        dark: '#121212',
        light: '#F2F2F2',
        borderColor: '#D5D4D4',
        para: '#404040',
        darkAlter: '#1A1A1A'
      },
    },

    screens: {
      sm: '576px',

      md: '768px',

      lg: '1024px',

      xl: '1200px',

      '2xl': '1400px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '1.15rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '1.875rem',
        '2xl': '2.5rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
