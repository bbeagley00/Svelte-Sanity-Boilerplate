import {BlockContentIcon} from '@sanity/icons'

export default {
  name: 'articles',
  title: 'Articles',
  type: 'document',
  icon: BlockContentIcon,
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
