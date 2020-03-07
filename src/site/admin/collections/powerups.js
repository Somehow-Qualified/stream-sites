export default {
  name: 'powerups',
  label: 'Power Ups',
  label_singular: 'Power Up',
  description: 'Manage your Power Ups',
  create: false,
  editor: {
    preview: false
  },
  files: [
    {
      label: 'Twitch',
      name: 'twitch',
      file: 'src/site/_globals/twitch.json',
      preview: false,
      fields: [
        {
          label: 'Twitch Handle',
          name: 'handle',
          widget: 'string',
          hint: 'Enter your Twitch handle.'
        },
        {
          label: 'Client ID',
          name: 'client',
          widget: 'string',
          hint: 'Enter your Twitch App Client-ID.'
        }
      ]
    }
  ]
}
