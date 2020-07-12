import React from "react"
import { graphql } from "gatsby"
import { Link, useStaticQuery } from "gatsby"
import { HomeLink, homeLinks } from "../staticContent"
import { Query } from "../generated/graphql-types"
import { sanitizeTitle, copy } from "../../utils"

const GallerySideBar: React.FC = () => {
  const galleryNavQuery = useStaticQuery(graphql`
    query galleryLinkQuery {
      allDirectory(filter: { relativePath: { regex: "/gallery//" } }) {
        nodes {
          name
          relativePath
        }
      }
    }
  `) as Query

  const queryLinks = galleryNavQuery.allDirectory.nodes
  const galleryNavLinks = []

  queryLinks.map(({ name, relativePath }) => {
    galleryNavLinks.push({
      title: sanitizeTitle(name),
      path: relativePath,
    } as galleryLink)
  })

  const homeLinksWithHome = copy(homeLinks)

  homeLinksWithHome.unshift({
    title: "Home",
    path: "/",
    backgroundImageSlug: `home`,
    textColor: "#68281B",
    imagePath: "",
  } as HomeLink)

  return (
    <div className="gallery-sidebar-container">
      <LinkBlock links={galleryNavLinks} />
      <LinkBlock links={homeLinksWithHome} />
    </div>
  )
}

interface galleryLink {
  title: string
  path: string
}

interface linkBlockProps {
  links: Array<galleryLink> | Array<HomeLink>
}

const LinkBlock: React.FC<linkBlockProps> = ({ links }) => {
  console.log(links)
  return (
    <div className="gallery-linkBlock">
      {links.map(({ path, title }) => {
        console.log()

        if(title === 'Photo') return null;

        let linkPath = path[0] === '/' ? path : `/${path}/`;

        return (
          <React.Fragment key={title}>
            <Link to={linkPath}>{title.toLowerCase()}</Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default GallerySideBar
