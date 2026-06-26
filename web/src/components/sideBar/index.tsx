import React from "react"
import { graphql } from "gatsby"
import { Link, useStaticQuery } from "gatsby"
import { HIDDEN_LINKS, HomeLink, homeLinks } from "../../staticContent"
import { Query } from "../../generated/graphql-types"
import { sanitizeTitle, isNotNavDupe } from "../../../utils"
import "./sidebar.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
interface SideBarProps {
  pageString?: string
  currentPath: string
}

const SideBar: React.FC<SideBarProps> = ({ pageString, currentPath }) => {
  const pageQuery = graphql`
    query pagesQuery {
      allSitePage(sort: { path: ASC }) {
        nodes {
          path
        }
      }
    }
  `
  const navQuery = useStaticQuery(pageQuery) as Query

  const queryLinks = navQuery.allSitePage.nodes
  const navLinks = []

  if (pageString) {
    queryLinks.forEach(({ path }) => {
      const pathSplit = path.split("/")

      if (pathSplit[1] === pageString) {
        const newLink = {
          title: sanitizeTitle(pathSplit[2]),
          path: path,
        } as sideBarLink
        if (isNotNavDupe(newLink, navLinks)) navLinks.push(newLink)
      }
    })
  }

  const homeLinksWithHome = JSON.parse(
    JSON.stringify(
      homeLinks.filter(l => !HIDDEN_LINKS.has(l.backgroundImageSlug))
    )
  )

  homeLinksWithHome.unshift({
    title: "Home",
    path: "/",
    backgroundImageSlug: `home`,
    textColor: "#68281B",
    imagePath: "",
  } as HomeLink)

  return (
    <div className="gallery-sidebar-container">
      <div className="gallery-content-cell">
        {pageString && <LinkBlock links={navLinks} currentPath={currentPath} />}
        {navLinks.length > 5 && <div style={{ marginBottom: 50 }} />}
        <LinkBlock links={homeLinksWithHome} currentPath={currentPath} />
      </div>
    </div>
  )
}

export interface sideBarLink {
  title: string
  path: string
}

export interface linkBlockProps {
  links: Array<sideBarLink> | Array<HomeLink>
  currentPath: string
}

const LinkBlock: React.FC<linkBlockProps> = ({ links, currentPath }) => {
  return (
    <div className="gallery-linkBlock">
      {links.map(({ path, title }) => {
        let linkPath = path[0] === "/" ? path : `/${path}`

        // Highlight the active link — exact match, or a subsection of it
        // (e.g. /dev/applications highlighting "dev", or /photography/people
        // highlighting "photo"). Trailing slashes are normalized so the match
        // doesn't hinge on them.
        const stripSlash = (s: string) => s.replace(/\/+$/, "") || "/"
        const cur = stripSlash(currentPath)
        const lp = stripSlash(linkPath)
        const highlight = cur === lp || (lp !== "/" && cur.startsWith(`${lp}/`))

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
