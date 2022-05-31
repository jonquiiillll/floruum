import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'Hashtag--default',
  'Hashtag--shadow',
]

const A_Category = ({
category,
textpart,
style
}) => {
  const checkStyle = STYLES.includes(style)
  ? style : STYLES[0]
  return (
    <a className = {`${checkStyle}`} dangerouslySetInnerHTML={textpart} href={`/posts?category=${category}`}></a>
  );
}


export default A_Category
