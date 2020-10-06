import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./mobileNav.scss"
import { BiChip, BiHomeAlt, BiPen } from "react-icons/bi"
import { GrGallery } from "react-icons/gr"

interface MobileNavProps {
  type?: "photo" | "writing" | "dev"
}

const MobileNav: React.FC<MobileNavProps> = ({ type }) => {
  const [width, setWidth] = useState(1001)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    setWidth(window.innerWidth)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (width > 1000) return <div></div>

  let iconLink = ""
  let icon

  switch (type) {
    case "photo":
      iconLink = "/photography"
      icon = GrGallery
      break

    case "writing":
      iconLink = "/writing"
      icon = BiPen
      break

    case "dev":
      iconLink = "/dev/applications"
      icon = BiChip
      break

    default:
      iconLink = undefined
      icon = undefined
      break
  }

  return (
    <div className="mobileNav_container">
      <Link to="/">
        <BiHomeAlt className="mobileNav_icon" />
      </Link>
      {type && (
        <Link to={iconLink}>
          {React.cloneElement(icon(), { className: "mobileNav_icon" })}
        </Link>
      )}
    </div>
  )
}

export default MobileNav
