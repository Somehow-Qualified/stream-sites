import blog from './collections/blog.js';
import custom from './collections/custom.js';
import video from './collections/video.js';
import linkInBio from './collections/linkinbio.js';
import modules from './collections/modules.js';
import page from './collections/page.js';
import settings from './collections/settings.js';

export default {
  backend: {
    name: 'git-gateway',
    branch: 'master'
  },
  load_config_file: false,
  publish_mode: 'editorial_workflow',
  media_folder: 'images',
  site_url: `${window.location.protocol}//${window.location.host}`,
  display_url: `${window.location.protocol}//${window.location.host}`,
  show_preview_links: true,
  collections: [
    blog,
    video,
    page,
    modules,
    linkInBio,
    settings,
    custom
  ]
}

import Blog from './previews/blog.js';
import Page from './previews/page.js';
import Video from './previews/video.js';

CMS.registerPreviewTemplate('blog', Blog);
CMS.registerPreviewTemplate('page', Page);
CMS.registerPreviewTemplate('about', Page);
CMS.registerPreviewTemplate('contact', Page);
CMS.registerPreviewTemplate('404', Page);
CMS.registerPreviewTemplate('privacy', Page);
CMS.registerPreviewTemplate('video', Video);

CMS.registerPreviewStyle('./css/tailwind.min.css');
CMS.registerPreviewStyle('./previews/inline.css');
