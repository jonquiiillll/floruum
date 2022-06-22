import React from "react"
import PropTypes from "prop-types"
const STYLES = [
  'content--article',
  'content--grey',
]

const M_ArticleComment = ({
text,
style,
username,
}) => {

  const checkStyles = STYLES.includes(style)
    ? style : STYLES[0]

    return (
      <div className = {`${checkStyles}`} dangerouslySetInnerHTML={{__html: `${text}` }}>
        <div>
        {current_user.username}
        </div>
      </div>
    );
}

export default M_ArticleComment
