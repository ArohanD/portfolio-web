import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./resume-styles.scss"
import { Query } from "../../generated/graphql-types"
import MobileNav from "../../components/mobileNav/"
import { PageProps } from "gatsby"
import SideBarLayout from "../../components/pageLayout"

const Resume: React.FC<any> = (props:PageProps) => {
  const resumeQuery = useStaticQuery(graphql`
    query ResumeQuery {
      allPositionsCsv {
        nodes {
          Company_Name
          Description
          Finished_On
          Location
          Started_On
          Title
        }
      }
    }
  `) as Query

  const { nodes } = resumeQuery.allPositionsCsv

  return (
    <React.Fragment>
      <SideBarLayout
        title="Resume Arohan Dutt"
        sideBarString={"resume"}
        currentPath={props.uri}
      >
        <div className={"resume-page-wrapper"}>
          <h1>Resume</h1>
          <div className={"resume-content-wrapper"}>
            {nodes.map(experience => {
              if (experience.Company_Name !== "Personal Projects") {
                return (
                  <div
                    key={experience.Title}
                    className="resume-experience-block"
                  >
                    <h4 className="resume-experience-title">{`${experience.Title} @ ${experience.Company_Name}`}</h4>
                    <p>{`${experience.Started_On.toUpperCase()} - ${
                      experience.Finished_On
                        ? experience.Finished_On.toUpperCase()
                        : "present"
                    }`}</p>
                    <ul className="resume-experience-bullets">
                      {experience.Description.split("•").map(bullet => {
                        if (bullet !== "") return <li key={bullet}>{bullet}</li>
                      })}
                    </ul>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </SideBarLayout>
      <MobileNav />
    </React.Fragment>
  )
}

export default Resume
