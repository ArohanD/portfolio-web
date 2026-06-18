import React from "react"
import SideBar from "../sideBar"
import "./pageLayout.scss"

interface LayoutProps {
  children?: React.ReactNode
  title?: string
  sideBarString?: string
  currentPath: string
  metaImage?: string
}

const SideBarLayout: React.FC<LayoutProps> = ({
  children,
  sideBarString,
  currentPath,
}) => {
  return (
    <div className="pageLayout-wrapper">
      <SideBar pageString={sideBarString} currentPath={currentPath} />
      <div className="pageLayout-content">{children}</div>
    </div>
  )
}

export default SideBarLayout
