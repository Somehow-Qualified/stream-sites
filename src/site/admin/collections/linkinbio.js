export default {
  name: 'linkinbio',
  label: 'Link In Bio',
  label_singular: 'Link In Bio',
  description: 'Edit your Link in Bio content and/or links',
  create: false,
  delete: false,
  slug: '{{slug}}',
  preview_path: '{{fields.slug}}',
  editor: {
    preview: false
  },
  files: [
    {
      label: 'Link in Bio Page',
      name: 'linkinbio_content',
      file: 'src/site/pages/linkinbio.md',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'link-in-bio'
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
          label: 'Body',
          name: 'body',
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
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'linkinbio.njk'
        }
      ]
    },
    {
      label: 'Links for the Page',
      name: 'linkinbio_links',
      file: 'src/site/_data/linkinbio.json',
      fields: [
        {
          label: 'Add a link',
          name: 'linkinbio',
          widget: 'list',
          fields: [
            {
              label: 'Label',
              name: 'text',
              widget: 'string',
              hint: 'What should the text say?'
            },
            {
              label: 'Link',
              name: 'link',
              widget: 'string',
              hint: 'Where should the link go? Include the https:// if you want to guarantee it works.'
            }
          ]
        }
      ]
    }
  ]
}
