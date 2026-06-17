import React from "react"
import { Link } from "gatsby"
import type { Tag } from "../../lib/sanity/types"

interface Props {
  tags: Tag[]
  activeTag?: string | null
}

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  fontSize: "0.9rem",
}

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  backgroundColor: "#E20612",
  color: "#ffffff",
}

export const TagList: React.FC<Props> = ({ tags, activeTag }) => {
  return (
    <nav aria-label="Gallery tags">
      <ul style={listStyle}>
        {tags.map(tag => {
          const isActive = tag.label === activeTag
          return (
            <li key={tag.id}>
              <Link
                to={`/photography?category=${encodeURIComponent(tag.label)}`}
                style={isActive ? activeLinkStyle : linkStyle}
              >
                {tag.label}
              </Link>
            </li>
          )
        })}
        {activeTag && (
          <li>
            <Link to="/photography" style={linkStyle}>
              all
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default TagList
