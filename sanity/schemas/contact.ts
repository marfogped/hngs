import {SanityDocument} from '@sanity/types'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

// --- DOCUMENT TYPES ---
const HERO = 'hero'
const LOCATION = 'location'
const CONTACT = 'contact methods'

export default {
  name: 'hngsContact',
  title: 'HNGS Contact',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'hngsContact'}),
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [HERO, LOCATION, CONTACT],
      },
    },
    {
      name: 'background',
      title: 'Background',
      type: 'image',
      hidden: ({document}: {document: SanityDocument}) => document.type !== HERO,
    },
    {
      name: 'location',
      title: 'Location',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      hidden: ({document}: {document: SanityDocument}) => document.type !== LOCATION,
    },
    {
      name: 'contactMethods',
      title: 'Contact Methods',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      hidden: ({document}: {document: SanityDocument}) => document.type !== CONTACT,
    },
  ],
  preview: {
    select: {
      title: 'type',
    },
    prepare({title}: any) {
      return {
        title: title,
      }
    },
  },
}
