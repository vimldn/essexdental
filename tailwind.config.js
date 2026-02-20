/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elite Mint Color Scheme for Savvy Dental Implants
        'brand': {
          primary: '#10b981',    // emerald-500
          secondary: '#22c55e',  // green-500
          accent: '#a3e635',     // lime-400
          light: '#6ee7b7',      // emerald-300
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'backdrop-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'backdrop-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'modal-out': {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' },
        },
      },
      animation: {
        'backdrop-in': 'backdrop-in 0.3s ease-out',
        'backdrop-out': 'backdrop-out 0.3s ease-in',
        'modal-in': 'modal-in 0.3s ease-out',
        'modal-out': 'modal-out 0.3s ease-in',
      },
    },
  },
  plugins: [],
}
