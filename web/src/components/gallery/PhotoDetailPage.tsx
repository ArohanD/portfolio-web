import React, { useEffect, useMemo, useState } from "react"
import PhotoNav from "./PhotoNav"
import { urlFor } from "../../lib/sanity/image"
import { getImage, getImages, getTags } from "../../lib/sanity/queries"
import { formatExposureTime } from "../../lib/sanity/utils"
import type { Exif, GalleryImage, Tag } from "../../lib/sanity/types"
import "./gallery.scss"

interface Props {
  /** 10-char prefix of the image's sha1hash. */
  hash: string
}

// Hero srcSet for the single dominant image. Wider than the masonry tiles, with
// no LQIP or lazy loading since the viewer is looking right at it.
const HERO_WIDTHS = [800, 1200, 1600, 2000, 2400]

const stateStyle: React.CSSProperties = { padding: "2rem" }
const errorStyle: React.CSSProperties = { ...stateStyle, color: "#e20612" }
const heroImgStyle: React.CSSProperties = {
  maxWidth: "100%",
  maxHeight: "80vh",
  objectFit: "contain",
  display: "block",
}

export function formatPhotoTitle(image: GalleryImage | null): string {
  if (!image) return ""
  if (image.title) return image.title
  const dt = (image.metadata?.exif as Exif | undefined)?.DateTimeOriginal
  if (dt) {
    return new Date(dt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  }
  return ""
}

const PhotoDetailPage: React.FC<Props> = ({ hash }) => {
  const [image, setImage] = useState<GalleryImage | null>(null)
  const [images, setImages] = useState<GalleryImage[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const [img, all, ts] = await Promise.all([getImage(hash), getImages(), getTags()])
        if (cancelled) return
        setImage(img)
        setImages(all)
        setTags(ts)
        setLoading(false)
      } catch (err: any) {
        if (cancelled) return
        // eslint-disable-next-line no-console
        console.error("Failed to load photo detail", err)
        setError(err?.message || "Failed to load photo")
        setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [hash])

  const { webpSrcSet, fallbackSrcSet, fallbackSrc } = useMemo(() => {
    if (!image)
      return { webpSrcSet: "", fallbackSrcSet: "", fallbackSrc: "" }
    return {
      webpSrcSet: HERO_WIDTHS.map(
        w => `${urlFor(image).width(w).format("webp").url()} ${w}w`
      ).join(", "),
      fallbackSrcSet: HERO_WIDTHS.map(
        w => `${urlFor(image).width(w).auto("format").url()} ${w}w`
      ).join(", "),
      fallbackSrc: urlFor(image).width(1600).auto("format").url(),
    }
  }, [image?._id])

  if (error) return <div style={errorStyle}>Couldn&apos;t load photo: {error}</div>
  if (loading) return <div style={stateStyle}>Loading…</div>
  if (!image) return <div style={stateStyle}>Photo not found.</div>

  const exif = image.metadata?.exif as Exif | undefined
  const title = formatPhotoTitle(image)

  return (
    <div className="photo__page__container" data-testid="photo-detail">
      <h1 className="photo__title">{title}</h1>
      <div className="photo__container">
        <picture>
          <source srcSet={webpSrcSet} type="image/webp" />
          <img
            src={fallbackSrc}
            srcSet={fallbackSrcSet}
            sizes="(max-width: 575px) 100vw, 60vw"
            alt={image.alt || title || "Photo"}
            style={heroImgStyle}
          />
        </picture>
      </div>
      <div className="photo__details">
        {image.description && (
          <p className="photo__details__description">{image.description}</p>
        )}
        <div className="photo__details__exif">
          {exif?.FocalLength && (
            <div className="photo__details__exif__item">
              <span>Focal Length</span>
              <span>{exif.FocalLength}mm</span>
            </div>
          )}
          {exif?.FNumber && (
            <div className="photo__details__exif__item">
              <span>Aperture</span>
              <span>f/{exif.FNumber}</span>
            </div>
          )}
          {exif?.ExposureTime && (
            <div className="photo__details__exif__item">
              <span>Exposure</span>
              <span>{formatExposureTime(exif.ExposureTime)}</span>
            </div>
          )}
          {exif?.ISO && (
            <div className="photo__details__exif__item">
              <span>ISO</span>
              <span>{exif.ISO}</span>
            </div>
          )}
          {exif?.LensModel && (
            <div className="photo__details__exif__item">
              <span>Lens</span>
              <span>{exif.LensModel}</span>
            </div>
          )}
        </div>
      </div>
      <PhotoNav images={images} currentImageHash={image.sha1hash} tags={tags} />
    </div>
  )
}

export default PhotoDetailPage
