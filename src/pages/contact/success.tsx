import React from "react"
import { navigate } from "gatsby"

const SuccessSubmit: React.FC = () => {
  setTimeout(() => {
    navigate("/")
  }, 2000)

  return (
    <React.Fragment>
      Thank you! Now redirecting you to the home page...
    </React.Fragment>
  )
}

export default SuccessSubmit
