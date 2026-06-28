import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

/**
 * Dev project schema. One block per application on the /dev/applications page.
 */

export default defineType({
  name: 'devProject',
  title: 'Application',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'devProject'}),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'projectLink',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        },
      ],
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        defineField({
          name: 'kind',
          title: 'Kind',
          type: 'string',
          options: {list: ['youtube', 'image'], layout: 'radio'},
          initialValue: 'youtube',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'youtubeId',
          title: 'YouTube video ID',
          type: 'string',
          hidden: ({parent}) => parent?.kind !== 'youtube',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          hidden: ({parent}) => parent?.kind !== 'image',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'media.image',
    },
  },
})
