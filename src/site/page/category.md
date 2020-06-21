---
title: Category
subtitle: Categorized
slug: category
image_card:
image_card_alt:
seo_title: Categorized "{{ category }}"
seo_desc: All posts categorized "{{ category }}"
pagination:
  data: collections.category
  size: 1
  alias: category
  addAllPagesToCollections: true
eleventyComputed:
  archive_title: >-
    {{ subtitle }} "{{ category }}"
layout: archive.njk
type: core
key: categorized
permalink: /{{ slug }}/{{ category | slug }}/
---
