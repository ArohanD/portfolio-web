import React, { useEffect, useState } from "react"
import Gallery from "./Gallery"
import TagList from "./TagList"
import SideBar from "../sideBar"
import MobileNav from "../mobileNav"
import { getImages, getTags } from "../../lib/sanity/queries"
import { sortGalleryImages } from "../../lib/sanity/utils"
import type { GalleryImage, Tag } from "../../lib/sanity/types"
import "./gallery.scss"

interface Props {
  /** Tag LABEL (e.g. "landscapes"). Undefined = all photos. */
  tag?: string
}

const GalleryPage: React.FC<Props> = ({ tag }) => {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tagNotFound, setTagNotFound] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    setTagNotFound(false)
    ;(async () => {
      try {
        const allTags = await getTags()
        if (cancelled) return
        let tagId: string | undefined
        if (tag) {
          const found = allTags.find(t => t.label === tag)
          if (!found) {
            setTags(allTags)
            setImages([])
            setTagNotFound(true)
            setLoading(false)
            return
          }
          tagId = found.id
        }
        const imgs = await getImages(tagId)
        if (cancelled) return
        setTags(allTags)
        setImages(imgs)
        setLoading(false)
      } catch (err: any) {
        if (cancelled) return
        // eslint-disable-next-line no-console
        console.error("Failed to load gallery from Sanity", err)
        setError(err?.message || "Failed to load gallery")
        setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [tag])

  const sorted = sortGalleryImages(images)
  const title = tag ? `Gallery [${tag}]` : "Gallery"

  return (
    <>
    <div className="gallery__page__container">
      <div className="gallery__header__container">
        <header className="gallery__header">
          <h1>{title}</h1>
        </header>
        {tags.length > 0 && <TagList tags={tags} activeTag={tag} />}
        {/* Reuse the shared nav sidebar, pinned to the bottom-left of the
            column (see gallery.scss). Hidden below $desk-break, where the
            fixed MobileNav below takes over. */}
        <SideBar currentPath={"/photography/"} />
      </div>
      <div className="gallery__container">
        {error ? (
          <div className="gallery__state gallery__state--error">
            Couldn&apos;t load photos: {error}
          </div>
        ) : loading ? (
          <div className="gallery__state">Loading…</div>
        ) : tagNotFound ? (
          <div className="gallery__state">No tag named &quot;{tag}&quot;.</div>
        ) : sorted.length === 0 ? (
          <div className="gallery__state">
            No photos{tag ? ` tagged "${tag}"` : ""}.
          </div>
        ) : (
          <Gallery images={sorted} tag={tag} />
        )}
      </div>
    </div>
    <MobileNav />
    </>
  )
}

export default GalleryPage
