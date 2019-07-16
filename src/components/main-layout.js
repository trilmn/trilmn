import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from "./footer"

const styles = {
  container: `text-gray-800 font-sans md:px-32 py-8 md:max-w-4xl md:mx-auto leading-normal subpixel-antialiased`
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
      <div className={styles.container}>
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