import React from "react"
import SEO from "../components/seo"
import MobileNav from "../components/mobileNav"
import { MarkdownRemark, Query } from "../../graphql-types"
import SideBarLayout from "../components/pageLayout"
import "./styles/markdownTemplate.scss"
import { convertToSlug } from "../../utils"

interface PageContext {
  content: MarkdownRemark
}
interface NotionProps {
  pageContext: PageContext
  data: Query
}

const NotionPage: React.FC<NotionProps> = ({ pageContext }) => {
  const { frontmatter, html, excerpt } = pageContext.content
  const { title, heroImage } = frontmatter
  return (
    <SideBarLayout currentPath={convertToSlug(title)}>
      <article className="markdown-page-wrapper">
        <SEO
          title={title}
          description={excerpt}
          externalImage={heroImage.length ? heroImage[0].file.url : undefined}
        />
        <h1>{title}</h1>
        <div
          className={"markdown-wrapper"}
          dangerouslySetInnerHTML={{ __html: html }}
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
