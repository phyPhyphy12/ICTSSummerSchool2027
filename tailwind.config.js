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
        icts: {
          crimson: '#9a393a',
          'crimson-light': '#b84a4b',
          'crimson-dark': '#7a2829',
          'crimson-subtle': 'rgba(154, 57, 58, 0.12)',
          amber: '#ef7f1a',
          'amber-light': '#f59c47',
          'amber-dark': '#cb670d',
          'amber-subtle': 'rgba(239, 127, 26, 0.12)',
        },
        exhibition: {
          950: '#0b0f17',
          900: '#101520',
          850: '#151c2a',
          800: '#1c2436',
          700: '#2b364e',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(154, 57, 58, 0.45)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        mono: ['var(--font-jetbrains)', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'icts-glow': '0 0 8px #ef7f1a, 0 0 16px #ef7f1a',
      },
    },
  },
  plugins: [],
};
