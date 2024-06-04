/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './src/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // darkblue: '#065574',
        darkblue: '#002839',
        darkorange: '#FF8400',
        lightblue: '#8DD2F3',
        lightgray: '#97A7B4',
        bggray: '#EAEDF0',
      },
    },
  },
  plugins: [],
}
