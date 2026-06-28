import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./resume-styles.scss"
import { Query } from "../../generated/graphql-types"
import MobileNav from "../../components/mobileNav/"
import { PageProps } from "gatsby"
import SideBarLayout from "../../components/pageLayout"
import SEO from "../../components/seo"

const Resume: React.FC<PageProps> = props => {
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
      <SideBarLayout currentPath={props.uri}>
        <div className={"resume-page-wrapper"}>
          <h1>Resume</h1>
          <div className={"resume-content-wrapper"}>
            {nodes
              .filter(experience => experience.Company_Name !== "Personal Projects")
              .map(experience => (
                <div key={experience.Title} className="resume-experience-block">
                  <h4 className="resume-experience-title">{`${experience.Title} @ ${experience.Company_Name}`}</h4>
                  <p>{`${experience.Started_On.toUpperCase()} - ${
                    experience.Finished_On
                      ? experience.Finished_On.toUpperCase()
                      : "present"
                  }`}</p>
                  <ul className="resume-experience-bullets">
                    {experience.Description.split("•")
                      .filter(bullet => bullet !== "")
                      .map(bullet => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </SideBarLayout>
      <MobileNav />
    </React.Fragment>
  )
}

export default Resume

export const Head = () => <SEO title="Resume" />
