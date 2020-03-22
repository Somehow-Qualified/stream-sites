---
title: Video Highlights
subtitle: Check out my videos
slug: video
image_card:
image_card_alt:
seo_title: Video Highlights
seo_desc: Watch all of my awesome video highlights.
pagination:
  data: collections.video
  size: 12
  alias: posts
  addAllPagesToCollections: true
layout: archive.njk
type: core
key: archives
collection: video
permalink: "{{ slug }}/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
