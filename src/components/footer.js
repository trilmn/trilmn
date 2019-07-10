import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
	  © 2009 - {new Date().getFullYear()} trilmn.com. Built with
	  {` `}
	  <a href="https://www.gatsbyjs.org">Gatsby</a>
	</footer>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Footer