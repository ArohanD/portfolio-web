import React from "react"
import { Link } from "gatsby"
import type { ImageAsset } from "@sanity/types"
import { BiCaretLeft, BiCaretRight, BiGridAlt } from "react-icons/bi"
import type { Tag } from "../../lib/sanity/types"
import { getNextAndPreviousImages } from "../../lib/sanity/utils"

interface PhotoNavProps {
  images: ImageAsset[]
  currentImageHash: string
  tags: Tag[]
}

const containerNavStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(1rem, 1fr))",
  alignContent: "center",
  width: "6rem",
  height: "1.5rem",
  borderRadius: "2rem",
  backgroundColor: "#E20612",
  boxShadow: "3px 3px 20px rgba(79, 70, 229, 0.3)",
  padding: "0.5rem",
  gap: "1rem",
}

const iconContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "2rem",
  borderRadius: "50%",
  transition: "all 0.2s ease",
  cursor: "pointer",
}

const iconStyle: React.CSSProperties = {
  width: "1.5rem",
  height: "1.5rem",
  color: "#ffffff",
}

export const PhotoNav: React.FC<PhotoNavProps> = ({ images, currentImageHash, tags }) => {
  const [category, setCategory] = React.useState<string | null>(null)

  React.useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category")
    setCategory(c)
  }, [])

  const { nextImage, previousImage } = React.useMemo(() => {
    const categoryTagRef = tags.find(tag => tag.label === category)?.id
    return getNextAndPreviousImages(images, currentImageHash, categoryTagRef)
  }, [images, currentImageHash, category, tags])

  const querySuffix = category ? `?category=${category}` : ""

  return (
    <div
      style={{
        ...containerNavStyle,
        ...(nextImage && previousImage ? { width: "9rem" } : {}),
      }}
    >
      {previousImage && (
        <Link
          to={`/photography/photo/${previousImage}${querySuffix}`}
          style={{ textDecoration: "none" }}
        >
          <div style={{ ...iconContainerStyle }}>
            <BiCaretLeft style={iconStyle} />
          </div>
        </Link>
      )}
      <Link to={`/photography${querySuffix}`} style={{ textDecoration: "none" }}>
        <div style={{ ...iconContainerStyle }}>
          <BiGridAlt style={iconStyle} />
        </div>
      </Link>
      {nextImage && (
        <Link
          to={`/photography/photo/${nextImage}${querySuffix}`}
          style={{ textDecoration: "none" }}
        >
          <div style={{ ...iconContainerStyle }}>
            <BiCaretRight style={iconStyle} />
          </div>
        </Link>
      )}
    </div>
  )
}

export default PhotoNav
