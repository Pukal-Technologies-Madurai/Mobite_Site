/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        wobbleHorBottom: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-1.875rem) rotate(-6deg)' },
          '30%': { transform: 'translateX(0.9375rem) rotate(6deg)' },
          '45%': { transform: 'translateX(-0.9375rem) rotate(-3.6deg)' },
          '60%': { transform: 'translateX(0.5625rem) rotate(2.4deg)' },
          '75%': { transform: 'translateX(-0.375rem) rotate(-1.2deg)' },
        }
      },
      animation: {
        wobbleHorBottom: 'wobbleHorBottom 0.8s both',
      },
      colors: {
        "primary": "#7dc501",
        "secondary": "#009db4",
        "accent": "#1fb6ff",
        "black": "#000000",
        "white": "#ffffff",
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  }
}
