/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alpine/Rustic Color Palette
        primary: '#2D4A2B',        // Forest Green - main brand color
        secondary: '#DC143C',       // Crimson Red - accent for CTAs
        accent: '#87CEEB',          // Sky Blue - links and highlights
        
        // Natural Tones
        cream: '#E6D7B8',          // Cream/Beige - warm backgrounds
        wood: '#D2B48C',           // Natural Wood - borders and elements
        earth: '#8B7355',          // Muted Earth - subtle accents
        
        // Neutrals
        text: '#36454F',           // Charcoal Gray - main text
        'text-light': '#5D4037',   // Dark Brown - secondary text
        background: '#FFFFFF',      // Pure White - main background
        'background-warm': '#F5F5F5', // Light Gray - section backgrounds
        
        // Nature Accents
        'forest-deep': '#2D4A2B',  // Deep forest for headers
        'lime-fresh': '#9ACD32',   // Lime Green - success states
        stone: '#D3D3D3',          // Light Gray - borders
      },
    },
  },
  plugins: [],
}