import React, { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"
import { Link } from "gatsby"
import type { ImageAsset } from "@sanity/types"
import { urlFor } from "../../lib/sanity/image"
import type { Exif } from "../../lib/sanity/types"
import { useIsMobile } from "../../lib/sanity/hooks"

interface Props {
  images: ImageAsset[]
  columns?: number
  tag?: string
}

interface ColumnItem {
  image: ImageAsset
  height: number
  aspectRatio: number
}

interface GalleryImageProps {
  image: ImageAsset
  itemIndex?: number
  highlight?: boolean
  onClick?: (image: ImageAsset) => void
  imgStyle?: CSSProperties
  aspectRatio?: number
}

const DEFAULT_MAX_WIDTH = 1200

export const GalleryImage = ({
  image,
  itemIndex = 0,
  highlight = false,
  onClick,
  imgStyle = {},
  aspectRatio,
}: GalleryImageProps) => {
  const imageContainerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
  }

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
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

  const [readyForHighlight, setReadyForHighlight] = useState(false)

  const srcSet = [
    `${urlFor(image).width(800).format("webp").url()} 800w`,
    `${urlFor(image).width(1200).format("webp").url()} 1200w`,
    `${urlFor(image).width(1600).format("webp").url()} 1600w`,
    `${urlFor(image).width(2000).format("webp").url()} 2000w`,
    `${urlFor(image).width(2400).format("webp").url()} 2400w`,
  ].join(", ")

  const fallbackSrcSet = [
    `${urlFor(image).width(800).auto("format").url()} 800w`,
    `${urlFor(image).width(1200).auto("format").url()} 1200w`,
    `${urlFor(image).width(1600).auto("format").url()} 1600w`,
    `${urlFor(image).width(2000).auto("format").url()} 2000w`,
    `${urlFor(image).width(2400).auto("format").url()} 2400w`,
  ].join(", ")

  const sizes =
    "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"

  const highlightRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  return (
    <div style={imageContainerStyle} onClick={() => onClick?.(image)}>
      <picture style={{ display: "block" }}>
        <source srcSet={srcSet} sizes={sizes} type="image/webp" />
        <img
          src={urlFor(image).width(1600).auto("format").url()}
          srcSet={fallbackSrcSet}
          sizes={sizes}
          alt={(image.alt as string) || `Gallery image ${itemIndex + 1}`}
          style={{ ...imageStyle, ...imgStyle }}
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
          onLoad={() => setReadyForHighlight(true)}
        />
      </picture>
      {highlight && readyForHighlight && (
        <div ref={highlightRef} style={isMobile ? mobileHighlightStyle : highlightStyle}></div>
      )}
    </div>
  )
}

export default function Gallery({ images, columns = 2, tag }: Props) {
  const [columnData, setColumnData] = useState<ColumnItem[][]>([])
  const [loadedImageData, setLoadedImageData] = useState<
    Map<number, { width: number; height: number; aspectRatio: number }>
  >(new Map())
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const newColumns: ColumnItem[][] = Array.from({ length: columns }, () => [])
    setColumnData(newColumns)
    setLoadedImageData(new Map())
    setIsLoading(images.length > 0)
  }, [columns, images.length])

  const getShortestColumnIndex = (heights: number[]): number => {
    return heights.indexOf(Math.min(...heights))
  }

  const handleImageLoad = (index: number, img: HTMLImageElement) => {
    const containerWidth = containerRef.current?.offsetWidth || 1200
    const columnWidth = Math.floor(containerWidth / columns)
    const aspectRatio = img.naturalHeight / img.naturalWidth
    const calculatedHeight = columnWidth * aspectRatio

    setLoadedImageData(prev => {
      const newMap = new Map(prev)
      newMap.set(index, {
        width: columnWidth,
        height: calculatedHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight,
      })
      if (newMap.size === images.length) {
        setIsLoading(false)
      }
      return newMap
    })
  }

  useEffect(() => {
    if (loadedImageData.size === 0) return

    const newColumns: ColumnItem[][] = Array.from({ length: columns }, () => [])
    const newHeights = Array(columns).fill(0)

    const sortedLoadedImageData = Array.from(loadedImageData.entries()).sort(
      ([a], [b]) => a - b
    )

    sortedLoadedImageData.forEach(([imageIndex, dimensions]) => {
      const shortestIndex = getShortestColumnIndex(newHeights)
      newColumns[shortestIndex].push({
        image: images[imageIndex],
        height: dimensions.height,
        aspectRatio: dimensions.aspectRatio,
      })
      newHeights[shortestIndex] += dimensions.height
    })

    setColumnData(newColumns)
  }, [loadedImageData, columns, images])

  useEffect(() => {
    if (images.length === 0) return

    images.forEach((image, index) => {
      if (loadedImageData.has(index)) return
      const img = new Image()
      img.onload = () => handleImageLoad(index, img)
      img.src = urlFor(image).width(DEFAULT_MAX_WIDTH).fit("max").auto("format").url()
    })
  }, [images, loadedImageData, columns])

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
  }

  const spinnerContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    width: "100%",
  }

  const spinnerStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #E20612",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  }

  if (isLoading) {
    return (
      <div style={spinnerContainerStyle}>
        <div style={spinnerStyle}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  return (
    <div ref={containerRef} style={containerStyle}>
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} style={columnStyle}>
          {columnData[columnIndex]?.map((item, itemIndex) => (
            <Link
              to={`/photography/photo/${item.image.sha1hash.slice(0, 10)}${
                tag ? `?category=${tag}` : ""
              }`}
              key={item.image.sha1hash}
            >
              <GalleryImage
                key={item.image.sha1hash}
                image={item.image}
                itemIndex={itemIndex}
                highlight={
                  new Date((item.image.metadata.exif as Exif)?.DateTimeOriginal || 0) >
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
