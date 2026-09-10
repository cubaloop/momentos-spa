/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mahogany: {
          50: '#fbf7f6',
          100: '#f6edea',
          200: '#eddcd7',
          300: '#dec2b9',
          400: '#cb9e91',
          500: '#b77d6d',
          600: '#a36353',
          700: '#874f42',
          800: '#6f4237',
          900: '#5a2d1f',
          950: '#3c1318',
        },
        cream: {
          50: '#fffdfa',
          100: '#fbf9f5',
          200: '#f5efeb',
          300: '#ede4dc',
          400: '#ded0c3',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#E2D4BC',
          dark: '#A6885E'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
