/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        slate: {
            850: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 5px -1px rgba(50, 50, 93, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 13px 27px -5px rgba(50, 50, 93, 0.1), 0 8px 16px -8px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 30px 60px -12px rgba(50, 50, 93, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.2)',
        'float': '0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
        'highlight': '0 0 0 1px rgba(50, 50, 93, 0.05), 0 2px 5px 0 rgba(50, 50, 93, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.07)',
      },
      transitionTimingFunction: {
        'stripe': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      }
    },
  },
  plugins: [],
}
