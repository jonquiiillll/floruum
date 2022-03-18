import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'Category--default',
  'Category--shadow',
]

const A_Category = ({
category,
textpart,
style
}) => {

  const checkStyle = STYLES.includes(style)
  ? style : STYLES[0]

  return (
    <a className = {`${checkStyle}`} dangerouslySetInnerHTML={textpart} href={`/post?category=${category}`}></a>
  );
}


export default A_Category
