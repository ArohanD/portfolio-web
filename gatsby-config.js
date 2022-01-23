module.exports = {
  siteMetadata: {
    title: `Arohan Dutt`,
    description: `Software engineering & design, photography and thoughts`,
    author: `@Arohawk`,
    url: "https://hungry-wiles-7c6cde.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `linkedin`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-45913415-1",
        head: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `${process.env.GATSBY_NOTION_TOKEN}`,
        databaseId: `${process.env.GATSBY_NOTION_DATABASE}`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
