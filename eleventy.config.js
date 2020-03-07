const { DateTime } = require('luxon');
const util         = require('util');
const fs           = require('fs');

// Markdown Plugins
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItToc = require('markdown-it-table-of-contents');
const markdownItVideo = require('markdown-it-video');

// Eleventy Plugins
const pluginLazyImages = require('eleventy-plugin-lazyimages');
const pluginPwa = require('eleventy-plugin-pwa');
const pluginReadingTime = require('eleventy-plugin-reading-time');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'default.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // Debug utility
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

  // Add a date formatter filter to Nunjucks
  eleventyConfig.addFilter('dateDisplay', require('./src/utils/dates.js'));

  // Format dates for computers
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Load plugins
  eleventyConfig.addPlugin(pluginLazyImages, {
    imgSelector: 'img', // custom image selector
    placeholderQuality: 75
  });

  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addPlugin(pluginPwa);
  }

  eleventyConfig.addPlugin(pluginReadingTime);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.setDataDeepMerge(true);

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
  };
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

  // Compress and combine JS files
  eleventyConfig.addFilter('jsmin', require('./src/utils/minify-js.js') );

  // Minify the html output when building production
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', require('./src/utils/minify-html.js') );
  }

  // Collections
  // Blog: posts created under Blog
  eleventyConfig.addCollection('blog', collection => {
    return collection.getFilteredByGlob('**/blog/*.md').reverse();
  });
  // only content in the latest `blog/` directory
  eleventyConfig.addCollection('postsLatest', collection => {
    return collection
      .getFilteredByGlob('**/blog/*.md')
      .slice(-9)
  });
  // Highlights: posts created under Highlights
  eleventyConfig.addCollection('highlights', collection => {
    return collection.getFilteredByGlob('**/highlights/*.md').reverse();
  });
  // Feed: a single stream of Blog Posts and Highlights
  eleventyConfig.addCollection('feed', collection => {
    return collection.getFilteredByGlob(['**/blog/*.md', '**/highlights/*.md']).reverse();
  });
  // Tags
  eleventyConfig.addCollection('tagList', require('./src/utils/tag-list.collection'));

  // Copy static assests
  eleventyConfig.addPassthroughCopy({ 'src/site/_includes/js': 'js' });
  eleventyConfig.addPassthroughCopy('src/site/fonts');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('src/site/admin');

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404/index.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    dir: {
      input: 'src/site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_globals',
      output: 'dist' // the Publish directory
    },
    passthroughFileCopy: true,
    templateFormats : ['njk', 'md', 'html', '11ty.js', 'txt'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
  };

};
