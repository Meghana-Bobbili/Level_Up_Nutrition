import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8A622', // Primary CTA
        secondary: '#1A1A1A', // Background
        accent: '#E87222', // Accent for urgency/alerts
        background: '#1A1A1A', // Matte dark background
        'background-alt': '#2A2A2A', // Slightly lighter dark
        'text-light': '#B0BAC6', // Subtext
        'text-dark': '#FFFFFF', // Headings
        highlight: '#4BD37B', // Green for positive/nutrient flags
        border: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair-display)'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'custom': '1rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite'
      },
    },
  },
  plugins: [],
}

export default config 