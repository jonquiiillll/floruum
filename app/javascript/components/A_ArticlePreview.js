import React from "react"
import PropTypes from "prop-types"

const A_ArticlePreview = ({
image
}) => {
    return (
      <img className="article_preview"src={`${image}`}/>
    );
}


export default A_ArticlePreview
