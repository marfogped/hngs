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
          .title('type')
          .items([
            orderableDocumentListDeskItem({ type: 'hngsHome', title: 'HNGS Home', S, context, }),
            orderableDocumentListDeskItem({type: 'hngsWork', title: 'HNGS Work', S, context}),
            orderableDocumentListDeskItem({type: 'hngsOffice',title: 'HNGS Office', S, context}),
            orderableDocumentListDeskItem({type: 'hngsProjects', title: 'HNGS Projects', S, context}),
          ])
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
