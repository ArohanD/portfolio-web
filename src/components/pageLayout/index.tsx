import React from "react"
import SideBar from "../sideBar"
import SEO from "../seo"
import './pageLayout.scss'

interface LayoutProps {
  title: string;
  sideBarString?: string;
  currentPath: string;
}

const SideBarLayout: React.FC<LayoutProps> = ({ children, title, sideBarString, currentPath }) => {
  return (
    <div className='pageLayout-wrapper'>
      <SEO title={title} />
      <SideBar pageString={sideBarString} currentPath={currentPath} />
      <div className='pageLayout-content'>
        {children}
      </div>
    </div>
  )
}

export default SideBarLayout
