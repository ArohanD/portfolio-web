import React from "react"
import { graphql } from "gatsby"
import { Link, useStaticQuery } from "gatsby"
import { HomeLink, homeLinks } from "../../staticContent"
import { Query } from "../../generated/graphql-types"
import { sanitizeTitle, isNotNavDupe } from "../../../utils"
import "./sidebar.scss"

interface SideBarProps {
  pageString?: string
}

const SideBar: React.FC<SideBarProps> = ({ pageString }) => {
  const pageQuery = graphql`
    query pagesQuery {
      allSitePage(filter: {}) {
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
    queryLinks.map(({ path }) => {
      const pathSplit = path.split("/")
      console.log(pathSplit)
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
        {pageString && <LinkBlock links={navLinks} />}
        {navLinks.length > 5 && <div style={{marginBottom: 50}} />}
        <LinkBlock links={homeLinksWithHome} />
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
}

const LinkBlock: React.FC<linkBlockProps> = ({ links }) => {
  return (
    <div className="gallery-linkBlock">
      {links.map(({ path, title }) => {
        if (title === "Photo") return null

        let linkPath = path[0] === "/" ? path : `/${path}/`

        return (
          <React.Fragment key={title}>
            <Link to={linkPath}>{title.toLowerCase()}</Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default SideBar
