import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Tri Nguyen - Product Designer" author=""/>
    <h1>A designer who loves solving problem</h1>
    <h2>I’ve been designing software interfaces, coding HTML/CSS/JS since 2009. I also like co-buidling great working culture and mentoring young designers.</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
