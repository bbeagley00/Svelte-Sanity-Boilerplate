import {ImagesIcon} from '@sanity/icons'

export default {
  name: 'exhibitions',
  title: 'Exhibitions',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}
