/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#020617',
          900: '#070f2b',
          850: '#0b1335',
          800: '#0f172a',
        },
        quantum: {
          cyan: '#22d3ee',
          cyanGlow: '#06b6d4',
          amethyst: '#a855f7',
          amethystGlow: '#7e22ce',
          amber: '#f59e0b',
          amberGlow: '#d97706',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.4)',
        'glow-amethyst': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
      },
    },
  },
  plugins: [],
};
