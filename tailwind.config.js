/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./js/**/*.ts', './*.php', './includes/*.php'],
  theme: {
    screens: {
      'sm': '950px',
      'md': '1250px',
      'lg': '2100px'
    },
  }
}
