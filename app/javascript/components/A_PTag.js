import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'A_PTag--white',
  'A_PTag--black',
  'A_PTag--black--big',
  'A_PTag--white--default'
]

const A_PTag = ({
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
export default A_PTag
