export default {
  name: 'post',
  label: 'Posts',
  label_singular: 'Post',
  description: 'Create or edit a post.',
  folder: 'src/site/posts',
  create: true,
  slug: '{{fields.slug}}',
  preview_path: 'posts/{{fields.slug}}',
  sortableFields: ['title', 'date'],
  view_filters: [
    {
      label: "Articles",
      field: "post_type",
      pattern: "article"
    },
    {
      label: "Videos",
      field: "post_type",
      pattern: "video"
    }
  ],
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
      label: 'Post Style',
      name: 'post_type',
      widget: 'select',
      options: [
        {
          label: 'Image Header',
          value: 'article'
        },
        {
          label: 'Video Header',
          value: 'video'
        }
      ]
    },
    {
      label: 'Category',
      name: 'category',
      widget: 'string',
      required: false,
      hint: 'Apply a category to a post. Supports 1 category at this time.'
    },
    {
      label: 'Tag',
      name: 'tags',
      widget: 'list',
      required: false,
      hint: 'Apply tags to create archives of posts that are similar and/or related. Separate multiple with a comma: i.e. Tag 1, Tag 2, Tag 3.'
    },
    {
      label: 'Header Image or Video Thumbnail',
      name: 'image_card',
      widget: 'image',
      required: false,
      media_library: {
        config: {
          multiple: false
        }
      },
      hint: 'Recommended size: 1280x720 pixels (16:9)'
    },
    {
      label: 'Header Image or Video Thumbnail Alt Text',
      name: 'image_card_alt',
      widget: 'string',
      required: false,
      hint: 'Describe this image for anyone who can\'t see it.'
    },
    {
      label: 'Video ID',
      name: 'video_id',
      widget: 'string',
      required: false,
      hint: 'Get this from the video URL. Clip example: HedonisticConsiderateOrcaWutFace'
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
        },
        {
          label: 'Vimeo',
          value: 'vimeo'
        },
        {
          label: 'YouTube Video',
          value: 'youtube'
        },
        {
          label: 'YouTube Playlist',
          value: 'playlist'
        }
      ],
      required: false,
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
      label: 'TL;DR',
      name: 'excerpt',
      widget: 'markdown',
      buttons: ['bold', 'italic', 'code', 'link', 'bulleted-list', 'numbered-list'],
      required: false,
      hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
    },
    {
      label: 'Teaser',
      name: 'teaser',
      widget: 'text',
      required: false,
      hint: 'A short plain text preview shown on cards.'
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
    }
  ]
}
