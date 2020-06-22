import React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"

import "./photography.scss"

const SecondPage: React.FC = () => (
  <div className={'photography-body'}>
    <SEO title="Photography" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
