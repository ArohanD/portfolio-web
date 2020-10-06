import React from "react"
import {
  SitePageContext,
  Query,
  FileFieldsExifExif,
} from "../generated/graphql-types"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import "./styles/imageExpanded.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

interface ImageProps {
  pageContext: SitePageContext
  data: Query
}

const ImageExpanded: React.FC<ImageProps> = ({
  pageContext,
  data,
}) => {
  const preAppendPath = pageContext.slug.split("/")
  preAppendPath.pop()

  let nextPath
  if (data.next) {
    nextPath = preAppendPath.slice()
    nextPath.push(data.next.fixed.originalName)
    nextPath = '/' + nextPath.join("/")
  }

  let prevPath
  if (data.previous) {
    prevPath = preAppendPath.slice()
    prevPath.push(data.previous.fixed.originalName)
    prevPath = '/' + prevPath.join("/")
  }

  const exifData = data.current.parent.fields.exif.exif as FileFieldsExifExif
  return (
    <div className="imagePage-container">
      <div className="imagePage-gallery-section">
        <Img
          fluid={data.current.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="imagePage-main-image"
        />
        </div>
        <div className="imagePage-previews">
          {data.previous?.fixed && (
            <React.Fragment>
              <AniLink to={prevPath}>
                <div>⬅️</div>
              </AniLink>
              <AniLink to={prevPath}>
                <Img
                  fixed={data.previous.fixed}
                  imgStyle={{ objectFit: "contain" }}
                  className="imagePage-preview-image"
                />
              </AniLink>
            </React.Fragment>
          )}
          <Img
            fixed={data.current.fixed}
            imgStyle={{ objectFit: "contain" }}
            className="imagePage-preview-image"
          />
          {data.next?.fixed && (
            <React.Fragment>
              <AniLink to={nextPath}>
                <Img
                  fixed={data.next.fixed}
                  imgStyle={{ objectFit: "contain" }}
                  className="imagePage-preview-image"
                />
              </AniLink>
              <AniLink to={nextPath}>
                <div>➡️</div>
              </AniLink>
            </React.Fragment>
          )}
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
  query ImagePageQuery(
    $imageQuery: String
    $nextNode: String
    $prevNode: String
  ) {
    current: imageSharp(id: { eq: $imageQuery }) {
      id
      fluid(maxWidth: 800, quality: 80) {
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
        originalName
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
        originalName
        ...GatsbyImageSharpFixed
      }
    }
  }
`
