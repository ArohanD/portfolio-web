import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import MobileNav from "../components/mobileNav"
import { Query, SitePageContext, File } from "../generated/graphql-types"
import { sanitizeTitle, copy } from "../../utils"
import "./styles/markdownTemplate.scss"

interface MarkdownPageProps {
  pageContext: SitePageContext
  data: Query
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ pageContext, data }) => {
  const images = data.allFile.nodes

  return (
    <div className="markdown-page-wrapper">
      <div
        className={"markdown-wrapper"}
        dangerouslySetInnerHTML={{ __html: pageContext.content.html }}
      ></div>
      <div className="markdown-images">
        {images.map(node => (
          <Img
            key={node.id}
            fixed={node.childImageSharp.fixed}
            className={"markdown-image"}
          />
        ))}
      </div>
      <MobileNav URI={"/writing"} />
    </div>
  )
}

export default MarkdownPage

export const markdownPageQuery = graphql`
  query mdImages($imageQuery: String) {
    allFile(filter: { relativeDirectory: { eq: $imageQuery } }) {
      nodes {
        childImageSharp {
          fixed(height: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`
