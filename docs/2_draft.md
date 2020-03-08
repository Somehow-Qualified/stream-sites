# Draft

THIS FILE IS OUT-OF-DATE AND INCOMPLETE. IT CONTAINS INFORMATION FROM THE README AND NEEDS TO BE UPDATED.

The `src/site` folder contains all the templates, pages and content which Eleventy will watch and compile into HTML for us.

A `site/_globals` folder lives within this, where as the name suggests - globally available files live. There's a `site.json` file for general site stuff, `navigation.json` which we use as reference to loop over in our template to generate our nav, `social.json` which holds social media links, `author.json` for all your bio information to display on posts, and a `helpers.js` which just contains an environment helper.

Uncompiled CSS and unminified JS reside in the `site/_includes` folder. PostCSS will run on build to compile Tailwind and any custom styles you've added. Other scripts from `src/utils`.

When you run the build command ready for deployment, Stream Sites will reference the minified version of the stylesheet `main.min.css` and scripts `main.min.js`.

Purge will also run via the build command and will cross reference all of Tailwind's utility classes with your templates/HTML and will remove all the unused ones - pretty cool right?

## Variables

| Variable           | Where              |
|--------------------|--------------------|
| `TWITCH_CLIENT_ID` | Netlify & `.env`   |
