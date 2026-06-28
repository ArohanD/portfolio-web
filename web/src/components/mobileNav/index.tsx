import React, { useState } from "react"
import { Link } from "gatsby"
import "./mobileNav.scss"
import { BiMenu, BiX } from "react-icons/bi"
import { getVisibleNavLinks } from "../../staticContent"

interface MobileNavProps {
  /** Optional override for the link list. Defaults to the shared site nav. */
  links?: Array<{ title: string; path: string }>
}

// Bottom-right nav bubble (FAB) for small screens. Tapping it toggles a stack of
// nav links; CSS hides it above the desktop breakpoint where the sidebar takes over.
const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [open, setOpen] = useState(false)

  const navLinks = links ?? getVisibleNavLinks()

  return (
    <>
      {open && (
        <div
          className="mobileNav_backdrop"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="mobileNav_root">
        {open && (
          <ul className="mobileNav_menu">
            {navLinks.map(({ title, path }) => (
              <li key={title}>
                <Link to={path} className="mobileNav_link">
                  {title.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <button
          className="mobileNav_fab"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? (
            <BiX className="mobileNav_icon" />
          ) : (
            <BiMenu className="mobileNav_icon" />
          )}
        </button>
      </div>
    </>
  )
}

export default MobileNav
