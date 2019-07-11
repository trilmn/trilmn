import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from "./footer"

const style = {
  content: css(tw`font-sans px-32 py-8 max-w-md mx-auto leading-normal`)
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={style.content}>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout