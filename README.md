# Stream Sites

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) [![Netlify Status](https://api.netlify.com/api/v1/badges/f4455669-0ce8-40ea-8ff5-5c31f0aadfa5/deploy-status)](https://app.netlify.com/sites/demo-streamsites/deploys)

A static site boilerplate built for streamers by streamers. Proudly #BuiltWith11ty!

**[Visit the Demo Site](https://demo.streamsites.xyz)**

## Getting Started

### Method 1: One-Click Deploy to Netlify

You can deploy Stream Sites to Netlify with one click to be up and running in minutes! Once you're running, you can **Connect Netlify CMS**.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

### Method 2: Clone or Fork this Repo

1. Clone (or fork) this repo: `git clone https://gitlab.com/stream-sites/ss-core.git your-site-name`

2. Go into the project directory `cd your-site-name` and run `npm install`.

3. Optional: Edit `.env.sample` to connect with Twitch. Be sure to save this in Netlify too.

4. Once all the dependencies are installed run `npm start`.

5. Open your browser at http://localhost:8181 to see a live-reloading copy of your site while you make changes.

6. Log into the CMS at http://localhost:8181/admin by following the prompts.

> **Note:** The port may vary depending on your local setup. You can modify it in `package.json` under `scripts: { "watch:html" : "... --port=8181" }`.

> **For advanced users:** You can extend [Browsersync](https://www.browsersync.io/) settings in `eleventy.config.js` for your needs.

## Deploy Your Local Changes

### Via Netlify Continuous Deployment

Commit and push your changes to a branch connected to Netlify. Netlify will take care of the rest with `npm run netlify`.

> With continuous deployment, Netlify will automatically deploy new versions of your site when you push commits to your connected Git repository. This also facilitates features like Deploy Previews. (Some features must be enabled in the Netlify UI.) - [Netlify Docs](https://docs.netlify.com/cli/get-started/#continuous-deployment)

### Manual Deploy

Run `npm run build` to minify scripts, have PurgeCSS remove unused styles, and compile your 11ty site. Now you can upload your static site to your own hosting.

## Connect Netlify CMS

Before you can use the CMS, you need to do some config in Netlify. [They provide a very handy guide to get started.](https://www.netlify.com/docs/identity/)

1. Once you’ve set up the site on Netlify, go to “Settings” > “Identity” and enable Identity.

2. Scroll down to the “Git Gateway” area, click “Enable Git Gateway” and follow the steps.

3. Click the “Identity” tab at the top.

4. Once you’ve enabled Identity, click “Invite Users” and invite yourself.

5. Check the invite link in your inbox and click the link in the email that’s sent to you.

6. Set a password in the popup box (and save it to your password manager).

7. Go to /admin on your site and login.

8. You’re in and ready to edit your content!

## Documentation

Visit the [Wiki](https://gitlab.com/stream-sites/ss-core/-/wikis/home) for documentation, guidance, and education.

## Credits

Stream Sites is built with [Eleventy (11ty)](https://www.11ty.dev/).

The project started with [Skeleventy](https://skeleventy.netlify.com/), an Eleventy boilerplate/template using [Tailwind](https://tailwindcss.com/).

Tailwind

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

- Many shoutouts to [@skeemer](https://github.com/skeemer) for many many JavaScript shenanigans!

- Shoutout to [@brob](https://twitter.com/brob) for his Twitch stream "Building a quick 11ty integration with the Twitch API" and the good luck of running into his [Tweet](https://twitter.com/brob/status/1232016529300037634). This combined with [Standard Library](https://build.stdlib.com/) made Twitch Live Alerts and Netlify Build Hooks possible!

## Roadmap

Follow the journey on [Stream Sites](https://streamsites.xyz) or [the log](https://airtable.com/shryN9sES7sNSBlGs/tblKH3jM73HsOUDBu?backgroundColor=pink&layout=card&blocks=hide).

### Up Next

- [ ] Search page
- [ ] Better 404 page with Search
- [ ] RSS **and** Atom feeds for archive, blog, video - give people all the choices for consumption
- [ ] **In Progress:** Manual Initialization for Netlify CMS (no more YML!!)
- [ ] **In Progress:** Styled Previews in Netlify CMS.
- [ ] **In Progress:** Themes (starting with 2, maybe 3)
- [ ] Collection for managing chat commands, sound effect previews, etc.
- [ ] Support the Channel page for affiliations, donations, etc.
- [ ] Home pages
- [ ] More icons for everything
- [ ] Documentation, also looking into Storybook

### Needs fine tuning
- [ ] I somehow broke(?) the script that loads iframes for the video collection... it no longer shows you the image placeholder, only the play button icon.
- [ ] Twitch Live Alert JS - make it smart when closed, so it knows when to pop up again (game changed, new stream)
- [ ] Sitemap - set <lastmod> to file modified date, not build date
- [ ] ld+json is missing `sameas`, which needs to be queried from  `_globals`
- [ ] conditional logic for dev vs prod CSS and JS would be great, the [Skeleventy](https://github.com/josephdyer/skeleventy/blob/master/site/includes/layouts/default.njk#L14) version isn't working for me.

### Done!

- [x] Next/Prev links for posts
- [x] Next/Prev links for archives
- [x] Site search
- [x] Light/Dark mode
- [x] Styled Previews for Netlify CMS:  Posts, Pages
- [x] Archive collection (all posts)
- [x] Lazy loading
- [x] SEO options, and a ton of meta tags
- [x] CMS config
- [x] Link in Bio (minus ongoing theme versions)
- [x] Tags
- [x] Contact form
- [x] Blog and Video collections
- [x] Core pages - About, Contact, Privacy

### Other Ideas
- [ ] Make it easy to add TailwindCSS options via `extend`; i.e. load a custom color palette through Netlify CMS. (I think the `list` widget with a child `code` widget _might_ work)
- [ ] Make it easier to "install" custom fonts. Upload to the font directory, add it to `extend`, etc. all from Netlify CMS.
- [ ] Tag list - filter for most popular
- [ ] Twitch Live Alert CSS - expose more styles as CSS variables for easy style modification
- [ ] Webmentions
- [ ] Pull in latest Tweets - [example](https://www.d-hagemeier.com/en/articles/embed-twitter/)
- [ ] [Mobile nav [?]](https://github.com/josephdyer/skeleventy/blob/master/site/includes/components/mobile-nav.njk)
