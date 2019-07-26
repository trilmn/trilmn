import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/main-layout'
import SectionDivider from '../components/section-divider'
import ExternalLink from "../components/external-link"
import PrevJobItem from "../components/prev-job"
import CaseItem from '../templates/case-item'


import LogoAnduin from "../images/logo/anduin.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Tri Nguyen - Product Designer" author=""/>
    <hgroup className="pt-4 mb-6 px-4">
	    <h2 className="text-3xl font-light mt-2 leading-snug md:text-justify">Hi there! I'm a designer, coder who passionate about solving problem. I also like co-building great working culture and mentoring young designers. I've been doing this since 2009.</h2>
    </hgroup>
		
		<div className="desperating-callout m-4 p-4 mt-10 border rounded">
			<h4 className="font-bold">I'm looking for a new opportunity</h4>
	    <p className="mt-1">Assuming you don't know me so well, i hope through this website, you will know me better and it opens a chance for us to discuss about our next cooporation. Let's talk!</p>
    </div>
    
    <SectionDivider>Recent work</SectionDivider>

		<div className="px-4">
			<div className="flex items-center">
				<div className="block avatar anduin bg-blue-400 w-12 h-12 flex items-center justify-center rounded mr-4 transition-fast"><img src={LogoAnduin} alt="Logo Anduin"/></div>
				<div>
					<h4 className="text-base font-bold uppercase flex items-center">Anduin Transactions</h4>
					<span className="sub-text text-sm text-gray-600 mt-16">Jan 2015 - Jul 2019, 4.5 years, Product Design lead</span>
				</div>
			</div>
			<p className="mt-5">I joined Anduin as the 4th member, the 1st designer. Beside cracking tough problem of <a href="https://www.investopedia.com/terms/v/venturecapital.asp" target="_blank" className="underline hover:text-blue-400 transition-fast" title="Read more about Venture Capital">Venture Capital world</a> through making mockups & crafting UI on <a href="https://www.scala-js.org/" target="_blank"  className="underline hover:text-blue-400 transition-fast" title="Read more about Scalajs">Scalajs</a>, I also helped setting up design system, design processes and growing the design team to 5 members.
			</p>
			<p className="mt-4">Check out my some of case studies below:</p>
		</div>

		{/* Links to case studies */}
		<ul className="list-case-study clearfix mt-4">
			<CaseItem
				caseTitle="Venture Deal"
				caseDesc="Design & iterate on company’s key product for Venture world"
				link="/case-study/venture-deal/"
			></CaseItem>
			<CaseItem
				caseTitle="ACL"
				caseDesc="Initiate the design system of an enterprise platform"
				link="/case-study/acl/"
			></CaseItem>
			<CaseItem
				caseTitle="Visual design"
				caseDesc="Help delivering product & branding through marketing materials"
				link="/case-study/visual-design/"
			></CaseItem>
			<CaseItem
				caseTitle="Design Leadership"
				caseDesc="Coach and help teammate to maximize their producitivy"
				link="/case-study/design-leadership/"
			></CaseItem>
		</ul>

		<SectionDivider>Previously</SectionDivider>

		<ul className="list-prev-jobs text-sm mx-4 relative">
			<PrevJobItem
				yearRange="2014 – 2015"
				jobTitle="Product Designer"
				companyName="iVIVU"
				companyLink="https://www.ivivu.com/"
			></PrevJobItem>
			<PrevJobItem
				yearRange="2012 – 2014"
				jobTitle="Product Designer"
				companyName="VNG Corporation"
				companyLink="https://www.vng.com.vn/"
			>
				<Link to="/case-study/zini-vng" className="md:ml-6 text-gray-600 text-sm hover:bg-blue-500 border border-gray-400 hover:border-blue-500 hover:text-white py-1 px-4 rounded-full transition-fast inline-block">
					See case study
				</Link>
			</PrevJobItem>
			<PrevJobItem
				yearRange="2011 – 2012"
				jobTitle="HTML/CSS Developer"
				companyName="Skunkworks"
				companyLink="https://www.linkedin.com/company/skunkworks.vn/"
			></PrevJobItem>
			<PrevJobItem
				yearRange="2009 – 2011"
				jobTitle="Web Designer"
				companyName="Officience"
				companyLink="https://officience.com/en/"
			></PrevJobItem>
		</ul>
	</Layout>
)

export default IndexPage
