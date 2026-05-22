const galleryJSON = require("./galleryTrack.json")

// interface returnImageOrderProps {
//   id: string;
//   category: string;
// }

const returnImageOrder = (id, category) => {
  if (galleryJSON[category])
    return galleryJSON[category].map(image => image.id).indexOf(id)
  return -1
}

module.exports = { returnImageOrder }
