const { DateTime } = require("luxon");
const fs = require("fs");
const htmlmin = require("html-minifier");
const pluginReadingTime = require('eleventy-plugin-reading-time');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    // Add a date formatter filter to Nunjucks
    eleventyConfig.addFilter('dateDisplay', require('./site/includes/filters/dates.js'));

    // Format dates for computers
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    // Display reading time for posts
    eleventyConfig.addPlugin(pluginReadingTime);

    // Adds RSS feed
    eleventyConfig.addPlugin(pluginRss);

    // Adds Syntax highlighter
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

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
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

    // Include our static assets
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
