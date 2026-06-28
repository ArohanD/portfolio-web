import React, { useEffect, useState } from "react"
import "./applications.scss"
import { INTRO } from "./data"
import { getDevProjects } from "../../lib/sanity/queries"
import { urlFor } from "../../lib/sanity/image"
import type {
  DevProject,
  PortableTextBlock,
  ProjectMedia,
} from "../../lib/sanity/types"

// Minimal Portable Text shape — enough to render paragraphs and bullet lists.
type Span = { _type: string; text?: string; marks?: string[] }
type MarkDef = { _key: string; _type: string; href?: string }
type PTBlock = {
  _type: string
  style?: string
  listItem?: string
  children?: Span[]
  markDefs?: MarkDef[]
}

const renderSpans = (children: Span[] = [], markDefs: MarkDef[] = []) =>
  children.map((span, i) => {
    let node: React.ReactNode = span.text
    for (const mark of span.marks || []) {
      const def = markDefs.find(d => d._key === mark)
      if (def?._type === "link") {
        node = (
          <a href={def.href} target="_blank" rel="noopener noreferrer">
            {node}
          </a>
        )
      } else if (mark === "strong") {
        node = <strong>{node}</strong>
      } else if (mark === "em") {
        node = <em>{node}</em>
      }
    }
    return <React.Fragment key={i}>{node}</React.Fragment>
  })

// Renders Portable Text, grouping consecutive bullet items into a single list.
const Blurb: React.FC<{ blocks?: PortableTextBlock[] }> = ({ blocks }) => {
  if (!blocks?.length) return null
  const out: React.ReactNode[] = []
  let list: PTBlock[] = []
  const flush = (key: string) => {
    if (!list.length) return
    out.push(
      <ul key={key} className="brut-list">
        {list.map((b, i) => (
          <li key={i}>{renderSpans(b.children, b.markDefs)}</li>
        ))}
      </ul>
    )
    list = []
  }
  blocks.forEach((raw, i) => {
    const b = raw as PTBlock
    if (b._type !== "block") return
    if (b.listItem === "bullet") {
      list.push(b)
      return
    }
    flush(`ul-${i}`)
    out.push(
      <p key={i} className="brut-paragraph">
        {renderSpans(b.children, b.markDefs)}
      </p>
    )
  })
  flush("ul-end")
  return <>{out}</>
}

const MediaBlock: React.FC<{ media?: ProjectMedia }> = ({ media }) => {
  if (!media) return null
  return (
    <div className="brut-media">
      {media.kind === "youtube" && media.youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${media.youtubeId}`}
          title={media.caption || "video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : media.image ? (
        <>
          <img
            src={urlFor(media.image).width(1200).url()}
            alt={media.image.alt || media.caption || ""}
            loading="lazy"
          />
          {media.caption && (
            <span className="brut-media-caption">{media.caption}</span>
          )}
        </>
      ) : null}
    </div>
  )
}

const Row: React.FC<{ project: DevProject; index: number }> = ({
  project,
  index,
}) => {
  const flip = index % 2 === 1
  return (
    <article className="brut-row">
      <h2 className="brut-row-title">{project.title}</h2>
      <div className={`brut-band${flip ? " brut-band--flip" : ""}`}>
        <div className="brut-text">
          <Blurb blocks={project.blurb} />
          <div className="brut-stack">
            {(project.stack || []).map((s, i) => (
              <span key={i} className="brut-pill">
                {s}
              </span>
            ))}
          </div>
          <div className="brut-links">
            {(project.links || []).map((l, i) => (
              <a
                key={i}
                className="brut-link"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
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

export const Applications: React.FC = () => {
  const [projects, setProjects] = useState<DevProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const data = await getDevProjects()
        if (cancelled) return
        setProjects(data)
        setLoading(false)
      } catch (err: any) {
        if (cancelled) return
        // eslint-disable-next-line no-console
        console.error("Failed to load applications from Sanity", err)
        setError(err?.message || "Failed to load applications")
        setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="brut">
      <div className="brut-inner">
        <header className="brut-header">
          <h1 className="brut-h1">{INTRO.title}</h1>
          <p className="brut-lede">{INTRO.lede}</p>
        </header>
        <div className="brut-listing">
          {error && <div className="brut-paragraph">Couldn’t load applications: {error}</div>}
          {!error && loading && <div className="brut-paragraph">Loading…</div>}
          {!error &&
            !loading &&
            projects.map((p, i) => <Row key={p._id} project={p} index={i} />)}
        </div>
        <div className="brut-footer">▪ end ▪</div>
      </div>
    </div>
  )
}

export default Applications
