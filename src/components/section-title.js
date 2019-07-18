import React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({
	children,
	marginTop
}) => (
	<h4 className={`text-lg font-bold ${marginTop}`}>{children}</h4>
)

SectionTitle.propTypes = {
  marginTop: PropTypes.string
}

SectionTitle.defaultProps = {
  marginTop: `mt-8`
}

export default SectionTitle
