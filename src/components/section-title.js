import React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({
	children,
	marginTop
}) => (
	<h3 className={`font-bold ${marginTop}`}>{children}</h3>
)

SectionTitle.propTypes = {
  marginTop: PropTypes.string
}

SectionTitle.defaultProps = {
  marginTop: `mt-8`
}

export default SectionTitle
