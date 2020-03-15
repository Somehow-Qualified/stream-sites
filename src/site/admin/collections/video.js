export default {
  name: 'video',
  label: 'Video Highlights',
  label_singular: 'Video Highlight',
  description: 'Create or edit a video highlight',
  folder: 'src/site/video',
  create: true,
  slug: '{{fields.slug}}',
  preview_path: 'video/{{fields.slug}}',
  editor: {
    preview: false
  },
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
      label: 'Video Thumbnail',
      name: 'image',
      widget: 'image',
      required: false,
      media_library: {
        config: {
          multiple: false
        }
      },
      hint: 'Recommended size: 1280x720 pixels'
    },
    {
      label: 'Video ID',
      name: 'video_id',
      widget: 'string',
      hint: 'Get this from the Twitch video URL. Clip example: HedonisticConsiderateOrcaWutFace'
    },
    {
      label: 'Video Type',
      name: 'video_type',
      widget: 'select',
      options: [
        {
          label: 'Twitch Clip',
          value: 'clip'
        },
        {
          label: 'Twitch Collection',
          value: 'collection'
        },
        {
          label: 'Twitch Vod',
          value: 'vod'
        }
      ],
      hint: 'Select the type of video to embed. Vods include video and past broadcasts.'
    },
    {
      label: 'Clipped By',
      name: 'clipper',
      widget: 'string',
      required: false,
      hint: 'Give credit to the user who clipped this.'
    },
    {
      label: 'Date Aired',
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
      label: 'Game',
      name: 'tags',
      widget: 'list',
      hint: 'Use the name of the game this clip is from for sorting purposes.'
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
          name: 'meta_description',
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
      'default': 'post'
    }
  ]
}
