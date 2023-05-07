const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2680eb',
        'dar-gray': '#4b4b4b',
        'light-gray-0': '#eaeaea',
        'light-gray-1': 'rgb(75,75,75)',
        'light-gray-2': 'rgb(128,128,128)',
        'renderer-gray': 'rgb(224, 224, 224)',
        red: '#e34850',
        'green-400': '#2d9d78',
        'green-500': '#268e6c',
      },
    },
  },
  plugins: [],
};
