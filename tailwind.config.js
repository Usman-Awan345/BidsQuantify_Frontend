// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9e3',
          100: '#fdf0c4',
          200: '#fbe18a',
          300: '#f9cf4f',
          400: '#f7c124',
          500: '#e6a800',
          600: '#c58a00',
          700: '#9e6b00',
          800: '#7a5200',
          900: '#5c3d00',
          DEFAULT: '#e6a800',
        },
        dark: '#111111',
        'dark-soft': '#1a1a1a',
        'gray-bg': '#f7f7f7',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}