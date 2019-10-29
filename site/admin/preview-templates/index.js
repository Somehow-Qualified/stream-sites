import Blog from "/admin/preview-templates/blog.js";
import Page from "/admin/preview-templates/page.js";

CMS.registerPreviewTemplate("blog", Blog);
CMS.registerPreviewTemplate("page", Page);

// Update this to a custom template
CMS.registerPreviewTemplate("about", Page);

// CMS.registerPreviewStyle("/admin/preview-templates/main.admin.min.css");
CMS.registerPreviewStyle("/admin/preview-templates/inline.css");

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
