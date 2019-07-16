import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/main-layout'
import CaseItem from '../templates/case-item'

const IndexPage = () => (
  <Layout>
    <SEO title="Tri Nguyen - Product Designer" author=""/>
    <hgroup className="pt-6 mb-16 px-4">
	    <h2>A designer who loves solving problem</h2>
	    <h3 className="mt-2">I’ve been designing software interfaces, coding HTML/CSS/JS since 2009. I also like co-building great working culture and mentoring young designers.</h3>
    </hgroup>
    
    <h5 className="pl-4 pr-4 section-title text-gray-500 text-sm uppercase font-medium tracking-widest mb-8 block relative">
    	<span className="bg-white pr-4 inline-block">Recent work</span>
  	</h5>

		<div className="px-4">
			<h4 className="font-bold uppercase">Anduin Transactions</h4>
			<span className="sub-text text-sm text-gray-600 mt-16">Jan 2015 - Now, 4 years</span>
			<p className="mt-5">I joined Anduin as the 4th member, the 1st product designer. Then the company gave me a challenge to lead product design. Beside cracking tough problem of <a href="https://www.investopedia.com/terms/v/venturecapital.asp" className="underline hover:text-blue-400 transition-fast">Venture Capital world</a> through making UI mockups & coding HTML/CSS on <a href="https://www.scala-js.org/" className="underline hover:text-blue-400 transition-fast">Scalajs</a>, I also helped setting up design system, design processes and growing design team from 1 to 5 members.
			</p>
		</div>

		{/* Links to case studies */}
		<ul className="list-case-study clearfix mt-4">
			<CaseItem
				caseTitle="Venture Deal"
				caseDesc="Design & iterate on company’s key product for Venture world"
				link="/caseStudy/venture-deal/"
			></CaseItem>
			<CaseItem
				caseTitle="ACL"
				caseDesc="Initiate the design system of an enterprise platform"
				link="/caseStudy/acl/"
			></CaseItem>
			<CaseItem
				caseTitle="Communication design"
				caseDesc="Help delivering product & branding through marketing materials"
				link="/caseStudy/communication-design/"
			></CaseItem>
			<CaseItem
				caseTitle="Design Leadership"
				caseDesc="Coach and help teammate to maximize their producitivy"
				link="/caseStudy/design-leadership/"
			></CaseItem>
		</ul>
	</Layout>
)

export default IndexPage
