import React from "react"
import "./writingSplash.scss"
import {
  ThumbNailContainer,
  ThumbNailContainerProps,
  thumbNailProps,
} from "../../components/thumbNailGallery"
import { graphql, useStaticQuery } from "gatsby"
import { Query, ImageSharp, Node } from "../../generated/graphql-types"
import WritingThumbNail from "./WritingThumbNail"

const WritingSplash: React.FC = () => {
  const writingSplashQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          rawMarkdownBody
          excerptAst
          parent {
            ... on File {
              name
              relativePath
            }
          }
        }
      }
      allFile(filter: { relativeDirectory: { regex: "/writing/" } }) {
        nodes {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
          relativePath
          relativeDirectory
          publicURL
        }
      }
    }
  `) as Query

  const rawQueryData = writingSplashQuery.allMarkdownRemark.nodes
  const rawQueryImages = writingSplashQuery.allFile.nodes

  const thumbNailData = rawQueryData.map(node => {
    let thumbImage = matchImageNodeToMD(node.parent.name, rawQueryImages)

    return {
      img: thumbImage,
      title: node.frontmatter.title,
      url: "",
      description: "",
      tags: [],
    } as thumbNailProps
  }) as Array<thumbNailProps>

  return (
    <div className="writingSplash-wrapper">
      {/* <Sidebar /> */}
      <ThumbNailContainer
        ThumbNailComponent={<WritingThumbNail title={""} img={""} />}
        thumbNailData={thumbNailData}
      />
    </div>
  )
}

const matchImageNodeToMD = (fileName: string, imageNodes: Array<Node>) => {
  let returnImage
  imageNodes.forEach(image => {
    let imagePath = image.relativeDirectory.split("/")
    if (imagePath[imagePath.length - 1] === fileName)
      returnImage = image.childImageSharp.fixed
  })
  return returnImage
}

export default WritingSplash
