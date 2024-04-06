/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#222222',
        light: '#ffffff',
        purple: '#9966CC',
      },
    },
  },
  plugins: [],
}

