import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./home-styles.scss"

// gatsby-image stub: removed in Gatsby 5, will be replaced by next/image
// during the Next.js migration. Rendering nothing is acceptable in the interim.
const Img: React.FC<any> = () => null
import SEO from "../components/seo"
import {
  HomeLink,
  homeLinks,
  blankHomeLink,
  homeContent,
} from "../staticContent"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { RiMailFill } from "react-icons/ri"
import { SiLinkedin, SiGithub } from "react-icons/si"

const IndexPage: React.FC = () => {
  const handleMouseOver = (homeLink: HomeLink) => {
    setActiveHomeLink(homeLink)
  }

  const [activeHomeLink, setActiveHomeLink] = useState(blankHomeLink)
  const [navigatingAway, setNavigatingAway] = useState(false)

  const photoQuery = useStaticQuery(graphql`
    query homeData {
      homeImages: allFile(filter: { relativeDirectory: { eq: "home" } }) {
        nodes {
          id
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
          <div className="home-profile-photo">
            <img
              src="/profile.png"
              alt="Profile Photo"
              className="home-profile-photo"
            />
            <div className="home-body-social-links">
              <a href="https://www.linkedin.com/in/arohan/">
                <SiLinkedin size="1.5em" className="contact-icon" />
              </a>
              <a href="https://github.com/ArohanD">
                <SiGithub size="1.5em" className="contact-icon" />
              </a>
              <AniLink fade to={"/contact"}>
                <RiMailFill size="1.5em" className="contact-icon" />
              </AniLink>
            </div>
          </div>
          <div className="home-body-content">
            {homeContent.map((block: String) => (
              <p key={block as string} className="home-about-paragraph">
                {block}
              </p>
            ))}
          </div>
        </div>
      )}
      {activeHomeLink.title && window.innerWidth > 900 && (
        <BackgroundImage homeLink={activeHomeLink} />
      )}
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

export const Head = () => <SEO title="Home" />
