import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID
export const dataset = process.env.SANITY_STUDIO_DATASET

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Automatically generate structure items for singleton and non-singleton schemas
const generateStructureItems = (S) =>
  schemaTypes.map((schema) => {
    if (schema.isSingleton) {
      // Singleton document
      return S.listItem().title(schema.title).icon(schema.icon).id(schema.name).child(
        S.document().schemaType(schema.name).documentId(schema.name) // Assuming the documentId matches the schema name
      )
    } else {
      // Non-singleton document type
      return S.documentTypeListItem(schema.name).title(schema.title)
    }
  })

export default defineConfig({
  name: 'ncm',
  title: 'National Communication Museum',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) => S.list().title('Content').items(generateStructureItems(S)),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(
        ({schemaType}) => !schemaTypes.some((type) => type.name === schemaType && type.isSingleton)
      ),
  },
  document: {
    actions: (input, context) =>
      schemaTypes.find((type) => type.name === context.schemaType)?.isSingleton
        ? input.filter(({action}) => singletonActions.has(action))
        : input,
  },
})
