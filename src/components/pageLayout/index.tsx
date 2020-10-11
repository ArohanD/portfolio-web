import React from "react"
import SideBar from "../sideBar"
import SEO from "../seo"
import './pageLayout.scss'
import { sanitizeTitle } from "../../../utils"

interface LayoutProps {
  title?: string;
  sideBarString?: string;
  currentPath: string;
  metaImage?: string;
}

const SideBarLayout: React.FC<LayoutProps> = ({ children, title, sideBarString, currentPath, metaImage }) => {
  let sanitizedTitle  = sanitizeTitle(currentPath.split("/").pop())
  sanitizedTitle = title || sanitizedTitle.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
  
  return (
    <div className='pageLayout-wrapper'>
      <SEO title={sanitizedTitle} image={metaImage}/>
      <SideBar pageString={sideBarString} currentPath={currentPath} />
      <div className='pageLayout-content'>
        {children}
      </div>
    </div>
  )
}

export default SideBarLayout
