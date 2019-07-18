import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"
import Figure from "../../components/figure"
import CaseItem from '../../templates/case-item'

import DdSummary from "../../images/deal-docs/summary.png"
import DdProgress from "../../images/deal-docs/progress.png"
import DdLedger from "../../images/deal-docs/ledger.png"
import DdFileManager from "../../images/deal-docs/file-manager.png"
import DdDetails from "../../images/deal-docs/doc-details.png"
import DdDevGuides from "../../images/deal-docs/dev-guideline.png"

import OntologyTermSheetGenerator from "../../images/legal-tech/termsheet-generator.png"
import OntologyComparison from "../../images/legal-tech/ontology-comparison.png"
import OntologyFormBuilder from "../../images/legal-tech/form-builder.png"
import OntologyFundSub from "../../images/legal-tech/fundsub.png"

import EmailRevamping from "../../images/email-revamp/email-revamping.png"
import EmailTrackingList from "../../images/email-revamp/email-tracking-list.png"
import EmailBoilerplate from "../../images/email-revamp/email-design-boilerplate.png"

export default () => (
  <Layout>
  	<SEO title="Case Study: Venture Deal - Tri Nguyen" author=""/>
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Venture Deal</h2>
		    <h3 className="text-xl">Streamline transaction workflow in Venture Capital markets</h3>
	    </hgroup>

	    <Divider></Divider>

			<SectionTitle marginTop="mt-10">The Problem</SectionTitle>

			<p>Venture Capital world is a chaos realm when talking about workflow and efficiency. Venture Capital companies (VC) wants to invest in early stage startups. Early startups usually don’t know how to deal with investors, how to go through the process to receive an investment. Law firms appears as representatives for each side, this is not to mention that law firm people are not tech enthusiasts. There is also no standard on what is a good work.</p>

			<p>Communication and collaborations between these parties are very scattered and non transparent. Common communication ways are emails, phone cals, spreadsheets. Online tools are available here and there but can only cover part of the process (like Virtual data room, File manager, Task management, E-signing tools, etc).</p>

			<p>Anduin’s ambitious mission is to create an all-in-one platform to streamline this process.</p>

			<SectionTitle>My contributions</SectionTitle>
			
			<p>Over 4 years, i’ve involved in different aspects of the product, from ideation to iteration:</p>

			<ul className="list-disc ml-5">
				<li>Whiteboarding/Wireframing ideas to create Feature MVP.</li>
				<li>Creating mockups and click-through prototypes, of course.</li>
				<li>Building design styleguides and color scheme to elevate the look&feel.</li>
				<li>Coding UI on top of ScalaJs-React in the early days to make sure real product looks like what has been designed. Thus, attached to some engineering processes like: code review, making pull request, branching work...</li>
			</ul>

			<p className="mt-4">While it would be really long to talk about the platform and also the constrain of the NDA, below are breakdowns of what i heavily involved in:</p>
		</div>

		<div className="case-wrapper">
			<SectionTitle>1. Negotiation module</SectionTitle>
			<p>Negotiation module is one of the core features of the platform. Negotiation process is a crucial part of a deal where people will make sure everybody agrees on the same thing. Lots of legal document will be involved in this part. Negotiation module is created to help people in the deal know:</p>
			
			<ul className="list-disc ml-5 mt-4">
				<li>What document is being discussed, to which version.</li>
				<li>Which side needs to preview and provide a revised version.</li>
				<li>When a document type is ready to sign.</li>
				<li>Who has just signed and who’s turn to sign next.</li>
				<li>…</li>
			</ul>
		</div>	

		<div className="mb-4 flex flex-wrap">
      <Figure
      	desc="Deal doc summary screen showing latest version of each doc, from which party, has approved or not, which action each party needs to take."
      	linkImg = {DdSummary}
      	className = "w-2/4 p-4"
      ></Figure>

      <Figure
      	desc="This screen showing internally for where document is in the process."
      	linkImg = {DdProgress}
      	className = "w-2/4 p-4"
      ></Figure>

      <Figure
      	desc="A ledger (yes, it's a feature name) showing how document is exchanged between parties."
      	linkImg = {DdLedger}
      	className = "w-2/4 p-4"
      ></Figure>

      <Figure
      	desc="File manager to keep document inplace."
      	linkImg = {DdFileManager}
      	className = "w-2/4 p-4"
      ></Figure>

      <Figure
      	desc="A details view with actions around a single document."
      	linkImg = {DdDetails}
      	className = "w-2/4 p-4"
      ></Figure>

      <Figure
      	desc="This is how i breakdown thing and before transferring to engineers. This is to help them understand what i want on the design and make proper react commponents for it."
      	linkImg = {DdDevGuides}
      	className = "w-2/4 p-4"
      ></Figure>
    </div>
		<div className="case-wrapper">
			<SectionTitle>2. Legal tech</SectionTitle>
			<p>A legal tech feature with the goal is to provide transparency to the deal. Trying to be a standard on the market, Anduin’s legal tech will analyze uploaded doc on the platform, giving the result of what common/standard and what’s not to the user (of course the platform only read the document if user authorized). This tech (hopefully) will empower the platform and bring more value to whoever involve in the field.</p>
		</div>

		<div className="mb-4 flex flex-wrap">
      <Figure
      	desc="A concept of form with analytics showing what's common and what's not on some datas."
      	linkImg = {OntologyTermSheetGenerator}
      	className = "w-2/4 p-4"
      ></Figure>
      <Figure
      	desc="Based on collected data, this is how user can compare values between two document versiosn."
      	linkImg = {OntologyComparison}
      	className = "w-2/4 p-4"
      ></Figure>
      <Figure
      	desc="Form builder - A tool helping user to build interactive web form with handful property settings, field validations even e-sign fields."
      	linkImg = {OntologyFormBuilder}
      	className = "w-2/4 p-4"
      ></Figure>
      <Figure
      	desc="Real result from form builder. This is what end user will see."
      	linkImg = {OntologyFundSub}
      	className = "w-2/4 p-4"
      ></Figure>
		</div>

		<div className="case-wrapper">
			<SectionTitle>3. Email templates revamp</SectionTitle>
			<p>One of my other challenge at Anduin was to revamp and define scalable design solution for our email send out to users. Product team think the revamping was just a low-hanging fruit, but turns out it a ton of works. What i helped was:</p>
			
			<ul className="list-disc mt-4 ml-5">
				<li>Find out actual problem of the current email template's design.</li>
				<li>Define design principles for the new email template.</li>
				<li>Wireframing them and get product agrees on.</li>
				<li>Also design a new tenplate boilerplate with guideline to help engineers get their hands on faster.</li>
				<li>Make sure i won't miss any existing emails.</li>
			</ul>
		</div>

		<div className="mb-4 flex flex-wrap">
			<Figure
      	desc="My slides on analyzing the problem and proposed solutions to the team."
      	linkImg = {EmailRevamping}
      	className = "w-4/4 p-4"
      ></Figure>
      <Figure
      	desc="Part of my progress tracking spreadshets."
      	linkImg = {EmailTrackingList}
      	className = "w-2/4 p-4"
      ></Figure>
      <Figure
      	desc="Template boilerplate and guidelines for other designers & engineers."
      	linkImg = {EmailBoilerplate}
      	className = "w-2/4 p-4"
      ></Figure>
		</div>
			
		<div className="case-wrapper">
			<SectionTitle>Conclusions</SectionTitle>
			<p>Working in an early stage startup is a great experience. It keeps pushing me to stretch my limitation.</p>
			<p>I’ve learnt a lot over 4 years, from learning how complex the Venture world is, dealing with user feedback shortage, growing design team, creating design system, shipping my designs through iterations, balancing mvp with business need to design product landing page and even making namecard…</p>
			<p>Sometimes wearing multiple hats is not bad, it helps you understand yourself better and know what you can do best. Every situation is a chance to learn.</p>
		</div>

		<h5 className="mt-16 pl-4 pr-4 section-title text-gray-500 text-sm uppercase font-normal tracking-widest mb-8 block relative">
    	<span className="bg-white pr-4 inline-block">Read more</span>
  	</h5>

		<ul className="list-case-study clearfix mt-4">
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