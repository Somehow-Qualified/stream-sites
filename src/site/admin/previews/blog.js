import htm from 'https://unpkg.com/htm?module';
// import format from 'https://unpkg.com/date-fns@2.0.0-alpha.2/esm/format/index.js?module';

const html = htm.bind(h);

// Preview component for a Post
const Blog = createClass({
  render() {
    const entry = this.props.entry;
    const seo = entry.getIn(['data', 'seo']);
    const meta_title = this.props.widgetsFor('seo').getIn(['data', 'meta_title']) || '';
    const meta_desc = this.props.widgetsFor('seo').getIn(['data', 'excerpt']) || '';
    const link_preview = '/blog/' + entry.getIn(['data', 'slug'], '');

    const md = markdownIt();
    md.use(markdownItAttrs);
    const body = {__html: md.render(this.props.widgetFor('body').props.value)};

    return html`
      <article>
        <h1>${entry.getIn(["data", "title"], "")}</h1>
        <figure>
          <div><img src="${entry.getIn(["data", "featured_image"], "")}" alt="${entry.getIn(["data", "image_caption"], "")}" /></div>
          <figcaption>${entry.getIn(["data", "image_caption"], "")}</figcaption>
        </figure>
        <p class="tldr">${entry.getIn(["data", "tldr"], "")}</p>
        <div dangerouslySetInnerHTML=${body}></div>
      </article>
      <section class="seo">
        <h2>SEO Preview</h2>
        <h3 class="preview-label"><span>Google</span></h3>
        <div class="seo-search">
          <p class="title">${meta_title}</p>
          <p class="link">${link_preview}</p>
          <p class="desc">${meta_desc}</p>
        </div>
        <h3 class="preview-label"><span>Twitter Card</span></h3>
        <div class="seo-card">
          <div class="image">
            <img src="${entry.getIn(["data", "featured_image"], "")}" alt="${entry.getIn(["data", "image_caption"], "")}" />
          </div>
          <div class="text">
            <p class="title">${meta_title}</p>
            <p class="desc">${meta_desc}</p>
            <p class="link">${link_preview}</p>
          </div>
        </div>
        <h3 class="preview-label"><span>Open Graph/Facebook</span></h3>
        <div class="seo-og">
          <div class="image"><img src="${entry.getIn(["data", "featured_image"], "")}" alt="${entry.getIn(["data", "image_caption"], "")}" /></div>
          <div class="text">
            <p class="link">${link_preview}</p>
            <div class="content">
              <p class="title">${meta_title}</p>
              <p class="desc">${meta_desc}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});

export default Blog;
