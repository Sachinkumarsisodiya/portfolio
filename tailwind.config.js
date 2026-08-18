/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        background: {
          DEFAULT: '#050505',
          secondary: '#0A0A0A',
        },
        card: {
          DEFAULT: '#101010',
        },
        border: {
          DEFAULT: '#242424',
        },
        text: {
          primary: '#F5F5F5', // almost white
          secondary: '#D4D4D8', // zinc-300 (brighter than A1A1AA)
          muted: '#A1A1AA', // zinc-400 (brighter than 71717A)
        },
        accent: {
          DEFAULT: '#A3E635',
          hover: '#BEF264',
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' stroke='rgba(255,255,255,0.03)' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px -5px rgba(163, 230, 53, 0.2)',
        'glow-hover': '0 0 25px -3px rgba(163, 230, 53, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
