import type { ImageAsset } from "@sanity/types"
import { sanityClient } from "./client"
import type { Tag } from "./types"

export async function getImages(tagId?: string): Promise<ImageAsset[]> {
  return await sanityClient.fetch(
    `*[_type == "sanity.imageAsset" ${
      tagId ? "&& $tagId in opt.media.tags[]._ref" : ""
    }] | order(_createdAt desc)`,
    tagId ? { tagId } : {}
  )
}

export async function getImage(hash: string): Promise<ImageAsset> {
  return await sanityClient.fetch(
    `*[_type == "sanity.imageAsset" && string::startsWith(sha1hash, $hash)][0]`,
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
