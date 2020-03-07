export default {
  name: 'modules',
  label: 'Modules',
  label_singular: 'Module',
  description: 'Configure and customize modules',
  create: false,
  slug: '{{slug}}',
  preview_path: '{{fields.slug}}',
  files: [
    {
      label: 'About',
      name: 'about',
      file: 'src/site/page/about.md',
      slug: '{{fields.slug}}',
      preview: true,
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
          'default': 'about'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
        },
        {
          label: 'Use Contact Form?',
          name: 'form',
          widget: 'boolean',
          'default': false,
          hint: 'Default is no.'
        },
        {
          label: 'Turn off this module?',
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
          'default': 'layouts/about.njk'
        }
      ]
    },
    {
      label: 'Contact',
      name: 'contact',
      file: 'src/site/page/contact.md',
      slug: '{{fields.slug}}',
      preview: true,
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
          'default': 'contact'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
        },
        {
          label: 'Use Contact Form?',
          name: 'form',
          widget: 'boolean',
          'default': true,
          hint: 'Default is yes.'
        },
        {
          label: 'Turn off this module?',
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
          'default': 'layouts/contact.njk'
        }
      ]
    },
    {
      label: '404 Page',
      name: '404',
      file: 'src/site/page/404.md',
      slug: '{{fields.slug}}',
      preview: true,
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
          'default': '404'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
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
          'default': 'layouts/404.njk'
        }
      ]
    },
    {
      label: 'Privacy Policy',
      name: 'privacy',
      file: 'src/site/page/privacy-policy.md',
      slug: '{{fields.slug}}',
      preview: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Effective Date',
          name: 'date',
          widget: 'datetime'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': 'privacy'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
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
          'default': 'privacy'
        }
      ]
    }
  ]
}
