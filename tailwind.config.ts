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
          DEFAULT: 'rgb(239, 166, 52)',
          light: 'rgb(244, 188, 102)',
          dark: 'rgb(213, 148, 46)',
        },
        white: 'rgb(255, 255, 255)',
      },
      backgroundColor: {
        primary: 'rgb(239, 166, 52)',
        white: 'rgb(255, 255, 255)',
      },
      textColor: {
        primary: 'rgb(239, 166, 52)',
        white: 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: [],
}

export default config 