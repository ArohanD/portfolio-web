import React from "react"
import {
  ThumbNailContainer,
  ThumbNailContainerProps,
  thumbNailProps,
} from "../../components/thumbNailGallery"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Query, ImageSharp, Node } from "../../generated/graphql-types"
import SEO from "../../components/seo"
import "./photography.scss"
import { sanitizeTitle } from "../../../utils"
import Img from "gatsby-image"
import GallerySidebar from '../../components/sideBar'

const PhotoSplash: React.FC = () => {
  const photoSplashQuery = useStaticQuery(graphql`
    query PhotoSplash {
      allDirectory(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          relativePath
        }
      }
      allImageSharp {
        nodes {
          parent {
            ... on File {
              id
              name
              relativePath
            }
          }
          fixed(height: 350, width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `) as Query

  const rawDirectories = photoSplashQuery.allDirectory.nodes
  const rawImages = photoSplashQuery.allImageSharp.nodes

  const thumbNailData = rawDirectories.map(node => {
    const { relativePath } = node
    const thumbImage = matchImageNodeToPhoto(relativePath, rawImages)

    return {
      title: sanitizeTitle(relativePath.split("/").pop()),
      url: "/" + relativePath,
      img: thumbImage,
    } as thumbNailProps
  }) as Array<thumbNailProps>


  return (
    <div className={"photoSplash-body"}>
      <SEO title="Photography" />
      <h1 className="photoSplash-title">Photography</h1>
      <GallerySidebar pageString={'gallery'} />
      <ThumbNailContainer
        thumbNailData={thumbNailData}
        ThumbNailComponent={<PhotoThumbNail title={""} img={""} url={""} />}
      />
    </div>
  )
}

const PhotoThumbNail: React.FC<thumbNailProps> = ({ img, title, url }) => {
  return (
    <Link to={url} className={"photoThumbNail-link"}>
      <div className="photoThumbNail">
        <div className="photoThumbNail-title">{title}</div>
        <Img className="photoThumbNail-image" fixed={img} />
      </div>
    </Link>
  )
}

const matchImageNodeToPhoto = (
  relativePath: string,
  imageNodes: Array<Node>
) => {
  let returnImage
  imageNodes.forEach(image => {
    if (image.parent.relativePath.includes(relativePath))
      returnImage = image.fixed
  })
  return returnImage
}

export default PhotoSplash
