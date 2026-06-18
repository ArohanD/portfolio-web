import React, { useMemo, useRef, useState } from "react"
import type { CSSProperties } from "react"
import { Link } from "gatsby"
import { urlFor } from "../../lib/sanity/image"
import type { Exif, GalleryImage as GalleryImageType } from "../../lib/sanity/types"
import { useColumnCount, useIsMobile } from "../../lib/sanity/hooks"

interface Props {
  images: GalleryImageType[]
  /** Override the viewport-derived column count. */
  columns?: number
  tag?: string
}

interface ColumnItem {
  image: GalleryImageType
  aspectRatio: number
}

interface GalleryImageProps {
  image: GalleryImageType
  itemIndex?: number
  highlight?: boolean
  onClick?: (image: GalleryImageType) => void
  imgStyle?: CSSProperties
  /** width / height — preserves layout while the image streams in. */
  aspectRatio?: number
}

// Responsive widths tuned for masonry column slots (~250-700px wide).
const SRCSET_WIDTHS = [400, 600, 900, 1200, 1600]

const buildSrcSet = (image: GalleryImageType, format?: "webp") =>
  SRCSET_WIDTHS.map(w => {
    const u = urlFor(image).width(w)
    return `${(format ? u.format(format) : u.auto("format")).url()} ${w}w`
  }).join(", ")

const DEFAULT_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"

export const GalleryImage = ({
  image,
  itemIndex = 0,
  highlight = false,
  onClick,
  imgStyle = {},
  aspectRatio,
}: GalleryImageProps) => {
  const resolvedAspect = aspectRatio ?? image.metadata?.dimensions?.aspectRatio
  const lqip = image.metadata?.lqip

  const containerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: resolvedAspect ? `${resolvedAspect}` : undefined,
    // LQIP blur-up — visible immediately, sits behind the real image until it loads
    backgroundImage: lqip ? `url(${lqip})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  }

  const [loaded, setLoaded] = useState(false)
  const [readyForHighlight, setReadyForHighlight] = useState(false)

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 0.2s ease-in-out, opacity 0.3s ease-out",
    cursor: "pointer",
    opacity: loaded ? 1 : 0,
  }

  const highlightStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    height: 20,
    width: 20,
    borderRadius: "50%",
    backgroundColor: "#E20612",
    transform: "translate(50%, -50%)",
  }

  const mobileHighlightStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    height: 15,
    width: 15,
    clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
    backgroundColor: "#E20612",
  }

  const webpSrcSet = useMemo(() => buildSrcSet(image, "webp"), [image._id])
  const fallbackSrcSet = useMemo(() => buildSrcSet(image), [image._id])
  const fallbackSrc = useMemo(
    () => urlFor(image).width(1200).auto("format").url(),
    [image._id]
  )

  const highlightRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  return (
    <div style={containerStyle} onClick={() => onClick?.(image)}>
      <picture style={{ display: "block" }}>
        <source srcSet={webpSrcSet} sizes={DEFAULT_SIZES} type="image/webp" />
        <img
          src={fallbackSrc}
          srcSet={fallbackSrcSet}
          sizes={DEFAULT_SIZES}
          alt={image.alt || `Gallery image ${itemIndex + 1}`}
          loading="lazy"
          decoding="async"
          style={{ ...imageStyle, ...imgStyle }}
          onLoad={() => {
            setLoaded(true)
            setReadyForHighlight(true)
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLImageElement).style.transform = "scale(1.02)"
            if (highlightRef.current) {
              highlightRef.current.style.opacity = "0"
              highlightRef.current.style.transition = "opacity 0.1s ease-in-out"
            }
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLImageElement).style.transform = "scale(1)"
            if (highlightRef.current) {
              highlightRef.current.style.opacity = "1"
              highlightRef.current.style.transition = "opacity 0.1s ease-in-out"
            }
          }}
        />
      </picture>
      {highlight && readyForHighlight && (
        <div ref={highlightRef} style={isMobile ? mobileHighlightStyle : highlightStyle}></div>
      )}
    </div>
  )
}

const containerStyle: CSSProperties = {
  display: "flex",
  gap: "1rem",
  width: "100%",
}

const columnStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  flex: 1,
  minWidth: 0,
}

export default function Gallery({ images, columns, tag }: Props) {
  const responsiveColumns = useColumnCount()
  const cols = columns ?? responsiveColumns

  // Distribute into shortest-column-first masonry using Sanity's
  // metadata.dimensions to compute heights. No image loading required.
  const columnData = useMemo<ColumnItem[][]>(() => {
    if (images.length === 0) return Array.from({ length: cols }, () => [])
    const colSlots: ColumnItem[][] = Array.from({ length: cols }, () => [])
    const heights = new Array(cols).fill(0)
    // Use an arbitrary unit width; only ratios matter for column balance.
    const UNIT_W = 100
    images.forEach(image => {
      const ar =
        image.metadata?.dimensions?.aspectRatio ||
        (image.metadata?.dimensions?.width && image.metadata?.dimensions?.height
          ? image.metadata.dimensions.width / image.metadata.dimensions.height
          : 1)
      const h = UNIT_W / ar // height for a UNIT_W-wide rendering
      const shortest = heights.indexOf(Math.min(...heights))
      colSlots[shortest].push({ image, aspectRatio: ar })
      heights[shortest] += h
    })
    return colSlots
  }, [images, cols])

  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  return (
    <div style={containerStyle} data-gallery-ready={images.length > 0 ? "true" : "false"}>
      {columnData.map((column, columnIndex) => (
        <div key={columnIndex} style={columnStyle}>
          {column.map((item, itemIndex) => (
            <Link
              to={`/photography/photo/${item.image.sha1hash.slice(0, 10)}${
                tag ? `?category=${tag}` : ""
              }`}
              key={item.image.sha1hash}
            >
              <GalleryImage
                image={item.image}
                itemIndex={itemIndex}
                highlight={
                  new Date((item.image.metadata?.exif as Exif)?.DateTimeOriginal || 0) >
                  oneMonthAgo
                }
                aspectRatio={item.aspectRatio}
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
