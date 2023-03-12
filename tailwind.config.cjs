//const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,svelte,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}'
  ],

  presets: [
    require('daks-svelte/tailwindcss/presets/font-family.cjs'),
    require('daks-svelte/tailwindcss/presets/common.cjs')
  ],

  theme: {
    extend: {
      colors: {
        'accent': colors.cyan[700],
        'brand': colors.rose[700]
      },
      dropShadow: {
        'brand': [
          '0 5px 5px rgb(128 8 8 / 0.4)',
          '0 3px 3px rgb(128 8 8 / 0.2)'
        ]
      }
    }
  }
};
