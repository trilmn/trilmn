import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="flex items-center justify-between mb-12 pl-4 pr-4">
    <Link to="/" className="flex items-center justify-start transition-fast hover:opacity-50">
      <img src= "/logo.png" alt="Logo" className="w-12 h-12"/>
      <div className="ml-4">
        <h1 className="text-base font-bold">
          {siteTitle}
        </h1>
        <span className="text-sm text-gray-600">minhtri247@gmail.com</span>
      </div>
    </Link> 
    <ul className="flex items-center">
      <li className="lg:mr-6 mr-4">
        <a href="https://dribbble.com/minhtri247" title="View my dribbble shots →" target="_blank" className="block transition-fast hover:opacity-50"><img src= "/icon/dribbble.svg" alt="Icon Dribbble" className=""/></a>
      </li>
      <li className="lg:mr-6 mr-4">
        <a href="https://github.com/trilmn" title="Go to my github profile →" target="_blank" className="block transition-fast hover:opacity-50"><img src= "/icon/github.svg" alt="Icon Github" className=""/></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tringuyen247/" title="Go to my Linkedin →" target="_blank" className="block transition-fast hover:opacity-50"><img src= "/icon/linkedin.svg" alt="Icon Linked" className=""/></a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
