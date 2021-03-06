import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="px-4 text-sm text-gray-600 mt-12">
	  © {new Date().getFullYear()}{` `}
	  <Link to="/" title="trilmn.com" className="transition-fast underline hover:text-gray-800">trilmn.com</Link>
	  {` `} - Built with {` `}
	  {` `}
	  <a href="https://www.gatsbyjs.org" target="_blank" title="Visit Gatsby →" className="transition-fast underline hover:text-gray-800">Gatsby</a>
	  {` `} & {` `}
	  <a href="https://tailwindcss.com/" target="_blank" title="Visit Tailwind CSS →" className="transition-fast underline hover:text-gray-800">Tailwind CSS</a>
	  . Powered by <a href="https://www.netlify.com/" target="_blank" title="Visit Netlify →" className="transition-fast underline hover:text-gray-800">Netlify</a>.
	</footer>
)

export default Footer