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
        contactBg: '#21202068',
        heroBg: '#00000069',
        footerBg: '#121212',
        footerBgTwo: '#212020'
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