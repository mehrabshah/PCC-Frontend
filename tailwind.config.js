/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontSize: {
        'Sign-size': ['1.6rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
      }
    },
  },
  plugins: [],
}
