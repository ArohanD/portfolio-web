import React from "react"
import SEO from "../components/seo"
import MobileNav from "../components/mobileNav"
import { MarkdownRemark, Query } from "../../graphql-types"
import SideBarLayout from "../components/pageLayout"
import "./styles/markdownTemplate.scss"

interface PageContext {
  content: MarkdownRemark
}
interface NotionProps {
  pageContext: PageContext
  data: Query
}

const NotionPage: React.FC<NotionProps> = ({ pageContext }) => {
  // const images = data.allFile.nodes
  console.log(pageContext)

  return (
    <SideBarLayout
      currentPath={pageContext.content.frontmatter.title
        .split(" ")
        .join("-")
        .toLowerCase()}
      sideBarString="dev"
    >
      <article className="markdown-page-wrapper">
        <SEO title={pageContext.content.frontmatter.title} />
        <h1>{pageContext.content.frontmatter.title}</h1>
        <div
          className={"markdown-wrapper"}
          dangerouslySetInnerHTML={{ __html: pageContext.content.html }}
        ></div>
        {/* <article className="markdown-images">
        {/* {images.map(node => (
          <Img
            key={node.id}
            fixed={node.childImageSharp.fixed}
            className={"markdown-image"}
          />
        ))} */}
        <MobileNav type={"writing"} />
      </article>
    </SideBarLayout>
  )
}

export default NotionPage
