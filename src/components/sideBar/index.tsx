import React from "react"
import { graphql } from "gatsby"
import { Link, useStaticQuery } from "gatsby"
import { HomeLink, homeLinks } from "../../staticContent"
import { Query } from "../../generated/graphql-types"
import { sanitizeTitle } from "../../../utils"
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
        navLinks.push({
          title: sanitizeTitle(pathSplit[2]),
          path: path,
        } as sideBarLink)
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
      {pageString && <LinkBlock links={navLinks} />}
      <LinkBlock links={homeLinksWithHome} />
    </div>
  )
}

interface sideBarLink {
  title: string
  path: string
}

interface linkBlockProps {
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
