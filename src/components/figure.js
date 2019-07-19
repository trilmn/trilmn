import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ImageZoom from 'react-medium-image-zoom'

const Figure = ({
	desc,
	className,
	linkImg,
  linkZoomImg,
  altImg,
  altZoomImg
}) => (
	<figure className={`${className}`}>
		<ImageZoom
	      image={{
	        src: `${linkImg}`,
	        alt: `${altImg}`,
	        className: 'border border-solid border-gray-200 hover:shadow-lg'
	      }}
	      zoomImage={{
	        src: `${linkZoomImg}`,
	        alt: `${altZoomImg}`
	      }}
	      defaultStyles = {{
					overlay: {
						backgroundColor: 'rgba(8,35,61,.75)'
					}
	      }}
	      shouldReplaceImage = {false}
	      shouldRespectMaxDimension = {true}
     />
		<div className="mt-2 figure-desc text-xs text-gray-600">{desc}</div>
	</figure>
)

Figure.propTypes = {
  desc:PropTypes.string,
  className:PropTypes.string,
  linkImg: PropTypes.string,
  linkZoomImg: PropTypes.string,
  altImg: PropTypes.string,
  altZoomImg: PropTypes.string
}

Figure.defaultProps = {
  desc:``,
  className:``,
  linkImg:``,
  linkZoomImg: ``,
  altImg: ``,
  altZoomImg: ``
}

export default Figure