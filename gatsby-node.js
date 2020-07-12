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

  // GALLERY PAGES
  const galleryPages = graphql(`
    {
      allDirectory(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          relativePath
        }
      }
    }
  `).then(result => {
    if (result.errors) console.log(result.errors)

    let galleryPageNodes = result.data.allDirectory.nodes
    const imagePageTemplate = path.resolve(
      "./src/templates/galleryTemplate.tsx"
    )

    galleryPageNodes.forEach(node => {
      const leaf = node.relativePath.split("/")[1]
      const pageQuery = `/${leaf}/`

      createPage({
        path: node.relativePath,
        component: imagePageTemplate,
        context: {
          slug: node.relativePath,
          queryRegex: pageQuery,
          title: leaf,
        },
      })
    })
  })

  // MARKDOWN PAGES
  const markdownPages = graphql(`
    {
      allMarkdownRemark {
        nodes {
          html
          parent {
            ... on File {
              id
              name
              relativeDirectory
              relativePath
            }
          }
          frontmatter {
            title
            slug
            date
            images
            imageJustification
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) console.log(errors)

    const mdPageNodes = result.data.allMarkdownRemark.nodes
    const mdPageTemplate = path.resolve(
      "./src/templates/markdownTemplate.tsx"
    )

    mdPageNodes.forEach(node => {
      
      createPage({
        path: node.parent.relativePath,
        component: mdPageTemplate,
        context: {
          slug: node.parent.relativePath,
          content: node,
          imageQuery: node.parent.relativePath.split('.')[0],
        },
      })
    })
  })

  return Promise.all([galleryPages, markdownPages])
}
