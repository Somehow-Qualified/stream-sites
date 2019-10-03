import * from "/css/main.min.css";
import Blog from "/admin/preview-templates/blog.js";
import Page from "/admin/preview-templates/page.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("blog", Blog);
CMS.registerPreviewTemplate("page", Page);

// CMS.registerPreviewStyle("/admin/preview-templates/inline.css");
CMS.registerPreviewStyle("/css/main.min.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
