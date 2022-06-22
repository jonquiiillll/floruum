import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'button--default',
  'button--unable',
  'button--text',
  'button--long'
]

const TYPES = [
  'button--long'
]

const COLORS = [
  'white',
  'black'
]

const A_Button = ({
  link,
  type,
  content,
  style,
  color
}) => {

  const checkStyles = STYLES.includes(style)
    ? style : STYLES[0]

  const checkTypes = TYPES.includes(type)
    ? type : TYPES[0]

  const checkColors = COLORS.includes(color)
    ? color : COLORS[0]

    return (
      <div className={type}>
        <a href={link} className={style} className={color}> {content} </a>
      </div>
    );
  }


export default A_Button
