import React, { useState, useEffect } from "react"
import { Query } from "../../generated/graphql-types"
import { useStaticQuery, graphql } from "gatsby"

const GalleryOrganizer: React.FC = () => {
  const [imageOrder, setImageOrder] = useState([])
  if (!imageOrder) return <div>Loading...</div>

  useEffect(() => {
    fetch("http://localhost:3000", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setImageOrder(data))
  }, [])

  const photoSplashQuery = useStaticQuery(graphql`
    query photoOrderToolQuery {
      allImageSharp(sort: { fields: fields___order }) {
        nodes {
          fields {
            gallery
            order
          }
          id
          fluid {
            originalName
          }
        }
      }
    }
  `) as Query

  console.log(photoSplashQuery)

  return <div>Insert images here</div>
}

export default GalleryOrganizer
