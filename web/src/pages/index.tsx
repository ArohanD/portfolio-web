import React, { useState } from "react"
import "./home-styles.scss"
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

// Static asset slugs (under web/static/) that have a hover background image.
// Resume intentionally has none; hovering it just fades the body without
// swapping a backdrop in.
const BACKGROUND_SLUGS = new Set(["dev", "photo", "writing"])

const hasBackground = (slug: string | undefined): slug is string =>
  !!slug && BACKGROUND_SLUGS.has(slug)

const IndexPage: React.FC = () => {
  const [activeHomeLink, setActiveHomeLink] =
    useState<HomeLink>(blankHomeLink)

  const handleMouseOver = (homeLink: HomeLink) => setActiveHomeLink(homeLink)
  const handleMouseLeave = () => setActiveHomeLink(blankHomeLink)

  const activeSlug = activeHomeLink.backgroundImageSlug
  const showBackground = hasBackground(activeSlug)

  const homeNavClasses =
    "home-nav" + (showBackground ? " home-nav-faded-text" : "")

  // window-guarded: SSR builds run this module too; defer the desktop-only
  // background to client-side rendering.
  const isDesktop =
    typeof window !== "undefined" && window.innerWidth > 900

  return (
    <div className={"home-container"}>
      <nav className={homeNavClasses}>
        {homeLinks.map((linkObj: HomeLink) => (
          <AniLink
            fade
            to={linkObj.path}
            key={linkObj.title}
            onMouseOver={() => handleMouseOver(linkObj)}
            onMouseLeave={handleMouseLeave}
            className={
              activeHomeLink.backgroundImageSlug === linkObj.backgroundImageSlug
                ? "home_activeLink"
                : ""
            }
            style={{ "--active-color": linkObj.textColor } as React.CSSProperties}
          >
            {React.cloneElement(linkObj.component())}
          </AniLink>
        ))}
      </nav>
      {!showBackground && (
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
      {showBackground && isDesktop && (
        <img
          key={activeSlug}
          className="home-background-image"
          src={`/${activeSlug}.jpg`}
          alt={`${activeHomeLink.title} background`}
          data-testid="home-bg"
        />
      )}
    </div>
  )
}

export default IndexPage

export const Head = () => <SEO title="Home" />
