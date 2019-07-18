import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/main-layout"
import Divider from "../../components/divider"
import SectionTitle from "../../components/section-title"
import Figure from "../../components/figure"
import CaseItem from '../../templates/case-item'

import acl1Cover from "../../images/acl/acl1-cover.png"

export default () => (
  <Layout>
  	<SEO title="ACL - Tri Nguyen" author=""/>
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Anduin Component Library - ACL</h2>
		    <h3 className="text-xl">Design system for fast pace development</h3>
	    </hgroup>

	    <Divider></Divider>

	    <SectionTitle marginTop="mt-10">Introduction</SectionTitle>

<p>Joining from the start, as a solo designer in a brand new organization, you know the drill. You have to where multiple hats. Once you have more designers, that's when you have to learn how to work with each other to create consistent output. The company wanted me to lead the design team and grow it so that the work can go faster. I took the challenge. I started seeing the need of a design system when our team has 3 members (me plus 2 other designers).</p>

<p>Due to the urge of an early startup, things got messy pretty fast as we started having different perspective about spacing, font-size, primary colors, grayscale…countless debates about these. The nightmare also knocked in when we code our design (we didn’t have any front-end engineer back then), even with careful code review, we still end up having different hex code of a blue, different variant of a secondary button,… we even had different ways of naming css classes. The company wanted us to move fast but we couldn’t because of this.</p>

<p>I told the guys: “Guys, this need to stop. Let’s build something we can together reuse and scale enough as our product grows”. They agreed. And we started discussing on what will be a good color scheme, what will be in our UI Kit, how to structure our CSS folder, how we naming thing…</p>

<p></p>

<SectionTitle marginTop="mt-10">The release of ACL 1</SectionTitle>

	<Figure
  	linkImg = {acl1Cover}
  ></Figure>

<p>ACL1 was quite useful. With the Sketch file contains all the UI elements (yes, UI kit is a more common name) it helps us to work faster and more consistent. That's the main principle we had. Coding is now easier with naming convention and pre-defined classes for the same element we have on sketch. We wanted the element on web browser to look exactly like what we designed on Sketch. Pixel perfection syndrome, you name it.</p>
<p>We were pretty proud of our work back then. Our engineers were quite impress with our primitive front-end works.</p>
<p>Like all designers out there (except unicorns) we’re no coding experts. So i have to learn how to maintain the ACL in both design and code. We need to make sure every decision has the agreement from all designers, a single line of code is reviewed carefully. We wanted a high quality foundation.</p>

<ul>
	<li>[Mockup of a signle code review]</li>
	<li>[Mockup of a release note]</li>
	<li>[Mockup of a css structure]</li>
</ul>

<SectionTitle marginTop="mt-10">Contributions</SectionTitle>

<ul className="list-disc ml-4">
	<li>Plan on the direction of the project: what will be in there, structure, hierarchy, colors,...</li>
	<li>Set up working process for other team mate to join in: how to update the shared sketch file, how to do pull request and code review</li>
	<li>Thanks to Cong Pham(https://dribbble.com/cong) for working mainly on the UI and listened to my ideas, thanks to Leo(https://dribbble.com/LeohNguyen) for building a great form components (whoever makes a design system for these form fields will understand how complicated it is)</li>
</ul>

<p>See live demo</p>


<SectionTitle marginTop="mt-10">The birth of ACL 2</SectionTitle>

<p>We’re quite happy for awhile. Then the company grows, more designers and engineers needed. With ACL1, whenever we design a new screen, we still have to prepare html structure and some custom css to layout the thing. I know we can be faster if more thing can be reused, especially in the code. Now that we have a dedicated front-end team, it’s not hard to convince them to build a design system because they already see the benefit we brought in before: to keep the UI consistent and faster for them to make the design a living thing on the product.</p>
<p>What i didn’t satisfy with ACL1 was, it doesn’t have much character and no concrete principles back. It was a quick solution to unify us and heading toward a better interface.</p>
<p>Until 2017, we have 5 designers and 5 products to work on. Tons of work. We’re really close to launch our platform and don’t want to lower down our quality, i wanted the UI to look better. While the guys already have their hands busy, as a leader, you can’t always force people to do this and that. If you want the best quality of work, you have to make sure they understand you clearly. And if they don’t have time to listen to you, you have to show them what you want. The company was moving very fast back then, i have to spend part of my working time to help elevate the ACL and having my designers to be its very first testers. I also have the support from front-end team to put more complex elements/components to our library.</p>

Lesson learnt from ACL1:
- A strong principle is needed and clearly communicate to designers


[What to show:
- ACL2 new structure
    - Typo
    - Element
    - Usages
- Letting the front-end engineer handling the code
- Additional lib:
    - Document icon set
    - App component
    - Illustration
]

		</div>
	</Layout>
)