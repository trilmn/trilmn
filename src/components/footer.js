import React from "react"
import {css} from 'emotion'

const style = {
  footerContent: css(tw`text-sm text-gray-500 mt-16`)
}

const Footer = ({ siteTitle }) => (
  <footer className={style.footerContent}>
	  © {new Date().getFullYear()} trilmn.com - Built with
	  {` `}
	  <a href="https://www.gatsbyjs.org">Gatsby</a>
	</footer>
)

export default Footer