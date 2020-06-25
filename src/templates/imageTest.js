import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ImageTest = props => {
  console.log(props.pageContext)
  const gallery = props.data.allFile.nodes
  console.log(gallery)
  gallery.map(node => (
    console.log('n', node.childImageSharp.fixed) 
  ))
  return (
    <div>
      <SEO title={props.pageContext.title} />
      {gallery.map(node => (
        <Img alt="Test Photo" fluid={node.childImageSharp.fluid} />
      ))}
    </div>
  )
}

export default ImageTest

export const imageQuery = graphql`
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
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
