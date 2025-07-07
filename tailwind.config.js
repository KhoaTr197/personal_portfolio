/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll linear infinite',
        'cta': 'cta 1.5s ease-in-out infinite', //call-to-action
        'modal': 'modal 0.2s ease-in-out forwards',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'cta': {
          from: { transform: 'translateX(-30%)' },
          '50%': { transform: 'translateX(0)' },
          to: { transform: 'translateX(-30%)' },
        },
        'modal': {
          from: { opacity: 0, },
          to: { opacity: 1, },
        }
      },
      fontSize: {
        '4xl': '2rem',
        '10xl': ['10rem', '1']
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(0deg, rgba(0,0,0,.1) 0%, rgba(0,0,0,.1) 100%), linear-gradient(109deg,#FB923C 10%, #FBBC56 35%, #C66BB3 60%, #AD39D6 70%, #8F00FF 77%, #AE36CE 87%, #CE6E9C 97%, #FBBC56 106%)'
      },
      scale: {
        '1.015': '1.015'
      }
    }
  },
  plugins: [],
}

