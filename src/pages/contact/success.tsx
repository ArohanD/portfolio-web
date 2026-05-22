import React from "react"
import { navigate } from "gatsby"
import SEO from "../../components/seo"

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

export const Head = () => <SEO title="Message Sent" />
