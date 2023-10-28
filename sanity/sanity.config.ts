import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hngs',
  projectId: 'byibefsg',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'hngsHome', S, context}),
            orderableDocumentListDeskItem({type: 'hngsOffice', S, context}),
            orderableDocumentListDeskItem({type: 'hngsWork', S, context}),
            orderableDocumentListDeskItem({type: 'hngsProjectDescription', S, context}),
          ])
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
