---
title: Blog
subtitle: My awesome posts
slug: blog
image_card:
image_card_alt:
seo_title: Blog
seo_desc: Read all of my awesome posts.
pagination:
  data: collections.blog
  size: 12
  alias: posts
  addAllPagesToCollections: true
layout: archive.njk
type: core
key: archives
collection: blog
permalink: "{{ slug }}/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
