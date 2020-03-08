import blog from './collections/blog.js';
import custom from './collections/custom.js';
import highlights from './collections/highlights.js';
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
    highlights,
    page,
    modules,
    linkInBio,
    settings,
    custom
  ]
}
