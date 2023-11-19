import { Rule } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default {
  name: 'hngsMembers',
  title: 'HNGS Members',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'hngsMembers' }),
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
          ]
        }
      ],
      validation: (Rule: Rule) => Rule.max(4),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Row`,
      };
    },
  },
};