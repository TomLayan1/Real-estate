/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#825b52',
        bodyColor: '#fafafa',
        heroBg: '#00000060'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          sm:'3rem'
        }
      },
      boxShadow: {
        customShadow: '0 0px 9px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}