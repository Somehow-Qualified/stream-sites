# Stream Sites Core - Directory Structure

Where everything lives...

```
ss-core
├── README.md
├── eleventy.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── .lazyimages.json
├── netlify.toml
├── package-lock.json
├── package.json
├── LICENSE
├── .netlify
│   └── state.json
├── dist
│   └── Your built site will compile here
├── images
│   ├── icons
│   │   └── icon-library.svg
│   └── Your uploaded images live here
└── src
    ├── functions
    │   └── Add Netlify functions here
    ├── site
    │   ├── feed.njk
    │   ├── robots.txt
    │   ├── sitemap.njk
    │   ├── webmanifest.11ty.js
    │   ├── _globals
    │   │   ├── author.json
    │   │   ├── ctas.json
    │   │   ├── helpers.js
    │   │   ├── linkinbio.json
    │   │   ├── modules.json
    │   │   ├── navigation.json
    │   │   ├── site.json
    │   │   ├── social.json
    │   │   ├── stream.js
    │   │   └── twitch.json
    │   ├── _includes
    │   │   ├── components
    │   │   │   ├── author.njk
    │   │   │   ├── contact-form.njk
    │   │   │   ├── footer.njk
    │   │   │   ├── header.njk
    │   │   │   ├── livealert.njk
    │   │   │   ├── meta.njk
    │   │   │   ├── postslist.njk
    │   │   │   └── social-icons.njk
    │   │   ├── css
    │   │   │   └── main.css
    │   │   ├── js
    │   │   │   └── main.js
    │   │   └── layouts
    │   │       ├── 404.njk
    │   │       ├── about.njk
    │   │       ├── blog.njk
    │   │       ├── contact.njk
    │   │       ├── default.njk
    │   │       ├── highlights.njk
    │   │       ├── linkinbio.njk
    │   │       ├── post.njk
    │   │       └── privacy.njk
    │   ├── admin
    │   │   ├── config.yml
    │   │   ├── index.html
    │   │   └── preview-templates
    │   │       ├── blog.js
    │   │       ├── index.js
    │   │       ├── inline.css
    │   │       └── page.js
    │   ├── blog
    │   │   ├── blog.json
    │   │   └── sample-post.md
    │   ├── fonts
    │   │   └── Upload your custom fonts here
    │   ├── highlights
    │   │   ├── highlights.json
    │   │   └── sample-post.md
    │   └── page
    │       ├── 404.md
    │       ├── about.md
    │       ├── blog.md
    │       ├── contact.md
    │       ├── highlights.md
    │       ├── index.njk
    │       ├── linkinbio.md
    │       ├── page.json
    │       ├── privacy-policy.md
    │       └── tags.njk
    └── utils
        ├── dates.js
        ├── filters.js
        ├── minify-html.js
        ├── minify-js.js
        └── timestamp.js
```
