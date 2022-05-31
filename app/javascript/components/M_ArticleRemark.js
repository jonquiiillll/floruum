import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'remark--article',
]

const M_ArticleRemark = ({
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


export default M_ArticleRemark
