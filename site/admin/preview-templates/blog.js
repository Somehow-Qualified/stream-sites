import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.0.0-alpha.2/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <article>
        <h1>${entry.getIn(["data", "title"], null)}</h1>
        <p>
          <small>
            <time
              >${
                format(
                  entry.getIn(["data", "date"], new Date()),
                  "DD MMM yyyy"
                )
              }</time
            >
            ${" by Author"}
          </small>
        </p>
        <p>${entry.getIn(["data", "excerpt"], "")}</p>
        ${this.props.widgetFor("body")}
      </article>
    `;
  }
});

export default Blog;
