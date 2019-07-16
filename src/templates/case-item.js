import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CaseItem = ({
	caseTitle,
	caseDesc,
	link
}) => (
	<li className="md:w-2/4 md:float-left">
		<Link
	    to={link}
	    className="case-block block p-4 overflow-hidden"
	  >
			<h5 className="case-title text-base font-bold inline-block relative">{caseTitle}</h5>
			<p className="mt-5 text-sm">{caseDesc}</p>
		</Link>
	</li>
)

CaseItem.propTypes = {
  caseTitle: PropTypes.string,
  caseDesc: PropTypes.string,
  link:PropTypes.string
}

CaseItem.defaultProps = {
  caseTitle: ``,
  caseDesc: ``,
  link:``
}

export default CaseItem