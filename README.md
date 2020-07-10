# Stream Sites

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) [![Netlify Status](https://api.netlify.com/api/v1/badges/5ac40edf-d66e-4f82-b140-2ebf93f99829/deploy-status)](https://app.netlify.com/sites/streamsites/deploys)

A static site boilerplate built for streamers by streamers. Proudly [#BuiltWith11ty](https://www.11ty.dev/) and [TailwindCSS](https://tailwindcss.com/)!

**[Visit the Demo Site](https://demo.streamsites.xyz)**

## Getting Started

### Method 1: One-Click Deploy to Netlify

You can deploy Stream Sites to Netlify with one click to be up and running in minutes! Once you're running, you can [**Connect Netlify CMS**](#connect-netlify-cms).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Somehow-Qualified/stream-sites)

### Method 2: Clone or Fork this Repo

1. Clone (or fork) this repo: `git clone https://github.com/Somehow-Qualified/stream-sites.git your-site-name` (set `your-site-name` to whatever you want the folder to be called).

2. Go into the project directory `cd your-site-name` and run `npm install`.

3. Once all the dependencies are installed run `npm start`.

4. Open your browser at http://localhost:8181 to see a live-reloading copy of your site while you make changes.

5. Log into the CMS at http://localhost:8181/admin by following the prompts.

> **Note:** The port may vary depending on your local setup. You can change it in `package.json` under `scripts: { "watch:html" : "... --port=8181" }`.

> **For advanced users:** You can extend [Browsersync](https://www.browsersync.io/) settings in `eleventy.config.js` for your needs.

## Connect Netlify CMS

Before you can use the CMS, you need to do some configuration in Netlify. [They provide a very handy guide to get started.](https://www.netlify.com/docs/identity/)

1. Once you’ve added the site to Netlify, go to “Settings” > “Identity” and enable Identity.

2. Scroll down to the “Git Gateway” area, click “Enable Git Gateway” and follow the steps.

3. Click the “Identity” tab at the top.

4. Once you’ve enabled Identity, click “Invite Users” and invite yourself.

5. Go to your email click the invite link sent to you.

6. Set a password in the popup box (and save it to your password manager).

7. Go to /admin on your site. Login with your email address and new password.

8. You’re in and ready to edit your content!

## Deploying Local Changes

### Method 1: Via Netlify Continuous Deployment

Commit and push your changes to a branch connected to Netlify. Netlify will take care of the rest with `npm run build`.

> With continuous deployment, Netlify will automatically deploy new versions of your site when you push commits to your connected Git repository. This also facilitates features like Deploy Previews. (Some features must be enabled in the Netlify UI.) - [Netlify Docs](https://docs.netlify.com/cli/get-started/#continuous-deployment)

### Method 2: Manually

Use `npm run build` to compile your site. Now you can upload your static site to your own hosting.

## Documentation

Todo... (Looking into Storybook.js for it.)

### Build Commands

- `build`: Run all of the build scripts.
- `build:html`: Minify HTML via [html-minifier](https://www.npmjs.com/package/html-minifier).
- `build:css`: Uses [postcss-cli](https://www.npmjs.com/package/postcss-cli) for [TailwindCSS](https://tailwindcss.com/) with [autoprefixer](https://www.npmjs.com/package/autoprefixer), [cssnano](https://www.npmjs.com/package/cssnano), and [PurgeCSS](https://www.npmjs.com/package/purgecss).
- `build:css:admin`: Minify CSS without purging; used for Netlify CMS preview templates.
- `build:js`: Minify JavaScript with [terser](https://www.npmjs.com/package/terser).
- `clean`: Delete the dist folder so you can build a clean copy of the site.

## Roadmap

Follow the journey on [Stream Sites](https://streamsites.xyz) or [the log](https://airtable.com/shryN9sES7sNSBlGs/tblKH3jM73HsOUDBu?backgroundColor=pink&layout=card&blocks=hide).

### Internal Dev Comment Flags

The following options generate the [Todo list for Atom](https://atom.io/packages/todo-show): `TODO, FIXME, CHANGED, XXX, IDEA, HACK, NOTE, REVIEW, NB, BUG, QUESTION, COMBAK, TEMP`

### To-Dos/Up Next

- [ ] Next/Prev links for archives
- [ ] Collection for managing emotes, chat commands, point redemptions, sound effect previews, etc.; include copy-to-clipboard and searching on front-end
- [ ] Support the Channel collection + page for affiliate links, donations, etc.
- [ ] Merch collection + page (maybe this is the same as Support?)
- [ ] Better social links and icon management
- [ ] Tag list - add a filter for "most popular"
- [ ] Netlify CMS Styled Previews - Link In Bio, improve others
- [ ] Home page modules
- [ ] Rich snippet structured data (articles, videos) with [schema markup](https://schema.org/docs/gs.html) and [JSON-LD](https://json-ld.org/playground/)
- [ ] [Microformats](http://microformats.org/wiki/microformats2) for IndieWeb
- [ ] [Webmentions](https://mxb.dev/blog/using-webmentions-on-static-sites/)
- [ ] PWA mode with offline page showing available/saved content

### Needs fine tuning
- **Bug - Sitemap**: Set <lastmod> to file modified date, not build date; same for RSS and Atom feeds
- **Performance/Build**: Inline SVGs from icon-library.svg at build to minimize network response time.
- **Twitch Live Alert JS** - Make it smart when closed, so it knows when to pop up again (game changed, new stream); Also, need to look into the [OAuth Implications](https://discuss.dev.twitch.tv/t/requiring-oauth-for-helix-twitch-api-endpoints/23916)
- **Dev**: `watch:html` is ignoring changes in /templates so you have restart the live server to see changes, each time you want to _see_ changes.

### Done!

- [x] Set repo to public on Github
- [x] Categories
- [x] CMS: Map core fields
- [x] iframe rendering for Twitch Clips, Twitch Vods, Twitch Collections, YouTube videos, YouTube playlists, and Vimeo
- [x] LD-JSON: Page level complete
- [x] Meta Extended: Privacy settings for search crawlers, Twitter, Pinterest; optional Google Site verification string
- [x] Robots.txt to let the bots in (or block them)
- [x] Search page for no-JS fallback
- [x] RSS and Atom feeds
- [x] Next/Prev links for posts
- [x] Tag List generation
- [x] Site search
- [x] ~Twitch Live Alert~ (it died from the new OAuth requirements)
- [x] Netlify CMS manual initialization
- [x] PWA mode
- [x] Light/Dark mode
- [x] Archive collection (all posts)
- [x] All of the Markdown options
- [x] Styled Previews for Netlify CMS: Posts (Blog, Video), Pages (Core, Custom)
- [x] Lazy loading images
- [x] Meta: Google Schema, Twitter, Open Graph (Facebook), sameAs, feeds, JSON-LD
- [x] Per post/page SEO settings and site level fallback
- [x] ~Netlify CMS via CDN~ (swapped to [manual initialization](https://zslabs.com/articles/consolidating-netlify-cms))
- [x] Reading Time and Syntax Highlighting
- [x] Sitemap
- [x] Contact form
- [x] Collections: Blog, Video, Archive (i.e. all posts), Tags
- [x] Core pages: About, Contact, Privacy, 404, Link in Bio

### Ideas and Opportunities
- Make it easy to add TailwindCSS options via `extend`; i.e. load a custom color palette through Netlify CMS. (I think the `list` widget with a child `code` widget _might_ work)
- Make it easier to "install" custom fonts. Upload to the font directory, add it to `extend`, etc. all from Netlify CMS.
- Twitch Live Alert CSS - expose more styles as CSS variables for easy style modification
- Pull in latest Tweets - [example](https://www.d-hagemeier.com/en/articles/embed-twitter/)
- [Mobile nav [?]](https://github.com/josephdyer/skeleventy/blob/master/site/includes/components/mobile-nav.njk)

## Credits

The project started with [Skeleventy](https://skeleventy.netlify.com/), an [Eleventy](https://11ty.dev/) starter template using  [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) and [TailwindCSS](https://tailwindcss.com/).

Stream Sites uses [Netlify CMS](https://www.netlifycms.org/) via [manual initialization](https://zslabs.com/articles/consolidating-netlify-cms) as its git-based CMS.

Ghostwind, the default theme, [is a clone](https://www.tailwindtoolbox.com/templates/ghostwind) of the Casper theme for Ghost by [Tailwind Toolbox](https://www.tailwindtoolbox.com/) and expanded for Stream Sites.

CSS is kept lean with [PurgeCSS](https://www.purgecss.com/) and tiny with [cssnano](https://cssnano.co/), as part of the build process with [PostCSS](https://postcss.org/) and [autoprefixer](https://www.npmjs.com/package/autoprefixer). HTML and JavaScript are processed with [html-minifier](https://www.npmjs.com/package/html-minifier) and [terser](https://www.npmjs.com/package/terser).

Additional features were made possible by scrounging through the internet for awesome examples and plugins:

- Many shoutouts to [@skeemer](https://github.com/skeemer) for help with tons of JavaScript shenanigans!

- **Contact form** is built [TailwindCSS Custom Forms](https://tailwindcss-custom-forms.netlify.com/) and connected to with [Netlify Forms](https://www.netlify.com/products/forms/).

- **Sitemap** is based on [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog).

- **Tags** are based on the work of Bradley Taunt in [Stacks](https://github.com/bradleytaunt/stacks-11ty) and [Taunt](https://github.com/bradleytaunt/eleventy-taunt); with **Tag List** from [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog/blob/master/_11ty/getTagList.js).

- **Reading time** is courtesy of [eleventy-plugin-reading-time](https://www.npmjs.com/package/eleventy-plugin-reading-time).

- **Date filters** are built with [Luxon](https://moment.github.io/luxon/docs/manual/formatting.html) for formatting and timezone handling.

- **RSS/Atom** is built upon [eleventy-plugin-rss](https://www.npmjs.com/package/@11ty/eleventy-plugin-rss), [RSS 2.0 Specification](http://www.rssboard.org/rss-specification), and [Atom Syndication Format](http://www.atomenabled.org/developers/syndication/).

- **Syntax highlighting** is courtesy of [eleventy-plugin-syntaxhighlight](https://www.npmjs.com/package/@11ty/eleventy-plugin-syntaxhighlight). The default syntax theme [(atom-dark) is by Joe Gibson](https://github.com/atom/atom-dark-syntax).

- **Lazy loading images** is courtesy of [eleventy-plugin-lazyimages](https://www.npmjs.com/package/eleventy-plugin-lazyimages).

- **PWA mode** is courtesy of [workbox-cli](https://www.npmjs.com/package/workbox-cli).

- **Dark mode** is made possible by [tailwindcss-dark-mode](https://www.npmjs.com/package/tailwindcss-dark-mode).

- **Markdown flavoring** comes from [markdown-it](https://www.npmjs.com/package/markdown-it) and friends: [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor), [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs), [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote), [markdown-it-table-of-contents](https://www.npmjs.com/package/markdown-it-table-of-contents), and [markdown-it-video](https://www.npmjs.com/package/markdown-it-video).

- **Search** is a combination of Tailwind Toolbox's [Searchy](https://www.tailwindtoolbox.com/components/searchy) and Phil Hawksworth's [Adding Search to a JAMstack Site](https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/).

- **Previous and Next Links on posts** come from [this reply](https://github.com/11ty/eleventy/issues/529#issuecomment-568257426) by [pascalw](https://github.com/pascalw).

- **Categories** are based on Philip Borenstein's [Implementing Categories](https://www.pborenstein.com/posts/categories/).

## RIP

Features that have exploded due to external dependencies changing their rules. These need to be reevaluated and rewritten accordingly.

- **Twitch Live Alert** - Shoutout to [@brob](https://twitter.com/brob) for his Twitch stream ["Building a quick 11ty integration with the Twitch API"](https://www.twitch.tv/videos/557243663) and my good luck of running into his [Tweet](https://twitter.com/brob/status/1232016529300037634). Combined with [Standard Library](https://build.stdlib.com/), you can use Netlify Build Hooks to automate turning the alert on and off. This led to a separate journey into [web components](https://www.twitch.tv/videos/559178782) that doesn't need Build Hooks at all!
