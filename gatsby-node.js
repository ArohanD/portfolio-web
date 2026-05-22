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

// Register the custom `fields` extension on ImageSharp so the schema knows
// about gallery/order/exif even when there are no images on disk locally.
// Without this, createPages queries fail validation in fresh checkouts.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type ImageSharpFields {
      gallery: String
      order: Int
    }
    type ImageSharp implements Node {
      fields: ImageSharpFields
    }
    type FileFieldsExifExif {
      ISO: Int
      DateTimeOriginal: Date
      ExposureTime: Float
      FNumber: Float
      FocalLength: Float
      FocalLengthIn35mmFormat: Float
      ShutterSpeedValue: Float
      ApertureValue: Float
    }
    type FileFieldsExifImage {
      GPSInfo: JSON
      Model: String
    }
    type FileFieldsExif {
      exif: FileFieldsExifExif
      image: FileFieldsExifImage
    }
    type FileFields {
      slug: String
      exif: FileFieldsExif
    }
    type File implements Node {
      fields: FileFields
    }
    type PositionsCsv implements Node {
      Company_Name: String
      Description: String
      Finished_On: String
      Location: String
      Started_On: String
      Title: String
    }
  `)
}

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

// SCSS files across components import partials in non-deterministic orders,
// which trips mini-css-extract-plugin's chunk-order check. Silencing is fine
// here — final CSS order is determined by component render order, which is
// stable, and CSS rules don't conflict between components.
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()
  const miniCss = config.plugins.find(
    p => p.constructor && p.constructor.name === "MiniCssExtractPlugin"
  )
  if (miniCss) {
    miniCss.options.ignoreOrder = true
  }
  actions.replaceWebpackConfig(config)
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
        sort: [{ fields: { gallery: ASC } }, { fields: { order: ASC } }]
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
              index + 1 < imageNodes.length &&
              imageNodes[index + 1].fields.gallery === node.fields.gallery
                ? imageNodes[index + 1].id
                : undefined,
            prevNode:
              index - 1 >= 0 &&
              imageNodes[index - 1].fields.gallery === node.fields.gallery
                ? imageNodes[index - 1].id
                : undefined,
          },
        })
      }
    })
  })

  // NOTION pipeline temporarily disabled — writing section is a placeholder
  // until re-introduced (likely as MDX) in the Next.js migration.

  return Promise.all([galleryPages, imagePages])
}
