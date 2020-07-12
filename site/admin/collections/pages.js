export default {
  name: 'pages',
  label: 'Pages',
  label_singular: 'Page',
  description: 'Create or edit a page',
  folder: 'site/pages',
  create: true,
  filter: {
    field: 'page_type',
    value: 'custom'
  },
  slug: '{{fields.slug}}',
  preview_path: '{{fields.slug}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string'
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string'
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime'
    },
    {
      label: 'Last Modified',
      name: 'dateMod',
      widget: 'hidden',
      'default': 'Last Modified'
    },
    {
      label: 'Tag',
      name: 'tags',
      widget: 'list',
      hint: 'Apply tags to create archives of posts that are similar and/or related. Separate multiple with a comma: i.e. Tag 1, Tag 2, Tag 3'
    },
    {
      label: 'Image Card',
      name: 'image_card',
      widget: 'image',
      required: false,
      media_library: {
        config: {
          multiple: false
        }
      },
      hint: 'Recommended size: 1200×628 pixels'
    },
    {
      label: 'Image Card Alt Text',
      name: 'image_card_alt',
      widget: 'string',
      required: false,
      hint: 'Describe this image for anyone who can\'t see it.'
    },
    {
      label: 'Image Card Credit',
      name: 'image_card_credit',
      widget: 'string',
      required: false,
      hint: 'Give credit where credit is due.'
    },
    {
      label: 'TL;DR',
      name: 'excerpt',
      widget: 'markdown',
      required: false,
      hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
    },
    {
      label: 'Teaser',
      name: 'teaser',
      widget: 'text',
      required: false,
      hint: 'A short plain text preview shown on cards.'
    },
    {
      label: 'Body',
      name: 'body',
      buttons: ['bold', 'italic', 'code', 'link', 'heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six', 'quote', 'bulleted-list', 'numbered-list'],
      widget: 'markdown'
    },
    {
      label: 'SEO Title',
      name: 'seo_title',
      widget: 'string',
      required: false,
      hint: 'A title to display on a Search result. (What do you want Google to see?)'
    },
    {
      label: 'SEO Description',
      name: 'seo_desc',
      widget: 'text',
      required: false,
      hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
    },
    {
      label: 'Hide this page?',
      name: 'eleventyExcludeFromCollections',
      widget: 'boolean',
      required: false,
      'default': false,
      hint: 'Default is no.'
    },
    {
      label: 'Page Type',
      name: 'page_type',
      widget: 'hidden',
      'default': 'custom'
    }
  ]
}
