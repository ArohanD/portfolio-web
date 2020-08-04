const galleryJSON = require("./galleryTrack.json")

const returnImageOrder = (id, category) => {
  if (galleryJSON[category]) return galleryJSON[category].indexOf(id)
  return -1
}

module.exports = { returnImageOrder }
