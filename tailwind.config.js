/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#2D4A2B',
  			secondary: '#DC143C',
  			accent: '#87CEEB',
  			cream: '#E6D7B8',
  			wood: '#D2B48C',
  			earth: '#8B7355',
  			text: '#36454F',
  			'text-light': '#5D4037',
  			background: '#FFFFFF',
  			'background-warm': '#F5F5F5',
  			'forest-deep': '#2D4A2B',
  			'lime-fresh': '#9ACD32',
  			stone: '#D3D3D3'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
}