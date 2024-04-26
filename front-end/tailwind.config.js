/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      black: '#000000',
      purple: '#8C32FF',
      'purple-light': '#E0C9FF',
      gray: '#929292',
      'gray-light': '#F5F5F5',
      green: '#07E78F',
      red: '#E60000',
      'red-light': '#ffc9c3',
      white: '#FFFFFF',
    },
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      xl: '1.125rem',
      '2xl': '1.5rem',
      '3xl': '2.000rem',
      '4xl': '3.775rem',
    },
    extend: {
      spacing: {
        1: '8px',
        2: '12px',
        3: '18px',
        4: '25px',
        5: '32px',
        6: '48px',
      },
    },
  },
  plugins: [],
};