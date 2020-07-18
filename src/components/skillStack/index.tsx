import React from "react"
import "./skillStack.scss"

export interface skillObject {
  name: string
  color: string
}

interface SkillStackProps {
  skills: Array<skillObject>
}

export const addColorToSkills = (skills: Array<string>) => {
  return skills.map(skill => ({ name: skill, color: "#0092c7" } as skillObject))
}

export const SkillStack: React.FC<SkillStackProps> = ({ skills }) => {
  return (
    <div className='skillStack-container'>
      {`Stack:  `}
      {skills.map(skill => (
        <div
          style={{ backgroundColor: skill.color }}
          className="skillStack-skill"
        >{skill.name}</div>
      ))}
    </div>
  )
}
