import React from "react"
import { thumbNailProps } from "../../components/thumbNailGallery"
import { useStaticQuery, graphql } from "gatsby"
import { ImageSharp, Query } from "../../generated/graphql-types"
import Img from "gatsby-image"

const WritingThumbNail: React.FC<thumbNailProps> = ({
  img,
  title,
  description,
  tags,
}) => {
  const placeHolderQuery = useStaticQuery(graphql`
    query {
      imageSharp(id: { eq: "3d8a7415-4106-5636-bf3e-94cd22d16b47" }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `) as Query

  const placeholder = placeHolderQuery.imageSharp.fixed

  return (
    <div className="writingSplash-card">
      <Img fixed={img || placeholder} />
      <h2 className="writingSplash-title">{title}</h2>
      <p className="writingSplash-description">{description}</p>
    </div>
  )
}

export default WritingThumbNail
