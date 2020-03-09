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
    │   ├── _redirects
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
    │   │   ├── stream.js
    │   │   └── theme.json
    │   ├── _includes
    │   │   ├── form.njk
    │   │   ├── footer.njk
    │   │   ├── header.njk
    │   │   ├── livealert.njk
    │   │   ├── meta.njk
    │   │   ├── social-icons.njk
    │   │   ├── postsList
    │   │   │   ├── cards-horizontal.njk
    │   │   │   └── cards.njk
    │   │   ├── _css
    │   │   │   └── main.css
    │   │   ├── _fonts
    │   │   │   └── Upload your custom fonts here  
    │   │   └── _js
    │   │       └── main.js
    │   ├── _layouts
    │   │   ├── 404.njk
    │   │   ├── about.njk
    │   │   ├── archive.njk
    │   │   ├── blank.njk
    │   │   ├── contact.njk
    │   │   ├── default.njk
    │   │   ├── home.njk    
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
    │       ├── home.md
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
