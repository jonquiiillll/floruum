import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'A_H1--black',
  'A_H1--white',
]

const A_H1 = ({
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

export default A_H1
