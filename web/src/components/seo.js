/**
 * SEO component for Gatsby 5's Head API.
 * Returns a fragment of <title>/<meta> tags directly — no react-helmet.
 *
 * Usage: each page module exports
 *   export const Head = () => <SEO title="..." />
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  title,
  description = undefined,
  lang = "en",
  image = undefined,
  externalImage = undefined,
  meta = [],
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          url
        }
      }
    }
  `)

  const siteMeta = site.siteMetadata
  const metaDescription = description || siteMeta.description
  const fullTitle = title ? `${title} | ${siteMeta.title}` : siteMeta.title

  const imageURL =
    externalImage || (image ? siteMeta.url + image : undefined)

  return (
    <>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || siteMeta.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMeta.author} />
      <meta name="twitter:title" content={title || siteMeta.title} />
      <meta name="twitter:description" content={metaDescription} />
      {imageURL && <meta property="og:image" content={imageURL} />}
      {imageURL && <meta name="twitter:image" content={imageURL} />}
      {meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </>
  )
}

export default SEO
