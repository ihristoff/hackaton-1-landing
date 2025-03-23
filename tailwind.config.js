/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'tilt': 'tilt 10s infinite linear',
        'spin-slow': 'spin 4s linear infinite',
        'shimmer': 'shimmer 0.5s ease-in-out forwards',
      },
      keyframes: {
        'tilt': {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { backgroundPosition: '-200% 0', opacity: '0' },
        },
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 0deg, transparent, #6366F1 45deg, transparent 180deg, transparent 360deg)',
      },
    },
  },
  plugins: [],
}; 