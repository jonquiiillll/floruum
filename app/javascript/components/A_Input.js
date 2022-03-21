import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'A_Input--default',
  'A_Input--white',
]

const A_Input = ({
  content,
  type,
  color,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
    <input
      type="text"
      name="post[name]"
      className="input_form"
      placeholder="Коротко опишите ваш вопрос"
    />

  )
}
export default A_Input
