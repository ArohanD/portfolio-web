import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import MobileNav from "../components/mobileNav"
import Img from "gatsby-image"
import { Query, SitePageContext, File } from "../generated/graphql-types"
import { sanitizeTitle, copy } from "../../utils"
import GallerySideBar from "../components/sideBar"

import "./styles/galleryTemplate.scss"
import SideBarLayout from "../components/pageLayout"

interface GalleryPageProps {
  pageContext: SitePageContext
  data: Query
}

const GalleryPage: React.FC<GalleryPageProps> = ({ pageContext, data }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const gallery = data.allFile.nodes
  const galleryWidth = width * 0.8
  const columnWidth = window.innerWidth > 1680 ? 600 : 300
  let numCols = Math.floor(galleryWidth / columnWidth)

  if (width < 1000) numCols = 2

  let cols = getCols(numCols, gallery, columnWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <SideBarLayout
      title={sanitizeTitle(pageContext.title)}
      sideBarString={"gallery"}
    >
      <div className="gallery-column-container">
        {cols.map(column => (
          <GalleryColumn gallery={column} width={columnWidth} />
        ))}
      </div>

      <MobileNav URI={"/photo"} />
    </SideBarLayout>
  )
}

interface GalleryColumnProps {
  gallery: Array<any>
  width: number
}

const GalleryColumn: React.FC<GalleryColumnProps> = ({ gallery, width }) => {
  return (
    <div className="gallery-images-column" style={{ width: width }}>
      {gallery.map(node => (
        <React.Fragment key={node.fields.slug}>
          <Img fluid={node.childImageSharp.fluid} className={"gallery-image"} />
        </React.Fragment>
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
          exif {
            image {
              ImageDescription
              Make
              Model
              XResolution
              YResolution
              ResolutionUnit
              Software
              ModifyDate
              ExifOffset
              Orientation
              ImageWidth
              ImageHeight
              SamplesPerPixel
              YCbCrPositioning
              GPSInfo
            }
          }
        }
        childImageSharp {
          id
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
