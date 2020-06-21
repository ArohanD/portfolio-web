import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <React.Fragment>
    <SEO title="Home" />
    <h1>Hi world</h1>
    <Link to="/photography">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </React.Fragment>
)

export default IndexPage
