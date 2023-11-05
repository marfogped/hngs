import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

// --- MEDIA TYPES ---
const FACEBOOK = 'facebook'
const INSTAGRAM = 'instagram'
const YOUTUBE = 'youtube'
const LINKEDIN = 'linkedin'
const BEHANCE = 'behance'

export default {
  name: 'hngsSocialMedia',
  title: 'HNGS Social Media',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'hngsSocialMedia'}),
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
  preview: {
    select: {
      title: 'socialMedia',
    },
    prepare({title} : any) {
      return {
        title: title,
      }
    },
  },
}
