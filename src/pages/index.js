import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/main-layout'
import CaseItem from '../templates/case-item'

import LogoAnduin from "../images/logo/anduin.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Tri Nguyen - Product Designer" author=""/>
    <hgroup className="pt-4 mb-16 px-4">
	    <h2 className="text-3xl font-light mt-2 leading-snug md:text-justify">Hi there! I'm a designer, coder who passionate about solving problem. I also like co-building great working culture and mentoring young designers. I've been doing this since 2009.</h2>
    </hgroup>
    
    <h5 className="pl-4 pr-4 section-title text-gray-500 text-sm uppercase font-normal tracking-widest mb-8 block relative">
    	<span className="bg-white pr-4 inline-block">Recent work</span>
  	</h5>

		<div className="px-4">
			<div className="flex items-center">
				<a href="https://anduintransact.com" target="_blank" title="https://anduintransact.com" className="block avatar anduin bg-blue-400 w-12 h-12 flex items-center justify-center rounded mr-4 hover:opacity-75 transition-fast"><img src={LogoAnduin} alt="Logo Anduin"/></a>
				<div>
					<h4 className="font-bold uppercase flex items-center">Anduin Transactions</h4>
					<span className="sub-text text-sm text-gray-600 mt-16">Jan 2015 - Jul 2019, 4.5 years</span>
				</div>
			</div>
			<p className="mt-5">I joined Anduin as the 4th member, the 1st designer. Beside cracking tough problem of <a href="https://www.investopedia.com/terms/v/venturecapital.asp" target="_blank" className="underline hover:text-blue-400 transition-fast" title="Read more about Venture Capital">Venture Capital world</a> through making mockups & crafting UI on <a href="https://www.scala-js.org/" target="_blank"  className="underline hover:text-blue-400 transition-fast" title="Read more about Scalajs">Scalajs</a>, I also helped setting up design system, design processes and growing the design team to 5 members. Check out my some of case studies below:
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
