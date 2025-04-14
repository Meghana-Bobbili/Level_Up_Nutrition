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
        primary: {
          DEFAULT: '#004D4D', // Dark teal
          dark: '#003939',
          light: '#006666',
        },
        secondary: {
          DEFAULT: '#6BBF59', // Fresh green
          dark: '#5AA548',
          light: '#7CCF6A',
        },
        accent: {
          DEFAULT: '#F9CB40', // Citrus yellow
          dark: '#F0BC20',
          light: '#FFDB60',
        },
        neutral: {
          dark: '#2E2E2E',    // Charcoal gray
          light: '#F4F4F4',   // Soft gray
        },
        background: {
          DEFAULT: '#FFFFFF', // Warm white
          alt: '#FAF6F1',    // Sand beige background
        },
        wellness: '#4A90E2',  // Wellness blue
        herbal: '#A3B18A',    // Olive green
        sand: '#EAE0D5',      // Sand beige
        text: '#2E2E2E',
        'text-light': '#666666',
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
      boxShadow: {
        'custom': '0 2px 4px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'custom': '4px',
      },
    },
  },
  plugins: [],
}

export default config 