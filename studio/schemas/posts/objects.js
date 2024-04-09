import {AsteriskIcon} from '@sanity/icons'

export default {
  name: 'objects',
  title: 'Objects',
  type: 'document',
  icon: AsteriskIcon,
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
