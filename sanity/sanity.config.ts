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
          .title('Pages')
          .items([
            orderableDocumentListDeskItem({type: 'hngsHome', title: '📄 Home', S, context}),
            orderableDocumentListDeskItem({type: 'hngsWork', title: '📄 Work', S, context}),
            orderableDocumentListDeskItem({type: 'hngsOffice', title: '📄 Office', S, context}),
            orderableDocumentListDeskItem({type: 'hngsContact', title: '📄 Contact', S, context}),
            orderableDocumentListDeskItem({type: 'hngsProjects', title: '⚙️ Projects', S, context}),
            orderableDocumentListDeskItem({type: 'hngsMembers', title: '⚙️ Members', S, context}),
            orderableDocumentListDeskItem({
              type: 'hngsSocialMedia',
              title: '⚙️ Social Media',
              S,
              context,
            }),
          ])
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
