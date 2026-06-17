import React from "react"
import { Link } from "gatsby"
import { BiCaretLeft, BiCaretRight, BiGridAlt } from "react-icons/bi"
import type { GalleryImage, Tag } from "../../lib/sanity/types"
import { getNextAndPreviousImages } from "../../lib/sanity/utils"

interface PhotoNavProps {
  images: GalleryImage[]
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
  zIndex: 10,
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
    const categoryTagRef = tags.find(t => t.label === category)?.id
    return getNextAndPreviousImages(images, currentImageHash, categoryTagRef)
  }, [images, currentImageHash, category, tags])

  // Prev/next go to another photo-detail route, which itself reads ?category=
  // to scope navigation — so the query suffix is preserved on those links.
  const photoQuerySuffix = category ? `?category=${encodeURIComponent(category)}` : ""

  // The "grid" button goes back to a gallery page. With sub-gallery routes
  // now path-based, send the user to /photography/<tag>/ (not the legacy
  // ?category= form) so they land on the correct filtered gallery.
  const gridTarget = category
    ? `/photography/${encodeURIComponent(category)}/`
    : "/photography/"

  return (
    <div
      data-testid="photo-nav"
      style={{
        ...containerNavStyle,
        ...(nextImage && previousImage ? { width: "9rem" } : {}),
      }}
    >
      {previousImage && (
        <Link
          to={`/photography/photo/${previousImage}${photoQuerySuffix}`}
          data-testid="photo-nav-prev"
          style={{ textDecoration: "none" }}
        >
          <div style={{ ...iconContainerStyle }}>
            <BiCaretLeft style={iconStyle} />
          </div>
        </Link>
      )}
      <Link to={gridTarget} data-testid="photo-nav-grid" style={{ textDecoration: "none" }}>
        <div style={{ ...iconContainerStyle }}>
          <BiGridAlt style={iconStyle} />
        </div>
      </Link>
      {nextImage && (
        <Link
          to={`/photography/photo/${nextImage}${photoQuerySuffix}`}
          data-testid="photo-nav-next"
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
