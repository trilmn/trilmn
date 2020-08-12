import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"
import Figure from "../../components/figure"
import ExternalLink from "../../components/external-link"
import CaseItem from '../../templates/case-item'

import ImgJd from "../../images/design-leadership/anduin-jd.png"
import ImgDesignExercise from "../../images/design-leadership/product-design-exercise.png"
import ImgGettingStarted from "../../images/design-leadership/getting-started.png"
import ImgSyncupAgenda from "../../images/design-leadership/sync-up-agenda.png"
import ImgSyncupTeam from "../../images/design-leadership/sync-up-team.png"
import ImgPairDesigners from "../../images/design-leadership/pair-designers.png"
import ImgDailyUI from "../../images/design-leadership/daily-ui.png"
import ImgButton from "../../images/design-leadership/swag-button.jpg"
import ImgSticker from "../../images/design-leadership/swag-sticker.jpg"
import ImgMagnet from "../../images/design-leadership/swag-magnet.jpg"
import ImgTshirt1 from "../../images/design-leadership/tshirt-1.jpg"
import ImgTshirt2 from "../../images/design-leadership/tshirt-2.jpg"
import ImgTshirt3 from "../../images/design-leadership/tshirt-3.jpg"

import ImgCoderschool from "../../images/design-leadership/coderschool.jpg"
import ImgTriEreka from "../../images/design-leadership/tri-ereka.jpg"
import ImgCongCssgrid from "../../images/design-leadership/cong-cssgrid.jpg"



export default () => (
  <Layout>
  	<SEO
      title="Case study: Design Leadership - Tri Nguyen"
      description="What i did as a design leader at Anduin"
      author=""
    />
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Design Leadership</h2>
		    <h3 className="text-xl">What i did as a design leader at Anduin</h3>
	    </hgroup>
	    <Divider></Divider>
	  </div>

    <div className="case-wrapper mt-10">
    	<p>When working solo, it’s very easy to plan, to work, to evaluate, to make decision on everything. You know yourself and the work best. Working in a team, acting as a person in charge, you have to know strengths and weaknesses of your teammates. You have to know what makes them happy and what’s not, what brings the most value out of their creative minds. Designer is a picky type of character.</p>
    	<p>Anduin needed more design leadership back then, so i took the challenge.</p>
    	<p>My leadership at Anduin went through these organic steps:</p>
			<ol className="list-decimal ml-6 mt-2">
				<li><strong>Scale up the team</strong>: Recruit more designers to handle more work.</li>
				<li><strong>Manage & improve team performance</strong>: Maximize team's productivity.</li>
				<li><strong>Nurture talent</strong>: engage and improve individuals.</li>
			</ol>

			<SectionTitle marginTop="mt-10">1. Scale up the team</SectionTitle>
			<p>Company grows, work is multiplied. More works mean more teammate you’re gonna need. Switching from a solo designer, i have to plan on how to recruit new designers. This includes:</p>
			<ul className="list-disc ml-6 mt-2">
				<li>Prepare job description so that new guys know why they should join the team.
						<div className="mb-4 flex flex-wrap">
				      <Figure
				      	desc="Sample of a job description i wrote on the early days"
				      	linkImg = {ImgJd}
				      	className = "w-2/4 p-4"
				      ></Figure>

				      <Figure
				      	desc="Sample of a Design exercise. We don’t want to just rely 100% on CV and portfolio."
				      	linkImg = {ImgDesignExercise}
				      	className = "w-2/4 p-4"
				      ></Figure>
				    </div>

				</li>
				<li>Evaluating candidate together is important. When to say no, what are red flags,…For example: one of our big red flag is not being able to talk/describe deeply about your previous works - This means your hand didn't get dirty enough. Thanks to <ExternalLink href="https://recruiterbox.com/" title="Visit RecruiterBox's website">RecruiterBox</ExternalLink> for making this process easier for interviewers. We put our evaluations on RecruiterBox before gathering altogether into a room and discuss about a candidate.</li>
				<li>With a limited pool of designers in Vietnam, it's a bit challenging to find qualified candidates.</li>
			</ul>
			<p>Hiring was never be an easy work, it takes practices to be better. Luckily, all interviews went quite well so far that even if interviewees did not pass, some of them all came back and said thanks to me specifically for being clear and nice to them.</p>

			<SectionTitle>2. Manage & improve team performance</SectionTitle>
			<p>Having a bunch of designers together doesn’t mean you will produce productive works right away. I had to think who can do what, who can help who (you as a leader will have to help everyone in your team including yourself already, of course), even who sit next to who so that they feel the most comfortable.</p>

			<p>Even from day one, they should feel like this is the workplace where they will do their best.</p>

			<div className="mb-4 flex flex-wrap justify-center">
	      <Figure
	      	desc="Part of a Getting Started document i pointed to every new hire when he joins."
	      	linkImg = {ImgGettingStarted}
	      	className = "w-2/4 p-4"
	      ></Figure>
      </div>

			<p>The ultimate goal is, over the time working in the team, they will learn something for themselves. The more they can learn, the better the team is, and they become better also.</p>

			<h4 className="font-bold mt-6">2.1 Define team values helps nurturing team culture</h4>
			<p>From my experience, i believe a good culture will maximize productivity. So, when i have a chance to build culture, i told myself: at the very least, my team should have the best environment to work in as long as i still be part of it. So i was pursuing these values for Anduin design team:</p>
			<ul className="list-disc ml-6 mt-2">
				<li><strong>Trust</strong>: Each team member should have trust on each other’s skill. Just like a sport team, people play in different positions and earn a total trust from their teammate for that position. Having trust, the feedbacks/ideas you received will be more correct and tend to be more collaborative. Being a leader, you have to constantly improve yourself so that you know what to talk to different position in your team. When divide the work, I make sure each designer will have 1 big project/feature to work on. So that they don’t feel left out and have a belief that they can do something big and important.</li>
				<li><strong>Fairness</strong>: When trusting each others, it’s easier to play fair in the team. If Ben trusts me, whenever i give improvement-needed critique to his design, he will take it gratefully and send me back his argument more honest and constructive. Once Leo sees this positive thing from me & Ben, he and Ben will do the same. This dominos effect does work nicely once you have trust in your team.</li>
				<li><strong>Transparency</strong>: The information my teammate knows should be similar to mine. Consider myself as a connection dot between company and its employees, usually after every leadership council meeting (yea, we call the leads meeting like that Anduin), i always write a short recap to my guys immediately. I encourage my guys and the CEO to create chance to talk to each other directly. I hate seeing a gap between people in the company just because the level they carring. At the end of the day, they’re both normal human anyway.</li>
				<li><strong>Responsibility</strong>: I don’t want any designers in my team will be managed by me. I want them to be the owner of their works. Their works will help the company just like mine. So why would i need to tell them what they have to do, if i trust them already?</li>
			</ul>
			<p>You know it works when your teammate start doing the same things just like you do. I’m really happy to see my fellow designers carry on these values until today and it engages us very well.</p>


			<h4 className="font-bold mt-6">2.2 Processes will help, but keep them light</h4>

			<p>I believe nobody likes processes, unless there’s no other way.</p>

			<p>Here’re design processes that i really like:</p>

			<h5 className="font-bold mt-6">Weekly sync up</h5>
			<p>To keep everyone in synced, we created a weekly sync up on each Friday. We’re thinking it’s a good chance for us to review the week and prepare better for a new week. This is not to mention in early of every week, we’re all packed with other meetings. So we try to avoid that precious time slot.</p>
			<p>Sometimes, in a sync up, i included a pre-registered share-out from team member, this can be anything from the book you like to the interesting website you found recently with cool animation. A chance to learn from each other.</p>
			<Figure
	      	desc="Snapshot of the sync up agenda"
	      	linkImg = {ImgSyncupAgenda}
	      	className = "p-4"
      ></Figure>

      <Figure
	      	desc="Sometime we do it over google meet if members couldn’t make it to the office"
	      	linkImg = {ImgSyncupTeam}
	      	className = "p-4"
      ></Figure>

			<h5 className="font-bold mt-6">Pair designers</h5>
			<p>Described in the `Trust` section, 1 designer will have at least 1 important feature/product in his hand. We found out that’s not enough. That designer need a buddy to constantly share/discuss about his work. Gathering all team members will be really time consuming for day to day work. Having a pair will also add a backup solution for the main designer when he’s not around. It’s likely to have 2 designers (sometime 3) working with a feature rather than solo. Pair assignment will be discussed among teammates.</p>

			<Figure
	      	desc="Example of our pairs table. Thanks to Leo for helping me drawing this."
	      	linkImg = {ImgPairDesigners}
	      	className = "my-6"
      ></Figure>


			<SectionTitle>2.3 Having fun is important</SectionTitle>

			<p>With engagement, each of us always wants to improve ourselves, but work sometimes so pressure and having constrains. We initiate fun, small project to help us stay creative.</p>
			<Figure
			  	desc="Couple of shots for DailyUI Challenge. Also available in my dribbble profile."
			  	linkImg = {ImgDailyUI}
			  	className = "my-4 p-4"
			></Figure>

			<div className="mb-4 flex flex-wrap justify-center">
	      <Figure
	      	desc="Buttons"
	      	linkImg = {ImgButton}
	      	className = "w-1/3 p-4"
	      ></Figure>
	      <Figure
	      	desc="Magnet"
	      	linkImg = {ImgMagnet}
	      	className = "w-1/3 p-4"
	      ></Figure>
	      <Figure
	      	desc="Sticker"
	      	linkImg = {ImgSticker}
	      	className = "w-1/3 p-4"
	      ></Figure>
      </div>

			<p>Making t-shirts</p>
			<div className="mb-4 flex flex-wrap justify-center">
			  <Figure
			  	desc="Rohan - Version 1. Draw by me"
			  	linkImg = {ImgTshirt1}
			  	className = "w-1/3 p-4"
			  ></Figure>
			  <Figure
			  	desc="Gondor - Version 2. Draw by Cong"
			  	linkImg = {ImgTshirt2}
			  	className = "w-1/3 p-4"
			  ></Figure>
			  <Figure
			  	desc="Agonath - Version 3. Draw by Duong"
			  	linkImg = {ImgTshirt3}
			  	className = "w-1/3 p-4"
			  ></Figure>
			</div>

			<SectionTitle>2.4 Tribute back to community</SectionTitle>

			<p>I see 2 main benefits from this:</p>
	    <ul className="list-disc ml-6 mt-2">
	    	<li>Teaching people is a chance to review your knowledge.</li>
	    	<li>Growing new generations helps future community and talent pool.</li>
	    </ul>
			<p>And when i say tributing i really mean it, not just to attend to a design event and network with people. I want all of my team to do this, not just me represent the team.</p>
			<p>So we end up having something like:</p>
			<div>

		  </div>
			<ul className="mt-2">
				<li className="flex flex-wrapper mt-5">
				<Figure
			  	linkImg = {ImgCoderschool}
			  	className = "w-1/3 mt-2"
			  ></Figure>
				  <div  className="w-2/3 pl-4 pt-2">
				  	Ben, Leo to act as advisors for <ExternalLink href="https://www.coderschool.vn/" title="Visit CoderSchool's website">CoderSchool</ExternalLink>, a bootcamp for new developers, designers.
				  </div>
				</li>
				<li className="flex flex-wrapper mt-5">
					<Figure
			  	linkImg = {ImgTriEreka}
			  	className = "w-1/3 mt-2"
			  	></Figure>
				  <div  className="w-2/3 pl-4 pt-2">
				  	<div>Me hosted an AMA about product design on Ereka, a quora-like platform.</div>
				  	<span class="line-through">Link here-in Vietnamese, sorry</span>
						<div>Updated (Aug 2020): This platform is down</div>
				  </div>
				</li>
				<li className="flex flex-wrapper mt-5">
					<Figure
			  	linkImg = {ImgCongCssgrid}
			  	className = "w-1/3 mt-2"
			  	></Figure>
				  <div  className="w-2/3 pl-4 pt-2">
				  	Cong's presenting CSS Grid at <ExternalLink href="https://www.grokking.org/" title="Visit Grokking Engineering event">Grokking Engineer event</ExternalLink>
				  </div>
				</li>
			</ul>

			<SectionTitle>3. Nurture talent</SectionTitle>
			<h5 className="font-bold mt-4">One on One</h5>
			<p>One on one (1-1) is a pretty popular driver nowadays between direct manager and employee. It’s also part of Anduin policy.</p>
			<p>Here’s my way of doing it:</p>
			<p>Within 3 weeks, i make sure i have one 1-1 session with each designer. This should happen outside the office during working hour, can be anywhere. It’s part of the work anyway. I use this chance to understand individual designer more:</p>
				 <ul className="list-disc ml-6">
					  <li>to listen to their problem</li>
						<li>what they hate but couldn’t speak out</li>
						<li>to coach them on what i think they can do better</li>
						<li>shout out to what they did good</li>
						<li>to listen from your suggestion of how i can be better</li>
				 </ul>
			<p>My goal after each 1-1 is that both of us feel motivated and happy to get back to work.</p>
			<p>There’s a time right after a 1-1, i have Duy wrote up a Sketch plugin similar to Content Generator to render our special data. Or, Ben sent out a quick design deliverables checklist. Really happy with this.</p>

			<h5 className="font-bold mt-4">Let's not forget to coach them out</h5>

			<p>Things do not always work. Sometimes your day-to-day buddy can’t find enough motivation to keep up with the work. It’s time to let him go. Before doing that, i make sure i understand his problem from multiple perspective (including his), give him trials on performance plan. If things still don’t work out, we sit dow, talk and i motivate him with next career advices.</p>
			<p>Having a selective hiring saves me here. It makes me understand what a current hire can capable of. If he’s underperformed, usually it’s not a good environment for him anymore. To me, coaching people out will help them save their dignity and be better later on. This also reduce a burden on company side. Win-win</p>

			<SectionTitle>Wrapping up</SectionTitle>

			<p>Over 4 year leading product design at Anduin, i’ve learnt a lot, done a lot. I have a solid, engaged and high-performance team always ready for any design challenge. I've made it clear that i’m trying to lead them, not manage them. I've earned their trust and respect.</p>
			<p>My teammates can work as individual contributors or together as a team depends on the need. They’re also the co-owners of the team and the work. The kind of owner that can keep thinking on how to improve the team and provide honest feedbacks and contributions, even when i'm not there.</p>


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
				caseTitle="ACL"
				caseDesc="Initiate the design system of an enterprise platform"
				link="/case-study/acl/"
			></CaseItem>
			<CaseItem
				caseTitle="Visual design"
				caseDesc="Help delivering product & branding through marketing materials"
				link="/case-study/visual-design/"
			></CaseItem>
		</ul>
	</Layout>
)
