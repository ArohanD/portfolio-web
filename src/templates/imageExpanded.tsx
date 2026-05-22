import React from "react"
import {
  SitePageContext,
  FileFieldsExifExif,
} from "../generated/graphql-types"
const Img: React.FC<any> = () => null
import "./styles/imageExpanded.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MobileNav from "../components/mobileNav"
import SEO from "../components/seo"

interface ImageProps {
  pageContext: SitePageContext
  data: any
}

const ImageExpanded: React.FC<ImageProps> = ({ pageContext, data }) => {
  const preAppendPath = pageContext.slug.split("/")
  preAppendPath.pop()

  let nextPath
  if (data.next) {
    nextPath = preAppendPath.slice()
    nextPath.push(
      data.next.fixed.originalName.split(".jpg")[0].split(" ").join("-")
    )
    nextPath = "/" + nextPath.join("/")
  }

  let prevPath
  if (data.previous) {
    prevPath = preAppendPath.slice()
    prevPath.push(
      data.previous.fixed.originalName.split(".jpg")[0].split(" ").join("-")
    )
    prevPath = "/" + prevPath.join("/")
  }

  // short circuits between swapping to flickr
  if (
    data.previous != null &&
    (data.previous?.fixed.originalName === "profile.jpg" ||
      data.previous?.fixed.originalName === "favicon-512x512.png")
  )
    data.previous = null

  if (
    data.next != null &&
    (data.next?.fixed.originalName === "profile.jpg" ||
      data.next?.fixed.originalName === "favicon-512x512.png")
  )
    data.next = null

  let exifData
  exifData = data.current.parent.fields.exif
    ? (data.current.parent.fields.exif.exif as FileFieldsExifExif)
    : undefined
  return (
    <div className="imagePage-container">
      <SEO
        title={data.current.fluid.originalName}
        image={data.current.metaImage.src}
      />
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
        {exifData && <ExifDisplay {...exifData} />}
        <AniLink to={`/photography/${data.current.fields.gallery}`}>
          <p className="imagePage-imageInfo-back">⬅️ Back to Gallery</p>
        </AniLink>
      </div>
      <MobileNav type={"photo"} alt />
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
  return <div>EXIF (coming soon)</div>
}

export default ImageExpanded

// Page query commented out — image-detail pages are not created when there
// are no local images, so Gatsby flags an exported query on a template that
// no page references. Re-introduce when images are present (Phase 3 rewrites this).
// export const imageQuery = graphql`
//   query ImagePageQuery(
//     $imageQuery: String
//     $nextNode: String
//     $prevNode: String
//   ) {
//     current: imageSharp(id: { eq: $imageQuery }) {
//       id
//       fields {
//         gallery
//       }
//       parent {
//         ... on File {
//           id
//           name
//           fields {
//             exif {
//               exif {
//                 ISO
//                 DateTimeOriginal
//                 ExposureTime
//                 FNumber
//                 FocalLength
//                 FocalLengthIn35mmFormat
//                 ShutterSpeedValue
//                 ApertureValue
//               }
//               image {
//                 GPSInfo
//                 Model
//               }
//             }
//           }
//         }
//       }
//     }
//     next: imageSharp(id: { eq: $nextNode }) {
//       id
//     }
//     previous: imageSharp(id: { eq: $prevNode }) {
//       id
//     }
//   }
// `
