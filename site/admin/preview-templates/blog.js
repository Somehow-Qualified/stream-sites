import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.0.0-alpha.2/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Blog = createClass({
  render() {
    const entry = this.props.entry;
    var seo = entry.getIn(['data', 'seo']);

    return html`
      <article>
        <h1>${entry.getIn(["data", "title"], "")}</h1>
        <p>
          <time>${format(entry.getIn(["data", "date"], new Date()),"DD MMM YYYY")}</time>
           — Posted in ${entry.getIn(["data", "tags"], "")}
        </p>
        <figure>
          <div><img src="${entry.getIn(["data", "featured_image"], "")}" alt="${entry.getIn(["data", "image_caption"], "")}" /></div>
          <figcaption>${entry.getIn(["data", "image_caption"], "")}</figcaption>
        </figure>
        <p class="tldr">${entry.getIn(["data", "tldr"], "")}</p>
        ${this.props.widgetFor("body")}
      </article>
      <section class="seo">
        <h2>SEO Preview</h2>
        <h3 class="preview-label"><span>Google</span></h3>
        <div class="seo_search">
          <p class="seo-title_search">${this.props.widgetsFor('seo').getIn(['data', 'meta_title']) || 0)}</p>
          <p class="seo-link_search"></p>
          <p class="seo-desc_search">${entry.getIn(["data", "excerpt"], "")}</p>
        </div>
        <h3 class="preview-label"><span>Twitter Card</span></h3>
        <div class="seo_card">
          <div class="seo-image_card"><img src="${entry.getIn(["data", "featured_image"], "")}" alt="${entry.getIn(["data", "image_caption"], "")}" /></div>
          <p class="seo-title_card">${entry.getIn(["data", "meta_title"], "")}</p>
          <p class="seo-desc_card">${entry.getIn(["data", "excerpt"], "")}</p>
          <p class="seo-link_card"></p>
        </div>
        <h3 class="preview-label"><span>Open Graph/Facebook</span></h3>
        <div class="seo_og">
          <div class="seo-image_og"><img src="${entry.getIn(["data", "featured_image"], "")}" alt="${entry.getIn(["data", "image_caption"], "")}" /></div>
          <p class="seo-link_og"></p>
          <p class="seo-title_og">${entry.getIn(["data", "meta_title"], "")}</p>
          <p class="seo-desc_og">${entry.getIn(["data", "excerpt"], "")}</p>
        </div>
      </section>
    `;
  }
});

export default Blog;
