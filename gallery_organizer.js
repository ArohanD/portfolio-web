// Simple server for writing image order to json file
const express = require("express")
const cors = require('cors')
const fs = require("fs")
const app = express()
const path = require("path")
const port = 3000

app.use(cors())

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./galleryTrack.json"), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.post("/*", function (req, res) {
  fs.writeFile('test.json', JSON.stringify("test-data"), err => {
    if (err) res.send(err)
    res.send("new order saved")
  })
})

app.listen(port, () =>
  console.log(`Image order writer is live on port: ${port}`)
)
