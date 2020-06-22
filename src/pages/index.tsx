import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import "./home-global-styles.scss"

interface HomeLink {
  title: String
  path: string
}

const homeLinks: Array<HomeLink> = [
  {
    title: "Dev",
    path: "/dev",
  },
  {
    title: "Photo",
    path: "/photography",
  },
  {
    title: "Write",
    path: "/writing",
  },
  {
    title: "Resume",
    path: "/resume",
  },
]

const homeContent: Array<String> = [
  `Hi, I’m Arohan,`,

  `I wake up in the morning to build things that matter. From brands to products to businesses, I operate on the notion that it takes the right amount of grit to turn inspiration into execution. I've spent my whole life learning all over the world, pairing those experiences with a relentless drive to do meaningful work and launch ambitious ideas.`,

  `Through the lens, I'm an avid learner. Every time shutter clicks, I'm hoping to tell a story a little better than the last. I'm inspired by travel, people and by the idea that a powerful photograph could change the world. Here, my drive comes from a desire to learn how to capture the right moments, use the right tools, and share amazing experiences with the world.`,
]

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 330) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className={"home-container"}>
      <SEO title="Home" />
      <nav className={"home-nav"}>
        {homeLinks.map((linkObj: HomeLink) => (
          <Link to={linkObj.path}>{linkObj.title}</Link>
        ))}
      </nav>
      <div className="home-section-intro">
        <Img
          className="home-profile-photo"
          alt="Profile Photo"
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
        <div className="home-body-content">
          {homeContent.map((block: string) => (
            <p className="home-about-paragraph">{block}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
