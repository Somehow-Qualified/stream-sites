---
title: Getting Started with Markdown
slug: markdown
date: 2019-10-29T03:48:22.013Z
tags:
  - getting-started
featured_image: /images/ss-card.jpg
image_caption: A cool Stream Site logo banner - this caption doubles as alt text.
tldr: >-
  Stream Sites come with a variety of markdown options to make writing with
  fancy flair easier.
seo:
  excerpt: >-
    Stream Sites come with a variety of markdown options to make writing with
    fancy flair easier.
  meta_title: Getting started with Markdown on Stream Sites
---

[[toc]]

Stream Sites pages and posts use Markdown. A variety of plugins are included to make Markdown fun and easier to use for fancy things.

## Markdown Flair

At the top of this post is a table of contents, auto-generated from headings. Headings also have anchor links so you can a) jump to the section or b) share content straight to the section.

## Images

Images default to 100% width and auto height. This can be changed in `site/includes/resources/sass/components/_blog.scss` with the selector `.content.post > img`.

Example:

![A girl running](/images/post-3.jpg "A girl prepares to run")

Example:

```markdown
![Alt text](/path/to/image.jpg "Optional title text")
```

## Syntax Highlighting

[Pick a Prism theme](https://github.com/PrismJS/prism-themes) and replace the contents of `site/includes/resources/sass/base/_syntax-highlight.scss` with the new theme's CSS.

See docs: [https://github.com/11ty/eleventy-plugin-syntaxhighlight](https://github.com/11ty/eleventy-plugin-syntaxhighlight)

Supported languages: [https://prismjs.com/#languages-list](https://prismjs.com/#languages-list)

## Markdown-It

Markdown-It is a markdown parser. Several plugins are pre-installed to make writing in markdown easier.

### Anchored Headings

See docs: [https://www.npmjs.com/package/markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)

Modify `markdown-it-anchor` configuration settings in `.eleventy.config.js`

```js
let markdownItAnchorConfig = {
    permalink: true, // Whether to add permalinks next to titles. Default: true
    permalinkBefore: true, // Place the permalink before the title. Default: true
    permalinkClass: 'bookmark', // The class of the permalink anchor.
    permalinkSpace: true,	// Place space between the header text and the permalink anchor. Default: true
    permalinkSymbol: '#' // The symbol in the permalink anchor.
};
```

### Footnotes

See docs: [https://www.npmjs.com/package/markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote)

Modify `markdown-it-footnote` styles in `site/includes/resources/sass/components/_blog.scss`

Example:

Let's try out some footnotes. Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

Classes available are:

```html
<!-- An inline footnote superscript in the HTML output -->
<sup class="footnote-ref">[^1]</sup>
<!-- A horizontal rule divides the content from the footnote section -->
<hr class="footnotes-sep">
<!-- The footnote section-->
<section class="footnotes">
	<!-- Footnotes are part of an ordered list -->
	<ol class="footnotes-list">
		<!-- Each list item has an ID (that matches the footnote number) and a class -->
		<li id="fn1" class="footnote-item"> [...] </li>
	</ol>
</section>
```

### Table of Contents

See docs: [https://www.npmjs.com/package/markdown-it-table-of-contents](https://www.npmjs.com/package/markdown-it-table-of-contents)

Modify `markdown-it-table-of-contents` configuration settings in `.eleventy.config.js`

```js
let markdownItTocConfig = {
    containerClass: 'md-toc', // The class for the container DIV
    includeLevel: [2, 3, 4, 5, 6], // Headings levels to use (2 for h2:s etc)
    listType: 'ul',	 // Type of list (ul for unordered, ol for ordered)
    containerHeaderHtml: '<p class="md-toc-header">Contents</p>' // Optional HTML string for container header
};
```

### Video Embeds

See docs: [https://www.npmjs.com/package/markdown-it-video](https://www.npmjs.com/package/markdown-it-video)

Modify `markdown-it-video` configuration settings in `.eleventy.config.js`

Example:

@[youtube](lJIrF4YjHfQ)

Currently supports YouTube, Vimeo, and Vine. We have to build a custom piece to support Twitch.

```markdown
YouTube supported formats:

@[youtube](dQw4w9WgXcQ)
@[youtube](http://www.youtube.com/embed/dQw4w9WgXcQ)
@[youtube](https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=feedrec_centerforopenscience_index)
@[youtube](http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o)
@[youtube](http://www.youtube.com/v/dQw4w9WgXcQ?fs=1&amp;hl=en_US&amp;rel=0)
@[youtube](http://www.youtube.com/watch?v=dQw4w9WgXcQ#t=0m10s)
@[youtube](http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0)
@[youtube](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
@[youtube](http://youtu.be/dQw4w9WgXcQ)
```

```markdown
Vimeo supported formats:

@[vimeo](19706846)
@[vimeo](https://vimeo.com/19706846)
@[vimeo](https://player.vimeo.com/video/19706846)
```

```markdown
Vine supported formats (if you feel retro):

@[vine](etVpwB7uHlw)
@[vine](https://vine.co/v/etVpwB7uHlw/embed/simple)
@[vine](https://vine.co/v/etVpwB7uHlw/embed/postcard?audio=1)
@[vine](<iframe src="https://vine.co/v/etVpwB7uHlw/embed/simple?audio=1" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>)
```
