import React from "react"
import PropTypes from "prop-types"
import A_PostUser from "./A_PostUser.js"
import A_CommentContent from "./A_CommentContent.js"

class O_CommentView extends React.Component {
  render () {
    return (
      <div>
      {this.props.comments.map(comment => (
      <div className="window" key={comment.id} >
            <A_PostUser
                username = {this.props.user.username}
                avatar = {this.props.user.avatar.small_thumb.url}>
            </A_PostUser>
            <A_CommentContent
                text = {`${comment.body}`} />
            </div>
    ))}
      </div>
    );
  }
}

export default O_CommentView
