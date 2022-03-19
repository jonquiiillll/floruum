import React from "react"
import PropTypes from "prop-types"
const STYLES = [
  'Links--black',
  'Links--white',
]

const A_Links = ({
  content,
  type,
  color,
  link,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
      <a href="#" className = {`${checkColor}`} type = {type}>
        {content}
      </a>

  )
}

export default A_Links
