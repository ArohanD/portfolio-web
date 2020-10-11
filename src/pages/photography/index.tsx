import React from "react"
import {
  ThumbNailContainer,
  ThumbNailContainerProps,
  thumbNailProps,
} from "../../components/thumbNailGallery"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Query, ImageSharp, Node } from "../../generated/graphql-types"
import "./photography.scss"
import { sanitizeTitle } from "../../../utils"
import Img from "gatsby-image"
import SideBarLayout from "../../components/pageLayout"
import MobileNav from "../../components/mobileNav"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PhotoSplash: React.FC = () => {
  const photoSplashQuery = useStaticQuery(graphql`
    query PhotoSplash {
      allDirectory(filter: { relativeDirectory: { eq: "photography" } }) {
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
          fields {
            gallery
            order
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
    <SideBarLayout
      title={"photography"}
      sideBarString={"photography"}
      currentPath={"/photography/"}
    >
      <div className={"photoSplash-body"}>
        <h1 className="photoSplash-title">Photography</h1>
        <ThumbNailContainer
          thumbNailData={thumbNailData}
          ThumbNailComponent={<PhotoThumbNail title={""} img={""} url={""} />}
        />
      </div>
      <MobileNav />
    </SideBarLayout>
  )
}

const PhotoThumbNail: React.FC<thumbNailProps> = ({ img, title, url }) => {
  return (
    <AniLink to={url} className={"photoThumbNail-link"} >
      <div className="photoThumbNail">
        <div className="photoThumbNail-title">{title}</div>
        {img && <Img className="photoThumbNail-image" fixed={img} />}
      </div>
    </AniLink>
  )
}

const matchImageNodeToPhoto = (
  relativePath: string,
  imageNodes: Array<Node>
) => {
  let returnImage
  imageNodes.forEach(image => {
    console.log(image.fields.order)
    if (image.parent.relativePath.includes(relativePath) && image.fields.order === 0) {
      returnImage = image.fixed
    }
  })
  // Allow an image to be returned if order has not been set yet in gallery_organizer
  if (!returnImage) {
    imageNodes.forEach(image => {
      console.log(image.fields.order)
      if (image.parent.relativePath.includes(relativePath)) {
        returnImage = image.fixed
      }
    })
  }
  return returnImage
}

export default PhotoSplash
