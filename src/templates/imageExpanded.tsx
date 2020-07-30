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
  const exifData = data.imageSharp.parent.fields.exif.exif as FileFieldsExifExif;
  return (
    <div className="imagePage-container">
      <Img
        fluid={data.imageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
        className="imagePage-container-image"
      />
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
  query ImagePageQuery($imageQuery: String) {
    imageSharp(id: { eq: $imageQuery }) {
      id
      fluid(maxHeight: 1000) {
        ...GatsbyImageSharpFluid
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
  }
`
