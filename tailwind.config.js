/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Relaxing Pastel Palette (Soft Violet/Periwinkle Base)
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Soft Violet
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        pastel: {
            mint: '#dcfce7', // green-100
            rose: '#ffe4e6', // rose-100
            sky: '#e0f2fe',  // sky-100
            sun: '#fef3c7',  // amber-100
            lavender: '#f3e8ff', // purple-100
        },
        slate: {
            850: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 0 0 1px rgba(139, 92, 246, 0.1), 0 15px 30px -5px rgba(139, 92, 246, 0.15), 0 10px 15px -8px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.04)',
        'float-hover': '0 20px 40px -12px rgba(139, 92, 246, 0.2), 0 8px 16px -6px rgba(0, 0, 0, 0.08)',
        'highlight': '0 0 0 1px rgba(139, 92, 246, 0.2), 0 4px 12px 0 rgba(139, 92, 246, 0.15)',
        'glow': '0 0 0 2px rgba(139, 92, 246, 0.2), 0 0 15px rgba(139, 92, 246, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      transitionTimingFunction: {
        'stripe': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      letterSpacing: {
        'tightest': '-0.025em',
        'widest-xl': '0.25em',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
