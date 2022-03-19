import React from "react"
import PropTypes from "prop-types"

const A_ArticlePreview = ({
image
}) => {
    return (
      <img className="post_image"src={`${image}`}/>
    );
}


export default A_ArticlePreview
