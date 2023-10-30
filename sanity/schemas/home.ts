import {SanityDocument} from '@sanity/types'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

// --- DOCUMENT TYPES ---
const HERO = 'hero'
const ABOUT = 'about'
const PORTFOLIO = 'portfolio'
const CONTACT = 'contact'
const FOOTER = 'footer'

// --- MEDIA TYPES ---
const FACEBOOK = 'facebook'
const INSTAGRAM = 'instagram'
const YOUTUBE = 'youtube'
const LINKEDIN = 'linkedin'
const BEHANCE = 'behance'

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
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
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
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'socialMedia',
              title: 'Social Media',
              type: 'string',
              options: {
                list: [FACEBOOK, INSTAGRAM, YOUTUBE, LINKEDIN, BEHANCE],
              },
            },
            {
              name: 'mediaUrl',
              title: 'Media URL',
              type: 'string',
            },
          ],
        },
      ],
      hidden: ({document}: {document: SanityDocument}) => document.type !== FOOTER,
    },
  ],
}
