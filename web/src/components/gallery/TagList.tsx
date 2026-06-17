import React from "react"
import { Link } from "gatsby"
import type { Tag } from "../../lib/sanity/types"

interface Props {
  tags: Tag[]
  activeTag?: string | null
}

export const TagList: React.FC<Props> = ({ tags, activeTag }) => (
  <nav aria-label="Gallery tags">
    <ul className="tag-list">
      {tags.map(tag => (
        <li key={tag.id} className={tag.label === activeTag ? "active" : ""}>
          <Link to={`/photography/${encodeURIComponent(tag.label)}/`}>
            {tag.label}
          </Link>
        </li>
      ))}
      {activeTag && (
        <li>
          <Link to="/photography">all</Link>
        </li>
      )}
    </ul>
  </nav>
)

export default TagList
