import { SanityDocument } from '@sanity/types'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

// --- DOCUMENT TYPES ---
const HERO = 'hero'
const ABOUT = 'about'
const PORTFOLIO = 'portfolio'
const CONTACT = 'contact'

export default {
 name: 'hngsHome',
 title: 'HNGS Home',
 type: 'document',
 orderings: [orderRankOrdering],
 fields: [
    orderRankField({type: 'hngsHome'}),
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [HERO, ABOUT, PORTFOLIO, CONTACT],
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      hidden: ({document}: {document: SanityDocument}) => document.type !== HERO,
    },
    {
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      hidden: ({document}: {document: SanityDocument}) => document.type !== ABOUT,
    },
    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      hidden: ({document}: {document: SanityDocument}) => document.type !== ABOUT,
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'hngsProjects' }],
        },
      ],
      options: {
        limit: 8,
      },
      hidden: ({document}: {document: SanityDocument}) => document.type !== PORTFOLIO,
    },
    {
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
      hidden: ({document}: {document: SanityDocument}) => document.type !== CONTACT,
    },
    {
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'string',
      hidden: ({document}: {document: SanityDocument}) => document.type !== CONTACT,
    },
 ],
 preview: {
    select: {
      title: 'type',
    },
    prepare({title} : any) {
      return {
        title: title,
      }
    },
 },
}