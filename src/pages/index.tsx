import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./home-styles.scss"
import SEO from "../components/seo"
import {
  HomeLink,
  homeLinks,
  blankHomeLink,
  homeContent,
} from "../staticContent"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage: React.FC = () => {
  const handleMouseOver = (homeLink: HomeLink) => {
    setActiveHomeLink(homeLink)
  }

  const [activeHomeLink, setActiveHomeLink] = useState(blankHomeLink)
  const [profilePhoto, setProfilePhoto] = useState("")
  const [navigatingAway, setNavigatingAway] = useState(false)

  const photoQuery = useStaticQuery(graphql`
    query homeData {
      homeImages: allFile(filter: { relativeDirectory: { eq: "home" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 50) {
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

    photoQuery.homeImages.nodes.map(node => {
      if (node.name === "profile") setProfilePhoto(node.childImageSharp)
    })
  }, [])

  const homeNavClasses =
    "home-nav" + (activeHomeLink.imagePath ? " home-nav-faded-text" : "")

  return (
    <div className={"home-container"}>
      <SEO title="Home" />
      <nav className={homeNavClasses}>
        {homeLinks.map((linkObj: HomeLink) => (
          <AniLink
            fade
            to={linkObj.path}
            key={linkObj.title}
            onMouseOver={() => handleMouseOver(linkObj)}
            onMouseLeave={() => setActiveHomeLink(blankHomeLink)}
            className={
              activeHomeLink.backgroundImageSlug === linkObj.backgroundImageSlug
                ? "home_activeLink"
                : ""
            }
            style={{ "--active-color": linkObj.textColor }}
          >
            {React.cloneElement(linkObj.component())}
          </AniLink>
        ))}
      </nav>
      {!activeHomeLink.imagePath && (
        <div className="home-section-intro fade-in">
          {profilePhoto && (
            <Img
              className="home-profile-photo"
              alt="Profile Photo"
              fixed={profilePhoto.fixed}
            />
          )}
          <div className="home-body-content">
            {homeContent.map((block: string) => (
              <p key={block} className="home-about-paragraph">
                {block}
              </p>
            ))}
          </div>
        </div>
      )}
      {activeHomeLink.title && window.innerWidth > 900 && <BackgroundImage homeLink={activeHomeLink} />}
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
      className={"home-background-image fade-out"}
      alt={homeLink.imagePath.fluid.originalName}
      fluid={homeLink.imagePath.fluid}
    />
  )
}

const addSrcLinks = (linkArray: Array<HomeLink>, imageArray: Array<any>) => {
  linkArray.map((linkObj: HomeLink) => {
    const target = linkObj.backgroundImageSlug
    imageArray.forEach(node => {
      if (target === node.name) linkObj.imagePath = node.childImageSharp
    })
  })
}

export default IndexPage
