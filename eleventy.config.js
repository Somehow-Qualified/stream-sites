const util         = require('util');
const fs           = require('fs');

// Theme Config
const config = require('./src/site/_data/theme.json');

// 11ty Files
const filters = require('./src/utils/filters.js');
const collections = require('./src/utils/collections.js');
const transforms = require('./src/utils/transforms.js');

// Markdown Plugins
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItToc = require('markdown-it-table-of-contents');
const markdownItVideo = require('markdown-it-video');

// 11ty Plugins
// const pluginLazyImages = require('eleventy-plugin-lazyimages');
const pluginReadingTime = require('eleventy-plugin-reading-time');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {

  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // Collections
  Object.keys(collections).forEach(collectionName => {
    eleventyConfig.addCollection(collectionName, collections[collectionName])
  });

  // WIP: Transforms
  // Object.keys(transforms).forEach(transformName => {
  //   eleventyConfig.addTransform(transformName, transforms[transformName])
  // });

  // Load plugins
  // eleventyConfig.addPlugin(pluginLazyImages, {
  //   imgSelector: 'img', // custom image selector
  //   placeholderQuality: 75
  // });
  eleventyConfig.addPlugin(pluginReadingTime);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.setDataDeepMerge(true);

  // Markdown Parsing
  eleventyConfig.setLibrary('md',
      markdownIt({
        html: true,
        breaks: true,
        typographer: true
      }).use(markdownItAnchor, {
        permalink: true,
        permalinkSymbol: '#',
        permalinkClass: 'bookmark',
        permalinkBefore: true,
        level: 2
      }).use(markdownItAttrs, {
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: []
      }).use(markdownItToc, {
        containerClass: 'md-toc',
        includeLevel: [2, 3, 4, 5, 6],
        listType: 'ul',
        containerHeaderHtml: '<p class="md-toc-header">Table of Contents</p>'
      }).use(markdownItVideo, {
        youtube: { width: 640, height: 390 },
        vimeo: { width: 500, height: 281 },
        vine: { width: 600, height: 600, embed: 'simple' },
        prezi: { width: 550, height: 400 }
      }).use(markdownItFootnote)
  );
  // For inline excerpts/TLDRs
  const mdRender = new markdownIt({});
  eleventyConfig.addFilter('renderMarkdownInline', (rawString) => {
		return mdRender.renderInline(rawString);
	});

  // Prepare assets for production
  if (process.env.NODE_ENV === 'production') {
    // Minify the html output when building production
    eleventyConfig.addTransform('htmlmin', require('./src/utils/htmlmin.js') );
    // CSS is handled via postcss-cli in package.json
    // JavaScript is handled by terser is package.json
  }

  // Copy static assests
  eleventyConfig.addPassthroughCopy({ 'src/site/_includes/_fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/site/_includes/_js': 'js' });
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('src/site/admin');
  eleventyConfig.addPassthroughCopy('src/site/_redirects');

  // Browsersync for localhost:8181
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
      layouts: `_themes/${config.theme}`, // .eleventyignore the rest
      data: '_data',
      output: 'dist' // the Publish directory
    },
    passthroughFileCopy: true,
    templateFormats : ['njk', 'md', 'html', '11ty.js', 'txt'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
  };

};
