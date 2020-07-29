import React from "react"
import { SitePageContext, Query } from "../generated/graphql-types"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import './styles/imageExpanded.scss'

interface ImageProps {
  pageContext: SitePageContext
  data: Query
  location: Location
}

const ImageExpanded: React.FC<ImageProps> = ({
  pageContext,
  data,
  location,
}) => {
  console.log(process.env)
  return (
    <div className='imagePage-container'>
      <Img fluid={data.imageSharp.fluid} />
    </div>
  )
}

export default ImageExpanded

export const imageQuery = graphql`
  query ImagePageQuery($imageQuery: String) {
    imageSharp(id: { eq: $imageQuery }) {
      id
      fluid(maxHeight: 1000, cropFocus: CENTER, fit: CONTAIN) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
