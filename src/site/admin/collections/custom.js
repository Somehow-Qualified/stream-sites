export default {
  name: 'custom',
  label: 'Custom Modules',
  description: 'Manage your custom modules',
  extension: 'json',
  format: 'json',
  create: false,
  editor: {
    preview: false
  },
  files: [
    {
      label: 'CTA Buttons',
      name: 'ctas',
      file: 'src/site/_globals/ctas.json',
      preview: false,
      fields: [
        {
          label: 'Create a button',
          name: 'buttons',
          widget: 'list',
          fields: [
            {
              label: 'Button Text',
              name: 'button_text',
              widget: 'string',
              hint: 'What text should be displayed?'
            },
            {
              label: 'Button Link',
              name: 'button_link',
              widget: 'string',
              hint: 'What should this link to?'
            }
          ]
        }
      ]
    }
  ]
}
