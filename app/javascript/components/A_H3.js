import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'A_H3--white',
  'A_H3--black',
]

const A_H3 = ({
  content,
  type,
  color,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
      <p className = {`${checkColor}`} type = {type}>
        {content}
      </p>

  )
}
export default A_H3
