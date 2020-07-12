// Import Locale if not English
// TODO: import, export, and register locale as defined in _data/site.json
// import { en } from 'netlify-cms-locales';

// Import Collections
import post from './collections/post.js';
import page from './collections/page.js';
import modules from './collections/modules.js';
import settings from './collections/settings.js';

export default {
  backend: {
    name: 'git-gateway',
    branch: 'master'
  },
  load_config_file: false,
  media_folder: 'images',
  site_url: `${window.location.protocol}//${window.location.host}`,
  display_url: `${window.location.protocol}//${window.location.host}`,
  // TODO: import logo from _data/site.json
  // logo_url: `${window.location.protocol}//${window.location.host}${site.logo}`,
  // Export locale if not English
  // locale: 'en',
  show_preview_links: true,
  collections: [
    post,
    page,
    modules,
    settings
  ]
}

// Import Previews
import Blog from './previews/blog.js';
import Page from './previews/page.js';
// TODO: delete Video preview after fields copied to Post
// import Video from './previews/video.js';

// Register Previews
CMS.registerPreviewTemplate('post', Blog);
CMS.registerPreviewTemplate('page', Page);
CMS.registerPreviewTemplate('about', Page);
CMS.registerPreviewTemplate('contact', Page);
CMS.registerPreviewTemplate('privacy', Page);

CMS.registerPreviewStyle('../css/tailwind.min.css');
CMS.registerPreviewStyle('./previews/inline.css');

// Register locale if not English
// CMS.registerLocale('en', en);
