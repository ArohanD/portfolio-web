import React from "react"
import SideBar from "../sideBar"
import "./pageLayout.scss"

interface LayoutProps {
  children?: React.ReactNode
  currentPath: string
}

const SideBarLayout: React.FC<LayoutProps> = ({ children, currentPath }) => {
  return (
    <div className="pageLayout-wrapper">
      <SideBar currentPath={currentPath} />
      <div className="pageLayout-content">{children}</div>
    </div>
  )
}

export default SideBarLayout
