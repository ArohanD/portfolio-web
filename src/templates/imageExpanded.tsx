import React from "react"
import {
  SitePageContext,
  Query,
  FileFieldsExifExif,
} from "../generated/graphql-types"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "./styles/imageExpanded.scss"

interface ImageProps {
  pageContext: SitePageContext
  data: Query
  location: Location
}

const ImageExpanded: React.FC<ImageProps> = ({
  pageContext,
  data,
  location,
}) => {
  const exifData = data.current.parent.fields.exif.exif as FileFieldsExifExif
  return (
    <div className="imagePage-container">
      <div className="imagePage-gallery-section">
        <Img
          fluid={data.current.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="imagePage-main-image"
          />
        <div className="imagePage-previews">
          <div>⬅️</div>
          {data.previous?.fixed && <Img
            fixed={data.previous.fixed}
            imgStyle={{ objectFit: "contain" }}
            className="imagePage-preview-image"
          />}
          <Img
            fixed={data.current.fixed}
            imgStyle={{ objectFit: "contain" }}
            className="imagePage-preview-image"
          />
          {data.next?.fixed && <Img
            fixed={data.next.fixed}
            imgStyle={{ objectFit: "contain" }}
            className="imagePage-preview-image"
          />}
          <div>➡️</div>
        </div>
      </div>
      <div className="imagePage-imageInfo-Wrapper">
        <ExifDisplay {...exifData} />
      </div>
    </div>
  )
}

const ExifDisplay: React.FC<FileFieldsExifExif> = ({
  ISO,
  DateTimeOriginal,
  ExposureTime,
  FNumber,
  FocalLength,
  FocalLengthIn35mmFormat,
  ShutterSpeedValue,
  ApertureValue,
}) => {
  console.log(ISO)
  return <div>EXIF</div>
}

export default ImageExpanded

export const imageQuery = graphql`
  query ImagePageQuery($imageQuery: String, $nextNode: String, $prevNode: String) {
    current: imageSharp(id: { eq: $imageQuery }) {
      id
      fluid(maxHeight: 1000) {
        originalName
        ...GatsbyImageSharpFluid
      }
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
      parent {
        ... on File {
          id
          name
          fields {
            exif {
              exif {
                ISO
                DateTimeOriginal
                ExposureTime
                FNumber
                FocalLength
                FocalLengthIn35mmFormat
                ShutterSpeedValue
                ApertureValue
              }
              image {
                GPSInfo
                Model
              }
            }
          }
        }
      }
    }
    next: imageSharp(id: { eq: $nextNode }) {
      id
      fluid(maxHeight: 150) {
        originalName
        ...GatsbyImageSharpFluid
      }
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    previous: imageSharp(id: { eq: $prevNode }) {
      id
      fluid(maxHeight: 150) {
        originalName
        ...GatsbyImageSharpFluid
      }
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
