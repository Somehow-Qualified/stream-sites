export default {
  name: 'settings',
  label: 'Settings',
  description: 'Edit your global settings.',
  extension: 'json',
  format: 'json',
  create: false,
  editor: {
    preview: false
  },
  files: [
    {
      label: 'Site & Branding',
      name: 'site',
      file: 'site/_data/site.json',
      preview: false,
      fields: [
        {
          label: 'Site Name',
          name: 'name',
          widget: 'string',
          hint: 'The name of your brand, community, or just your Twitch name. Used in your Main Menu and for Search Engines.'
        },
        {
          label: 'Site Description',
          name: 'description',
          widget: 'text',
          required: false,
          hint: 'Write a default description to appear on posts/pages via search results when a custom one does not exist.'
        },
        {
          label: 'Live URL',
          name: 'url',
          widget: 'string',
          hint: 'What is the URL of your site? I.e. https://streamsites.xyz'
        },
        {
          label: 'Langauge',
          name: 'language',
          widget: 'string',
          hint: 'What language is your website in?',
          default: 'en-US'
        },
        {
          label: 'Email address',
          name: 'author_email',
          widget: 'string',
          hint: 'Where should people reach you? Don\'t have an email - Sidemail is great!'
        },
        {
          label: 'Email address for privacy policy',
          name: 'privacy_email',
          widget: 'string',
          hint: 'This is required for your privacy policy. Where should people reach you with concerns?'
        },
        {
          label: 'Profile Name',
          name: 'author_name',
          widget: 'string',
          required: false,
          hint: 'Can be used on posts microformats. What should people call you?'
        },
        {
          label: 'Profile Image',
          name: 'author_avatar',
          widget: 'image',
          media_library: {
            config: {
              multiple: false
            }
          },
          required: false,
          hint: 'Can be used on blog posts and in for microformats.'
        },
        {
          label: 'Mini Bio',
          name: 'author_bio',
          widget: 'string',
          required: false,
          hint: 'Can be used on posts microformats. Describe yourself in 280 characters or less (like a Tweet).'
        },
        {
          label: 'Twitter Handle',
          name: 'author_twitter',
          widget: 'string',
          required: false,
          hint: 'Example: @m2creates. Include the @! Give yourself credit for your work.'
        },
        {
          label: 'Twitch Handle',
          name: 'twitch_handle',
          widget: 'string',
          required: false,
          hint: 'Enter your Twitch handle.'
        },
        {
          label: 'Logo',
          name: 'logo',
          widget: 'image',
          media_library: {
            config: {
              multiple: false
            }
          },
          required: false,
        },
        {
          label: 'Favicon',
          name: 'favicon',
          widget: 'image',
          media_library: {
            config: {
              multiple: false
            }
          },
          required: false,
        },
        {
          label: 'Card Image',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          required: false,
          hint: 'A default image for sharing on Twitter/Facebook.'
        },
        {
          label: 'Card Image Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe the site image for those who can\'t see it.'
        },
        {
          label: 'Search Engine',
          name: 'search_engine',
          widget: 'select',
          options: [
            {
              label: 'Duck Duck Go',
              value: 'https://duckduckgo.com/'
            },
            {
              label: 'Ecosia',
              value: 'https://ecosia.org/search'
            },
            {
              label: 'Google',
              value: 'https://www.google.com/search'
            },
            {
              label: 'Bing',
              value: 'https://www.bing.com/search'
            }
          ],
          hint: 'Select which search engine to use on your Search page.'
        },
        {
          label: 'Footer Credit',
          name: 'footer_credit',
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
          ],
          required: false,
          hint: 'Show your love or Stream Sites in the footer.'
        },
        {
          label: 'Verification Tags (Advanced Users)',
          name: 'verification',
          widget: 'object',
          hint: 'Add verification tags to your website',
          fields: [
            {
              label: 'Google Verification',
              name: 'google',
              widget: 'text',
              hint: 'Verify your website with Google. We already include the meta tag, so just add the unique code string.',
            },
            {
              label: 'Pinterest Verification',
              name: 'pinterest',
              widget: 'text',
              hint: 'Verify your website with Google. We already include the meta tag, so just add the unique code string.',
            }
          ]
        },
        {
          label: 'Privacy Options (Advanced Users)',
          name: 'robots',
          widget: 'object',
          hint: 'Control how robots interact with your content. The defaults are privacy focused.',
          fields: [
            {
              label: 'Let Pinterest pin your images?',
              name: 'pinterest',
              widget: 'select',
              options: [
                {
                  label: 'Allow',
                  value: 'allow'
                },
                {
                  label: 'Disallow',
                  value: 'disallow'
                }
              ]
            },
            {
              label: 'Let Twitter track your visitors?',
              name: 'twitter',
              widget: 'select',
              options: [
                {
                  label: 'Allow',
                  value: 'allow'
                },
                {
                  label: 'Disallow',
                  value: 'disallow'
                }
              ]
            },
            {
              label: 'Let search engines crawl your website?',
              name: 'search_crawler',
              widget: 'select',
              options: [
                {
                  label: 'Follow',
                  value: 'follow'
                },
                {
                  label: 'No Index',
                  value: 'noindex'
                },
                {
                  label: 'No Follow',
                  value: 'nofollow'
                },
                {
                  label: 'Index, No Follow',
                  value: 'index,nofollow'
                },
                {
                  label: 'Index, Follow',
                  value: 'index,follow'
                },
                {
                  label: 'No Index, No Follow',
                  value: 'noindex,nofollow'
                }
              ]
            },
            {
              label: 'Enable Metomic Contextual Consent',
              name: 'metomic',
              widget: 'select',
              options: [
                {
                  label: 'Yes',
                  value: 'on'
                },
                {
                  label: 'No',
                  value: 'off'
                }
              ],
              hint: 'Learn more at contextual.metomic.io - we have this snippet ready to toggle on or off at any time!'
            }
          ]
        }
      ]
    },
    {
      label: 'Theme Settings',
      name: 'theme',
      file: 'site/_data/theme.json',
      preview: false,
      fields: [
        {
          label: 'Theme',
          name: 'theme',
          widget: 'string',
          'default': 'ghostwind',
          hint: 'Enter the name of your theme. This is case sensitive, all lowercase, with no spaces. For example: ghostwind or skeleventy.'
        },
        {
          label: 'Theme Colors',
          name: 'colors',
          widget: 'object',
          fields: [
            {
              label: 'Main Color',
              name: 'main',
              widget: 'select',
              'default': 'purple',
              options: [
                'red',
                'orange',
                'yellow',
                'teal',
                'blue',
                'indigo',
                'purple',
                'pink'
              ],
              hint: 'Pick a main color for your site.'
            },
            {
              label: 'Accent Color',
              name: 'accent',
              widget: 'select',
              'default': 'pink',
              options: [
                'red',
                'orange',
                'yellow',
                'teal',
                'blue',
                'indigo',
                'purple',
                'pink'
              ],
              hint: 'Pick a secondary color for your site. Used on buttons and other accents.'
            },
            {
              label: 'PWA Color',
              name: 'pwa',
              widget: 'select',
              'default': 'purple',
              options: [
                {
                  label: 'red',
                  value: '#C53030'
                },
                {
                  label: 'orange',
                  value: '#C05621'
                },
                {
                  label: 'yellow',
                  value: '#B7791F'
                },
                {
                  label: 'green',
                  value: '#2F855A'
                },
                {
                  label: 'teal',
                  value: '#2C7A7B'
                },
                {
                  label: 'blue',
                  value: '#2B6CB0'
                },
                {
                  label: 'indigo',
                  value: '#4C51BF'
                },
                {
                  label: 'purple',
                  value: '#6B46C1'
                },
                {
                  label: 'pink',
                  value: '#B83280'
                }
              ],
              hint: 'Pick a color for the background of your website when viewed as a PWA.'
            },
            {
              label: 'Scroll Progress Bar',
              name: 'progress',
              widget: 'select',
              'default': 'pink',
              options: [
                {
                  label: 'red',
                  value: '#E53E3E'
                },
                {
                  label: 'orange',
                  value: '#DD6B20'
                },
                {
                  label: 'yellow',
                  value: '#D69E2E'
                },
                {
                  label: 'green',
                  value: '#38A169'
                },
                {
                  label: 'teal',
                  value: '#319795'
                },
                {
                  label: 'blue',
                  value: '#3182CE'
                },
                {
                  label: 'indigo',
                  value: '#5A67D8'
                },
                {
                  label: 'purple',
                  value: '#805AD5'
                },
                {
                  label: 'pink',
                  value: '#D53F8C'
                }
              ],
              hint: 'Pick a color for the scroll progress bar on posts.'
            },
            {
              label: 'Post Pre-Footer Background',
              name: 'postFooter',
              widget: 'select',
              'default': 'pink',
              options: [
                'red',
                'orange',
                'yellow',
                'teal',
                'blue',
                'indigo',
                'purple',
                'pink'
              ],
              hint: 'Pick a background color for the recommended posts at the end of a post.'
            }
          ]
        },
        {
          label: 'Fonts',
          name: 'fonts',
          widget: 'object',
          fields: [
            {
              label: 'Post Fonts',
              name: 'post',
              widget: 'object',
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'select',
                  'default': 'font-sans',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                },
                {
                  label: 'Meta',
                  name: 'meta',
                  widget: 'select',
                  'default': 'font-sans',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                },
                {
                  label: 'TLDR',
                  name: 'tldr',
                  widget: 'select',
                  'default': 'font-serif',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'select',
                  'default': 'font-sans',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                },
                {
                  label: 'More Posts Heading',
                  name: 'morePosts',
                  widget: 'select',
                  'default': 'font-sans',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                }
              ]
            },
            {
              label: 'Post Preview Card Fonts',
              name: 'postslist',
              widget: 'object',
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'select',
                  'default': 'font-sans',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                },
                {
                  label: 'Tags',
                  name: 'tags',
                  widget: 'select',
                  'default': 'font-sans',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                },
                {
                  label: 'Teaser',
                  name: 'excerpt',
                  widget: 'select',
                  'default': 'font-serif',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                },
                {
                  label: 'Date',
                  name: 'date',
                  widget: 'select',
                  'default': 'font-sans',
                  options: [
                    'font-sans',
                    'font-serif',
                    'font-mono'
                  ]
                }
              ]
            },
            {
              label: 'Labels on Posts',
              name: 'labels',
              widget: 'object',
              fields: [
                {
                  label: 'Next Post',
                  name: 'nextPost',
                  widget: 'string',
                  'default': 'Up Next: ',
                  hint: 'Pagination label at the end of a post that goes to the next newest post.'
                },
                {
                  label: 'Previous Post',
                  name: 'prevPost',
                  widget: 'string',
                  'default': 'Previously: ',
                  hint: 'Pagination label at the end of a post that goes to the next oldest post.'
                },
                {
                  label: 'Author Block Button Text',
                  name: 'authorLink',
                  widget: 'string',
                  'default': 'Read More',
                  hint: 'Choose the text for the button. Links to /about'
                },
                {
                  label: 'More Posts Title Text',
                  name: 'morePosts',
                  widget: 'string',
                  'default': 'More Posts to Read!',
                  hint: 'Header text above the suggested posts row at the end of a post.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Navigation',
      name: 'nav',
      file: 'site/_data/navigation.json',
      preview: false,
      fields: [
        {
          label: 'Branding',
          name: 'nav_brand',
          widget: 'select',
          'default': 'logoAndText',
          options: [
            {
              label: 'Logo Only',
              value: 'logo'
            },
            {
              label: 'Text Only',
              value: 'text'
            },
            {
              label: 'Logo and Text',
              value: 'logoAndText'
            }
          ],
          hint: 'Display your logo and/or brand name in the site header. You can upload/change your logo in Settings: Branding.'
        },
        {
          label: 'Menu Links',
          label_singular: 'Menu Link',
          name: 'main',
          widget: 'list',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              hint: 'What text should be displayed?'
            },
            {
              label: 'Link',
              name: 'url',
              widget: 'string',
              hint: 'What should this link to?'
            }
          ]
        },
        {
          label: 'Footer Links',
          label_singular: 'Footer Link',
          name: 'footer',
          widget: 'list',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              hint: 'What text should be displayed?'
            },
            {
              label: 'Link',
              name: 'url',
              widget: 'string',
              hint: 'What should this link to?'
            }
          ]
        },
      ]
    },
    {
      label: 'Social Links',
      name: 'social',
      file: 'site/_data/social.json',
      fields: [
        {
          label: 'Social Links',
          label_singular: 'Social Link',
          name: 'social_links',
          widget: 'list',
          fields: [
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
              hint: 'The name of the social network'
            },
            {
              label: 'Link',
              name: 'link',
              widget: 'string',
              hint: 'Link to your profile'
            },
            {
              label: 'Icon',
              name: 'icon',
              widget: 'string',
              required: false,
              hint: 'Enter the icon name from icon-library.svg (The ID in the symbol). Example, Twitter is `twitter`.'
            },
          ]
        }
      ]
    }
  ]
}
