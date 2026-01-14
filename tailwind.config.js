/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom "Stripe-like" Indigo/Blurple Palette
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
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
        'card': '0 0 0 1px rgba(50, 50, 93, 0.02), 0 2px 5px -1px rgba(50, 50, 93, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 0 0 1px rgba(50, 50, 93, 0.05), 0 13px 27px -5px rgba(50, 50, 93, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)',
        'float': '0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
        'highlight': '0 0 0 1px rgba(99, 102, 241, 0.1), 0 2px 5px 0 rgba(99, 102, 241, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.07)',
        'glow': '0 0 0 1px rgba(99, 102, 241, 0.2), 0 0 0 4px rgba(99, 102, 241, 0.1)',
      },
      transitionTimingFunction: {
        'stripe': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      letterSpacing: {
        'tightest': '-0.025em',
      }
    },
  },
  plugins: [],
}
