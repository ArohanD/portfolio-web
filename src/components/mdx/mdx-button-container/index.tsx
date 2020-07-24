import React from "react"
import "./button-container.scss"

export interface DevButton {
  text: string
  url: string
}

export interface ButtonContainerProps {
  buttons: Array<DevButton>
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({ buttons }) => (
  <div className="mdx-button-container">
    {buttons.map(button => (
      <a className="mdx-button-link" href={button.url} key={button.text}>
        <button className="mdx-button-style">{button.text}</button>
      </a>
    ))}
  </div>
)