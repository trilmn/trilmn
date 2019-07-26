import React from "react"
import PropTypes from "prop-types"

const SectionDivider = ({
	children
}) => (
	<h5 className="mt-12 mb-6 pl-4 pr-4 section-title text-gray-500 text-sm uppercase font-normal tracking-widest block relative">
  	<span className="bg-white pr-4 inline-block">{children}</span>
	</h5>
)


export default SectionDivider
