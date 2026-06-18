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

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function formatExposureTime(exposureTime: number | undefined): string {
  if (!exposureTime) return "N/A"
  const denominator = Math.round(1 / exposureTime)
  return `1/${denominator}`
}

export const sortGalleryImages = (images: ImageAsset[]) =>
  [...images].sort((a, b) => {
    const rawDateA = (a.metadata.exif as Exif)?.DateTimeOriginal
    const rawDateB = (b.metadata.exif as Exif)?.DateTimeOriginal
    const dateA = new Date(rawDateA || 0).getTime()
    const dateB = new Date(rawDateB || 0).getTime()
    return dateB - dateA
  })

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

  const sortedImages = [...filteredImages].sort((a, b) => {
    const rawDateA = (a.metadata.exif as Exif)?.DateTimeOriginal
    const rawDateB = (b.metadata.exif as Exif)?.DateTimeOriginal
    const dateA = new Date(rawDateA || 0).getTime()
    const dateB = new Date(rawDateB || 0).getTime()
    return dateB - dateA
  })

  const currentImageIndex = sortedImages.findIndex(image =>
    image.sha1hash.startsWith(currentImageHash)
  )
  const nextImage = sortedImages[currentImageIndex + 1]?.sha1hash.slice(0, 10)
  const previousImage = sortedImages[currentImageIndex - 1]?.sha1hash.slice(0, 10)
  return { nextImage, previousImage }
}
