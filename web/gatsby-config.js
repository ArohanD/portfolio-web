module.exports = {
  siteMetadata: {
    title: `Arohan Dutt`,
    description: `Software engineering & design, photography and thoughts`,
    author: `@Arohawk`,
    url: "https://hungry-wiles-7c6cde.netlify.app",
  },
  plugins: [
    // gatsby-plugin-react-helmet removed — using Gatsby 5's built-in Head API
    // via <SEO> components exported as `Head` from each page module.
    {
      // gatsby-plugin-mdx@5 requires .mdx files to be sourced via filesystem.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    // gatsby-plugin-manifest disabled — requires a local icon asset
    // (src/images/favicon-512x512.png) which isn't present on this checkout.
    // Re-enable once assets are sourced, or replace via Next.js `app/manifest.ts`
    // during the migration.
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/favicon-512x512.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        // gatsby-plugin-sass@6 ships sass-loader@10 (legacy Dart Sass JS API).
        // A yarn `resolutions` entry forces sass-loader@17, which defaults to
        // the modern Sass API — clearing the legacy-js-api deprecation for real.
      },
    },
    `gatsby-plugin-typescript`,
    // The `linkedin` CSV source dir is empty; `PositionsCsv` is defined in
    // gatsby-node.js so the resume's allPositionsCsv query still resolves (empty).
    `gatsby-transformer-csv`,
    // The `markdown` source dir is empty and nothing queries allMarkdownRemark.
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-transition-link`,
    // Notion source temporarily disabled — writing section is a placeholder
    // until we re-introduce content (likely via MDX) in the Next.js migration.
    // {
    //   resolve: `gatsby-source-notion-api`,
    //   options: {
    //     token: `${process.env.GATSBY_NOTION_TOKEN}`,
    //     databaseId: `${process.env.GATSBY_NOTION_DATABASE}`,
    //     propsToFrontmatter: true,
    //     lowerTitleLevel: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
