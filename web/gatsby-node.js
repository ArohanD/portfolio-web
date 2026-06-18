/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// The photo gallery's old local-file pipeline (ImageSharp fields, fast-exif
// reads, per-image createPages, etc.) was removed when /photography moved to
// Sanity. What remains here is unrelated to photos.

// PositionsCsv: schema for the LinkedIn CSV source — referenced by the
// resume page. Keep typed so queries don't fail validation on fresh checkouts.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
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
