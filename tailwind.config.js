/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lasn-orange':  '#EF4A23',
        'lasn-orange-dark': '#C7391A',
        'lasn-blue':    '#2E3492',
        'lasn-navy':    '#1A1D3B',
        'lasn-slate':   '#484848',
        'lasn-cool':    '#6B7280',
        'lasn-border':  '#E5E7EB',
        'lasn-silver':  '#D1D5DB',
        'lasn-green':   '#2D8C4E',
        'lasn-amber':   '#D97706',
        'lasn-error':   '#B91C1C',
      },
      fontFamily: {
        display: ['Montserrat', 'Inter', 'Helvetica Neue', 'sans-serif'],
        body:    ['Inter', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono:    ['JetBrains Mono', 'SF Mono', 'Consolas', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}
