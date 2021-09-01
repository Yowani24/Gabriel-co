module.exports = {
  prefix: 'tw-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '550px': '34.375rem',
        '500px':'31.25rem',
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
