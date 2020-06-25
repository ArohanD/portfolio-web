/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath, createFileNode } = require("gatsby-source-filesystem")
const exif = require("fast-exif")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.sourceInstanceName === "images" && node.extension === "jpg") {
    //console.log(node)
    const imagePath = "src/images/" + node.relativePath

    const slug = createFilePath({ node, getNode, basePath: `gallery-image` })

    createNodeField({
      node,
      name: `slug`,
      value: `${slug}`,
    })

    exif
      .read(imagePath)
      .then(exifData => {
        if (exifData) {
          createNodeField({
            node,
            name: "exif",
            value: exifData,
          })
        }
      })
      .catch(console.error)
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allDirectory(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          relativePath
        }
      }
    }
  `).then(result => {
    if (result.errors) console.log(result.errors)

    let galleryPages = result.data.allDirectory.nodes
    const imagePageTemplate = path.resolve("./src/templates/galleryTemplate.tsx")

    galleryPages.forEach(node => {
      const leaf = node.relativePath.split('/')[1]
      const pageQuery = `/${leaf}/`;
      
      createPage({
        path: node.relativePath,
        component: imagePageTemplate,
        context: {
          slug: node.relativePath,
          queryRegex: pageQuery,
          title: leaf
        },
      })
    })

  })
}
