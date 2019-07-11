import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
	  © {new Date().getFullYear()} trilmn.com - Built with
	  {` `}
	  <a href="https://www.gatsbyjs.org">Gatsby</a>
	</footer>
)

export default Footer