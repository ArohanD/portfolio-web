import React from "react"
import SideBarLayout from "../../components/pageLayout"
import SEO from "../../components/seo"
import MobileNav from "../../components/mobileNav"
import "./maps.scss"

const MapsPage: React.FC = () => (
  <SideBarLayout
    title="maps"
    sideBarString="maps"
    currentPath="/maps/"
  >
    <div className="maps-page">
      <div className="maps-page-content">
        <h1 className="maps-page-title">Maps</h1>
        <p className="maps-page-sub">Coming soon.</p>
      </div>
    </div>
    <MobileNav />
  </SideBarLayout>
)

export default MapsPage

export const Head = () => <SEO title="Maps" />
