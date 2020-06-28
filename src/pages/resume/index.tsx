import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./resume-styles.scss"
import SEO from "../../components/seo"
import { LinkedInResume, Query } from "../../generated/graphql-types"

const Resume: React.FC = () => {
  const resumeQuery = useStaticQuery(graphql`
    query ResumeQuery {
      linkedInResume {
        experiences {
          companyName
          title
          description
          location
          startedOn
          finishedOn
        }
      }
    }
  `) as Query

  const { experiences } = resumeQuery.linkedInResume

  return (
    <React.Fragment>
      <SEO title="Resume" />
      <div className={"resume-page-wrapper"}>
        <div className={"resume-content-wrapper"}>
          {experiences.map(experience => {
            if (experience.companyName !== "Personal Projects") {
              return (
                <React.Fragment key={experience.title}>
                  <h4>{`${experience.title} @ ${experience.companyName}`}</h4>
                  <p>{`${experience.startedOn.toUpperCase()} - ${
                    experience.finishedOn
                      ? experience.finishedOn.toUpperCase()
                      : "present"
                  }`}</p>
                  <ul>
                    {experience.description.split("•").map(bullet => {
                      if (bullet !== "") return <li key={bullet}>{bullet}</li>
                    })}
                  </ul>
                </React.Fragment>
              )
            }
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Resume
