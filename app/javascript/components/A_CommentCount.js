import React from "react"
import PropTypes from "prop-types"
class A_CommentCount extends React.Component {
  render () {
    var commentsArray = this.props.post.comments;
    var result = commentsArray.length;
        return(
            <div>
                <h4>Array length is { result }.</h4>
            </div>
        );
  }
}

export default A_CommentCount
