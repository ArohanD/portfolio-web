import React from "react"
import resumeData from "./resume-data.json"
import "./resume-styles.scss"
import SEO from "../../components/seo"

const Resume: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title="Resume" />
      <div className={"resume-page-wrapper"}>
        <div className={"resume-content-wrapper"}>Resume</div>
      </div>
    </React.Fragment>
  )
}

export default Resume
