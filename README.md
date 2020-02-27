[![Netlify Status](https://api.netlify.com/api/v1/badges/f4455669-0ce8-40ea-8ff5-5c31f0aadfa5/deploy-status)](https://app.netlify.com/sites/demo-streamsites/deploys)

# Stream Sites

A static site boilerplate built for streamers by streamers. Proudly #BuiltWith11ty!

## Requirements

Node `>=` v12.0

## Installation

Clone this repo, then navigate (`cd`) to the folder on your computer and run:

```
npm install
```

To run a development copy (with live reloading), use `npm start` to compile the `dist` folder and show you your changes.

## Documentation

Jump over to `docs` for guidance on file structure.

## Ready to deploy?

Run `npm run build` to minify scripts, have PurgeCSS remove unused styles, and compile your 11ty site.

## Credits

Stream Sites is built with [Eleventy](https://www.11ty.dev/).

The initial project began with [Skeleventy](https://skeleventy.netlify.com/), an Eleventy starter using [Tailwind](https://tailwindcss.com/).

CSS is kept lean with [PurgeCSS](https://www.purgecss.com/) as part of the build process with [PostCSS](https://postcss.org/).

Additional features were made possible by the 11ty projects:

- Sitemap comes from [11ty's base blog](https://github.com/11ty/eleventy-base-blog).

- Tags are based on the work of Bradley Taunt in [Stacks](https://github.com/bradleytaunt/stacks-11ty) and [Taunt](https://github.com/bradleytaunt/eleventy-taunt).

- Reading time is courtesy of [eleventy-plugin-reading-time](https://www.npmjs.com/package/eleventy-plugin-reading-time).

- RSS is built upon [eleventy-plugin-rss](https://www.npmjs.com/package/@11ty/eleventy-plugin-rss).

- Syntax highlighting is courtesy of [eleventy-plugin-syntaxhighlight](https://www.npmjs.com/package/@11ty/eleventy-plugin-syntaxhighlight).

- Lazy image loading is courtesy of [eleventy-plugin-lazyimages](https://www.npmjs.com/package/eleventy-plugin-lazyimages).

- PWA mode is courtesy of [eleventy-plugin-pwa](https://www.npmjs.com/package/eleventy-plugin-pwa).

- Markdown flavoring comes from [markdown-it](https://www.npmjs.com/package/markdown-it) and friends: [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor), [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs), [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote), [markdown-it-table-of-contents](https://www.npmjs.com/package/markdown-it-table-of-contents), and [markdown-it-video](https://www.npmjs.com/package/markdown-it-video).

- Dark mode is made possible by [tailwindcss-dark-mode](https://www.npmjs.com/package/tailwindcss-dark-mode).

- Shoutout to [@brob](https://twitter.com/brob) for his Twitch stream "Building a quick 11ty integration with the Twitch API" and the good luck of running into his [Tweet](https://twitter.com/brob/status/1232016529300037634). This combined with [Standard Library](https://build.stdlib.com/) made Twitch Live Alerts and Netlify Build Hooks possible!

## Roadmap

Follow the Roadmap on our [website](https://streamsites.xyz) or [progress updates](https://airtable.com/shryN9sES7sNSBlGs/tblKH3jM73HsOUDBu?backgroundColor=pink&layout=card&blocks=hide).

### Roadmap TL;DR

- Next/Prev post links ([pending 11ty v.0.11.0](https://www.11ty.dev/docs/filters/collection-items/))
- Collection for managing chat commands, sound effect previews, etc.
- Support the Channel page for affiliations, donations, etc.
- Webmentions
- Manual Initialization for Netlify CMS (no more YML!!)
- More icons for everything
- Themes
- Documentation
