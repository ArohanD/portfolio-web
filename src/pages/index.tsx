import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import "./home-styles.scss"

interface HomeLink {
  title: string
  path: string
  backgroundImageSlug: string
  textColor: string
  imagePath: any
}

let homeLinks: Array<HomeLink> = [
  {
    title: "Dev",
    path: "/dev",
    backgroundImageSlug: `dev`,
    textColor: "#68281B",
    imagePath: "",
  },
  {
    title: "Photo",
    path: "/photography",
    backgroundImageSlug: `photo`,
    textColor: "#EFFFB1",
    imagePath: "",
  },
  {
    title: "Writing",
    path: "/writing",
    backgroundImageSlug: `writing`,
    textColor: "#68281B",
    imagePath: "",
  },
  {
    title: "Resume",
    path: "/resume",
    backgroundImageSlug: `resume`,
    textColor: "#68281B",
    imagePath: "",
  },
]

const blankHomeLink = {
  title: "",
  path: "",
  backgroundImageSlug: ``,
  textColor: "",
  imagePath: "",
}

const homeContent: Array<String> = [
  `Hi, I’m Arohan,`,

  `I wake up in the morning to build things that matter. From brands to products to businesses, I operate on the notion that it takes the right amount of grit to turn inspiration into execution. I've spent my whole life learning all over the world, pairing those experiences with a relentless drive to do meaningful work and launch ambitious ideas.`,

  `Through the lens, I'm an avid learner. Every time shutter clicks, I'm hoping to tell a story a little better than the last. I'm inspired by travel, people and by the idea that a powerful photograph could change the world. Here, my drive comes from a desire to learn how to capture the right moments, use the right tools, and share amazing experiences with the world.`,
]

const IndexPage: React.FC = () => {
  const handleMouseOver = (homeLink: HomeLink) => {
    setActiveHomeLink(homeLink)
  }

  const [activeHomeLink, setActiveHomeLink] = useState(blankHomeLink)

  const photoQuery = useStaticQuery(graphql`
    query {
      homeImages: allFile(filter: { relativeDirectory: { eq: "home" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 330) {
              ...GatsbyImageSharpFixed
            }
          }
          name
        }
      }
    }
  `)

  useEffect(() => {
    addSrcLinks(homeLinks, photoQuery.homeImages.nodes)
  }, [])

  const homeNavClasses =
    "home-nav" + (activeHomeLink.imagePath ? " home-nav-faded-text" : "")

  return (
    <div className={"home-container"}>
      <SEO title="Home" />
      <nav className={homeNavClasses}>
        {homeLinks.map((linkObj: HomeLink) => (
          <Link
            to={linkObj.path}
            onMouseOver={() => handleMouseOver(linkObj)}
            onMouseLeave={() => setActiveHomeLink(blankHomeLink)}
            style={
              (activeHomeLink.backgroundImageSlug === linkObj.backgroundImageSlug
                ? { color: linkObj.textColor }
                : {})
            }
          >
            {linkObj.title}
          </Link>
        ))}
      </nav>
      <div className="home-section-intro">
        <Img
          className="home-profile-photo"
          alt="Profile Photo"
          fixed={photoQuery.homeImages.nodes[2].childImageSharp.fixed}
        />
        <div className="home-body-content">
          {homeContent.map((block: string) => (
            <p className="home-about-paragraph">{block}</p>
          ))}
        </div>
      </div>
      {activeHomeLink.title && <BackgroundImage homeLink={activeHomeLink} />}
    </div>
  )
}

interface BackgroundImageProps {
  homeLink: HomeLink
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  homeLink,
}: BackgroundImageProps) => {
  if (!homeLink.imagePath) return <div></div>

  return (
    <Img
      className={"home-background-image"}
      alt="Profile Photo"
      fluid={homeLink.imagePath.fluid}
    />
  )
}

const addSrcLinks = (linkArray: Array<HomeLink>, imageArray: Array<any>) => {
  linkArray.map((linkObj: HomeLink) => {
    const target = linkObj.backgroundImageSlug
    imageArray.forEach((node: any) => {
      if (target === node.name) linkObj.imagePath = node.childImageSharp
    })
  })
}

export default IndexPage
