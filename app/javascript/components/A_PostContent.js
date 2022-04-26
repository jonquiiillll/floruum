import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'contentpost--black',
  'contentpost--black--in--post',
  'content--grey',
]

const A_PostContent = ({
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

export default A_PostContent
