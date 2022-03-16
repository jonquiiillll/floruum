import React from "react"
import PropTypes from "prop-types"

const A_Button = ({
  link,
  type,
  content
}) => {
    return (
      <div className={type}>
        <a href={link}> {content} </a>
      </div>
    );
  }


export default A_Button
