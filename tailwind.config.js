/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003580',
        secondary: '#FBC11A',
        accent: '#0071C2',
        text: '#333333',
        background: '#F5F5F5',
      },
    },
  },
  plugins: [],
}