/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary:   '#1a56a0',
          secondary: '#0d2750',
          accent:    '#4caf7d',
          light:     '#7fb9e8',
        },
      },
      keyframes: {
        'backdrop-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'backdrop-out': { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        'modal-in':  {
          '0%':   { opacity: '0', transform: 'scale(0.93) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'modal-out': {
          '0%':   { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.93) translateY(16px)' },
        },
      },
      animation: {
        'backdrop-in':  'backdrop-in 0.25s ease-out',
        'backdrop-out': 'backdrop-out 0.25s ease-in',
        'modal-in':     'modal-in 0.28s ease-out',
        'modal-out':    'modal-out 0.28s ease-in',
      },
    },
  },
  plugins: [],
}
