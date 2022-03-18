import React from "react"
import PropTypes from "prop-types"

const A_Category = ({
category,
textpart,
catStyle
}) => {

  return (
    <a className = "category" href={`/post?category=${category}`}>{textpart}</a>
  );
}


export default A_Category
