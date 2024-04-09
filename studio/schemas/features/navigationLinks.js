export default {
  name: 'links',
  title: 'Navigation Links',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'single',
      title: 'Single Link',
      fields: [
        {
          name: 'title',
          title: 'Title',
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
    },
    {
      type: 'object',
      name: 'multiple',
      title: 'Link Group',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'links',
          Title: 'Sublinks',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'sublink',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
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
              ],
            },
          ],
        },
      ],
    },
  ],
}
