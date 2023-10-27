import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'


import {schemaTypes} from './schemas'


// const customSchemaTypes = [
//   {
//     name: "category",
//     title: "Category",
//     type: "document",
//     orderings: [orderRankOrdering],
//     fields: [
//       orderRankField({ type: "category" }),
//       // Otros campos de tu esquema de categoría
//     ],
//   },
//   // Puedes agregar más tipos de esquema personalizados aquí
// ];

export default defineConfig({
  name: 'default',
  title: 'hngs',

  projectId: 'byibefsg',
  dataset: 'production',

  plugins: [deskTool({
      structure: (S, context) => {
        return S.list()
        .title('Content')
        .items([
          // Minimum required configuration
          orderableDocumentListDeskItem({type: 'hngsHome', S, context}),

          // Optional configuration
          // orderableDocumentListDeskItem({
          //   type: 'project',
          //   title: 'Projects',
          //   icon: Paint,
          //   // Required if using multiple lists of the same 'type'
          //   id: 'orderable-en-projects',
          //   // See notes on adding a `filter` below
          //   filter: `__i18n_lang == $lang`,
          //   params: {
          //     lang: 'en_US',
          //   },
          
          //   S,
          //   context,
          // }),

          
        ])
      }
    }), visionTool()],

  // schema: {
  //   types: schemaTypes,
  // },
  schema: {
    types: schemaTypes,
  }
})
