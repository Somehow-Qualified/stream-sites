/*
|----------------------------------------------------------------
| WIP: Transforms
|
| CSS is handled via postcss-cli in package.json
| JavaScript is handled by terser is package.json
|----------------------------------------------------------------
*/

const htmlmin = require('html-minifier');
const helpers = require('./helpers.js');

module.exports = {

  /**
   * Minify HTML for Production
   * Docs: https://www.npmjs.com/package/html-minifier
   */
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
