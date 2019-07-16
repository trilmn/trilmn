import React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({
	text,
	marginTop
}) => (
	<h4 className={`text-lg font-bold ${marginTop}`}>{text}</h4>
)

SectionTitle.propTypes = {
  text: PropTypes.string,
  marginTop: PropTypes.string
}

SectionTitle.defaultProps = {
  text: ``,
  marginTop: `mt-8`
}

export default SectionTitle
