export default {
  name: 'headerHero',
  title: 'Hero Header',
  type: 'object',
  fields: [
    {
      title: 'First Feature',
      name: 'referenceFirst',
      type: 'reference',
      to: [{type: 'articles'}, {type: 'exhibitions'}],
    },
    {
      title: 'Second Feature',
      name: 'referenceSecond',
      type: 'reference',
      to: [{type: 'articles'}, {type: 'exhibitions'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Header', // Setting the display title for the preview
      }
    },
  },
}
