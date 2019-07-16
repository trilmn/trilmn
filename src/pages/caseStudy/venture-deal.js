import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"

export default () => (
  <Layout>
  	<SEO title="Case Study: Venture Deal - Tri Nguyen" author=""/>
  	<div class="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Venture Deal</h2>
		    <h3 className="text-xl">Streamline transaction workflow in Venture Capital markets</h3>
	    </hgroup>

	    <Divider></Divider>

			<SectionTitle text="The Problem" marginTop="mt-10"></SectionTitle>

			<p>Venture Capital world is a chaos realm when talking about workflow and efficiency. Venture Capital companies (VC) wants to invest in early stage startups. Early startups usually don’t know how to deal with investors, how to go through the process to receive an investment. Law firms appears as representatives for each side, this is not to mention that law firm people are not tech enthusiasts. There is also no standard on what is a good work.</p>

			<p>Communication and collaborations between these parties are very scattered and non transparent. Common communication ways are emails, phone cals, spreadsheets. Online tools are available here and there but can only cover part of the process (like Virtual data room, File manager, Task management, E-signing tools, etc).</p>

			<p>Anduin’s ambitious mission is to create an all-in-one platform to streamline this process.</p>

			<SectionTitle text="Contributions"></SectionTitle>
			
			<p>Over 4 years, i’ve involved in different aspects of the product, from ideation to iteration:</p>

			<ul className="list-disc ml-5">
				<li>Whiteboarding/Wireframing ideas to create Feature MVP.</li>
				<li>Creating mockups and click-through prototypes, of course.</li>
				<li>Building design styleguides and color scheme to elevate the look&feel.</li>
				<li>Coding UI on top of ScalaJs-React in the early days to make sure real product looks like what has been designed. Thus, attached to some engineering processes like: code review, making pull request, understand how infrastructure works...</li>
			</ul>

			<p class="mt-4">While it would be really long to talk about the platform and also the constrain of the NDA, below are breakdowns of what i heavily involved in:</p>
		</div>

		<div class="case-wrapper">
			<SectionTitle text="Contributions">1. Negotiation module</SectionTitle>
			<p>Negotiation module is one of the core features of the platform. Negotiation process is a crucial part of a deal where people will make sure everybody agrees on the same thing. Lots of legal document will be involved in this part. Negotiation module is created to help people in the deal know:</p>
			<ul className="list-disc ml-5 mt-4">
				<li>What document is being discussed, to which version.</li>
				<li>Which side needs to preview and provide a revised version.</li>
				<li>When a document type is ready to sign.</li>
				<li>Who has just signed and who’s turn to sign next.</li>
				<li>…</li>
			</ul>
		</div>
  </Layout>
)