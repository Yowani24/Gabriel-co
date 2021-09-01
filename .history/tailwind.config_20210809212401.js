module.exports = {
  prefix: 'tw-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '510px': '31.875rem',
        '[98%]':'98%'
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
