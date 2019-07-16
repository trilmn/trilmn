import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="px-4 text-sm text-gray-600 mt-16">
	  © {new Date().getFullYear()}{` `}
	  <Link to="/" className="transition-fast underline hover:text-gray-800">trilmn.com</Link>
	  {` `} - Built with {` `}
	  {` `}
	  <a href="https://www.gatsbyjs.org" className="transition-fast underline hover:text-gray-800">Gatsby</a>
	  {` `} & {` `}
	  <a href="https://tailwindcss.com/" className="transition-fast underline hover:text-gray-800">Tailwind CSS</a>
	</footer>
)

export default Footer