import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/main-layout'
import SectionDivider from '../components/section-divider'
import ExternalLink from "../components/external-link"
import PrevJobItem from "../components/prev-job"
import CaseItem from '../templates/case-item'

import LogoAnduin from "../images/logo/anduin.svg"
import LogoQuaestor from "../images/logo/quaestor.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Tri Nguyen - Product Designer" author=""/>
    <hgroup className="pt-4 mb-6 px-4">
	    <h2 className="text-3xl font-light mt-2 leading-snug">Hi! I'm a designer, coder who passionate about solving problem. I also like co-building great working culture. Been doing this since 2009.</h2>
    </hgroup>
    
    <SectionDivider>Current</SectionDivider>

		<div className="px-4">
			<div className="flex items-center">
				<div className="block avatar anduin bg-white w-12 h-12 flex items-center justify-center rounded mr-4 transition-fast"><img src={LogoQuaestor} alt="Logo Quaestor"/></div>
				<div>
					<h4 className="text-base font-bold uppercase flex items-center"><a href="quaestor.com" className="flex items-center" title="Go to Quaestor's website"><span className="mr-2">Quaestor</span><svg height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8281 10.172C13.078 9.42213 12.0607 9.00087 11.0001 9.00087C9.93942 9.00087 8.92219 9.42213 8.17208 10.172L4.17208 14.172C3.79004 14.541 3.48531 14.9824 3.27567 15.4704C3.06604 15.9584 2.95569 16.4833 2.95108 17.0144C2.94646 17.5455 3.04767 18.0722 3.24879 18.5638C3.44992 19.0554 3.74693 19.502 4.1225 19.8776C4.49807 20.2532 4.94468 20.5502 5.43626 20.7513C5.92785 20.9524 6.45457 21.0536 6.98569 21.049C7.5168 21.0444 8.04168 20.9341 8.5297 20.7244C9.01771 20.5148 9.45909 20.2101 9.82808 19.828L10.9301 18.727M10.1721 13.828C10.9222 14.5779 11.9394 14.9992 13.0001 14.9992C14.0607 14.9992 15.078 14.5779 15.8281 13.828L19.8281 9.82801C20.5567 9.0736 20.9599 8.06319 20.9508 7.01441C20.9417 5.96562 20.521 4.96237 19.7794 4.22074C19.0377 3.4791 18.0345 3.05843 16.9857 3.04932C15.9369 3.0402 14.9265 3.44338 14.1721 4.17201L13.0721 5.27201" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a></h4>
					<span className="sub-text text-sm text-gray-600 mt-16">Aug 2019 - Present, Product Designer</span>
				</div>
			</div>
			<p className="mt-5">Working remotedly with the whole team in SF, CA. Quaestor simplifies investor updates, facilitates collaboration, and enables founders to fully engage their network.</p>
		</div>

		<SectionDivider>Recent work</SectionDivider>

		<div className="px-4">
			<div className="flex items-center">
				<div className="block avatar anduin bg-blue-400 w-12 h-12 flex items-center justify-center rounded mr-4 transition-fast"><img src={LogoAnduin} alt="Logo Anduin"/></div>
				<div>
					<h4 className="text-base font-bold uppercase flex items-center"><a href="https://www.anduintransact.com/" className="flex items-center" title="Go to Anduin's website"><span className="mr-2">Anduin Transactions</span><svg height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8281 10.172C13.078 9.42213 12.0607 9.00087 11.0001 9.00087C9.93942 9.00087 8.92219 9.42213 8.17208 10.172L4.17208 14.172C3.79004 14.541 3.48531 14.9824 3.27567 15.4704C3.06604 15.9584 2.95569 16.4833 2.95108 17.0144C2.94646 17.5455 3.04767 18.0722 3.24879 18.5638C3.44992 19.0554 3.74693 19.502 4.1225 19.8776C4.49807 20.2532 4.94468 20.5502 5.43626 20.7513C5.92785 20.9524 6.45457 21.0536 6.98569 21.049C7.5168 21.0444 8.04168 20.9341 8.5297 20.7244C9.01771 20.5148 9.45909 20.2101 9.82808 19.828L10.9301 18.727M10.1721 13.828C10.9222 14.5779 11.9394 14.9992 13.0001 14.9992C14.0607 14.9992 15.078 14.5779 15.8281 13.828L19.8281 9.82801C20.5567 9.0736 20.9599 8.06319 20.9508 7.01441C20.9417 5.96562 20.521 4.96237 19.7794 4.22074C19.0377 3.4791 18.0345 3.05843 16.9857 3.04932C15.9369 3.0402 14.9265 3.44338 14.1721 4.17201L13.0721 5.27201" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a></h4>
					<span className="sub-text text-sm text-gray-600 mt-16">Jan 2015 - Jul 2019, 4.5 years, Product Design Lead</span>
				</div>
			</div>
			<p className="mt-5">I joined Anduin as the 4th member, the 1st designer. Beside cracking tough problem of <a href="https://www.investopedia.com/terms/v/venturecapital.asp" target="_blank" className="underline hover:text-blue-400 transition-fast" title="Read more about Venture Capital">Venture Capital</a> world through making mockups & crafting UI on <a href="https://www.scala-js.org/" target="_blank"  className="underline hover:text-blue-400 transition-fast" title="Read more about Scalajs">Scalajs</a>, I also helped setting up design system, design processes and growing the design team to 5 members.
			</p>
			<p className="mt-4">Check out some of my case studies below:</p>
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
				<Link to="/case-study/zini-vng" className="md:ml-6 text-gray-600 text-sm hover:bg-blue-500 border border-gray-400 hover:border-blue-500 hover:text-white py-1 px-4 rounded-full transition-fast inline-block mt-2 md:mt-0">
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
