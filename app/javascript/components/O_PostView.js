import React from "react"
import PropTypes from "prop-types"
import A_PostTitle from "./A_PostTitle.js"
import A_ImagePost from "./A_ImagePost.js"
import A_PostContent from "./A_PostContent.js"
import A_PostUser from "./A_PostUser.js"
import A_Category from "./A_Category.js"
import A_GetAnswer from "./A_GetAnswer.js"

class O_PostView extends React.Component {
  render () {
    return (
      <div className="post_view" >
      <A_ImagePost
          image = {this.props.post.image.url}>
      </A_ImagePost>

      <div className="text_of_post">

      <A_PostTitle style="title--black"
          title = {this.props.post.name}>
      </A_PostTitle>

      <A_Category
        style="Category--shadow"
        textpart = {{__html: `${this.props.category.name}`}}>
      </A_Category>

      <A_PostContent
          style="content--black"
          text = {this.props.post.content}>
      </A_PostContent>

      <A_PostUser
          style = {"User--black"}
          link = {this.props.user.id}
          username = {this.props.user.username}
          avatar = {this.props.user.avatar.small_thumb.url}
          date = {this.props.created_at}>
      </A_PostUser>
      </div>
      <hr/>
      <A_GetAnswer />

       </div>
    );
  }
}

export default O_PostView
