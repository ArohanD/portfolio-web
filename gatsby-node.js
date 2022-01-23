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
const { convertToSlug } = require("./utils.js")

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
        const pathNoExtension = node.parent.relativePath
          .split(".jpg")[0]
          .split(" ")
          .join("-")
        createPage({
          path: pathNoExtension,
          component: imageTemplate,
          context: {
            slug: pathNoExtension,
            imageQuery: node.id,
            nextNode:
              imageNodes[index + 1] &&
              imageNodes[index + 1].fields.gallery === node.fields.gallery
                ? imageNodes[index + 1].id
                : undefined,
            prevNode:
              imageNodes[index - 1] &&
              imageNodes[index - 1].fields.gallery === node.fields.gallery
                ? imageNodes[index - 1].id
                : undefined,
          },
        })
      }
    })
  })

  // NOTION
  const notionPages = graphql(`
    query AllNotionQuery {
      allNotion {
        nodes {
          childMarkdownRemark {
            html
            frontmatter {
              title
              Tags {
                id
                name
              }
              Grouping
            }
            wordCount {
              words
            }
          }
          updatedAt
          createdAt
        }
      }
    }
  `).then(result => {
    if (result.error) console.log(error)
    const notionPageTemplate = path.resolve(
      "./src/templates/notionTemplate.tsx"
    )

    result.data.allNotion.nodes.forEach(node => {
      const { childMarkdownRemark } = node
      if (childMarkdownRemark.frontmatter.title !== "") {
        createPage({
          path: `/writing/${convertToSlug(
            childMarkdownRemark.frontmatter.title
          )}`,
          component: notionPageTemplate,
          context: {
            slug: convertToSlug(childMarkdownRemark.frontmatter.title),
            content: childMarkdownRemark,
          },
        })
      }
    })
  })

  return Promise.all([galleryPages, imagePages, notionPages])
}
