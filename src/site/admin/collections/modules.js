export default {
  name: 'modules',
  label: 'Modules',
  label_singular: 'Module',
  description: 'Configure and customize modules',
  create: false,
  delete: false,
  slug: '{{slug}}',
  preview_path: '{{fields.slug}}',
  files: [
    {
      label: 'About Page',
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
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'about'
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
          label: 'Display Contact Form?',
          name: 'form',
          widget: 'select',
          options: [
            {
              label: 'Yes',
              value: 'yes'
            },
            {
              label: 'No',
              value: 'no'
            }
          ]
        },
        {
          label: 'Turn off this module?',
          name: 'eleventyExcludeFromCollections',
          widget: 'boolean',
          'default': false,
          required: false,
          hint: 'Default is no.'
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
          buttons: '',
          required: false,
          hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'page.njk'
        }
      ]
    },
    {
      label: 'Archive Page',
      name: 'archive',
      file: 'src/site/page/archive.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'archive'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'archive.njk'
        }
      ]
    },
    {
      label: 'Blog Page',
      name: 'blog_page',
      file: 'src/site/page/blog.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'blog'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'archive.njk'
        }
      ]
    },
    {
      label: 'Contact Page',
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
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'contact'
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
          label: 'Display Contact Form?',
          name: 'form',
          widget: 'select',
          options: [
            {
              label: 'Yes',
              value: 'yes'
            },
            {
              label: 'No',
              value: 'no'
            }
          ]
        },
        {
          label: 'Turn off this module?',
          name: 'eleventyExcludeFromCollections',
          widget: 'boolean',
          'default': false,
          required: false,
          hint: 'Default is no.'
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
          buttons: '',
          required: false,
          hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'page.njk'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'privacy.njk'
        }
      ]
    },
    {
      label: 'Search Page',
      name: 'search',
      file: 'src/site/page/search.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': 'search'
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
          label: 'Search Form Text',
          name: 'heading_form',
          widget: 'string',
          required: false,
          hint: 'What text should go before the search box?'
        },
        {
          label: 'Tag List Text',
          name: 'heading_tags',
          widget: 'string',
          required: false,
          hint: 'What text should go before the tag list?'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'search.njk'
        }
      ]
    },
    {
      label: 'Tag Pages',
      name: 'tag',
      file: 'src/site/page/tag.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'tags'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'archive.njk'
        }
      ]
    },
    {
      label: 'Tags Page',
      name: 'tags',
      file: 'src/site/page/tags.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'tags'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'tags.njk'
        }
      ]
    },
    {
      label: 'Video Page',
      name: 'video_page',
      file: 'src/site/page/video.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'video'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'archive.njk'
        }
      ]
    },
    {
      label: '404 Page',
      name: '404_page',
      file: 'src/site/page/404.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': '404'
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
          label: 'Search Form Text',
          name: 'heading_form',
          widget: 'string',
          required: false,
          hint: 'What text should go before the search box?'
        },
        {
          label: 'Tag List Text',
          name: 'heading_tags',
          widget: 'string',
          required: false,
          hint: 'What text should go before the tag list?'
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
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': '404.njk'
        }
      ]
    }
  ]
}
