import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">
        <img src= {'logo.png'} alt="Logo"/>
        <h1>
          {siteTitle}
        </h1>
        <span>tri@trilmn.com</span>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
