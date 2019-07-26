import React from "react"
import PropTypes from "prop-types"
import ExternalLink from "./external-link"

const PrevJobItem = ({
	children,
	yearRange,
	jobTitle,
	companyName,
	companyLink
}) => (
	<li className="prev-job-item mt-3 md:flex items-center flex-row">
		<div className="prev-job-years w-1/4 text-gray-600">{yearRange}</div>
		<div className="prev-job-info w-3/4">
			<strong>{jobTitle}</strong>
			{`, `}
			<ExternalLink
				href={companyLink}
				title={`Visit ${companyName}'s website`}
			>
				{companyName}
			</ExternalLink>
			{children}
		</div>
	</li>
)

PrevJobItem.propTypes = {
  yearRange: PropTypes.string,
	jobTitle: PropTypes.string,
	companyName: PropTypes.string,
	companyLink: PropTypes.string
}

PrevJobItem.defaultProps = {
  yearRange: ``,
	jobTitle: ``,
	companyName: ``,
	companyLink: ``
}

export default PrevJobItem