import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const gallerySideBar: React.FC = () => {
  return <div className="gallery-sidebar-container"></div>
}

interface galleryLink {
  title: string
  href: string
}

interface linkBlockProps {
  links: Array<galleryLink>
}

const linkBlock: React.FC<linkBlockProps> = ({ links }) => {
  return (
    <div className="gallery-linkBlock">
      {links.map(({ href, title }) => (
        <Link to={href}>{title}</Link>
      ))}
    </div>
  )
}

export default gallerySideBar
