import React from "react"
import { thumbNailProps } from "."
import { useStaticQuery, graphql, Link } from "gatsby"
import { ImageSharp, Query } from "../../generated/graphql-types"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { convertStringToDate } from "../../../utils"

const WritingThumbNail: React.FC<thumbNailProps> = ({
  img,
  title,
  description,
  tags,
  url,
  updated,
  timeToRead,
}) => {
  const placeHolderQuery = useStaticQuery(graphql`
    query {
      imageSharp(id: { eq: "3d8a7415-4106-5636-bf3e-94cd22d16b47" }) {
        fixed(width: 350, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `) as Query

  const placeholder = placeHolderQuery.imageSharp.fixed
  return (
    <div className="writingSplash-card">
      <Img className="writingSplash-card-image" fixed={img || placeholder} />
      <h2 className="writingSplash-card-title">{title}</h2>
      <p className="writingSplash-card-meta">
        {`Updated: ${convertStringToDate(updated)} | ${timeToRead} min read`}
      </p>
      <p className="writingSplash-card-description">{description}</p>
      <AniLink to={"/" + url}>
        <button className="writingSplash-button">Read More</button>
      </AniLink>
    </div>
  )
}

export default WritingThumbNail
