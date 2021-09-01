module.exports = {
  prefix: 'tw-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        
        
        '600px':'37.5rem',
        '550px': '34.375rem',
        '500px':'31.25rem',
        '400px':'25rem',
        '300px':'18.75rem',
        '350px':'21.875rem',
        '[98%]':'98%'
      }
    },
  },
  variants: {
    extend: {
      listStyleType: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
