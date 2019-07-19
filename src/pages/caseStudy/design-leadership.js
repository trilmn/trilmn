import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"
import Figure from "../../components/figure"
import CaseItem from '../../templates/case-item'

export default () => (
  <Layout>
  	<SEO title="Design Leadership - Tri Nguyen" author=""/>
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Design Leadership</h2>
		    <h3 className="text-xl">What i did as a design leadger at Anduin</h3>
	    </hgroup>
	    <Divider></Divider>
	  </div>

    <div className="case-wrapper mt-10">
    	<p>⏱ Sorry! I'm updating this...</p>
  	</div>

    <h5 className="mt-16 pl-4 pr-4 section-title text-gray-500 text-sm uppercase font-normal tracking-widest mb-8 block relative">
    	<span className="bg-white pr-4 inline-block">Read more</span>
  	</h5>

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
				caseTitle="Visual design"
				caseDesc="Help delivering product & branding through marketing materials"
				link="/caseStudy/visual-design/"
			></CaseItem>
		</ul>
	</Layout>
)