import type { ImageAsset } from "@sanity/types"
import type { Exif } from "./types"

interface ImageWithTags extends ImageAsset {
  opt: {
    media: {
      tags: {
        _ref: string
        _type: string
        weak: boolean
      }[]
    }
  }
}

export function formatExposureTime(exposureTime: number | undefined): string {
  if (!exposureTime) return "N/A"
  const denominator = Math.round(1 / exposureTime)
  return `1/${denominator}`
}

const shotTime = (image: ImageAsset) =>
  new Date((image.metadata.exif as Exif)?.DateTimeOriginal || 0).getTime()

const byNewestFirst = (a: ImageAsset, b: ImageAsset) => shotTime(b) - shotTime(a)

export const sortGalleryImages = (images: ImageAsset[]) =>
  [...images].sort(byNewestFirst)

export const imageHasTag = (image: ImageAsset, tagRef: string | undefined) => {
  if (!tagRef) return false
  const tags = (image as ImageWithTags)?.opt?.media?.tags
  if (!tags) return false
  return tags.some(t => t._ref === tagRef)
}

export const getNextAndPreviousImages = (
  images: ImageAsset[],
  currentImageHash: string,
  tag: string | undefined
) => {
  const filteredImages = tag
    ? images.filter(image => imageHasTag(image, tag))
    : images

  const sortedImages = [...filteredImages].sort(byNewestFirst)

  const currentImageIndex = sortedImages.findIndex(image =>
    image.sha1hash.startsWith(currentImageHash)
  )
  const nextImage = sortedImages[currentImageIndex + 1]?.sha1hash.slice(0, 10)
  const previousImage = sortedImages[currentImageIndex - 1]?.sha1hash.slice(0, 10)
  return { nextImage, previousImage }
}
