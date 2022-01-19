/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath, createFileNode } = require("gatsby-source-filesystem")
const exif = require("fast-exif")
const { returnImageOrder } = require("./nodeUtils.ts")
const { node } = require("prop-types")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "ImageSharp") {
    const parent = getNode(node.parent)
    const category = parent.relativeDirectory.split("/").pop()

    createNodeField({
      node,
      name: `gallery`,
      value: parent.absolutePath.includes("/images/photography/")
        ? category
        : "",
    })

    // Write order of images to be displayed into a GQL param
    createNodeField({
      node,
      name: "order",
      value: returnImageOrder(node.id, category),
    })
  }
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

  // PHOTO GALLERY PAGES
  const galleryPages = graphql(`
    {
      allDirectory(filter: { relativeDirectory: { eq: "photography" } }) {
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

  const imagePages = graphql(`
    {
      allImageSharp(
        filter: { fields: { gallery: { glob: "*" } } }
        sort: { fields: [fields___gallery, fields___order] }
      ) {
        nodes {
          id
          parent {
            ... on File {
              name
              relativePath
            }
          }
          fields {
            gallery
            order
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) console.log(result.errors)

    const imageNodes = result.data.allImageSharp.nodes
    const imageTemplate = path.resolve("./src/templates/imageExpanded.tsx")

    imageNodes.forEach((node, index) => {
      if (
        node.parent.relativePath.includes("photography/") &&
        node.fields.gallery
      ) {
        const pathNoExtension = node.parent.relativePath.split('.jpg')[0].split(' ').join('-')
        createPage({
          path: pathNoExtension,
          component: imageTemplate,
          context: {
            slug: pathNoExtension,
            imageQuery: node.id,
            nextNode: imageNodes[index + 1] && imageNodes[index + 1].fields.gallery === node.fields.gallery
              ? imageNodes[index + 1].id
              : undefined,
            prevNode: imageNodes[index - 1] && imageNodes[index - 1].fields.gallery === node.fields.gallery
              ? imageNodes[index - 1].id
              : undefined,
          },
        })
      }
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
            date
            images
            imageJustification
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) console.log(result.errors)

    const mdPageNodes = result.data.allMarkdownRemark.nodes
    const mdPageTemplate = path.resolve("./src/templates/markdownTemplate.tsx")
    const notionPageTemplate = path.resolve("./src/templates/notionTemplate.tsx")
    mdPageNodes.forEach(node => {
      const isNotionPage = "relativePath" in node.parent
      console.log(node.parent)
      const nodePath = node.parent.relativePath || `/writing/dev/` + node.frontmatter.title.split(' ').join("-").toLowerCase();
      if(nodePath === "" || !nodePath) return
      console.log(nodePath)
      createPage({
        path: nodePath,
        component: isNotionPage ? notionPageTemplate : mdPageTemplate,
        context: {
          slug: node.parent.relativePath,
          content: node,
          // imageQuery: node.parent.relativePath.split(".")[0],
        },
      })
    })
  })

  return Promise.all([galleryPages, imagePages])
}
