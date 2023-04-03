/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'mint': '#dbfff8',
        'black': '#000000',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        GT_Flexa: ['GT-Flexa', 'sans-serif'],
      },
      fontSize: {
        xs: '0.5rem',
        sm: '1rem',
        base: '16px',
        '1xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '5rem',
      },
    },
  },
  plugins: [],
}

