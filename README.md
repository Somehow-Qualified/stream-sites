[![Netlify Status](https://api.netlify.com/api/v1/badges/f4455669-0ce8-40ea-8ff5-5c31f0aadfa5/deploy-status)](https://app.netlify.com/sites/demo-streamsites/deploys)

# Stream Sites

A static site boilerplate built for streamers by streamers.

## Requirements

Node `>=` v8.9.0

## Installation

Clone this repo, then navigate (`cd`) to the folder on your computer and run:

```
npm install
```

To run a development copy, use `npm run build:clean` to compile the `dist` folder.

## Folder Structure

The `site` folder contains all the templates, pages and content which Eleventy will watch and compile into HTML for us.

A `globals` folder lives within this, where as the name suggests - globally available files live. There's a `site.json` file for general site stuff, `navigation.json` which we use as reference to loop over in our template to generate our nav, `social.json` which holds social media links, `author.json` for all your bio information to display on posts, and a `helpers.js` which just contains an environment helper.

Uncompiled SCSS and JS reside in the `site/resources` folder - Gulp uses these folders for any changes (you should restart the server when creating new partials).

When you run the build command ready for deployment, Stream Sites will reference the minified version of the stylesheet `main.min.css` and scripts `main.min.js`.

Purge will also run via the build command and will cross reference all of Tailwind's utility classes with your templates/HTML and will remove all the unused ones - pretty cool right?

## Local testing

At some point, 11ty dev broke when Gulp was updated to v4. Use `npm run build:clean` to recompile `dist` and look around.

Ask M2 for her LocalValetDriver to serve `dist` locally on https.

## Ready to deploy?

`npm run build` to minify scripts and run Purgecss over your styles.

## Credits

Stream Sites is built with [Eleventy](https://www.11ty.io/).

The initial project began with [Skeleventy](https://skeleventy.netlify.com/), an Eleventy starter with [Tailwind](https://tailwindcss.com/).

CSS is kept lean with [PurgeCSS](https://www.purgecss.com/) as part of the build process through [Gulp](https://gulpjs.com/).

As for additional features:

- Sitemap comes from [11ty's base blog](https://github.com/11ty/eleventy-base-blog).

- Tags are based on the work of Bradley Taunt in [Stacks](https://github.com/bradleytaunt/stacks-11ty) and [Taunt](https://github.com/bradleytaunt/eleventy-taunt).

- Reading time is courtesy of [eleventy-plugin-reading-time](https://www.npmjs.com/package/eleventy-plugin-reading-time).
