import React from "react"
import "./applications.scss"
import { INTRO, PROJECTS, Project, Block, Media } from "./data"

const Blurb: React.FC<{ blocks: Block[] }> = ({ blocks }) => (
  <>
    {blocks.map((b, i) => {
      if (b.type === "ul") {
        return (
          <ul key={i} className="brut-list">
            {b.items.map((it, j) => (
              <li key={j}>{it}</li>
            ))}
          </ul>
        )
      }
      return (
        <p key={i} className="brut-paragraph">
          {b.text}
        </p>
      )
    })}
  </>
)

const MediaBlock: React.FC<{ media: Media }> = ({ media }) => (
  <div className="brut-media">
    {media.type === "youtube" ? (
      <iframe
        src={`https://www.youtube.com/embed/${media.id}`}
        title={media.label}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ) : (
      <>
        <img src={media.src} alt={media.label} loading="lazy" />
        <span className="brut-media-caption">{media.label}</span>
      </>
    )}
  </div>
)

const Row: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const flip = index % 2 === 1
  return (
    <article className="brut-row">
      <h2 className="brut-row-title">{project.title}</h2>
      <div className={`brut-band${flip ? " brut-band--flip" : ""}`}>
        <div className="brut-text">
          <Blurb blocks={project.blurb} />
          <div className="brut-stack">
            {project.stack.map((s, i) => (
              <span key={i} className="brut-pill">
                {s}
              </span>
            ))}
          </div>
          <div className="brut-links">
            {project.links.map((l, i) => (
              <a key={i} className="brut-link" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="brut-media-col">
          <MediaBlock media={project.media} />
        </div>
      </div>
    </article>
  )
}

export const Applications: React.FC = () => (
  <div className="brut">
    <div className="brut-inner">
      <header className="brut-header">
        <h1 className="brut-h1">{INTRO.title}</h1>
        <p className="brut-lede">{INTRO.lede}</p>
      </header>
      <div className="brut-listing">
        {PROJECTS.map((p, i) => (
          <Row key={p.id} project={p} index={i} />
        ))}
      </div>
      <div className="brut-footer">▪ end ▪</div>
    </div>
  </div>
)

export default Applications
