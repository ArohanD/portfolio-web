import { sanityClient } from "./client"
import type { GalleryImage, Tag } from "./types"

// Narrow projection: only the fields the gallery needs, plus metadata.dimensions
// and metadata.lqip so we can render the masonry instantly (no JS preload) and
// show a blur-up placeholder while the real image streams in.
const GALLERY_IMAGE_PROJECTION = `{
  _id, _createdAt, sha1hash, mimeType, opt, alt, description, title,
  metadata { dimensions, lqip, exif }
}`

export async function getImages(tagId?: string): Promise<GalleryImage[]> {
  return await sanityClient.fetch(
    `*[_type == "sanity.imageAsset" ${
      tagId ? "&& $tagId in opt.media.tags[]._ref" : ""
    }] | order(_createdAt desc) ${GALLERY_IMAGE_PROJECTION}`,
    tagId ? { tagId } : {}
  )
}

export async function getImage(hash: string): Promise<GalleryImage> {
  return await sanityClient.fetch(
    `*[_type == "sanity.imageAsset" && string::startsWith(sha1hash, $hash)][0] ${GALLERY_IMAGE_PROJECTION}`,
    { hash }
  )
}

export async function getTags(): Promise<Tag[]> {
  return await sanityClient.fetch(
    `*[_type == "media.tag"] | order(name.current) {
      "id": _id,
      "label": name.current
    }`
  )
}

export async function getTag(label: string): Promise<Tag | null> {
  return await sanityClient.fetch(
    `*[_type == "media.tag" && name.current == $label][0] {
      "id": _id,
      "label": name.current
    }`,
    { label }
  )
}
