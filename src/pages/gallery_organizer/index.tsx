// In order to show changes, Gatsby currently has to be restarted.

import React, { useState, useEffect } from "react"
import {
  Query,
  ImageSharpFixed,
  ImageSharp,
} from "../../generated/graphql-types"
import { useStaticQuery, graphql } from "gatsby"
import { copy } from "../../../utils"
import Img from "gatsby-image"
import "./gallery_organizer.scss"
import { breakoutCategories, orderImages } from "./galleryUtils"

type adjustImageOrderProps = (
  category: string,
  currentPlace: number,
  newPlace: number
) => void

interface ImageOrgCardProps {
  fixedImage: ImageSharpFixed
  category: string
  adjustImageOrder: adjustImageOrderProps
  order: number
}

const GalleryOrganizer: React.FC = () => {
  const [imageOrder, setImageOrder] = useState({})

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
        const orderedImages = orderImages(categorizedImages)
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

  if (!Object.keys(imageOrder).length) return <div>Loading...</div>

  const saveOrder = () => {
    const strippedData = {}
    Object.keys(imageOrder).forEach(category => {
      const row = imageOrder[category] as Array<ImageSharpFixed>
      const newRow = row.map(imageNode => {
        const { fields, id } = imageNode
        return {
          fields,
          id,
        }
      })
      strippedData[category] = newRow
    })

    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strippedData),
    })
  }

  const adjustImageOrder: adjustImageOrderProps = (
    category,
    currentPlace,
    newPlace
  ) => {
    const row = copy(imageOrder[category]) as Array<ImageSharp>
    if (newPlace < 0 || newPlace >= row.length) return

    const imageNodeA = copy(row[currentPlace])
    const imageNodeB = copy(row[newPlace])

    row[currentPlace] = imageNodeB
    row[newPlace] = imageNodeA

    row[newPlace].fields.order = newPlace
    row[currentPlace].fields.order = currentPlace

    const newImageOrder = copy(imageOrder)
    newImageOrder[category] = row
    setImageOrder(newImageOrder)
  }

  const categories = Object.keys(imageOrder)

  console.log(photoOrderToolQuery)
  return (
    <div>
      <h1>Image Organizer</h1>
      <p>Updated state will not show unless Gatsby cache is re-built</p>
      {categories.map(category => {
        return (
          <React.Fragment key={category}>
            <h2>{category}</h2>
            <div className="organizer_category">
              {imageOrder[category].map((imageData, index) => {
                const imageFixed = photoOrderToolQuery.allImageSharp.nodes.find(
                  imageNode => imageNode.id === imageData.id
                )?.fixed
                return (
                  imageFixed && (
                    <ImageOrgCard
                      fixedImage={imageFixed}
                      category={category}
                      adjustImageOrder={adjustImageOrder}
                      order={index}
                      key={imageData.id}
                    />
                  )
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
  order,
}) => {
  return (
    <div className="organizer_card">
      <Img fixed={fixedImage} />
      <div className="organizer_image_card_options">
        <div onClick={() => adjustImageOrder(category, order, order - 1)}>
          ⬅️
        </div>
        <input
          type="text"
          defaultValue={order}
          className={"organizer_text_input"}
        />
        <div onClick={() => adjustImageOrder(category, order, order + 1)}>
          ➡️
        </div>
      </div>
    </div>
  )
}

export default GalleryOrganizer
