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
        primary: '#18315A', // Dark blue for primary/accent
        accent: '#18315A', // Dark blue for accent
        heading: '#F8A622', // Orange for headings/buttons
        button: '#F8A622', // Orange for buttons
        'button-accent': '#E87222', // Secondary orange accent
        secondary: '#FFFFFF', // White background
        background: '#FFFFFF',
        'background-alt': '#F3F4F6',
        'text-light': '#4B5563',
        'text-dark': '#18315A',
        highlight: '#F8A622',
        border: '#E5E7EB',
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