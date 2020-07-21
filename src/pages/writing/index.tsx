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
import SEO from "../../components/seo"

const WritingSplash: React.FC = () => {
  const writingSplashQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          rawMarkdownBody
          excerpt
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
            fixed(width: 350, height: 250) {
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
      url: node.parent.relativePath,
      description: node.excerpt,
      tags: [],
    } as thumbNailProps
  }) as Array<thumbNailProps>

  return (
    <div className="writingSplash-wrapper">
      <SEO title="Writing" />
      {/* <Sidebar /> */}
      <h1 className="writingSplash-title">Marketing & Creative Writing</h1>
      <ThumbNailContainer
        ThumbNailComponent={<WritingThumbNail title={""} img={""} url={""} />}
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
