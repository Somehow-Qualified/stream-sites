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

const filters = require('./src/utils/date.filters');

// Include theme config
const config = require('./src/site/_globals/theme.json');

module.exports = function (eleventyConfig) {

  // Debug utility
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

  // Use ENV for Development
  if (process.env.NODE_ENV === 'local') {
    require('dotenv').config();
  }

  // Load filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });
  // Squash content for search.json
  eleventyConfig.addFilter("squash", require("./src/utils/squash.filters") );
  // Set a limiter for nunjucks FORs
  eleventyConfig.addFilter('limit', function(arr, limit) {
    return arr.slice(0, limit);
  });

  // Load plugins
  // eleventyConfig.addPlugin(pluginLazyImages, {
  //   imgSelector: 'img', // custom image selector
  //   placeholderQuality: 75
  // });

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
  // Highlights: posts created under Highlights
  eleventyConfig.addCollection('video', collection => {
    return collection.getFilteredByGlob('**/video/*.md').reverse();
  });
  // Archive: a single stream of Blog Posts and Highlights
  eleventyConfig.addCollection('archive', collection => {
    return collection.getFilteredByGlob(['**/blog/*.md', '**/video/*.md']).reverse();
  });
  // Tags: a list of every tag used
  eleventyConfig.addCollection('tagList', require('./src/utils/tag-list.collection'));

  // Copy static assests
  eleventyConfig.addPassthroughCopy({ 'src/site/_includes/_js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/site/_includes/_fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('src/site/admin');
  eleventyConfig.addPassthroughCopy('src/site/_redirects');

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
      layouts: `_themes/${config.theme}`,
      data: '_globals',
      output: 'dist' // the Publish directory
    },
    passthroughFileCopy: true,
    templateFormats : ['njk', 'md', 'html', '11ty.js', 'txt'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
  };

};
