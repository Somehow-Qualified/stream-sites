const fs = require('fs');

// Theme Config
const config = require('./site/_data/theme.json');

// 11ty Files
const filters = require('./utils/filters.js');
const shortcodes = require('./utils/shortcodes.js');
const collections = require('./utils/collections.js');
const transforms = require('./utils/transforms.js');

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

  /**
   * Add plugins
   * @link https://www.11ty.dev/docs/plugins/
   */
  // eleventyConfig.addPlugin(pluginLazyImages, {
  //   imgSelector: 'img', // custom image selector
  //   placeholderQuality: 75
  // });
  eleventyConfig.addPlugin(pluginReadingTime);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  /**
   * Add Collections
   * @link https://www.11ty.dev/docs/collections/
   */
  Object.keys(collections).forEach(collectionName => {
    eleventyConfig.addCollection(collectionName, collections[collectionName])
  });

  /**
   * Add Filters
   * @link https://www.11ty.io/docs/filters/
   */
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  /**
   * Add Shortcodes
   * @link https://www.11ty.io/docs/shortcodes/
   */
  Object.keys(shortcodes).forEach(shortcodeName => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  });

  /**
   * Add Transforms
   * @link https://www.11ty.io/docs/config/#transforms
   */
  Object.keys(transforms).forEach(transformName => {
    eleventyConfig.addTransform(transformName, transforms[transformName])
  });

  /**
   * Add async shortcodes
   * @link https://www.11ty.dev/docs/languages/nunjucks/#asynchronous-shortcodes
   */
  //eleventyConfig.addNunjucksAsyncShortcode('svgsprite', svgsprite)

  /**
   * Add custom watch targets
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget(`./site/_themes/${config.theme}`);

  /**
   * Set custom markdown library instance
   * @link https://www.11ty.dev/docs/languages/liquid/#optional-set-your-own-library-instance
   */
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
  // TODO: MOVE TO /utils/transforms ~ For inline excerpts/TLDRs
  const mdRender = new markdownIt({});
  eleventyConfig.addFilter('renderMarkdownInline', (rawString) => {
		return mdRender.renderInline(rawString);
	});

  /**
   * Passthrough file copy
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({ 'site/_includes/_fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy({ 'site/_includes/_js': 'js' });
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('site/admin');
  eleventyConfig.addPassthroughCopy('site/_redirects');

  /**
   * Opts in to a full deep merge when combining the Data Cascade.
   * @link https://www.11ty.dev/docs/data-deep-merge/#data-deep-merge
   */
  eleventyConfig.setDataDeepMerge(true);

  /**
   * Override BrowserSync Server options
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
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

  /**
   * Configuration
   * @link https://www.11ty.dev/docs/config/#configuration-options
   */
  return {
    dir: {
      input: 'site',
      includes: '_includes',
      layouts: `_themes/${config.theme}`, // only use selected theme, .eleventyignore the rest
      data: '_data',
      output: 'dist' // publish directory
    },
    passthroughFileCopy: true,
    templateFormats : ['njk', 'md', 'html', '11ty.js'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
  };

};
