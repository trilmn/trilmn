import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"
import Figure from "../../components/figure"
import CaseItem from '../../templates/case-item'

import ImgHashtagDetails from "../../images/zini/hashtag-details.png"
import ImgLanding from "../../images/zini/landing.png"
import ImgOnboarding from "../../images/zini/onboarding.png"
import GifHome from "../../images/zini/gifhome.gif"
import ImgGamification from "../../images/zini/gamification.png"

import ImgLogoGuide from "../../images/zini/logo-guide.png"
import ImgStyleGuide from "../../images/zini/style-guide.png"

import ImgLiveHome from "../../images/zini/livehtml-home.png"
import ImgLiveAma from "../../images/zini/livehtml-ama.png"
import ImgLiveLanding from "../../images/zini/livehtml-landing.png"
import ImgLiveBxh from "../../images/zini/livehtml-bxh.png"

export default () => (
  <Layout>
  	<SEO title="Case study: ACL - Tri Nguyen" author=""/>
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Zini</h2>
		    <h3 className="text-xl">A micro-blogging platform</h3>
	    </hgroup>

	    <Divider></Divider>
			
			<Figure
		  	desc="Detail page of a specific hashtag."
		  	linkImg = {ImgHashtagDetails}
		  	className = "mt-5"
		  ></Figure>

			<SectionTitle>Introduction</SectionTitle>
	    <p>I got assigned as a main product designer for this project. Zini is a derived word from Zing Tiny (a Twitter-like app of the company). We aim to use hashtag to viral content.</p>
	    <p>The challenge with this platform is using hashtag (which was brand new at the time for non-twitter users) and in Vietnamese.</p>
	    <p>Our first step to grow the network is to find an easy way for user to generate content and keep them there, interact with each other</p>

	    <p>At the time you're reading this. Social network already went further a lot versus what i had back then. At that time, hastag is uncommon, Gif image is support limited.</p>

	    <SectionTitle>Contributions</SectionTitle>
	    <ul className="list-disc ml-6 mt-4">
	    	<li>Design the app. From logo to app screens.</li>
	    	<li>Prepare all html/css for developer to iterate.</li>
	    	<li>Work directly with project manager to brainstorm and create roadmap for each week.</li>
	    </ul>
		</div>

		<div className="case-wrapper">
			<SectionTitle>Screenshots from the project</SectionTitle>
		</div>
		
			<Figure
		  	desc="Landing page with latest content and multiple ways to login. Responsive!"
		  	linkImg = {ImgLanding}
		  	className = "p-4"
		  ></Figure>

			<div className="flex flex-wrap mt-4">
			  <Figure
			  	desc="Home page with onboarding after user logged in"
			  	linkImg = {GifHome}
			  	className = "w-1/3 p-4"
			  ></Figure>
			  <Figure
			  	desc="Onboarding when user is registering"
			  	linkImg = {ImgOnboarding}
			  	className = "w-1/3 p-4"
			  ></Figure>
			  <Figure
			  	desc="Gamification with badges. Thanks to Kien44 for making the cute badges"
			  	linkImg = {ImgGamification}
			  	className = "w-1/3 p-4"
			  ></Figure>
			</div>

			
		<div className="case-wrapper">
			<h4 className="font-bold text-xl">Guidelines</h4>
		</div>
		<div className="flex flex-wrap">
		  <Figure
		  	desc="Guideline for logo"
		  	linkImg = {ImgLogoGuide}
		  	className = "w-2/4 p-4"
		  ></Figure>
		  <Figure
		  	desc="Part of the style guide."
		  	linkImg = {ImgStyleGuide}
		  	className = "w-2/4 p-4"
		  ></Figure>
	  </div>

	  <div className="case-wrapper">
			<h4 className="font-bold text-xl mt-6">Live HTML/CSS</h4>

			<div className="flex flex-wrap">
				<div className="w-2/4 mt-2 flex flex-col justify-center p-4">
					<Figure
				  	linkImg = {ImgLiveHome}
				  	className = "mt-2"
				  ></Figure>
				  <div  className="pt-2 text-center">
				  	<p>Home page with onboarding</p>
				  	<a href="https://trilmn.github.io/zini/welcome-04.html" target="_blank" className="bg-gray-700 text-sm hover:bg-blue-500 text-white py-1 px-4 rounded-full transition-fast mt-2 inline-block">View it live</a>
				  </div>
			  </div>

			  <div className="w-2/4 mt-2 flex flex-col justify-center p-4">
					<Figure
				  	linkImg = {ImgLiveAma}
				  	className = ""
				  ></Figure>
				  <div  className="pt-2 text-center">
				  	<p>Ask me anything event</p>
				  	<a href="https://trilmn.github.io/zini/campaign/ama.html" target="_blank" className="bg-gray-700 text-sm hover:bg-blue-500 text-white py-1 px-4 rounded-full transition-fast mt-2 inline-block">View it live</a>
				  </div>
			  </div>

			  <div className="w-2/4 mt-2 flex flex-col justify-center p-4">
					<Figure
				  	linkImg = {ImgLiveLanding}
				  	className = ""
				  ></Figure>
				  <div  className="pt-2 text-center">
				  	<p>Landing page</p>
				  	<a href="https://trilmn.github.io/zini/home-tourguide.html" target="_blank" className="bg-gray-700 text-sm hover:bg-blue-500 text-white py-1 px-4 rounded-full transition-fast mt-2 inline-block">View it live</a>
				  </div>
			  </div>

			  <div className="w-2/4 mt-2 flex flex-col justify-center p-4">
					<Figure
				  	linkImg = {ImgLiveBxh}
				  	className = ""
				  ></Figure>
				  <div  className="pt-2 text-center">
				  	<p>Top users chart</p>
				  	<a href="https://trilmn.github.io/zini/user-ranking.html" target="_blank" className="bg-gray-700 text-sm hover:bg-blue-500 text-white py-1 px-4 rounded-full transition-fast mt-2 inline-block">View it live</a>
				  </div>
			  </div>
			</div>
		</div>

	  <div className="case-wrapper">
			<SectionTitle>Conclusions</SectionTitle>

			<p>This was a really project to work on. I had a chance to bring the fun to work seriously. The impression we've made on the users was really good. Unfortunately, the project didn't make it to the target the company wanted, otherwise it could have be different.</p>
		</div>	
    
	</Layout>
)