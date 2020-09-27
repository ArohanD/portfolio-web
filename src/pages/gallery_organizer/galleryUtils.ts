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

const orderImages = categorizedImages => {
  const newState = {}
  const categories = Object.keys(categorizedImages)
  categories.forEach(category => {
    if (!newState[category]) {
      newState[category] = []
    }
    const IDMap = categorizedImages[category].map(imageNode => imageNode.id)
    const organizedCategory = categorizedImages[category].sort(
      (imageA: Node, imageB: Node) => {
        if (!IDMap.includes(imageA.id)) {
          return -1
        } else if (!IDMap.includes(imageB.id)) {
          return 1
        } else {
          imageA.fields.order - imageB.fields.order
        }
      }
    )
    newState[category] = organizedCategory
  })
  return newState
}

export { breakoutCategories, orderImages }
