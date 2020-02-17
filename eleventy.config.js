const { DateTime } = require("luxon");
const fs = require("fs");
const htmlmin = require("html-minifier");

// Markdown Plugins
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItToc = require('markdown-it-table-of-contents');
const markdownItVideo = require('markdown-it-video');

// Eleventy Plugins
const pluginLazyImages = require('eleventy-plugin-lazyimages');
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

    // Load plugins
    eleventyConfig.addPlugin(pluginLazyImages, {
      imgSelector: 'img', // custom image selector
      placeholderQuality: 75
    });
    eleventyConfig.addPlugin(pluginReadingTime);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    // Markdown-It and Plugins
    let markdownIt = require("markdown-it");
    let markdownItConfig = {
      html: true,
      breaks: true,
      linkify: true
    };
    let markdownItAnchorConfig = {
      permalink: true,
      permalinkBefore: true,
      permalinkClass: 'bookmark',
      permalinkSpace: true,
      permalinkSymbol: '#'
    };
    let markdownItAttrsConfig = {
      // optional, these are default options
      leftDelimiter: '{',
      rightDelimiter: '}',
      allowedAttributes: []  // empty array = all attributes are allowed
    }
    let markdownItTocConfig = {
      containerClass: 'md-toc',
      includeLevel: [2, 3, 4, 5, 6],
      listType: 'ul',
      containerHeaderHtml: '<p class="md-toc-header">Contents</p>'
    };
    let markdownItVideoConfig = {
      youtube: { width: 640, height: 390 },
      vimeo: { width: 500, height: 281 },
      vine: { width: 600, height: 600, embed: 'simple' },
      prezi: { width: 550, height: 400 }
    };
    let markdownItLib = markdownIt(markdownItConfig)
      .use(markdownItAnchor, markdownItAnchorConfig)
      .use(markdownItAttrs, markdownItAttrsConfig)
      .use(markdownItFootnote)
      .use(markdownItToc, markdownItTocConfig)
      .use(markdownItVideo, markdownItVideoConfig);
    eleventyConfig.setLibrary("md", markdownItLib);

    // Minify our HTML
    eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
      if(outputPath && outputPath.endsWith('.html')) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }
      return content;
    });

    // Set up for drafts
    const now = new Date();
    const livePosts = p => p.date <= now;

    // Collections
    eleventyConfig.addCollection('blog', collection => {

      // Use all posts with newest first
      // return collection.getFilteredByGlob('**/blog/*.md').reverse();

      // Omit drafts and scheduled posts
      return collection.getFilteredByGlob('**/blog/*.md')
        .filter(livePosts).reverse();
    });

    // only content in the latest `blog/` directory
    eleventyConfig.addCollection('postsLatest', collection => {
      return collection
        .getFilteredByGlob('**/blog/*.md')
        .slice(-9)
    });

    eleventyConfig.addCollection('highlights', collection => {
      return collection.getFilteredByGlob('**/highlights/*.md').reverse();
    });

    // Layout aliases
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

    // Copy static assests
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.addPassthroughCopy('images');
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
