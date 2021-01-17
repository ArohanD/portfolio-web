import React from "react"
import "./contact-styles.scss"
import MobileNav from "../../components/mobileNav/"
import { PageProps } from "gatsby"
import { navigate } from 'gatsby-link'
import SideBarLayout from "../../components/pageLayout"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact: React.FC<any> = (props: PageProps) => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <React.Fragment>
      <SideBarLayout
        title="Resume Arohan Dutt"
        sideBarString={"resume"}
        currentPath={props.uri}
      >
        <div className="contact-container">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/contact/success/"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                <p>Name</p>
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                <p>Email</p>
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                <p>Message</p>
                <textarea name="message" onChange={handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </SideBarLayout>
      <MobileNav />
    </React.Fragment>
  )
}

export default Contact
