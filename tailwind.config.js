/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'custom-green': '#287676',
      },
      ringColor: {
        'custom-green': '#287676',
      },
    },
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
}

