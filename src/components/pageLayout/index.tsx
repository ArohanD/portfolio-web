import React from "react"
import SideBar from "../sideBar"
import SEO from "../seo"
import './pageLayout.scss'

interface LayoutProps {
  title: string;
  sideBarString?: string;
}

const SideBarLayout: React.FC<LayoutProps> = ({ children, title, sideBarString }) => {
  return (
    <div className='pageLayout-wrapper'>
      <SEO title={title} />
      <SideBar pageString={sideBarString} />
      <div className='pageLayout-content'>
        {children}
      </div>
    </div>
  )
}

export default SideBarLayout
