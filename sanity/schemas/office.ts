import {SanityDocument} from '@sanity/types'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const HERO = 'hero'
const ABOUT = 'about'
const PORTFOLIO = 'portfolio'
const CONTACT = 'contact'
const FOOTER = 'footer'

export default {
  name: 'hngsOffice',
  title: 'HNGS Office',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'hngsOffice'}),
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [HERO, ABOUT, PORTFOLIO, FOOTER, CONTACT],
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
      type: 'string',
      hidden: ({document}: {document: SanityDocument}) => document.type !== ABOUT,
    },
    {
      name: 'portfolioImages',
      title: 'Portfolio Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
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
    {
      name: 'footerMediaLinks',
      title: 'Footer Media Links',
      type: 'array',
      of: [{type: 'string', options: {hotspot: true}}],
      hidden: ({document}: {document: SanityDocument}) => document.type !== FOOTER,
    },
  ],
}
