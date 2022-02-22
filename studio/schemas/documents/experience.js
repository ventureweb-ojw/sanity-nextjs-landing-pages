import { MasterDetailIcon } from '@sanity/icons'

export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  icon: MasterDetailIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'id',
      type: 'string',
      title: 'ID',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ]
          },
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
        },
        {
          type: 'imageSection',
        },
      ]
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
