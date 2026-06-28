import React from "react"
import "./writingSplash.scss"
import SideBarLayout from "../../components/pageLayout"
import MobileNav from "../../components/mobileNav"
import SEO from "../../components/seo"

const WritingSplash: React.FC = () => {
  return (
    <SideBarLayout currentPath={"/writing/"}>
      <div className="writingSplash-wrapper">
        <div style={{ padding: "40px 20px", maxWidth: 640 }}>
          <h1>Writing</h1>
          <p>Coming back soon.</p>
        </div>
      </div>
      <MobileNav />
    </SideBarLayout>
  )
}

export default WritingSplash

export const Head = () => <SEO title="Writing" />
