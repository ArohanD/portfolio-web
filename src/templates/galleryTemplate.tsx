import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Query, SitePageContext, File } from "../generated/graphql-types"
import { sanitizeTitle, copy } from "../../utils"
import GallerySideBar from "../components/gallerySideBar"

import "./styles/galleryTemplate.scss"

interface GalleryPageProps {
  pageContext: SitePageContext
  data: Query
}

const GalleryPage: React.FC<GalleryPageProps> = ({ pageContext, data }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const gallery = data.allFile.nodes
  const columnWidth = 300
  const galleryWidth = width * 0.8
  let numCols = Math.floor(galleryWidth / columnWidth)

  if (width < 1000) numCols = 2

  let cols = getCols(numCols, gallery)

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <SEO title={sanitizeTitle(pageContext.title)} />
      <div className="gallery-content-wrapper">
        <GallerySideBar />

        <div className="gallery-column-container">
          {cols.map(column => (
            <GalleryColumn gallery={column} width={columnWidth} />
          ))}
        </div>
      </div>
    </div>
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

const getCols = (numCols: number, gallery: Array<File>) => {
  let columnArray = new Array(numCols).fill('x').map(spot => ({ heightSum: 0, colArray: []}))
  let galleryCopy = copy(gallery)

  let currentPos = 0
  while (galleryCopy.length > 0) {
    columnArray[currentPos].colArray.push(galleryCopy.shift())
    if(currentPos < numCols - 1) {
      currentPos++;
    } else {
      currentPos = 0;
    }
  }
  const returnArray = columnArray.map(col => col.colArray)
  return returnArray as Array<Array<File>>
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
