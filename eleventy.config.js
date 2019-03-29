const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

    // Add a date formatter filter to Nunjucks
    eleventyConfig.addFilter('dateDisplay', require('./site/includes/filters/dates.js'));

    // Minify our HTML
    eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
      if( outputPath.endsWith('.html') ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }
      return content;
    });

    // Collections
    eleventyConfig.addCollection('blog', collection => {
      return collection.getFilteredByGlob('**/blog/*.md').reverse();
    });

    // only content in the latest `blog/` directory
    eleventyConfig.addCollection('postsLatest', collection => {
      return collection
        .getFilteredByGlob('**/blog/*.md')
        .slice(-9)
    });

    // Layout aliases
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
    eleventyConfig.addLayoutAlias('main-page', 'layouts/main-page.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

    // Include our static assets
    // eleventyConfig.addPassthroughCopy("css");
    // eleventyConfig.addPassthroughCopy("javascript");
    eleventyConfig.addPassthroughCopy('images');

    // Include Netlify CMS Admin
    eleventyConfig.addPassthroughCopy('site/admin');

    return {
      templateFormats : ['njk', 'md', 'html'],
      htmlTemplateEngine : 'njk',
      markdownTemplateEngine : 'njk',
      passthroughFileCopy: true,

      dir: {
        input: 'site',
        includes: 'includes',
        data: 'globals',
        output: 'dist' // the Publish directory
      }
    };

};
