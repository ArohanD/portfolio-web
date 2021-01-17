import React from "react"
import "./contact-styles.scss"
import MobileNav from "../../components/mobileNav/"
import { PageProps } from "gatsby"
import SideBarLayout from "../../components/pageLayout"

const Contact: React.FC<any> = (props: PageProps) => {
  return (
    <React.Fragment>
      <SideBarLayout
        title="Resume Arohan Dutt"
        sideBarString={"resume"}
        currentPath={props.uri}
      >
        <div className="contact-container">
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                <p>Name</p>
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                <p>Email</p>
                <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                <p>Message</p>
                <textarea name="message"></textarea>
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
