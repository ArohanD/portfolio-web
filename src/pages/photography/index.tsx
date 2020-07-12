import React from "react"
import SEO from "../../components/seo"
import "./photography.scss"

const Photography: React.FC = () => (
  <div className={'photography-body'}>
    <SEO title="Photography" />
    <div className="photography-page-wrapper">
      <GalleryHero />
    </div>
  </div>
)

const GalleryHero: React.FC = () => {
  return (
    <div>image here</div>
  )
}

export default Photography
