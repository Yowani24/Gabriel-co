module.exports = {
  prefix: 'tw-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '520px': '32.5rem',
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
