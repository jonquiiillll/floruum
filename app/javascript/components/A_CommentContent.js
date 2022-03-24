import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'content--article',
  'content--grey',
]

const A_CommentContent = ({
text,
style,
}) => {

  const checkStyles = STYLES.includes(style)
    ? style : STYLES[0]

    return (
      <div className = {`${checkStyles}`} dangerouslySetInnerHTML={{__html: `${text}` }}>
      </div>
    );
}

export default A_CommentContent
