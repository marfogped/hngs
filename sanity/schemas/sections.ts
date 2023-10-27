import { SanityDocument } from '@sanity/types';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const HERO = "hero";
const ABOUT = "about";
const PORTFOLIO = "portfolio";
const CONTACT = "contact";
const FOOTER = "footer";

interface HngsHomeDocument extends SanityDocument {
    sections: Array<{
      _key: string;
      type: "hero" | "about" | "portfolio" | "contact" | "footer";
      heroImage?: string | null;
      aboutTitle?: string | null;
      aboutDescription?: string | null;
      portfolioImages?: string[];
      contactTitle?: string[];
      contactDescription?: string[];
      footerMediaLinks: string[];
    }>;
  }

export default {
  name: 'hngsHome',
  title: 'HNGS Home',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "hngsHome" }),
    {
        name: 'webpagePath',
        title: 'Webpage Path',
        type: 'string', 
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
              hidden: ({ document }: { document: HngsHomeDocument }) => {
                const section = document.sections.find((sec: any, secIndex) => sec.type === HERO && secIndex === (document.sections.length - 1));
                return section ? section.type !== HERO : true;
              },            
            },
            {
              name: 'aboutTitle',
              title: 'About Title',
              type: 'string',
              hidden: ({ document }: { document: HngsHomeDocument }) => {
                const section = document.sections.find((sec: any, secIndex) => sec.type === ABOUT && secIndex === (document.sections.length - 1));
                return section ? section.type !== ABOUT : true;
              }, 
            },
            {
              name: 'aboutDescription',
              title: 'About Description',
              type: 'string',
              hidden: ({ document }: { document: HngsHomeDocument }) => {
                const section = document.sections.find((sec: any, secIndex) => sec.type === ABOUT && secIndex === (document.sections.length - 1));
                return section ? section.type !== ABOUT : true;
              }, 
            },
            {
              name: 'portfolioImages',
              title: 'Portfolio Images',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }],
              hidden: ({ document }: { document: HngsHomeDocument }) => {
                const section = document.sections.find((sec: any, secIndex) => sec.type === PORTFOLIO && secIndex === (document.sections.length - 1));
                return section ? section.type !== PORTFOLIO : true;
              }, 
            },
            {
              name: 'contactTitle',
              title: 'Contact Title',
              type: 'string',
              hidden: ({ document }: { document: HngsHomeDocument }) => {
                const section = document.sections.find((sec: any, secIndex) => sec.type === CONTACT && secIndex === (document.sections.length - 1));
                return section ? section.type !== CONTACT : true;
              }, 
            },
            {
              name: 'contactDescription',
              title: 'Contact Description',
              type: 'string',
              hidden: ({ document }: { document: HngsHomeDocument }) => {
                const section = document.sections.find((sec: any, secIndex) => sec.type === CONTACT && secIndex === (document.sections.length - 1));
                return section ? section.type !== CONTACT : true;
              }, 
            },
            {
              name: 'footerMediaLinks',
              title: 'Footer Media Links',
              type: 'array',
              of: [{ type: 'string', options: { hotspot: true } }],
              hidden: ({ document }: { document: HngsHomeDocument }) => {
                const section = document.sections.find((sec: any, secIndex) => sec.type === FOOTER && secIndex === (document.sections.length - 1));
                return section ? section.type !== FOOTER : true;
              }, 
            },
          ],
        },
      ],
    },
  ],
};
