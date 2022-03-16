import React from "react"
import PropTypes from "prop-types"


const STYLES = [
  'A_H2--white',
  'A_H2--black'
]

const A_H2 = ({
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

export default A_H2
