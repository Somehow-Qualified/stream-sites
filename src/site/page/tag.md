---
title: Tagged
subtitle: Tagged
slug: tags
image_card:
image_card_alt:
seo_title: Tagged "{{ tag }}"
seo_desc: All posts tagged "{{ tag }}"
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
  - all
  - archive
  - blog
  - video
  - nav
  - page
  - posts
  - tagList
  addAllPagesToCollections: true
eleventyComputed:
  archive_title: >-
    {{ title }} "{{ tag }}"
layout: archive.njk
type: core
key: tagged
permalink: /{{ slug }}/{{ tag | slug }}/
---
