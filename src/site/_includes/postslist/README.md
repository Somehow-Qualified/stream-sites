# Posts List

You Are Here: `src/site/_includes/postsList/`

This is where postsList variants live.

## How To Use This

A posts list contains a collection. By default Blog, Highlights, and Archive pages use a post list. On their respective markdown files, define a postsList template to use.

On build, the selected is placed on the three pages with `{% include theme %}`

## Default Template Variants

`cards.njk` uses an image card. Recommended for Highlights.

`cards-horizontal` is a horizontal "compressed" version. Recommended for Archive.

## Add Your Own Template

You can add your own version of a postlist as a `.njk` file to this directory. Then assign your template to your page layout.

## Dynamic Data

- Anything in {{ curly braces }} is a variable from frontmatter in a markdown file from src/site/blog or src/site/highlights
- Aliases are defined in `{% set %}`
