/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'bg-purple-ref': 'rgba(83,79,137,255)',
        'hover-color': 'rgba(88,77,226,255)',  
        'prof-purple': 'rgba(69,63,147,255)',   
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

