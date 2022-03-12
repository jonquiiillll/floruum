import React from "react"
import PropTypes from "prop-types"
class MPostCard extends React.Component {
  render () {
    return (
      <>
      <A_PostContent className="post-text"
              text = {this.props.post.content}
                />
      </>
    );
  }
}

export default MPostCard
