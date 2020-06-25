import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { PageProps } from "gatsby"
import { Query, SitePageContext } from "../generated/graphql-types"

interface GalleryPageProps {
  pageContext: SitePageContext
  data: Query
}

const GalleryPage: React.FC<GalleryPageProps> = ({ pageContext, data }) => {
  const queryData = data as Query
  const gallery = queryData.allFile.nodes

  return (
    <div>
      <SEO title={pageContext.title} />
      {gallery.map(node => (
        <Img fluid={node.childImageSharp.fluid} />
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
          fixed {
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
