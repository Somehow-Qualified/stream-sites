# Stream Sites Core - Directory Structure

Where everything lives...

```
ss-core
├── README.md
├── LICENSE
├── .gitignore
├── .env.sample
├── eleventy.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── package-lock.json
├── package.json
├── .netlify
│   └── state.json
├── dist
│   └── Your built site will compile here
├── images
│   ├── icons
│   │   └── icon-library.svg
│   └── Your image uploads live here
└── src
    ├── functions
    │   └── Add Netlify functions here
    ├── site
    │   ├── feed.njk
    │   ├── robots.txt
    │   ├── sitemap.xml.njk
    │   ├── webmanifest.11ty.js
    │   ├── _globals
    │   │   ├── ctas.json
    │   │   ├── helpers.js
    │   │   ├── linkinbio.json
    │   │   ├── modules.json
    │   │   ├── navigation.json
    │   │   ├── site.json
    │   │   ├── social.json
    │   │   └── stream.js
    │   ├── _includes
    │   │   ├── form.njk
    │   │   ├── footer.njk
    │   │   ├── header.njk
    │   │   ├── livealert.njk
    │   │   ├── meta.njk
    │   │   ├── postslist.njk
    │   │   ├── social-icons.njk
    │   │   ├── css
    │   │   │   └── main.css
    │   │   ├── fonts
    │   │   │   └── Upload your custom fonts here  
    │   │   └── js
    │   │       └── main.js
    │   ├── _layouts
    │   │   ├── 404.njk
    │   │   ├── about.njk
    │   │   ├── blog.njk
    │   │   ├── contact.njk
    │   │   ├── default.njk
    │   │   ├── highlights.njk
    │   │   ├── linkinbio.njk
    │   │   ├── post.njk
    │   │   └── privacy.njk
    │   ├── admin
    │   │   ├── config.js
    │   │   ├── index.html
    │   │   ├── collections
    │   │   │   ├── blog.js
    │   │   │   ├── custom.js
    │   │   │   ├── highlights.js
    │   │   │   ├── linkinbio.js
    │   │   │   ├── modules.js
    │   │   │   ├── page.js
    │   │   │   └── settings.js
    │   │   └── previews
    │   │       ├── blog.js
    │   │       ├── index.js
    │   │       ├── inline.css
    │   │       └── page.js
    │   ├── blog
    │   │   ├── blog.json
    │   │   └── sample-post.md
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
    │       ├── tag.njk
    │       └── tags.njk
    └── utils
        ├── date.filters.js
        ├── minify-html.js
        ├── minify-js.js
        └── tag-list.collection.js
```
