/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, externalImage }) {
  const { site, homeImages } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
        homeImages: allFile(
          filter: { relativeDirectory: { eq: "home" }, name: { eq: "photo" } }
        ) {
          nodes {
            childImageSharp {
              fixed(width: 700) {
                src
              }
            }
            name
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageURL =
    externalImage ||
    (image && site.siteMetadata.url + image) ||
    site.siteMetadata.url + homeImages.nodes[0].childImageSharp.fixed.src

  let metaArray = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `twitter:card`,
      content: `summary`,
    },
    {
      property: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      property: `twitter:title`,
      content: title,
    },
    {
      property: `twitter:description`,
      content: metaDescription,
    },
  ]

  metaArray.push(
    {
      property: `og:image`,
      content: imageURL,
    },
    {
      property: `twitter:image`,
      content: imageURL,
    }
  )

  metaArray = metaArray.concat(meta)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaArray}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  externalImage: PropTypes.string,
}

export default SEO
