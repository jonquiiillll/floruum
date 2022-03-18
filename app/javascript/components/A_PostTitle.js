import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'title--black',
  'title--white',
]

const A_PostTitle = ({
title,
style,
}) => {

  const checkStyles = STYLES.includes(style)
    ? style : STYLES[0]

    return (
      <div>
      <p className = {`title ${checkStyles}`}>
       {title}</p>
       </div>
    );
}


export default A_PostTitle
