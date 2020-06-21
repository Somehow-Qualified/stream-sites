import post from './collections/post.js';
import page from './collections/page.js';
// import modules from './collections/modules.js';
// import linkInBio from './collections/linkinbio.js';
// import settings from './collections/settings.js';
// import custom from './collections/custom.js';

export default {
  backend: {
    name: 'git-gateway',
    branch: 'master'
  },
  load_config_file: false,
  media_folder: 'images',
  site_url: `${window.location.protocol}//${window.location.host}`,
  display_url: `${window.location.protocol}//${window.location.host}`,
  show_preview_links: true,
  collections: [
    post,
    page
  ]
}

import Blog from './previews/blog.js';
import Page from './previews/page.js';
// import Video from './previews/video.js';


CMS.registerPreviewTemplate('post', Blog);
CMS.registerPreviewTemplate('page', Page);
// CMS.registerPreviewTemplate('post_page', Page);
// CMS.registerPreviewTemplate('about', Page);
// CMS.registerPreviewTemplate('contact', Page);
// CMS.registerPreviewTemplate('privacy', Page);
// CMS.registerPreviewTemplate('search', Page);
// CMS.registerPreviewTemplate('tag', Page);
// CMS.registerPreviewTemplate('tags', Page);
// CMS.registerPreviewTemplate('category', Page);
// CMS.registerPreviewTemplate('categories', Page);
// CMS.registerPreviewTemplate('404_page', Page);

CMS.registerPreviewStyle('./css/tailwind.min.css');
CMS.registerPreviewStyle('./previews/inline.css');
