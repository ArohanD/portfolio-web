import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'sanity-template-astro-clean',
  title: 'Sanity Astro Starter',
  projectId,
  dataset,
  // @ts-ignore
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'devProject',
              title: 'Applications',
              S,
              context,
            }),
            S.documentTypeListItem('post').title('Posts'),
          ]),
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
  form: {
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
    }
  }
  },
})
