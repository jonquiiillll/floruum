import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'article--white',
  'article--black',
  'article--white--show',
]

const A_ArticleTitle = ({
title,
style,
}) => {

  const checkStyles = STYLES.includes(style)
    ? style : STYLES[0]

    return (
      <div>
      <p className = {`${checkStyles}`}>
       {title}</p>
       </div>
    );
}


export default A_ArticleTitle
