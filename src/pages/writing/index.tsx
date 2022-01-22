import React from "react"
import "./writingSplash.scss"
import {
  ThumbNailContainer,
  ThumbNailContainerProps,
  thumbNailProps,
} from "../../components/thumbNailGallery"
import { graphql, useStaticQuery } from "gatsby"
// import { Query, ImageSharp, Node } from "../../generated/graphql-types"
import { NotionPagesQuery, File } from "../../../graphql-types"
import WritingThumbNail from "../../components/thumbNailGallery/WritingThumbNail"
import SideBarLayout from "../../components/pageLayout"
import MobileNav from "../../components/mobileNav"
import { convertToSlug } from "../../../utils"

const WritingSplash: React.FC = () => {
  const writingSplashQuery = useStaticQuery(graphql`
    query NotionPages {
      allNotion {
        nodes {
          childMarkdownRemark {
            excerpt
            frontmatter {
              Tags {
                color
                name
              }
              Updated
              Created
              title
              Grouping
            }
            html
            timeToRead
          }
        }
        totalCount
      }
    }
  `) as NotionPagesQuery

  const rawQueryData = writingSplashQuery.allNotion.nodes

  const articleDictionary: { [key: string]: Array<thumbNailProps> } = {}
  rawQueryData.forEach(node => {
    const { childMarkdownRemark } = node
    const { Tags, title, Updated, Created, Grouping } =
      childMarkdownRemark.frontmatter
    const { excerpt, html, timeToRead } = childMarkdownRemark

    if (Tags.some(tag => tag.name === "Live")) {
      console.log(title)
      const article = {
        img: undefined,
        title: title,
        url: `writing/${Grouping}/${convertToSlug(title)}`,
        description: excerpt,
        tags: Tags.filter(tag => tag.name !== "Live"),
      } as thumbNailProps
      if (!articleDictionary[Grouping]) articleDictionary[Grouping] = []
      articleDictionary[Grouping].push(article)
    }
  })

  console.log(articleDictionary)
  // rawQueryData.forEach(node => {
  //   if (node.frontmatter.title === "") return
  //   // let thumbImage = matchImageNodeToMD(node.parent.name, rawQueryImages)

  //   const toPush = {
  //     img: undefined,
  //     title: node.frontmatter.title,
  //     url:
  //       node.parent.relativePath ||
  //       `writing/dev/` +
  //         node.frontmatter.title.split(" ").join("-").toLowerCase(),
  //     description: node.excerpt,
  //     tags: [],
  //   } as thumbNailProps
  //   thumbNailData.push(toPush)
  // })

  return (
    <SideBarLayout title="Writing" currentPath={"/writing/"}>
      <div className="writingSplash-wrapper">
        <h1 className="writingSplash-title">Marketing & Creative Writing</h1>
        <ThumbNailContainer
          ThumbNailComponent={<WritingThumbNail title={""} img={""} url={""} />}
          thumbNailData={articleDictionary.marketing}
        />
      </div>
      <MobileNav />
    </SideBarLayout>
  )
}

// const matchImageNodeToMD = (fileName: string, imageNodes: Array<File>) => {
//   let returnImage
//   imageNodes.forEach(image => {
//     let imagePath = image.relativeDirectory.split("/")
//     if (imagePath[imagePath.length - 1] === fileName)
//       returnImage = image.childImageSharp.fixed
//   })
//   return returnImage
// }

export default WritingSplash
