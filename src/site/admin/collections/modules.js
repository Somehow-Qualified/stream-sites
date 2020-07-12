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
      label: 'Link In Bio',
      name: 'linkinbio',
      file: 'src/site/_data/linkinbio.json',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Introduction',
          name: 'intro',
          widget: 'string',
          required: false,
          hint: 'Add an optional string of text to the beginning of the page.'
        },
        {
          label: 'Featured Post',
          name: 'featured_post',
          widget: 'relation',
          required: false,
          collection: 'posts',
          searchFields: [
            'title'
          ],
          valueField: '{{slug}}',
          displayFields: [
            'title'
          ],
          optionsLength: 10,
          hint: 'Select a post to feature at the top of your link in bio.'
        },
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
            },
            {
              label: 'Icon',
              name: 'icon',
              widget: 'string',
              required: false,
              hint: 'Enter the icon name from icon-library.svg (The ID in the symbol)'
            }
          ]
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
        }
      ]
    },
    {
      label: 'About',
      name: 'about',
      file: 'src/site/pages/about.md',
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
          required: false,
          hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
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
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'page.njk'
        }
      ]
    },
    {
      label: 'Contact',
      name: 'contact',
      file: 'src/site/pages/contact.md',
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
          required: false,
          hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
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
      file: 'src/site/pages/privacy-policy.md',
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
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'privacy.njk'
        }
      ]
    },
    {
      label: 'Search',
      name: 'search',
      file: 'src/site/pages/search.md',
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
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
      label: 'Posts - Collection',
      name: 'post_page',
      file: 'src/site/pages/posts.md',
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
          'default': 'posts'
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
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
      label: 'Category - Single',
      name: 'category',
      file: 'src/site/pages/category.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'hidden'
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
          'default': 'category'
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
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
      label: 'Category - Collection',
      name: 'categories',
      file: 'src/site/pages/categories.md',
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
          'default': 'category'
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
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
      label: 'Tag - Single',
      name: 'tag',
      file: 'src/site/pages/tag.md',
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
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
      label: 'Tag - Collection',
      name: 'tags',
      file: 'src/site/pages/tags.md',
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
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
      label: '404 Page',
      name: '404_page',
      file: 'src/site/pages/404.md',
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
          hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.'
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
