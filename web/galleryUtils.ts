interface GalleryImageNode {
  id: string
  fields: {
    gallery?: string
    order: number
  }
}

const breakoutCategories = (imageNodes: Array<GalleryImageNode>) => {
  const imageDictionary: Record<string, Array<GalleryImageNode>> = {}
  imageNodes.forEach(imageNode => {
    const category = imageNode.fields.gallery
    if (category) {
      if (!imageDictionary[category]) imageDictionary[category] = []
      imageDictionary[category].push(imageNode)
    }
  })
  return imageDictionary
}

const orderImages = (
  categorizedImages: Record<string, Array<GalleryImageNode>>
) => {
  const newState: Record<string, Array<GalleryImageNode>> = {}
  const categories = Object.keys(categorizedImages)
  categories.forEach(category => {
    if (!newState[category]) {
      newState[category] = []
    }
    const IDMap = categorizedImages[category].map(imageNode => imageNode.id)
    const organizedCategory = categorizedImages[category].sort(
      (imageA, imageB) => {
        if (!IDMap.includes(imageA.id)) {
          return -1
        } else if (!IDMap.includes(imageB.id)) {
          return 1
        } else {
          return imageA.fields.order - imageB.fields.order
        }
      }
    )
    newState[category] = organizedCategory
  })
  return newState
}

export { breakoutCategories, orderImages }
