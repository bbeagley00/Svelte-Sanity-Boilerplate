import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'pages',
  title: 'Content Pages',
  type: 'document',
  icon: DocumentIcon,
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
