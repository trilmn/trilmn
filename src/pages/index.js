import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Tri Nguyen - Product Designer" author=""/>
    <h1>A designer who loves solving problem</h1>
    <h2>I’ve been designing software interfaces, coding HTML/CSS/JS since 2009. I also like co-building great working culture and mentoring young designers.</h2>
    
    <h5 className="section-title">Recent work</h5>
		<h4>Anduin Transactions</h4>
		<span className="sub-text">Jan 2015 - Now, 4 years</span>
		<p>I joined Anduin as the 4th member, the 1st product designer. Then the company gave me a challenge to lead the product design. Beside cracking tough problem of the Venture world through making UI mockups & coding HTML/CSS on Scalajs, I also helped setting up design system, design processes and growing the design team from 1 to 5 members.
		</p>

		{/* Links to case studies */}
		<ul className="list-case-study">
			<li className="case-study">
				<Link
	        to="/caseStudy/venture-deal/"
	        className="case-link"
	      >
					<h5 className="case-title">Venture Deal</h5>
					<p className="case-desc">Design & iterate on company’s key product for Venture world</p>
				</Link>
			</li>

			<li className="case-study">
				<Link
	        to="/"
	        className="case-link"
	      >
					<h5 className="case-title">ACL</h5>
					<p className="case-desc">Initiate the design system of an enterprise platform</p>
				</Link>
			</li>

			<li className="case-study">
				<Link
	        to="/"
	        className="case-link"
	      >
					<h5 className="case-title">Communication design</h5>
					<p className="case-desc">Help delivering product & branding through marketing materials</p>
				</Link>
			</li>

			<li className="case-study">
				<Link
	        to="/"
	        className="case-link"
	      >
					<h5 className="case-title">Design Leadership</h5>
					<p className="case-desc">Coach and help teammate to maximize their producitivy</p>
				</Link>
			</li>
		</ul>
	</Layout>
)

export default IndexPage
