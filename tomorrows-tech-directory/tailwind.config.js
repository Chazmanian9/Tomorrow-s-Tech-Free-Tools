/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0E1B',        // page background
        panel: '#0F1830',      // row/panel background
        panelhover: '#131F42', // row hover
        line: 'rgba(79, 195, 247, 0.14)', // hairline dividers
        accent: '#2F6FED',     // electric blue
        glow: '#4FC3F7',       // lighter cyan-blue for hover/glow
        ink2: '#8B96B3',       // muted secondary text
        ink1: '#F5F7FA',       // primary text
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
