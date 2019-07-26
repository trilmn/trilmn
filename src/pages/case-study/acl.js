import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"
import Figure from "../../components/figure"
import CaseItem from '../../templates/case-item'

import acl1Cover from "../../images/acl/acl1-cover.png"
import acl1Sketch from "../../images/acl/acl1-sketch.png"
import acl1Code from "../../images/acl/acl1-code.png"
import acl1CodeReview from "../../images/acl/acl1-codereview.png"
import acl1ReleasePreparation from "../../images/acl/acl1-release-preparation.png"
import acl1SlackIntegration from "../../images/acl/acl1-slackintegration.png"

import acl2Cover from "../../images/acl/acl2-cover.png"
import acl2Guideline from "../../images/acl/acl2-guideline.png"
import acl2Abstract from "../../images/acl/acl2-abstract.png"
import acl2Techtalk from "../../images/acl/acl2-techtalk.png"
import acl2AnduinDesign from "../../images/acl/acl2-anduin.design.png"

export default () => (
  <Layout>
  	<SEO title="Case study: ACL - Tri Nguyen" author=""/>
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Anduin Component Library - ACL</h2>
		    <h3 className="text-xl">Design system for fast pace development</h3>
	    </hgroup>

	    <Divider></Divider>

	    <SectionTitle marginTop="mt-10">Introduction</SectionTitle>

			<p>Joining from the start, as a solo designer in a brand new organization, you know the drill. You have to where multiple hats. Once you have more designers, you have to learn how to work with each other to create consistent output. I started seeing the need of a design system when our team has 3 members (me plus 2 other designers).</p>

			<p>Due to the urge of an early startup, things got messy pretty fast, we started having different perspective on spacing, font-size, primary colors, grayscale… countless debates about these. Nightmare also knocked in when we code our design (we didn’t have any front-end engineer back then), even with careful code review, we still end up having different hex code of a blue, different variant of a secondary button,… we even had different ways of naming css classes. We couldn’t move fast because of this.</p>

			<p>I told the guys: “Guys, this need to stop. Let’s build something we can together reuse and scale  as our product grows”. Suffered enough, they agreed. And we started discussing on what will be a good color scheme, what will be in our UI Kit, how to structure our CSS folder, how we naming thing…</p>
		</div>

		<div className="case-wrapper">
			<SectionTitle marginTop="mt-10">ACL 1 is released</SectionTitle>

			<Figure
		  	linkImg = {acl1Cover}
		  	className = "mt-4"
		  ></Figure>

			<p>ACL1 was quite useful. With the Sketch file contains all the UI elements (yes, UI kit is a more common name) it helps us to work faster and more consistent. That's the main principle we had. Coding is now easier with naming convention and pre-defined classes for the same element we have on sketch. We wanted the element on web browser to look exactly like what we designed on Sketch. Pixel perfection syndrome, you name it.</p>
			<p>We were pretty proud of our work back then. Our engineers were quite impressed with our primitive front-end works.</p>
		</div>

		<div className="mb-4 flex flex-wrap">
		  <Figure
		  	desc="ACL on Sketch"
		  	linkImg = {acl1Sketch}
		  	className = "w-2/4 p-4"
		  ></Figure>
		  <Figure
		  	desc="ACL on code"
		  	linkImg = {acl1Code}
		  	className = "w-2/4 p-4"
		  ></Figure>
		</div>

		<div className="case-wrapper text-center">
			<a href="https://trilmn.github.io/acl1/why.html" target="_blank" className="bg-gray-700 hover:bg-blue-500 text-white py-2 px-4 rounded-full transition-fast">See live demo</a>
		</div>

		<div className="case-wrapper mt-12">
			<p>Like all designers out there (except unicorns) we’re no coding experts. So i have to learn how to maintain the ACL in both design and code. We need to make sure every decision has the agreement from all designers, a single line of code is reviewed carefully. We wanted a high quality foundation.</p>
			</div>
			<div className="flex flex-wrap">
			  <Figure
			  	desc="A sample of our code review"
			  	linkImg = {acl1CodeReview}
			  	className = "w-1/3 p-4"
			  ></Figure>
			  <Figure
			  	desc="My pre-released list"
			  	linkImg = {acl1ReleasePreparation}
			  	className = "w-1/3 p-4"
			  ></Figure>
			  <Figure
			  	desc="Slack integration for the convenience"
			  	linkImg = {acl1SlackIntegration}
			  	className = "w-1/3 p-4"
			  ></Figure>
		</div>

		<div className="case-wrapper">
			<SectionTitle marginTop="mt-10">Contributions</SectionTitle>

			<ul className="list-disc ml-6">
				<li>Plan on the direction of the project: what will be in there, structure, hierarchy, colors,...</li>
				<li>Set up working process for other team mate to join in: how to update the shared sketch file, how to do pull request and code review, keep tracking of issues on Github.</li>
				<li>Thanks to <a href="https://dribbble.com/cong" className="underline hover:text-blue-400 transition-fast" title="See Cong's works on Dribbble">Cong Pham</a> for working mainly on the UI and listened to my ideas. Thanks to <a href="https://dribbble.com/LeohNguyen" className="underline hover:text-blue-400 transition-fast" title="See Leo's works on Dribbble">Leo</a> for building a great form component (whoever makes a design system for these form fields will understand how complicated they are).</li>
			</ul>
		</div>

		<div className="case-wrapper">
			<SectionTitle marginTop="mt-10">The birth of ACL 2</SectionTitle>

			<Figure
		  	linkImg = {acl2Cover}
		  	className = "mt-4"
		  ></Figure>

			<p>We’re quite happy for awhile. Then the company grows, more designers and engineers joined. With ACL1, whenever we design a new screen, we still have to prepare html structure and add some custom css to layout the thing. I know we can be faster if more things can be reused. Now that we have a dedicated front-end team, it’s not hard to convince them to build a robust system because they already see the benefit we brought in before: to keep the UI consistent and to work faster for them.</p>
			<p>What i didn’t satisfy with ACL1 was, it doesn’t have much character and no concrete principles back. It was a quick solution to unify us and heading toward a better interface.</p>

			<p>Until 2017, we have 5 designers and 5 products to work on. Tons of work. We’re really close to launch our platform and don’t want to lower down our quality, i wanted the UI to look better. While the guys already have their hands busy, as a leader, you can’t always force people to do this and that. If you want the best quality of work, you have to make sure they understand you clearly. And if they don’t have time to listen to you, you have to show them what you want. So i spent part of my working time to help elevate the ACL and having my designers to be the QAs. I also had the support from front-end team to put more complex elements/components to our library.</p>

			<p>We transitioned into ACL2.</p>

			<p>ACL2's tremendous update is mostly about layer styles and text styles restructuring, provides designers an easier way to make mockup. Add in a layer, pick a style and you're done, no repeative clickings, or just choose predefined symbols with overridable values. Same thing happen. We also had better documentation and principles to back the system.</p>

			<Figure
		  	linkImg = {acl2Guideline}
		  	className = "mt-2"
		  	desc="Snapshot of how i explain the updates to other designers"
		  ></Figure>

		  <p>
		  	Read more about it <a href="https://drive.google.com/file/d/1nDoZR2gEyZImHtUR0_cqPOpPnd3D9Oly/view?usp=sharing" className="underline hover:text-blue-400 transition-fast" title="Go to Abstract website">here</a>
		  </p>

			<div className="flex flex-wrapper mt-5">
				<Figure
			  	linkImg = {acl2Techtalk}
			  	className = "w-1/3 mt-2"
			  ></Figure>
			  <div  className="w-2/3 pl-4 pt-2">
			  	<p>I gave a techtalk to convince engineers this is a thing worth building. Together.</p>
			  	<a href="https://docs.google.com/presentation/d/1GB09L8aQStFBw0dZ1A6lP9WjUdzhBJxVO76TspBZCyQ/edit?usp=sharing" target="_blank" className="bg-gray-700 text-sm hover:bg-blue-500 text-white py-1 px-4 rounded-full transition-fast mt-2 inline-block">View on Google Slides</a>
			  </div>
		  </div>

		  <div className="flex flex-wrapper mt-5">
				<Figure
			  	linkImg = {acl2AnduinDesign}
			  	className = "w-1/3 mt-2"
			  ></Figure>
			  <div  className="w-2/3 pl-4 pt-2">
			  	<p>With front-end team joining the force, we let them take care of the code themselves as long as it's a 1:1 map with what we have in acl design.</p>
			  	<a href="https://anduin.design" title="Visit anduin.design" target="_blank" className="bg-gray-700 text-sm hover:bg-blue-500 text-white py-1 px-4 rounded-full transition-fast mt-2 inline-block">Visit anduin.design</a>
			  </div>
		  </div>

				<div className="flex flex-wrapper mt-5">
					<Figure
				  	linkImg = {acl2Abstract}
				  	className = "w-1/3 mt-2"
				  ></Figure>
			  	<p className="w-2/3 pl-4 pt-2"><a href="https://www.abstract.com/" className="underline hover:text-blue-400 transition-fast" title="Go to Abstract website">Abstract</a> does help a lot to manage the shared works. We avoid lots of mismatched between updates</p>
			  </div>
		</div>

		<div className="case-wrapper">
			<SectionTitle marginTop="mt-10">Conclusions</SectionTitle>	
			<p>ACL2 carries the same purpose as ACL1, that is to be a single source of our we communicate our interface to users. What i learn form working on a design system were:</p>
			<ul className="list-disc ml-5 mt-4">
				<li>You should avoid to be trapped into the premature perfection. Live with it, keep tweaking it.</li>
				<li>There's no done done when designing a design system.</li>
				<li>The more you can make design:code a 1:1 map, the more you have better output. User will use end product anyway.</li>
				<li>Documentation is a living things to. Make sure you can quickly update it.</li>
				<li>Keep observing for things that can be a symbol or component</li>
			</ul>
		</div>

		<h5 className="mt-16 pl-4 pr-4 section-title text-gray-500 text-sm uppercase font-normal tracking-widest mb-8 block relative">
    	<span className="bg-white pr-4 inline-block">Read more</span>
  	</h5>

  	<ul className="list-case-study clearfix mt-4">
			<CaseItem
				caseTitle="Venture Deal"
				caseDesc="Design & iterate on company’s key product for Venture world"
				link="/case-study/venture-deal/"
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
		
	</Layout>
)