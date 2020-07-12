const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './dist/*.html',
    './dist/**/*.html'
  ],
  whitelist: [
    'body',
    'html',
    'h1',
    'h2',
    'h3',
    'p',
    'a',
    'blockquote',
    'intro',
    'mode-dark'
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require('cssnano')({
  preset: ['default', {
    discardComments: {
      removeAll: true,
    },
  }]
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.ELEVENTY_ENV === 'production' ? [purgecss,  cssnano] : [],
    ...process.env.ELEVENTY_ENV === 'admin' ? [cssnano] : []
  ],
};
