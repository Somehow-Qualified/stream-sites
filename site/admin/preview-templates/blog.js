import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.0.0-alpha.2/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Blog = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <article>
        <h1>${entry.getIn(["data", "title"], null)}</h1>
        <p><time
              >${
                format(
                  entry.getIn(["data", "date"], new Date()),
                  "DD MMM YYYY"
                )
              }</time
            >
            — Posted in ${entry.getIn(["data", "tags"], "")}
        </p>
        <figure>
          <img src="${entry.getIn(["data", "featured_image"], null)}" alt="${entry.getIn(["data", "image_caption"], null)}">
          <figcaption>${entry.getIn(["data", "image_caption"], null)}</figcaption>
        </figure>
        <p>TL;DR - ${entry.getIn(["data", "tldr"], "")}</p>
        ${this.props.widgetFor("body")}
      </article>
    `;
  }
});

export default Blog;
