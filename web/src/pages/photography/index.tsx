import React, { useEffect, useState } from "react"
import type { PageProps } from "gatsby"
import type { ImageAsset } from "@sanity/types"
import SideBarLayout from "../../components/pageLayout"
import SEO from "../../components/seo"
import MobileNav from "../../components/mobileNav"
import Gallery from "../../components/gallery/Gallery"
import TagList from "../../components/gallery/TagList"
import { getImages, getTags } from "../../lib/sanity/queries"
import { sortGalleryImages, imageHasTag } from "../../lib/sanity/utils"
import type { Tag } from "../../lib/sanity/types"

const PhotographyPage: React.FC<PageProps> = ({ location }) => {
  const [images, setImages] = useState<ImageAsset[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const params = new URLSearchParams(location.search)
  const activeTag = params.get("category")

  useEffect(() => {
    let cancelled = false
    Promise.all([getImages(), getTags()])
      .then(([imgs, ts]) => {
        if (cancelled) return
        setImages(imgs)
        setTags(ts)
        setLoading(false)
      })
      .catch(err => {
        if (cancelled) return
        console.error("Failed to load gallery from Sanity", err)
        setError(err?.message || "Failed to load gallery")
        setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const activeTagId = activeTag ? tags.find(t => t.label === activeTag)?.id : undefined
  const filtered = activeTagId ? images.filter(img => imageHasTag(img, activeTagId)) : images
  const sorted = sortGalleryImages(filtered)

  return (
    <SideBarLayout
      title="photography"
      sideBarString="photography"
      currentPath="/photography/"
    >
      <div style={{ padding: "1rem" }}>
        <h1 style={{ margin: "0 0 1rem" }}>
          Photography
          {activeTag ? ` — ${activeTag}` : ""}
        </h1>
        {tags.length > 0 && (
          <div style={{ marginBottom: "1rem" }}>
            <TagList tags={tags} activeTag={activeTag} />
          </div>
        )}
        {error ? (
          <div style={{ padding: "2rem", color: "#E20612" }}>
            Couldn't load photos: {error}
          </div>
        ) : loading ? (
          <div style={{ padding: "2rem" }}>Loading…</div>
        ) : sorted.length === 0 ? (
          <div style={{ padding: "2rem" }}>
            No photos{activeTag ? ` tagged "${activeTag}"` : ""}.
          </div>
        ) : (
          <Gallery images={sorted} tag={activeTag || undefined} columns={2} />
        )}
      </div>
      <MobileNav />
    </SideBarLayout>
  )
}

export default PhotographyPage

export const Head = () => <SEO title="Photography" />
