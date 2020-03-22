---
title: Archive
subtitle: Browse everything
slug: archive
image_card:
image_card_alt:
seo_title: Archive
seo_desc: Read all of my awesome posts.
pagination:
  data: collections.archive
  size: 12
  alias: posts
  addAllPagesToCollections: true
layout: archive.njk
type: core
key: archives
collection: archive
permalink: "{{ slug }}/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
