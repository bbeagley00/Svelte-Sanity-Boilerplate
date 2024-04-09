export default {
  name: 'headerSimple',
  title: 'Simple Header',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Simple Header',
      }
    },
  },
}
