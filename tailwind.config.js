/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        navy: '#0b1d33',
        cloud: '#f6fbff',
        tech: '#4ea63a',
        cyanline: '#5ad7ff',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 44px rgba(78, 166, 58, 0.24)',
        soft: '0 24px 80px rgba(7, 17, 31, 0.14)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '.35', transform: 'scaleX(.7)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(390%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(18px, -10px, 0)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseLine: 'pulseLine 2.4s ease-in-out infinite',
        scan: 'scan 4.5s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
      },
    },
  },
  plugins: [],
}
