import React from "react"
import PropTypes from "prop-types"

const ExternalLink = ({
	href,
	title,
	children
}) => (
	<a href={href}
	title={title}
	className="underline hover:text-blue-400 transition-fast"
	target="_blank"
	>
		{children}
</a>
)

ExternalLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
}

ExternalLink.defaultProps = {
  href: `#`,
  title: ``
}

export default ExternalLink
