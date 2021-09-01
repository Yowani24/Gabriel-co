module.exports = {
  prefix: 'tw-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '550px': '34.375rem',
      }
    },
  },
  variants: {
    extend: {
      listStyleType: ['hover', 'focus'],
    },
  },
  plugins: [],
}
