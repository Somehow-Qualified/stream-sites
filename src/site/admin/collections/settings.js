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
      label: 'Branding',
      name: 'site',
      file: 'src/site/_globals/site.json',
      preview: false,
      fields: [
        {
          label: 'Brand Name',
          name: 'name',
          widget: 'string',
          hint: 'The name of your brand, community, or just your Twitch name.'
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
          label: 'Email address',
          name: 'email',
          widget: 'string',
          hint: 'This is required for your privacy policy. Where should people reach you? Don\'t have an email - Sidemail is great!'
        },
        {
          label: 'Twitter Handle',
          name: 'twitter_author',
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
          label: 'Theme',
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
            }
          ]
        },
        {
          label: 'Logo',
          name: 'logo',
          widget: 'image',
          media_library: {
            config: {
              multiple: false
            }
          }
        },
        {
          label: 'Favicon',
          name: 'favicon',
          widget: 'image',
          media_library: {
            config: {
              multiple: false
            }
          }
        },
        {
          label: 'Card Image',
          name: 'card_image',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'A default image for sharing on Twitter/Facebook.'
        },
        {
          label: 'Card Image Alt Text',
          name: 'card_image_alt',
          widget: 'string',
          required: false,
          hint: 'Describe the site image for those who can\'t see it.'
        }
      ]
    },
    {
      label: 'Navigation',
      name: 'nav',
      file: 'src/site/_globals/navigation.json',
      preview: false,
      fields: [
        {
          label: 'Logo',
          name: 'nav_logo',
          widget: 'boolean',
          'default': true,
          hint: 'Choose whether or not to display your logo in the site header. You can upload/change your logo in Settings: Branding.'
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
          label: 'Menu Button',
          name: 'nav_button',
          widget: 'object',
          fields: [
            {
              label: 'Button Text',
              name: 'button_text',
              widget: 'string',
              hint: 'Something clickbaity'
            },
            {
              label: 'Button Link',
              name: 'button_link',
              widget: 'string',
              hint: 'Where should the link go? Twitch? Your Discord? Include the https:// if you want to guarantee it works.'
            }
          ]
        }
      ]
    },
    {
      label: 'Social Links',
      name: 'social',
      file: 'src/site/_globals/social.json',
      fields: [
        {
          label: 'Social Links',
          label_singular: 'Social Link',
          name: 'social_links',
          widget: 'object',
          fields: [
            {
              label: 'Twitter',
              name: 'twitter',
              widget: 'string',
              required: false,
              hint: 'https://twitter.com/yourhandle'
            },
            {
              label: 'Twitch',
              name: 'twitter',
              widget: 'string',
              required: false,
              hint: 'https://twitch.tv/yourhandle'
            },
            {
              label: 'YouTube',
              name: 'twitter',
              widget: 'string',
              required: false,
              hint: 'https://youtube.com/channel/yourchannelhash'
            },
            {
              label: 'LinkedIn',
              name: 'linkedin',
              widget: 'string',
              required: false,
              hint: 'https://linkedin.com/in/yourhandle'
            },
            {
              label: 'Facebook',
              name: 'facebook',
              widget: 'string',
              required: false,
              hint: 'https://facebook.com/yourpagename'
            }
          ]
        }
      ]
    }
  ]
}
