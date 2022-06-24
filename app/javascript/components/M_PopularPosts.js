import React from "react"
import PropTypes from "prop-types"
import A_PostTitle from "./A_PostTitle.js"
import A_Category from "./A_Category.js"
import A_Username from "./A_Username.js"

class M_PopularPosts extends React.Component {
  render () {
    return (
      <div className="popular--posts">
      {this.props.posts.slice(0,4).map(post => (
    <a href={`/posts/${post.id}`} className="post--line">
            <A_PostTitle style="title--white"
                title = {post.name}
                style = "title--post">
            </A_PostTitle>
            <A_Username
                username = {post.user.username}
                style = "Username--black"
            />
            <br/ >
    </a>

    ))}

      </div>
    );
  }
}

export default M_PopularPosts
