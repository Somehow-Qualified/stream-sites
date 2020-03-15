/*
|----------------------------------------------------------------
| Collections
|
| 11ty Docs: https://www.11ty.dev/docs/collections/
|----------------------------------------------------------------
*/

module.exports = {

  // Tags: A list of every tag used on a post or page
  tagList: collection => {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }
        tags = tags.filter(function(item) {
          switch (item) {
            // this list should match the `filter` list in tag.njk
            case "all":
            case "archive":
            case "blog":
            case "nav":
            case "page":
            case "post":
            case "video":
            case "tagList":
              return false;
          }
          return true;
        });
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet].sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  },

  // Blog: posts created under Blog
  blog: collection => {
    const blog = collection.getFilteredByGlob('**/blog/*.md');

    for (let i = 0; i < blog.length; i++) {
      const prevPost = blog[i - 1]
      const nextPost = blog[i + 1]

      blog[i].data["prevPost"] = prevPost
      blog[i].data["nextPost"] = nextPost
    }

    return blog.reverse()
    // return collection.getFilteredByGlob('**/blog/*.md').reverse();
  },

  // Video: posts created under Video
  video: collection => {
    const video = collection.getFilteredByGlob('**/video/*.md');

    for (let i = 0; i < video.length; i++) {
      const prevPost = video[i - 1]
      const nextPost = video[i + 1]

      video[i].data["prevPost"] = prevPost
      video[i].data["nextPost"] = nextPost
    }

    return video.reverse()
    // return collection.getFilteredByGlob('**/video/*.md').reverse();
  },

  // Archive: a single stream of Blog Posts and Highlights
  archive: collection => {
    return collection.getFilteredByGlob(['**/blog/*.md', '**/video/*.md']).reverse();
  }

}
