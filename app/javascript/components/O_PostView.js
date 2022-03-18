import React from "react"
import PropTypes from "prop-types"
import A_PostTitle from "./A_PostTitle.js"
import A_ImagePost from "./A_ImagePost.js"
import A_PostContent from "./A_PostContent.js"

class O_PostView extends React.Component {
  render () {
    return (
      <div className="post_view">
      <A_ImagePost
          image = {this.props.post.image.url}>
      </A_ImagePost>
      <div className="text_of_post">
      <A_PostTitle style="title--black"
          title = {this.props.post.name}>
      </A_PostTitle>
      <A_PostContent style="content--black"
          text = {this.props.post.content}>
      </A_PostContent>
      </div>
       </div>
    );
  }
}

export default O_PostView
