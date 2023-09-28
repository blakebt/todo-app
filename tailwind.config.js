/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offwhite': '#fcfcfc',
        'crayola': '#f7567c',
        'cornsilk': '#fffae3',
        'tiffany': '#99e1d9',
        'wenge': '#5d576b'
      }
    },
  },
  plugins: [],
}

