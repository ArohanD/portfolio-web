import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Query, SitePageContext } from "../generated/graphql-types"
import { sanitizeTitle } from "../../utils"
import GallerySideBar from "../components/gallerySideBar"

import "./styles/galleryTemplate.scss"

interface GalleryPageProps {
  pageContext: SitePageContext
  data: Query
}

const GalleryPage: React.FC<GalleryPageProps> = ({ pageContext, data }) => {
  const gallery = data.allFile.nodes

  return (
    <div>
      <SEO title={sanitizeTitle(pageContext.title)} />
      <div className="gallery-content-wrapper">
        <GallerySideBar />

        <div className="gallery-column-container">
          <GalleryColumn gallery={gallery} />
          <GalleryColumn gallery={gallery} />
          <GalleryColumn gallery={gallery} />
        </div>
      </div>
    </div>
  )
}

interface GalleryColumnProps {
  gallery: Array<any>
}

const GalleryColumn: React.FC<GalleryColumnProps> = ({ gallery }) => {

  return (
    <div className="gallery-images-column">
      {gallery.map(node => (
        <React.Fragment key={node.fields.slug}>
          <Img fixed={node.childImageSharp.fixed} className={"gallery-image"} />
        </React.Fragment>
      ))}
    </div>
  )
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
