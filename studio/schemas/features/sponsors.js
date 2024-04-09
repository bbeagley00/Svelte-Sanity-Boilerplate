export default {
  name: 'sponsors',
  title: 'Sponsors',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'sponsor',
      title: 'Sponsor',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
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
      ],
    },
  ],
}
