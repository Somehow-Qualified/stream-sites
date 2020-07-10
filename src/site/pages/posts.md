---
title: Posts
subtitle: My awesome posts
image_card:
image_card_alt:
seo_title: Posts
seo_desc: Read all of my awesome posts.
pagination:
  data: collections.posts
  size: 12
  alias: posts
  addAllPagesToCollections: true
layout: archive.njk
type: core
key: archives
collection: posts
permalink: "posts/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
