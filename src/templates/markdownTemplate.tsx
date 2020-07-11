import React from 'react'
import { graphql } from "gatsby"
import SEO from "../components/seo"
import MobileNav from "../components/mobileNav"
import { Query, SitePageContext, File } from "../generated/graphql-types"
import { sanitizeTitle, copy } from "../../utils"

interface MarkdownPageProps {
  pageContext: SitePageContext
  data: Query
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({pageContext, data}) => {
  console.log(pageContext)
  return (
  <div dangerouslySetInnerHTML={{__html: pageContext.content.html}} ></div>
  )
}

export default MarkdownPage;