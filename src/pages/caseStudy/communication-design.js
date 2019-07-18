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
  	<SEO title="Case Study: Venture Deal - Tri Nguyen" author=""/>
  	<div className="case-wrapper">
	    <hgroup className="pt-2 mb-5">
		    <h2>Commmunication Design</h2>
		    <h3 className="text-xl">Streamline transaction workflow in Venture Capital markets</h3>
	    </hgroup>

	    <Divider></Divider>
		</div>
	</Layout>
)