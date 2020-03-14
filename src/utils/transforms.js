/*
|----------------------------------------------------------------
| Transforms
|----------------------------------------------------------------
*/

const htmlmin = require('html-minifier');
const helpers = require('./helpers.js');

module.exports = {

  // minify html
  htmlmin: (content, outputPath) => {
    if (process.env.ELEVENTY_ENV === 'production' && outputPath.endsWith('.html')) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          caseSensitive: true
        })
    }
    return content
  }

}
