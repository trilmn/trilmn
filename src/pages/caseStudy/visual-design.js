import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"
import Figure from "../../components/figure"
import CaseItem from '../../templates/case-item'

import landingPage2019 from "../../images/visual-design/landing-page-2019.jpg"
import stemScholarship from "../../images/visual-design/stem-scholarship-2018.jpg"
import echelonBackdrop from "../../images/visual-design/echelon-backdrop.jpg"

import anduinCircuit from "../../images/visual-design/anduin-circuit.jpg"
import tshirtGondor from "../../images/visual-design/tshirt-gondor.png"
import tshirtRohan from "../../images/visual-design/tshirt-rohan.png"


export default () => (
  <Layout>
  	<SEO title="Communication Design - Tri Nguyen" author=""/>
  	
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Visual Design</h2>
		    <h3 className="text-xl">How i helped elevating Anduin's brand though visual design</h3>
	    </hgroup>
	    <Divider></Divider>
			
			<p>There’s a gap in communication design at Anduin during my time. The company didn't plan on hiring a Communication Designer, they were focusing more on building product.</p>

			<p>However, when starting a brand new company, you will have tons of low hanging fruit to get done:</p>
			<ul className="list-disc ml-5 mt-4">
				<li>Printing namecard. I litterally had to send the file to the printing service and pick it up in the early days.</li>
				<li>Company website. Why not? Letting people know what you're doing is for good.</li>
				<li>Product brochure. Same reason as above</li>
				<li>Event banner. Same reason as above</li>
				<li>…</li>
			</ul>
			<p>Consider it’s a chance to learn, i took all of those tasks. And it’s actually not only a chance to learn, but it helps you to be better, to understand better about the product you’re designing. Because how can you sell it if you don’t understand it clearly?</p>
			<p>Here're some examples:</p>
		</div>

		<div className="mb-4 flex flex-wrap">
			<div className="w-2/4 p-4">
				<Figure
      	desc="Our latest landing page. I only did the homepage, thanks to Duong Le for his skillful works on the inside pages."
      	linkImg = {landingPage2019}
      	className = "mb-4"
	      ></Figure>
	      <Figure
	      	desc="A single page for our annunal engineering schorlaship program"
	      	linkImg = {stemScholarship}
	      	className = ""
	     	 ></Figure>
			</div>
      <Figure
      	desc="A backdrop to demo what we do at the event."
      	linkImg = {echelonBackdrop}
      	className = "w-2/4 p-4"
      ></Figure>
    </div>

		<div className="case-wrapper">
			<p>I also a kind of guy who like to build great culture. I believe a great working culture will create the most effective work that no other tools can do. Read more about <a href="/caseStudy/design-leadership/" className="underline hover:text-blue-400 transition-fast" title="Read more on my design leadership">my design leadership at Anduin</a>. With my shaky visual skill, i helped:</p>
			<ul className="list-disc ml-5 mt-4">
				<li>Making t-shirt to make better internal engagement.</li>
				<li>Series of Tshirt</li>
				<li>Making buttons</li>
				<li>Sticker and magnet. Thanks to StickerMule for their quality products</li>
			</ul>

			<p>Some shots from the works:</p>
		</div>

		<div className="mb-4 flex flex-wrap">
		  <Figure
		  	desc="A sci-fi-ed version of our logo in the early days. Our CEO loves sci-fi."
		  	linkImg = {anduinCircuit}
		  	className = "w-4/4 p-4"
		  ></Figure>
			<Figure
		    	desc="Rohan kingdom T-Shirt"
		    	linkImg = {tshirtRohan}
		    	className = "w-2/4 p-4"
		   	 ></Figure>
				<Figure
			  	desc="Magnet inspired by Gondor kingdom in Lord Of The Rings."
			  	linkImg = {tshirtGondor}
			  	className = "w-2/4 p-4"
		    ></Figure>
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
				caseTitle="Design Leadership"
				caseDesc="Coach and help teammate to maximize their producitivy"
				link="/caseStudy/design-leadership/"
			></CaseItem>
		</ul>
	</Layout>
)