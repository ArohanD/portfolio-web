import React from "react"
import { getVisibleNavLinks } from "../../staticContent"
import "./sidebar.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

interface SideBarProps {
  currentPath: string
}

const SideBar: React.FC<SideBarProps> = ({ currentPath }) => {
  return (
    <div className="gallery-sidebar-container">
      <div className="gallery-content-cell">
        <LinkBlock links={getVisibleNavLinks()} currentPath={currentPath} />
      </div>
    </div>
  )
}

export interface linkBlockProps {
  links: Array<{ title: string; path: string }>
  currentPath: string
}

const stripTrailingSlash = (path: string) => path.replace(/\/+$/, "") || "/"

// Highlights the active link on an exact match or a subsection of it (e.g.
// /dev/applications highlights "dev"). Trailing slashes are normalized away.
const LinkBlock: React.FC<linkBlockProps> = ({ links, currentPath }) => {
  const current = stripTrailingSlash(currentPath)
  return (
    <div className="gallery-linkBlock">
      {links.map(({ path, title }) => {
        const linkPath = path[0] === "/" ? path : `/${path}`
        const normalizedLink = stripTrailingSlash(linkPath)
        const highlight =
          current === normalizedLink ||
          (normalizedLink !== "/" && current.startsWith(`${normalizedLink}/`))

        return (
          <React.Fragment key={title}>
            <AniLink
              className={highlight ? "sidebar-currentPage" : ""}
              to={linkPath}
            >
              {title.toLowerCase()}
            </AniLink>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default SideBar
