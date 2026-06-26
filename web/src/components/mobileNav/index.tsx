import React, { useState } from "react"
import { Link } from "gatsby"
import "./mobileNav.scss"
import { BiMenu, BiX } from "react-icons/bi"
import { getVisibleNavLinks } from "../../staticContent"

interface MobileNavProps {
  /** Optional override for the link list. Defaults to the site nav (Home +
   *  visible sections), matching the desktop sidebar. */
  links?: Array<{ title: string; path: string }>
}

// Mobile navigation as a bottom-right bubble (FAB). Tapping it slides a stack of
// nav links up above the bubble; tapping the backdrop or the bubble closes it.
// Hidden above the desktop breakpoint via CSS — the sidebar covers wider screens.
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
