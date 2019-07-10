import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Tri Nguyen - Product Designer" author=""/>
    <h1>A designer who loves solving problem</h1>
    <h2>I’ve been designing software interfaces, coding HTML/CSS/JS since 2009. I also like co-buidling great working culture and mentoring young designers.</h2>
    
    <h5 className="section-title">Recent work</h5>
	<h4>Anduin Transactions</h4>
	<span className="sub-text">Jan 2015 - Now, 4 years</span>
	<p>I joined Anduin as the 4th member, the 1st product designer. Then the company gave me a challenge to lead the product design. Beside cracking tough problem of the Venture world through making UI mockups & coding HTML/CSS on Scalajs, I also helped setting up design system, design processes and growing the design team from 1 to 5 members.
	</p>

	{/* Links to case studies */}
	<ul className="list-case-study">
		<li className="case-study">
			<a href="/" className="case-link">
				<h5 className="case-title">Venture Deal</h5>
				<p className="case-desc">Design & iterate on company’s key product for Venture world</p>
			</a>
		</li>
	</ul>

	</Layout>
)

export default IndexPage
