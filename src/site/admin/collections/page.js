export default {
  name: 'page',
  label: 'Pages',
  label_singular: 'Page',
  description: 'Create or edit a page',
  folder: 'src/site/page',
  create: true,
  filter: {
    field: 'page_type',
    value: 'default'
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
      label: 'Featured Image',
      name: 'image',
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
      label: 'Body',
      name: 'body',
      widget: 'markdown'
    },
    {
      label: 'Hide this page?',
      name: 'eleventyExcludeFromCollections',
      widget: 'boolean',
      'default': false,
      hint: 'Default is no.'
    },
    {
      label: 'SEO',
      name: 'seo',
      widget: 'object',
      fields: [
        {
          label: 'Meta Title',
          name: 'meta_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'Meta Description',
          name: 'excerpt',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.'
        }
      ]
    },
    {
      label: 'Template',
      name: 'layout',
      widget: 'hidden',
      'default': 'default'
    },
    {
      label: 'Page Type',
      name: 'page_type',
      widget: 'hidden',
      'default': 'default'
    }
  ]
}
