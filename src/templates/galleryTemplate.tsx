import React, { useEffect, useState, createRef } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import MobileNav from "../components/mobileNav"
import Img from "gatsby-image"
import { Query, SitePageContext, File } from "../generated/graphql-types"
import { sanitizeTitle, copy } from "../../utils"
import GallerySideBar from "../components/sideBar"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./styles/galleryTemplate.scss"
import SideBarLayout from "../components/pageLayout"

interface GalleryPageProps {
  pageContext: SitePageContext
  data: Query
  location: Location
}

const GalleryPage: React.FC<GalleryPageProps> = ({ pageContext, data }) => {
  // Display mobile nav on scroll
  const scrollRef = createRef()
  const [scrollPos, setScrollPos] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  // Render gallery columns
  const [width, setWidth] = useState(0)
  let gallery = data.allFile.nodes
  gallery = gallery.sort(
    (NodeA, NodeB) =>
      NodeA.childImageSharp.fields.order - NodeB.childImageSharp.fields.order
  )

  const galleryWidth = width * 0.8
  const columnWidth = width > 1680 ? 600 : 300
  let numCols = Math.floor(galleryWidth / columnWidth)

  if (width < 1000) numCols = 2

  let cols = getCols(numCols, gallery, columnWidth)

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

  if (width === 0) return <div></div>

  const title = sanitizeTitle(pageContext.title)

  return (
    <SideBarLayout
      title={title}
      sideBarString={"photography"}
      currentPath={window ? location.pathname : ""}
    >
      {window && window.innerWidth < 900 && <h1 className="gallery-title">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>}
      <div
        className="gallery-column-container"
        ref={scrollRef}
        onScroll={() => {
          setPrevScrollPos(scrollPos)
          setScrollPos(scrollRef.current.scrollTop)
        }}
      >
        {cols.map((column, index) => (
          <GalleryColumn gallery={column} width={columnWidth} key={index} />
        ))}
      </div>
      {scrollPos <= prevScrollPos && <MobileNav type="photo" />}
    </SideBarLayout>
  )
}

interface GalleryColumnProps {
  gallery: Array<Array<File>> | Array<any>
  width: number
}

const GalleryColumn: React.FC<GalleryColumnProps> = ({ gallery, width }) => {
  return (
    <div className="gallery-images-column" style={{ width: width }}>
      {gallery.map(node => (
        <AniLink to={"/" + node.relativePath} key={node.childImageSharp.id}>
          <Img fluid={node.childImageSharp.fluid} className={"gallery-image"} />
        </AniLink>
      ))}
    </div>
  )
}

interface columnWithTracking {
  heightSum: number
  colArray: Array<File>
}

const getCols = (
  numCols: number,
  gallery: Array<File>,
  columnWidth: number
) => {
  let columnArray = new Array(numCols)
    .fill("x")
    .map(spot => ({ heightSum: 0, colArray: [] } as columnWithTracking))
  let galleryCopy = copy(gallery)

  while (galleryCopy.length > 0) {
    let addIndex = returnShortestCol(columnArray)
    let addImage = galleryCopy.shift() as File
    columnArray[addIndex].colArray.push(addImage)
    columnArray[addIndex].heightSum +=
      columnWidth / addImage.childImageSharp.fluid.aspectRatio
  }
  const returnArray = columnArray.map(col => col.colArray)
  return returnArray as Array<Array<File>>
}

const returnShortestCol = (columns: Array<columnWithTracking>) => {
  let minIndex = 0
  let minHeight = columns[0].heightSum
  columns.forEach((col, index) => {
    if (col.heightSum < minHeight) {
      minHeight = col.heightSum
      minIndex = index
    }
  })
  return minIndex
}

export default GalleryPage

export const galleryPageQuery = graphql`
  query galleryData($queryRegex: String) {
    allFile(filter: { fields: { slug: { regex: $queryRegex } } }) {
      nodes {
        fields {
          slug
        }
        childImageSharp {
          id
          fields {
            order
          }
          fluid(maxWidth: 350, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
        relativePath
      }
    }
  }
`
