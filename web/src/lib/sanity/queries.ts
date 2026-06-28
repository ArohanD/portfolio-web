import { sanityClient } from "./client"
import type { DevProject, GalleryImage, Tag } from "./types"

// Only the fields the gallery needs. dimensions/lqip let us render the masonry
// instantly and show a blur-up placeholder while the image loads.
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

export async function getDevProjects(): Promise<DevProject[]> {
  return await sanityClient.fetch(
    `*[_type == "devProject"] | order(orderRank) {
      _id, title, "slug": slug.current, blurb, stack,
      links[]{ label, href },
      media{ kind, youtubeId, caption, image }
    }`
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
