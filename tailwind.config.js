/ @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg' : '768px',
        'xl' : '1024px',
        '2xl' : '1280px',
      }
    },
  },
  plugins: [],
}