import Blog from './blog.js';
import Page from './page.js';

CMS.registerPreviewTemplate('blog', Blog);
CMS.registerPreviewTemplate('page', Page);

// Update this to a custom template
CMS.registerPreviewTemplate('about', Page);

CMS.registerPreviewStyle('/admin/css/main.min.css');
CMS.registerPreviewStyle('/admin/preview-templates/inline.css');
