import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default {
  name: 'hngsProjects',
  title: 'HNGS Projects',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'hngsProjects'}),
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'string',
    },
    {
      name: 'architect',
      title: 'Architect',
      type: 'string',
    },
    {
      name: 'sizeAndCost',
      title: 'Size and Cost',
      type: 'string',
    },
    {
      name: 'portfolioImages',
      title: 'Portfolio Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }}],
    }
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
    },
    prepare({title, id} : any) {
      return {
        title: title,
        subtitle: id,
      }
    },
  },
}