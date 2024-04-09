export default {
  name: 'imageText',
  title: 'Image Text',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
