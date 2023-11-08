import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default {
  name: 'hngsMembers',
  title: 'HNGS Members',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'hngsMembers'}),
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'fullName',
    },
    prepare({title} : any) {
      return {
        title: title,
      }
    },
  },
}
