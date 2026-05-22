// DEPRECATED: Use media plugin instead

import {defineField, defineType} from 'sanity'

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

function formatExposureTime(exposureTime: number): string | null {
  if (!exposureTime) {
    return null
  }
  if (exposureTime >= 0.25) {
    return `${exposureTime}s`
  }
  const fraction = Math.round(1 / exposureTime)
  return `1/${fraction}s`
}

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
        metadata: ['palette', 'exif', 'location', 'blurhash'],
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      fNumber: 'image.asset.metadata.exif.FNumber',
      exposureTime: 'image.asset.metadata.exif.ExposureTime',
      iso: 'image.asset.metadata.exif.ISOSpeedRatings',
      lensModel: 'image.asset.metadata.exif.LensModel',
    },
    prepare(selection) {
      const {title, fNumber, exposureTime, iso, lensModel} = selection
      const exifData = [
        fNumber && `f/${fNumber}`,
        exposureTime && formatExposureTime(exposureTime),
        iso && `ISO ${iso}`,
        lensModel,
      ]
        .filter(Boolean)
        .join(' · ')

      return {...selection, subtitle: [title, exifData].filter(Boolean).join(' | ')}
    },
  },
})
