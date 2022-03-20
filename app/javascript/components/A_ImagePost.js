import React from "react"
import PropTypes from "prop-types"

const A_ImagePost = ({
image
}) => {
    return (
      <img className="post_image"src={`${image}`}/>
    );
}


export default A_ImagePost
