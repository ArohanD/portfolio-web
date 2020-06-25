var exif = require("fast-exif")
exif
  .read("src/images/gallery/exiftest/Marfa-6420 (1).jpg")
  .then(exifData => {
    //if (exifData) console.log(exifData.exif)
    if (exifData && exifData.exif) {
      let bufferOne = Buffer.from(exifData.exif.UserComment)
      console.log(bufferOne.toString())
    }
  })
  .catch(console.error)
