import React, { useState } from "react"
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

interface ArticleDictionary {
  [key: string]: Array<thumbNailProps>
}
interface ArticlePickerProps {
  articleDictionary: ArticleDictionary
  currentCategory: string
  changeCategory: (category: string) => void
}

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
      const article = {
        img: undefined,
        title: title,
        url: `writing/${Grouping}/${convertToSlug(title)}`,
        description: excerpt,
        tags: Tags.filter(tag => tag.name !== "Live"),
        timeToRead,
        updated: Updated,
      } as thumbNailProps
      if (!articleDictionary[Grouping]) articleDictionary[Grouping] = []
      articleDictionary[Grouping].push(article)
    }
  })

  const [articles, setArticles] = useState<Array<thumbNailProps>>(
    articleDictionary.dev
  )
  const [currentCategory, setCurrentCategory] = useState("dev")

  const changeCategory = (category: string) => {
    setCurrentCategory(category)
    setArticles(articleDictionary[category])
  }

  return (
    <SideBarLayout title="Writing" currentPath={"/writing/"}>
      <div className="writingSplash-wrapper">
        <ArticlePicker
          articleDictionary={articleDictionary}
          changeCategory={changeCategory}
          currentCategory={currentCategory}
        />
        <ThumbNailContainer
          ThumbNailComponent={
            <WritingThumbNail
              title={""}
              img={""}
              url={""}
              tags={[]}
              timeToRead={0}
              updated=""
            />
          }
          thumbNailData={articles}
        />
      </div>
      <MobileNav />
    </SideBarLayout>
  )
}

const ArticlePicker: React.FC<ArticlePickerProps> = ({
  articleDictionary,
  currentCategory,
  changeCategory,
}) => {
  const categories = Object.keys(articleDictionary).reverse()
  return (
    <ul className="articlePicker">
      {categories.map(category => (
        <li
          className={`articleCategory ${
            currentCategory === category ? "articleHighlight" : ""
          }`}
          key={category}
          onClick={() => changeCategory(category)}
        >
          <h2>{category}</h2>
        </li>
      ))}
    </ul>
  )
}

export default WritingSplash
