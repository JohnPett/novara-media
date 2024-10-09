/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), require('cssnano')({
    preset: 'default',
  })]
}
