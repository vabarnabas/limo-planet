module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        limoDark: '#004c44',
        limoLight: '#91d1ba',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
