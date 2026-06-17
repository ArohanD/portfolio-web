import React from "react"
import type { PageProps } from "gatsby"
import PhotoDetailPage from "../../../components/gallery/PhotoDetailPage"
import SEO from "../../../components/seo"

type Params = { hash: string }

const PhotoRoute: React.FC<PageProps<object, object, unknown, Params>> = ({ params }) => {
  return <PhotoDetailPage hash={params.hash} />
}

export default PhotoRoute

export const Head = (props: { params: Params }) => (
  <SEO title={`Photo ${props.params?.hash || ""}`} />
)
