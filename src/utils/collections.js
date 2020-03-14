/*
|----------------------------------------------------------------
| Collections
|----------------------------------------------------------------
*/

module.exports = {

  // Tags: A list of every tag used on a post or page
  tagList: collection => {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;
        if( typeof tags === "string" ) {
          tags = [tags];
        }
        tags = tags.filter(function(item) {
          switch(item) {
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
    return [...tagSet].sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  },

  // Blog: posts created under Blog
  blog: collection => {
    return collection.getFilteredByGlob('**/blog/*.md').reverse();
  },

  // Video: posts created under Video
  video: collection => {
    return collection.getFilteredByGlob('**/video/*.md').reverse();
  },

  // Archive: a single stream of Blog Posts and Highlights
  archive: collection => {
    return collection.getFilteredByGlob(['**/blog/*.md', '**/video/*.md']).reverse();
  }

}
