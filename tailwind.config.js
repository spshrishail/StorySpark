/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#7df9ff', // Bright, vibrant blue
        'neon-green': '#39ff14',   // Intense, glowing green
        'aqua': '#00ffff',         // Presumed main accent color
        // add the 'electric-blue' and 'neon-green' since 'aqua' will be used for the main accents
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
          '50%': { textShadow: '0 0 10px #00ffcc, 0 0 20px #00ffcc' },
          '100%': { textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
        },
        pulse: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

