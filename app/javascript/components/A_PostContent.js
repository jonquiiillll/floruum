import React from "react"
import PropTypes from "prop-types"

const A_PostContent = ({
text
}) => {
    return (
      <div className="element_active_table">
        <p className="content_of_answer" dangerouslySetInnerHTML={{__html: `${text}` }}></p>
      </div>
    );
}

export default A_PostContent
