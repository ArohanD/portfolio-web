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

type adjustImageOrderProps = (
  category: string,
  currentPlace: number,
  newPlace: number,
) => void

interface ImageOrgCardProps {
  fixedImage: ImageSharpFixed
  category: string
  adjustImageOrder: adjustImageOrderProps
  order: number
}

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

  const saveOrder = () => {
    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageOrder),
    })
  }

  const adjustImageOrder: adjustImageOrderProps = (
    category,
    currentPlace,
    newPlace,
  ) => {
    console.log(newPlace, currentPlace)
    const row = copy(imageOrder[category]) as Array<ImageSharp>
    if (newPlace < 0 || newPlace >= row.length) return

    const imageNodeA = copy(row[currentPlace])
    const imageNodeB = copy(row[newPlace])

    row[currentPlace] = imageNodeB;
    row[newPlace] = imageNodeA;

    row[newPlace].fields.order = newPlace;
    row[currentPlace].fields.order = currentPlace;

    const newImageOrder = copy(imageOrder)
    newImageOrder[category] = row;
    console.log(imageOrder[category], row)
    setImageOrder(newImageOrder)

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
              {imageOrder[category].map((imageData, index) => {
                const imageFixed = photoOrderToolQuery.allImageSharp.nodes.find(
                  imageNode => imageNode.id === imageData.id
                ).fixed
                return (
                  <ImageOrgCard
                    fixedImage={imageFixed}
                    category={category}
                    adjustImageOrder={adjustImageOrder}
                    order={index}
                  />
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
      <button onClick={() => saveOrder()}>Save</button>
    </div>
  )
}

const ImageOrgCard: React.FC<ImageOrgCardProps> = ({
  fixedImage,
  category,
  adjustImageOrder,
  order
}) => {
  return (
    <div className="organizer_card">
      <Img fixed={fixedImage} />
      <div className="organizer_image_card_options">
        <div
          onClick={() =>
            adjustImageOrder(category, order, order - 1)
          }
        >
          ⬅️
        </div>
        <input type="text" value={order} className={'organizer_text_input'} />
        <div
          onClick={() =>
            adjustImageOrder(category, order, order + 1)
          }
        >
          ➡️
        </div>
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
