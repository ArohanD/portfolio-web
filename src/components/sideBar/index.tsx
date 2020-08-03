import React from "react"
import { graphql } from "gatsby"
import { Link, useStaticQuery } from "gatsby"
import { HomeLink, homeLinks } from "../../staticContent"
import { Query } from "../../generated/graphql-types"
import { sanitizeTitle, isNotNavDupe } from "../../../utils"
import "./sidebar.scss"

interface SideBarProps {
  pageString?: string
  currentPath: string
}

const SideBar: React.FC<SideBarProps> = ({ pageString, currentPath }) => {
  const pageQuery = graphql`
    query pagesQuery {
      allSitePage(sort: { fields: path }) {
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

  const homeLinksWithHome = JSON.parse(JSON.stringify(homeLinks))

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

        // Special case for dev/applications to leave room for more in dev section (ie work, speaking, etc...)
        const highlight =
          currentPath === linkPath ||
          (currentPath.includes("dev/") &&
            linkPath.includes("dev/applications"))

        return (
          <React.Fragment key={title}>
            <Link
              className={highlight ? "sidebar-currentPage" : ""}
              to={linkPath}
            >
              {title.toLowerCase()}
            </Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default SideBar
