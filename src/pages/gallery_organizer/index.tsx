import React, { useState, useEffect } from "react"
import {
  Query,
  Node,
  ImageSharpFixed,
  ImageSharp,
} from "../../generated/graphql-types"
import { useStaticQuery, graphql } from "gatsby"
import { copy } from "../../../utils"
import Img from "gatsby-image"
import "./gallery_organizer.scss"

const GalleryOrganizer: React.FC = () => {
  const [imageOrder, setImageOrder] = useState({})
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
      .then(() => {
        const categorizedImages = breakoutCategories(
          photoOrderToolQuery.allImageSharp.nodes
        )
        const orderedImages = orderImages(imageOrder, categorizedImages)
        setImageOrder(orderedImages)
      })
  }, [])

  const photoOrderToolQuery = useStaticQuery(graphql`
    query photoOrderToolQuery {
      allImageSharp(sort: { fields: fields___order }) {
        nodes {
          fields {
            gallery
            order
          }
          id
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `) as Query

  const AllIDMap = photoOrderToolQuery.allImageSharp.nodes.map(
    imageNode => imageNode.id
  )
  console.log(AllIDMap)

  const saveOrder = () => {
    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageOrder),
    })
  }

  const categories = Object.keys(imageOrder)
  console.log(imageOrder)
  return (
    <div>
      {categories.map(category => {
        return (
          <React.Fragment>
            <h2>{category}</h2>
            <div className="organizer_category" key={category}>
              {imageOrder[category].map(imageData => {
                const imageFixed = photoOrderToolQuery.allImageSharp.nodes.find(
                  imageNode => imageNode.id === imageData.id
                )
                return <ImageOrgCard imageNode={imageFixed} />
              })}
            </div>
          </React.Fragment>
        )
      })}
      <button onClick={() => saveOrder()}>Save</button>
    </div>
  )
}

interface ImageOrgCardProps {
  imageNode: ImageSharp
}

const ImageOrgCard: React.FC<ImageOrgCardProps> = ({ imageNode }) => {
  return (
    <div className="organizer_card">
      <Img fixed={imageNode.fixed} />
      <div className="organizer_imageCardOptions">
        <div>{imageNode.fields.order}</div>
      </div>
    </div>
  )
}

const breakoutCategories = (imageNodes: Array<Node>) => {
  const imageDictionary = {}
  imageNodes.forEach(imageNode => {
    const category = imageNode.fields.gallery
    if (category) {
      if (!imageDictionary[category]) imageDictionary[category] = []
      imageDictionary[category].push(imageNode)
    }
  })
  return imageDictionary
}

const orderImages = (imageOrder, categorizedImages) => {
  const newState = copy(imageOrder)
  const categories = Object.keys(categorizedImages)
  categories.forEach(category => {
    if (!newState[category]) {
      newState[category] = []
    }
    const IDMap = newState[category].map(imageNode => imageNode.id)
    const organizedCategory = categorizedImages[category].sort(
      (imageA: Node, imageB: Node) => {
        if (!IDMap.includes(imageA.id)) {
          return -1
        } else if (!IDMap.includes(imageB.id)) {
          return 1
        } else {
          IDMap.indexOf(imageA.id) - IDMap.indexOf(imageA.id)
        }
      }
    )
    newState[category] = organizedCategory
  })
  return newState
}

export default GalleryOrganizer
