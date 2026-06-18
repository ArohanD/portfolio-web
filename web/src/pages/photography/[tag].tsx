import React from "react"
import type { PageProps } from "gatsby"
import GalleryPage from "../../components/gallery/GalleryPage"
import SEO from "../../components/seo"

type TagParams = { tag: string }

const TagGalleryPage: React.FC<PageProps<object, object, unknown, TagParams>> = ({ params }) => {
  return <GalleryPage tag={params.tag} />
}

export default TagGalleryPage

export const Head = (props: { params: TagParams }) => (
  <SEO title={`Gallery [${props.params?.tag || ""}]`} />
)
