/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    backgroundImage: {
      'bgPicture': "url('/images/bg-pic.png')",
    },
    extend: {
      colors: {
        'purple-image': 'rgba(101,91,225,255)',
        'green-button':'rgb(108,189,108)',
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

