module.exports = function (collection) {
  let tagSet = new Set();
  collection
      .getAll()
      .forEach(function(item) {
    if( "tags" in item.data ) {
      let tags = item.data.tags;
      tags = tags.filter(function(item) {
        switch(item) {
            // this list should match the `filter` list in tag.njk
          case "all":
          case "feed":
          case "nav":
          case "page":
          case "post":
          case "postsLatest":
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
};
