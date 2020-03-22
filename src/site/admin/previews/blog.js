import htm from 'https://unpkg.com/htm?module'

// Customize markdown-it
let options = {
  html: true,
  breaks: true,
  linkify: true
};
const md = new markdownIt(options).use(markdownItAttrs);

const html= htm.bind(h);

// Preview component for a Post
const Blog = createClass({
  render() {

    const entry = this.props.entry;

    const title = entry.getIn(['data', 'title'], null);
    // TODO: show the date and tags
    // const date = entry.getIn(['data', 'date'], null);
    // const tags = entry.getIn(['data', 'tags'], null);

    const image_card = entry.getIn(['data', 'image_card'], null);
    const image_card_alt = entry.getIn(['data', 'image_card_alt'], null);
    const image_card_credit = entry.getIn(['data', 'image_card_credit'], null);

    const tldr = entry.getIn(['data', 'excerpt'], null);
    const tldrRendered = md.render(tldr || '');

    const body = entry.getIn(['data', 'body'], null);
    const bodyRendered = md.render(body || '');

    const seo_title = entry.getIn(['data', 'seo_title'], null);
    const seo_desc = entry.getIn(['data', 'seo_desc'], null);
    const link_preview = '/blog/' + entry.getIn(['data', 'slug'], '');

    return html`
      <article>
        <h1>${title}</h1>
        <figure>
          <div><img src="${image_card}" alt="${image_card_alt}" /></div>
          <figcaption>${image_card_credit}</figcaption>
        </figure>
        <div class="tldr" dangerouslySetInnerHTML=${{__html: tldrRendered}}></div>
        <div dangerouslySetInnerHTML=${{__html: bodyRendered}}></div>
      </article>
      <section class="seo">
        <h2>SEO Preview</h2>
        <h3 class="preview-label"><span>Google</span></h3>
        <div class="seo-search">
          <p class="title">${seo_title}</p>
          <p class="link">${link_preview}</p>
          <p class="desc">${seo_desc}</p>
        </div>
        <h3 class="preview-label"><span>Twitter Card</span></h3>
        <div class="seo-card">
          <div class="image">
            <img src="${image_card}" alt="${image_card_alt}" />
          </div>
          <div class="text">
            <p class="title">${seo_title}</p>
            <p class="desc">${seo_desc}</p>
            <p class="link">${link_preview}</p>
          </div>
        </div>
        <h3 class="preview-label"><span>Open Graph/Facebook</span></h3>
        <div class="seo-og">
          <div class="image"><img src="${image_card}" alt="${image_card_alt}" /></div>
          <div class="text">
            <p class="link">${link_preview}</p>
            <div class="content">
              <p class="title">${seo_title}</p>
              <p class="desc">${seo_desc}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});

export default Blog;
