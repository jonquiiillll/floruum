import React from "react"
import PropTypes from "prop-types"
import A_PostContent from "./A_PostContent.js"
import A_PostDate from "./A_PostDate.js"
import A_PostPreview from "./A_PostPreview.js"
import A_PostTitle from "./A_PostTitle.js"
import A_Category from "./A_Category.js"
import A_PostUser from "./A_PostUser.js"

class M_QuestionCard extends React.Component {
  render () {
    return (
  <div>
      {this.props.posts.map(post => (
    <a href={`/posts/${post.id}`}>
      <div className="window" key={post.id} >
        <div className="preview" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${post.image.url})` }}>
            <A_PostDate
                date = {post.created_at}>
            </A_PostDate>

            <A_PostTitle style="title--white"
                title = {post.name}>
            </A_PostTitle>

            <A_PostUser
                username = {post.user.username}
                avatar = {post.user.avatar.small_thumb.url}>
            </A_PostUser>
        </div>
            <A_PostContent style="content--grey"
              text = {post.content}/>
      </div>
      <p>{post.comments.count}</p>
      <p className="black" dangerouslySetInnerHTML={{__html: `${post.category.name}` }}></p>
    </a>
    ))}

  </div>
    );
  }
}
M_QuestionCard.propTypes = {
  posts: PropTypes.array
};
export default M_QuestionCard
