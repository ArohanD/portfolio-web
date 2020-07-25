import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { navLinks } from "../../staticContent"
import "./mobileNav.scss"

const MobileNav: React.FC<{ URI: string }> = ({ URI }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [width, setWidth] = useState(0)

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

  if(width > 1000) return <div></div>

  return (
    <div
      className={navOpen ? "navigation-open" : "navigation-closed"}
      onClick={() => setNavOpen(!navOpen)}
    >
      {navOpen && (
        <div className="nav-content-wrapper">
          {navLinks.map(link => {
            return <div className="nav-mobile-link">
              <Link to={link.path} >{link.title}</Link>
            </div>
          })}
        </div>
      )}
    </div>
  )
}

export default MobileNav
